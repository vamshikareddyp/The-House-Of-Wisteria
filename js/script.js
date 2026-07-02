// ------------------------------
// Mobile Navigation Menu
// ------------------------------

function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// ------------------------------
// Booking Form Validation
// ------------------------------

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const room = document.getElementById("room").value;
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            room === "" ||
            checkin === "" ||
            checkout === ""
        ) {
            alert("Please fill in all the required fields.");
            return;
        }
        if (new Date(checkout) <= new Date(checkin)) {
            alert("Check-out date must be after the check-in date.");
            return;
        }
        alert(
            "Thank you for choosing The House Of Wisteria!\n\nYour booking request has been submitted successfully."
        );
        bookingForm.reset();
    });
}

