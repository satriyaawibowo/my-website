function tampilkanAlert() {
    alert("Halo! Kamu menekan tombol.");
}

function tampilkanAlert() {
    alert("Halo! Kamu menekan tombol.");
}

// Form kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;

    if (nama && pesan) {
        document.getElementById("responseMessage").innerText = `Terima kasih, ${nama}! Pesanmu telah terkirim.`;
        document.getElementById("contactForm").reset();
    } else {
        alert("Harap isi semua kolom.");
    }
});
