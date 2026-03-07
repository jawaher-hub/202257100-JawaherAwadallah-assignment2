// theme toggle with LocalStorage
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
// Check for saved theme of user
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Update emojie and save preference
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // add class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projects.forEach(project => {
            project.classList.remove('show');
            
            if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                project.classList.remove('hide');
                project.classList.add('show');
            } else {
                project.classList.add('hide');
            }
        });
    });
});
// storage of greeting
const greetingArea = document.getElementById('greeting-area');
const savedName = localStorage.getItem('visitorName');
if (savedName) {
    greetingArea.textContent = `Welcome back, ${savedName}!`;
} else {
    greetingArea.textContent = "Welcome to my portfolio!";
}
// error and feedback of form
const contactForm = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        statusMsg.textContent = "Please fill in all fields (•◡•)";
        statusMsg.className = "status-message error";
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        statusMsg.textContent = "Please enter a valid email address!";
        statusMsg.className = "status-message error";
        return;
    }
    // sending data
    statusMsg.textContent = "Sending...";
    statusMsg.className = "status-message";

    setTimeout(() => {
        // Save name to local storage for next visit
        localStorage.setItem('visitorName', nameInput.value.trim());

        // success Feedback
        statusMsg.textContent = "Message sent successfully! I'll get back to you ASAP";
        statusMsg.className = "status-message success";
        // clear form
        contactForm.reset();
    }, 2000); 
});