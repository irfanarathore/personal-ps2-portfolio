import "./intro.scss"; // Relative path

// Generate the Cubes
document.addEventListener("DOMContentLoaded", () => {
    const beginButton = document.getElementById("begin-btn")
    const innerDiv = document.querySelector(".inner");

    if(!innerDiv || !beginButton){
        console.error("Required elements are missing");
        return;
    }

    for (let i = 0; i < 112; i++) {
        let boxContainer = document.createElement('div');
        boxContainer.className = 'box-container';
        let box = document.createElement('div');
        box.className = 'box';
        
        // Create cube faces (ensuring 3D effect)
        ["top", "bottom", "left", "right"].forEach(face => {
            let faceDiv = document.createElement('div');
            faceDiv.className = face;
            box.appendChild(faceDiv);
        });

        boxContainer.appendChild(box);
        innerDiv.appendChild(boxContainer);
    }

    const particlesContainer = document.querySelector(".particles");

    for (let i = 1; i <= 5; i++) {
        let particle = document.createElement("span");
        particle.className = `particle-${i}`;
        particlesContainer.appendChild(particle);
    }

    // Ensure PS2 Audio Plays on First Click
    document.addEventListener("click", () => {

        innerDiv.style.animation = "enter 16s cubic-bezier(1,0,.4,1) forwards";
    
        beginButton.style.display = "none";

        const audio = document.getElementById("ps2-audio");
        if (audio && audio.paused) {  
            audio.play().catch(error => console.error("Error playing audio:", error));
        }
    }, { once: true });

    // Redirect to Memory Card Menu after animation
    setTimeout(() => {
        window.location.href = "memory-card-menu/memory-menu.html";
    }, 16000);
});