// Responsive navigation, form prefill and enquiry handling.
const ENQUIRY_EMAIL = "researchhivesanalytics@gmail.com";
const ONLINE_FORM = "https://zekldj-daniella-ojekere.shinyapps.io/ResearchHive/";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Prefill service or engagement model from ?service= / ?engagement= links.
  const params = new URLSearchParams(window.location.search);
  const prefill = (selector, value) => {
    const select = document.querySelector(selector);
    if (!value || !select) return;
    const v = value.toLowerCase();
    const opts = [...select.options];
    const match = opts.find(o => o.text.toLowerCase() === v) || opts.find(o => o.text.toLowerCase().includes(v));
    if (match) select.value = match.value || match.text;
  };
  prefill("#service", params.get("service"));
  prefill("select[name='engagement']", params.get("engagement"));

  const form = document.querySelector("#enquiry-form");
  if (!form) return;

  const LABELS = {
    name: "Name", role: "Role", organisation: "Organisation", org_type: "Organisation type",
    email: "Email", phone: "Phone / WhatsApp", country: "Country", service: "Service area",
    engagement: "Preferred engagement", description: "Project objectives and requirements",
    deliverables: "Expected deliverables", timeline: "Timeline", budget: "Indicative budget (USD)",
    source: "How they heard about us"
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Project enquiry: ${data.get("service")} - ${data.get("organisation")}`;
    const lines = ["New project enquiry from the ResearchHive Analytics website", ""];
    for (const [key, value] of data.entries()) {
      const text = String(value).trim();
      if (text) lines.push(`${LABELS[key] || key}: ${text}`);
    }
    const href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Your email app should now open with your enquiry ready to send. If it doesn't, use the online enquiry form link above.";
    window.location.href = href;
  });
});
