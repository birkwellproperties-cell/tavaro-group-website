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

/* Marketing Website Events */

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

/* FarmOS App Onboarding Events */

export function trackUserSignup() {
  trackEvent("user_signup_completed", {
    category: "onboarding",
    label: "signup",
  });
}

export function trackFarmCreated() {
  trackEvent("farm_created", {
    category: "onboarding",
    label: "farm_setup",
  });
}

export function trackFirstAnimalAdded() {
  trackEvent("first_animal_added", {
    category: "activation",
    label: "animal_record",
  });
}

export function trackAnimalAdded() {
  trackEvent("animal_added", {
    category: "usage",
    label: "animal_record",
  });
}

/* Billing / Revenue Events */

export function trackSubscriptionStarted(planName = "unknown") {
  trackEvent("subscription_started", {
    category: "revenue",
    label: planName,
  });
}

export function trackSubscriptionActivated(planName = "unknown") {
  trackEvent("subscription_activated", {
    category: "revenue",
    label: planName,
  });
}