// Simple content driven renderer for the template site.
const fallbackContent = {
  projectTitle: "__PROJECT_TITLE__",
  projectDate: "__PROJECT_DATE__",
  heroTitle: "A tiny site for a tiny moment",
  heroSubtitle: "Update content.json to make this yours.",
  bodyText: "This page is fully static and loaded from a local JSON file.",
  ctaLabel: "Do the thing"
};

async function loadContent() {
  try {
    const response = await fetch("content.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("content.json not found");
    }
    return await response.json();
  } catch (error) {
    return fallbackContent;
  }
}

function renderContent(content) {
  document.title = content.projectTitle;
  document.getElementById("project-date").textContent = content.projectDate;
  document.getElementById("hero-title").textContent = content.heroTitle;
  document.getElementById("hero-subtitle").textContent = content.heroSubtitle;
  document.getElementById("body-text").textContent = content.bodyText;
  document.getElementById("cta").textContent = content.ctaLabel;
}

loadContent().then((content) => {
  renderContent({ ...fallbackContent, ...content });
});
