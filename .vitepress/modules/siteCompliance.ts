const SITE_COMPLIANCE_CONFIG_URL = 'https://fork.ltd/config/site-compliance.config.json'

type ComplianceLink = {
  text: string
  url: string
}

export type SiteCompliance = {
  companyName: string
  icp: ComplianceLink
  police?: ComplianceLink
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const readRecord = (value: unknown, path: string): Record<string, unknown> => {
  if (!isRecord(value)) throw new Error(`${path} must be an object`)
  return value
}

const readNonEmptyText = (value: unknown, path: string): string => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${path} must be non-empty text`)
  }
  return value
}

const readHttpsUrl = (value: unknown, path: string): string => {
  const urlText = readNonEmptyText(value, path)
  let url: URL

  try {
    url = new URL(urlText)
  } catch (_) {
    throw new Error(`${path} must be a valid HTTPS URL`)
  }

  if (url.protocol !== 'https:') throw new Error(`${path} must be a valid HTTPS URL`)
  return urlText
}

const readComplianceLink = (value: unknown, path: string): ComplianceLink => {
  const link = readRecord(value, path)
  return {
    text: readNonEmptyText(link.text, `${path}.text`),
    url: readHttpsUrl(link.url, `${path}.url`)
  }
}

const readSiteCompliance = (value: unknown, hostname: string): SiteCompliance => {
  const config = readRecord(value, 'config')
  const company = readRecord(config.company, 'company')
  const domains = readRecord(config.domains, 'domains')
  const domainName = readNonEmptyText(hostname, 'hostname')

  if (Object.prototype.hasOwnProperty.call(company, 'shortName')) {
    readNonEmptyText(company.shortName, 'company.shortName')
  }
  if (!Object.prototype.hasOwnProperty.call(domains, domainName)) {
    throw new Error(`domains[${domainName}] is missing`)
  }

  const domain = readRecord(domains[domainName], `domains[${domainName}]`)
  const path = `domains[${domainName}]`
  const police = Object.prototype.hasOwnProperty.call(domain, 'police')
    ? readComplianceLink(domain.police, `${path}.police`)
    : undefined

  return {
    companyName: readNonEmptyText(company.name, 'company.name'),
    icp: readComplianceLink(domain.icp, `${path}.icp`),
    police
  }
}

export const loadSiteCompliance = async (hostname: string, signal: AbortSignal): Promise<SiteCompliance> => {
  const response = await fetch(SITE_COMPLIANCE_CONFIG_URL, {
    cache: 'no-store',
    signal
  })

  if (!response.ok) throw new Error(`Site compliance request failed with status ${response.status}`)
  return readSiteCompliance(await response.json(), hostname)
}
