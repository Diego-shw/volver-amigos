document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('response').innerText = ":,)";
    document.getElementById('friend-image').src = "imagen-amigos.jpg"; // Asegúrate de que la imagen esté en la misma carpeta
    document.getElementById('friend-image').style.display = "block";
    launchConfetti(); // Lanza el confetti al dar clic en "Sí"
});

document.getElementById('no').addEventListener('mouseover', function() {
    const button = document.getElementById('no');
    button.style.position = 'absolute';
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
});

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const confetti = canvas.getContext('2d');
    const particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: Math.random() * 5 - 2.5,
            speedY: Math.random() * 5 + 2,
            color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)',
            size: Math.random() * 10 + 5,
        });
    }

    function render() {
        confetti.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            confetti.fillStyle = p.color;
            confetti.fillRect(p.x, p.y, p.size, p.size);
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.y > canvas.height) p.y = 0;
            if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
        });
        requestAnimationFrame(render);
    }

    render();
}
