// Add some interactive sparkle effects
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create subtle glow effect following mouse
    container.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(102, 126, 234, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)`;
});

container.addEventListener('mouseleave', () => {
    container.style.background = 'rgba(255, 255, 255, 0.05)';
});

// Add click animation to button
document.querySelector('.invite-button').addEventListener('click', function() {
    this.style.transform = 'translateY(-2px) scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'translateY(-4px) scale(1)';
    }, 150);
});
