function createBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 60 + 20; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`; 
    bubble.style.animationDuration = `${Math.random() * 6 + 4}s`; 
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}
    setInterval(createBubble, 100);
