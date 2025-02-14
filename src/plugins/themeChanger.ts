const themeChanger = async function themeController(
  themeName: string,
  pathToThemeFolder: string
) {
  const name = themeName.toLowerCase();
  const linkElement = document.createElement("link");
  const links = document.querySelectorAll(`link[href*="${pathToThemeFolder}"]`);
  if (links.length > 0) {
    links.forEach((link) => link.remove());
  }
  linkElement.rel = "stylesheet";
  linkElement.href = pathToThemeFolder + name + ".css";
  document.head.appendChild(linkElement);
};

export default themeChanger;
