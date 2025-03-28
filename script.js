const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-theme');
    toggleBtn.textContent = body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
});
