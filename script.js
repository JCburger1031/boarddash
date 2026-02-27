// ================= Dynamic Styling with Screen Info =================
function updateBackgroundColor() {
        const width = window.innerWidth;

        if (width < 600) {
            document.body.style.backgroundColor = "#2196f3"; // Blue (Mobile)
        } else if (width >= 600 && width <= 991) {
            document.body.style.backgroundColor = "#4caf50"; // Green (Tablet)
        } else {
            document.body.style.backgroundColor = "#ff9800"; // Orange (Desktop)
        }
    }

    

    // Run on page load
    window.addEventListener("load", updateBackgroundColor);

// Run on window resize
window.addEventListener("resize", updateBackgroundColor);
