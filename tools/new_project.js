#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Build a readable title from a slug like anniversary_note.
function toTitleCase(input) {
  return input
    .replace(/_/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Convert a date slug like 2026_03_14 into a friendly date.
function formatDate(dateSlug) {
  const match = /^\d{4}_\d{2}_\d{2}$/.test(dateSlug);
  if (!match) {
    return dateSlug.replace(/_/g, " ");
  }
  const [year, month, day] = dateSlug.split("_");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthIndex = Number(month) - 1;
  return `${monthNames[monthIndex]} ${Number(day)}, ${year}`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Copy a file and replace template placeholders in one pass.
function copyWithReplacements(src, dest, replacements) {
  const raw = fs.readFileSync(src, "utf8");
  let output = raw;
  Object.entries(replacements).forEach(([key, value]) => {
    output = output.replace(new RegExp(key, "g"), value);
  });
  fs.writeFileSync(dest, output, "utf8");
}

function writeProjectReadme(destDir, projectTitle) {
  const content = `# ${projectTitle}\n\nThis project was generated from the static site template.\n\n## Update Content\n\nEdit \`content.json\` to change all visible text.\n\n## Local Preview\n\n\`\`\`sh\npython3 -m http.server 8000\n\`\`\`\n`;
  fs.writeFileSync(path.join(destDir, "README.md"), content, "utf8");
}

function writeAssetReadmes(destDir) {
  const imagesReadme = "Drop image files here and reference them from content.json.\n";
  const audioReadme = "Drop audio files here and reference them from content.json.\n";
  fs.writeFileSync(path.join(destDir, "assets", "images", "README.md"), imagesReadme, "utf8");
  fs.writeFileSync(path.join(destDir, "assets", "audio", "README.md"), audioReadme, "utf8");
}

function main() {
  const [dateSlug, nameSlug] = process.argv.slice(2);
  if (!dateSlug || !nameSlug) {
    console.error("Usage: node tools/new_project.js YYYY_MM_DD project_name");
    process.exit(1);
  }

  const projectSlug = `${dateSlug}_${nameSlug}`;
  const projectTitle = toTitleCase(nameSlug);
  const projectDate = formatDate(dateSlug);
  const rootDir = path.resolve(__dirname, "..");
  const templateDir = path.join(rootDir, "templates", "static_site_template");
  const destDir = path.join(rootDir, "projects", projectSlug);

  if (fs.existsSync(destDir)) {
    console.error(`Project already exists: ${destDir}`);
    process.exit(1);
  }

  ensureDir(destDir);
  ensureDir(path.join(destDir, "assets", "images"));
  ensureDir(path.join(destDir, "assets", "audio"));

  const replacements = {
    "__PROJECT_TITLE__": projectTitle,
    "__PROJECT_DATE__": projectDate
  };

  ["index.html", "styles.css", "script.js", "content.json"].forEach((file) => {
    copyWithReplacements(
      path.join(templateDir, file),
      path.join(destDir, file),
      replacements
    );
  });

  // Update content.json defaults with the new name and date.
  const contentPath = path.join(destDir, "content.json");
  const contentJson = JSON.parse(fs.readFileSync(contentPath, "utf8"));
  contentJson.projectTitle = projectTitle;
  contentJson.projectDate = projectDate;
  fs.writeFileSync(contentPath, JSON.stringify(contentJson, null, 2) + "\n", "utf8");

  writeProjectReadme(destDir, projectTitle);
  writeAssetReadmes(destDir);

  console.log(`Created ${projectSlug} in projects/`);
}

main();
