window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";
};

// Logika Modal Detail
const modal = document.getElementById("info-modal");
const cards = document.querySelectorAll(".event-card");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener('click', () => {
        const info = card.getAttribute('data-info');
        const title = card.querySelector('h2').innerText;
        
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-text').innerText = info;
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

// Menutup modal jika klik di luar box
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};

// Menambahkan efek fade-in saat scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

cards.forEach(card => observer.observe(card));
