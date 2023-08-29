// Nama
window.onload = function () {
    var nameElement = document.getElementById("name");

    nameElement.innerHTML = "Hi " + getUserName() + " Welcome To Website";
}

function getUserName() {
    return "Wahyu Saputra";
}

// Pesan
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const result = document.querySelector(".result");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const ttl = document.getElementById("ttl").value;
        const gender = document.querySelector('input[name="jenis_kelamin"]:checked').value;
        const message = document.querySelector("textarea").value;
        const currentTime = new Date().toLocaleString();

        result.innerHTML = `
            <p class="">Current time: ${currentTime}</p>
            <p class="">Nama: ${nama}</p>
            <p class="">Tanggal Lahir: ${ttl}</p>
            <p class="">Jenis Kelamin: ${gender}</p>
            <p class="">Pesan: ${message}</p>
        `;
    });
});

// Banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.querySelector('.logo a').addEventListener('click', function () {
    document.querySelector('.item').classList.toggle('active');
});