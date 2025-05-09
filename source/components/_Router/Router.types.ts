export interface RouterProps  {
    setTimezone,
    timezone
    setBg,
    bg,
    cookieConsent
    onConsentChange
    language?: "german" | "english"
    theme?: "light" | "dark"
    className?: string
}