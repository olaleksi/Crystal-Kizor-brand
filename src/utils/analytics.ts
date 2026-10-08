/**
 * Analytics dispatcher utility.
 * Ready for integration with Google Analytics 4, Vercel Analytics, or Plausible.
 */
export type AnalyticsEvent =
  | 'hero_explore_click'
  | 'hero_contact_click'
  | 'ecosystem_studio_coka_click'
  | 'ecosystem_ako_click'
  | 'ecosystem_elevated_click'
  | 'ecosystem_tea_click'
  | 'ecosystem_alive_and_free_click'
  | 'ecosystem_filter_change'
  | 'project_view_click'
  | 'idea_read_click'
  | 'speaking_cta_click'
  | 'contact_cta_click'
  | 'copilot_modal_open'
  | 'inquiry_submitted'
  | 'mobile_nav_toggle';

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // Dispatch to dataLayer or custom telemetry if present
    const customWindow = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    if (customWindow.dataLayer && Array.isArray(customWindow.dataLayer)) {
      customWindow.dataLayer.push({ event, ...payload });
    }
  }
}
