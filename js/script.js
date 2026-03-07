// Select the theme toggle button 
const change = document.getElementById('theme-toggle');

change.addEventListener('click', () => {
    // Switch the dark class on the body element
    document.body.classList.toggle('dark');
    // Update button icon based on the current theme
    change.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
