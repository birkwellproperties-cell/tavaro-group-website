export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    event_category: params.category || "engagement",
    event_label: params.label || "",
    value: params.value || 0,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...params,
  });
}

export function trackStartFreeClick(source = "unknown") {
  trackEvent("start_free_clicked", {
    category: "conversion",
    label: source,
  });
}

export function trackSignInClick(source = "unknown") {
  trackEvent("sign_in_clicked", {
    category: "conversion",
    label: source,
  });
}

export function trackRequestDemoClick(source = "unknown") {
  trackEvent("request_demo_clicked", {
    category: "conversion",
    label: source,
  });
}

export function trackContactSubmitted() {
  trackEvent("contact_form_submitted", {
    category: "lead",
    label: "contact_page",
  });
}

export function trackDemoSubmitted() {
  trackEvent("demo_request_submitted", {
    category: "lead",
    label: "demo_page",
  });
}