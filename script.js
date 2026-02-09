window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";
};

// 2. Scroll Function
function scrollToContent() {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}

// 3. Modal Popup Logic
const modal = document.getElementById("info-modal");
const modalText = document.getElementById("modal-text");
const cards = document.querySelectorAll(".event-card");
const span = document.getElementsByClassName("close")[0];

cards.forEach(card => {
    card.onclick = function() {
        modal.style.display = "block";
        modalText.innerText = this.getAttribute("data-info");
    }
});

span.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// 4. Reveal Animation on Scroll
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
