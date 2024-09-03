const themes = ['light-theme', 'dark-theme', 'high-contrast-theme'];
let currentThemeIndex = 1;
document.body.classList.add(themes[currentThemeIndex]);

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Remove the current theme class
    document.body.classList.remove(themes[currentThemeIndex]);

    // Update the theme index
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Add the new theme class
    document.body.classList.add(themes[currentThemeIndex]);
});