// JavaScript to handle tab navigation
function showTab(tabId) {
    // Hide all tab content sections
    document.querySelectorAll('.tab-content').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected tab content section
    document.getElementById(tabId).style.display = 'block';
}

// Initial setup to show the home tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Show the home tab by default
showTab('home');
