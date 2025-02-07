document.addEventListener("DOMContentLoaded", () => {
    const memoryCards = document.querySelectorAll(".memory-card");
    const titleElement = document.querySelector(".memory-card-title");

    let hoverSound, exitSound;

    document.addEventListener("click", () => {
        if (!hoverSound) {
            hoverSound = new Audio("./audio/card-select.mp3");
            exitSound = new Audio("./audio/exit.mp3");
        }
    }, { once: true });

    document.querySelectorAll(".memory-card").forEach((card) => {
        card.addEventListener("click", function () {
            const link = this.getAttribute("data-link");

            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play().catch(error => console.error("Error playing sound:", error));
            }

            setTimeout(() => {
                if (link.startsWith("http")) {
                    window.open(link, "_blank");
                } else {
                    window.location.href = link;
                }
            }, 1500); 
        });
    });

    function playSound(audio) {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Error playing sound:", error));
        }
    }

    memoryCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            titleElement.textContent = card.getAttribute("data-text");
            playSound(hoverSound);
        });

        card.addEventListener("mouseleave", () => {
            titleElement.textContent = "Hover over a Memory Card";
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const selectedCard = document.querySelector(".memory-card:hover");
            if (selectedCard) {
                const link = selectedCard.getAttribute("data-link");
                playSound(hoverSound);

                setTimeout(() => {
                    window.location.href = link;
                }, 3000);
            }
        } else if (event.key === "Escape") {
            playSound(exitSound);
            setTimeout(() => {
                window.location.href = "src/index.html";
            }, 3000);
        }
    });

    window.removeEventListener("popstate", handlePopState);
    window.addEventListener("popstate", handlePopState, { once: true });

    function handlePopState() {
        playSound(exitSound);
        setTimeout(() => {
            history.back();
        }, 3000);
    }

    if (!window.pushedState) {
        history.pushState(null, "", location.href);
        window.pushedState = true;
    }
});
