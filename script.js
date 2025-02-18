document.addEventListener("DOMContentLoaded", function () {
    var menuLink = document.getElementById("menuLink");
    var layout = document.getElementById("layout");

    menuLink.addEventListener("click", function (e) {
        e.preventDefault();
        layout.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Menu Toggle
    const menu = document.getElementById("menu");
    const toggleBtn = document.getElementById("menu-toggle");

    toggleBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    // Rating System
    const stars = document.querySelectorAll(".star");
    const ratingMessage = document.getElementById("rating-message");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const rating = this.getAttribute("data-value");

            // Reset all stars
            stars.forEach(s => s.classList.remove("active"));

            // Highlight selected stars
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("active");
            }

            // Update message
            ratingMessage.textContent = `You rated this ${rating} out of 5!`;
        });
    });
});

