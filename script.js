:root {
    --primary: #b33939; /* Merah Perjuangan */
    --dark: #2c3e50;
    --paper: #f7f1e3; /* Warna kertas lama */
}

body {
    font-family: 'Courier New', Courier, monospace; /* Font mesin ketik */
    background-color: var(--paper);
    margin: 0;
    overflow-x: hidden;
}

/* Background Hero Sejarah */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                url('https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&q=80&w=1600'); 
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

/* Animasi Mengetik */
.typing-text {
    font-size: 3.5rem;
    border-right: 4px solid var(--primary);
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typing 3s steps(20) forwards, blink 0.5s infinite;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    from { border-color: transparent; }
    to { border-color: var(--primary); }
}

/* Timeline Styling */
.timeline-container {
    position: relative;
    max-width: 900px;
    margin: 50px auto;
    padding: 20px;
}

.timeline-line {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: var(--primary);
    transform: translateX(-50%);
}

.content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    border-left: 5px solid var(--primary);
    box-shadow: 10px 10px 0px rgba(0,0,0,0.1); /* Shadow kaku ala retro */
    transition: 0.4s;
}

.event-card:hover .content {
    transform: rotate(-2deg) scale(1.05); /* Efek goyang kertas */
    background: var(--primary);
    color: white;
}

/* Progress Bar */
.progress-bar {
    position: fixed; top: 0; left: 0; height: 6px;
    background: var(--primary); width: 0%; z-index: 100;
}
