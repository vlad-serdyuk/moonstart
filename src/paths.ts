export function getURL(startDate: string, endDate: string, limit: number = 30) {
  return `https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gt=${startDate}&window_end__gt=${endDate}&limit=${limit}&is_crewed=false&include_suborbital=true&related=false`;
}