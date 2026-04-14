//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    } 
})

// WhatsApp Form Logic
const whatsappForm = document.querySelector('#whatsappForm');

whatsappForm.onsubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    // 1. Get the data from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // 2. Your WhatsApp Number (International format, no + or 00)
    const myNumber = "447429418454";

    // 3. Craft the message (The %0A creates a "New Line" in WhatsApp)
    const message = `*New Inquiry from Vape Inn Denbigh Website*%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Email:* ${email}%0A` +
                    `*Phone:* ${phone}`;

    // 4. Create the final URL
    const waUrl = `https://wa.me/${myNumber}?text=${message}`;

    // 5. Open in a new tab
    window.open(waUrl, '_blank');
};
