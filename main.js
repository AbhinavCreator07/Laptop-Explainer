document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the button and the body element
    const themeChanger = document.getElementById('theme-changer');
    const bodyElement = document.body;

    // --- Helper function to update the button text based on the current theme ---
    const updateButtonText = () => {
        // Check if the dark-theme class is currently active on the body
        if (bodyElement.classList.contains('dark-theme')) {
            // If it's dark, the button should say "Light" (to suggest switching to Light)
            themeChanger.textContent = 'Light';
        } else {
            // If it's light, the button should say "Dark" (to suggest switching to Dark)
            themeChanger.textContent = 'Dark';
        }
    };

    // --- Load saved theme preference from local storage ---
    const savedTheme = localStorage.getItem('theme');

    // If a theme preference was found, apply it
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark-theme');
    } else {
        // Ensure default is light theme (important if no theme is saved)
        bodyElement.classList.remove('dark-theme');
    }

    // Initialize button text after loading the saved theme
    updateButtonText();


    // --- Add click event listener to the theme changer button ---
    themeChanger.addEventListener('click', () => {
        // 2. Toggle the 'dark-theme' class on the body. 
        // This is the core action that triggers the CSS theme change.
        bodyElement.classList.toggle('dark-theme');

        // 3. Save the new theme preference to local storage
        if (bodyElement.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // 4. Update the button text after the theme has switched
        updateButtonText();
    });
});