document.addEventListener("DOMContentLoaded", () => {
    const gameIcons = document.querySelectorAll(".game-icon");
    const titleElement = document.querySelector(".dynamic-title");
    const projectBtn = document.getElementById("project-btn"); // Updated to correct button ID

    let gameSound, hoverSound, exitSound; 
    let projectClicked = false;

    // Set initial instruction text
    titleElement.textContent = "Click the Project Button";

    // Load sounds on first interaction
    document.addEventListener("click", () => {
        if (!gameSound) {
            gameSound = new Audio("/personal-ps2-portfolio/audio/game-select.mp3");
            hoverSound = new Audio("/personal-ps2-portfolio/audio/card-select.mp3");
            exitSound = new Audio("/personal-ps2-portfolio/audio/exit.mp3");
            console.log("🔊 Audio preloaded after user interaction.");
        }
    }, { once: true });

    // Project button click event
    projectBtn.addEventListener("click", () => {
        if (projectClicked) return; // Prevent duplicate triggers

        console.log("Project button clicked!");
        
        // Change the hover text back to its original function
        titleElement.textContent = "Hover over and Click an icon";
        projectClicked = true;

        // Play startup sound effect
        let startupAudio = new Audio("/personal-ps2-portfolio/audio/startup.mp3");
        startupAudio.play().catch(error => console.error("Error playing startup sound:", error));

        // Visually disable the button (optional)
        projectBtn.style.pointerEvents = "none";
        projectBtn.style.opacity = "0.6";
    });

    function playSound(audio) {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Error playing sound:", error));
        }
    }

    // Apply event listeners to game icons (only after Project is clicked)
    gameIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            if (!projectClicked) return;
            titleElement.textContent = icon.getAttribute("data-text");
            playSound(gameSound);
        });

        icon.addEventListener("mouseleave", () => {
            if (!projectClicked) return;
            titleElement.textContent = "Hover over and Click an icon";
        });

        icon.addEventListener("click", () => {
            if (!projectClicked) return;

            const link = icon.getAttribute("data-link");
            playSound(hoverSound);

            setTimeout(() => {
                window.open(link, "_blank"); 
            }, 700);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedIcon = document.querySelector(".game-icon:hover");
            if (selectedIcon && projectClicked) {
                const link = selectedIcon.getAttribute("data-link");
                playSound(hoverSound);

                setTimeout(() => {
                    window.open(link, "_blank");
                }, 700);
            }
        } else if (event.key === "Escape") {
            console.log("Escape pressed. Playing exit sound...");
            playSound(exitSound);

            setTimeout(() => {
                console.log("Returning to memory menu...");
                window.location.href = "/personal-ps2-portfolio/memory-card-menu/memory-menu.html";
            }, 700);
        }
    });

    window.removeEventListener("popstate", handlePopState);
    window.addEventListener("popstate", handlePopState, { once: true });

    function handlePopState() {
        console.log("Browser back button pressed. Playing exit sound...");
        playSound(exitSound);

        setTimeout(() => {
            console.log("Returning to previous page...");
            window.location.href = "/personal-ps2-portfolio/memory-card-menu/memory-menu.html";
        }, 700);
    }

    if (!window.pushedState) {
        history.pushState(null, "", location.href);
        window.pushedState = true; 
    }
});
