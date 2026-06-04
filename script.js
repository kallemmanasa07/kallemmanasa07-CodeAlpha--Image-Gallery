const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("counter");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Show Current Image
function showImage() {
    lightboxImg.src = images[currentIndex].src;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
}

// Close Lightbox
document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Previous Image
document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            currentIndex = (currentIndex + 1) % images.length;
            showImage();
        }

        if(e.key === "ArrowLeft"){
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage();
        }

        if(e.key === "Escape"){
            lightbox.style.display = "none";
        }
    }
});

// Filter Gallery
function filterGallery(category){

    galleryItems.forEach(item => {

        if(category === "all" ||
           item.classList.contains(category)){

            item.style.display = "block";

        } else {

            item.style.display = "none";
        }
    });
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});