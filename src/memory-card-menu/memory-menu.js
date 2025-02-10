document.addEventListener("DOMContentLoaded", () => {
    const memoryCards = document.querySelectorAll(".memory-card");
    const titleElement = document.querySelector(".memory-card-title");
    const portfolioBtn = document.getElementById("portfolio-btn");

    let hoverSound, exitSound;
    
    // Initial message prompting user to click the Portfolio button
    titleElement.textContent = "Click the Portfolio Button";
    let portfolioClicked = false;

    // Load sounds when the first interaction occurs
    document.addEventListener("click", () => {
        if (!hoverSound) {
            hoverSound = new Audio("/personal-ps2-portfolio/audio/card-select.mp3");
            exitSound = new Audio("/personal-ps2-portfolio/audio/exit.mp3");
        }
    }, { once: true });

    // Click event for Portfolio button
    portfolioBtn.addEventListener("click", () => {
        if (portfolioClicked) return; // Prevent multiple clicks

        console.log("Portfolio button clicked!");
        
        // Change the title back to its original behavior
        titleElement.textContent = "Hover over and Click a Memory Card";
        portfolioClicked = true; // Enable hover functionality

        // Play startup sound
        let startupAudio = new Audio("/personal-ps2-portfolio/audio/startup.mp3");
        startupAudio.play().catch(error => console.error("Error playing startup sound:", error));

        // Gray out the Portfolio button
        portfolioBtn.style.pointerEvents = "none"; // Disable clicking
        portfolioBtn.style.opacity = "0.6"; // Make it faded
    });

    function playSound(audio) {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Error playing sound:", error));
        }
    }

    // Memory card hover behavior
    memoryCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            if (!portfolioClicked) return; // Prevent hover update if Portfolio wasn't clicked
            titleElement.textContent = card.getAttribute("data-text");
            playSound(hoverSound);
        });

        card.addEventListener("mouseleave", () => {
            if (!portfolioClicked) return;
            titleElement.textContent = "Hover over and Click a Memory Card";
        });

        card.addEventListener("click", function () {
            if (!portfolioClicked) return; // Prevent clicking before portfolio is clicked

            const link = this.getAttribute("data-link");
            playSound(hoverSound);

            setTimeout(() => {
                if (link.startsWith("http")) {
                    window.open(link, "_blank");
                } else {
                    window.location.href = link;
                }
            }, 700);
        });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedCard = document.querySelector(".memory-card:hover");
            if (selectedCard && portfolioClicked) {
                const link = selectedCard.getAttribute("data-link");
                playSound(hoverSound);

                setTimeout(() => {
                    window.location.href = link;
                }, 700
            );
            }
        } else if (event.key === "Escape") {
            playSound(exitSound);
            setTimeout(() => {
                window.location.href = "/personal-ps2-portfolio/";
            }, 3000);
        }
    });

    // Handle back button (popstate)
    window.addEventListener("popstate", handlePopState, { once: true });

    function handlePopState() {
        playSound(exitSound);
        setTimeout(() => {
            window.location.href = "/personal-ps2-portfolio/";
        }, 3000);
    }

    if (!window.pushedState) {
        history.pushState(null, "", location.href);
        window.pushedState = true;
    }
});
