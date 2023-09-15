// Function to update the copyright year
function updateCopyrightYear() {
    const copyrightYearSpan = document.getElementById('copyright-year');
    const currentYear = new Date().getFullYear();
    copyrightYearSpan.textContent = currentYear;
}

// Function to update the last modified date
function updateLastModifiedDate() {
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toDateString();
}

// Call the functions to update the copyright year and last modified date
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    updateLastModifiedDate();
});

