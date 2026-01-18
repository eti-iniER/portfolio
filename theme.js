function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        updateToggleText(toggle, savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        updateToggleText(toggle, "dark");
    }

    toggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateToggleText(toggle, newTheme);
    });
}

function updateToggleText(toggle, theme) {
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", initTheme);
