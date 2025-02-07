document.addEventListener("DOMContentLoaded", () => {
    const gameIcons = document.querySelectorAll(".game-icon");
    const titleElement = document.querySelector(".dynamic-title");

    let gameSound, hoverSound, exitSound; 

    
    document.addEventListener("click", () => {
        if (!gameSound) {
            gameSound = new Audio("/personal-ps2-portfolio/audio/game-select.mp3");
            hoverSound = new Audio("/personal-ps2-portfolio/audio/card-select.mp3");
            exitSound = new Audio("/personal-ps2-portfolio/audio/exit.mp3");
            console.log("🔊 Audio preloaded after user interaction.");
        }
    }, { once: true });

    
    function playSound(audio) {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Error playing sound:", error));
        }
    }

    gameIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            titleElement.textContent = icon.getAttribute("data-text");
            playSound(gameSound);
        });

        icon.addEventListener("mouseleave", () => {
            titleElement.textContent = "Hover over an icon";
        });

        icon.addEventListener("click", () => {
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
            if (selectedIcon) {
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
                window.location.href = "../memory-card-menu/memory-menu.html";
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
            window.location.href = "../memory-card-menu/memory-menu.html";
        }, 700);
    }

    
    if (!window.pushedState) {
        history.pushState(null, "", location.href);
        window.pushedState = true; 
    }
});
