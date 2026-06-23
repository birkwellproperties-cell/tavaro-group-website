export default function SEO({
  title = "Tavaro Group | Agricultural Software Systems",
  description = "Tavaro Group builds practical agricultural software systems including FarmOS Livestock Farm System.",
  image = "https://tavarogroup.com/brand/tavaro-logo.png",
  url = "https://tavarogroup.com",
}) {
  document.title = title;

  updateMeta("description", description);
  updateProperty("og:title", title);
  updateProperty("og:description", description);
  updateProperty("og:image", image);
  updateProperty("og:url", url);
  updateProperty("og:type", "website");

  return null;
}

function updateMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}