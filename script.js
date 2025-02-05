function tampilkanAlert() {
    alert("Halo! Kamu menekan tombol.");
}

function tampilkanAlert() {
    alert("Halo! Kamu menekan tombol.");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animasi testimoni bergantian muncul
document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach((t, i) => {
            if (i === index) {
                t.style.opacity = "1";
                t.style.transform = "translateX(0)";
            } else {
                t.style.opacity = "0";
                t.style.transform = "translateX(50px)";
            }
        });

        index = (index + 1) % testimonials.length;
    }

    setInterval(showTestimonial, 3000);
    showTestimonial(); // Jalankan pertama kali
});

document.addEventListener("DOMContentLoaded", function () {
    let hero = document.getElementById("hero");
    
    // Daftar gambar untuk header
    let images = [
        "assets/POSTCARD.png",
        "header2.jpg",
        "header3.jpg"
    ];

    let index = 0;

    function changeHeaderImage() {
        index = (index + 1) % images.length;
        hero.style.backgroundImage = `url('${images[index]}')`;
    }

    // Set gambar awal dan mulai pergantian setiap 5 detik
    hero.style.backgroundImage = `url('${images[0]}')`;
    setInterval(changeHeaderImage, 5000);
});