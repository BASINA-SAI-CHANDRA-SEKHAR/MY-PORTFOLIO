document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target id
        const targetElement = document.querySelector(targetId); // Get the target element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align the target to the start of the viewport
            });
        }
    });
});
function viewCertificate(certificateId) {
    var certificateDiv = document.getElementById(certificateId);
    if (certificateDiv.style.display === "none") {
        certificateDiv.style.display = "block";
    } else {
        certificateDiv.style.display = "none";
    }
}
