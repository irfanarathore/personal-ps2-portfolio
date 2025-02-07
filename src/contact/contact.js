import "./contact.css";
import emailjs from "emailjs-com";

document.addEventListener("DOMContentLoaded", () => {

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    let exitSound;

    document.addEventListener("click", () => {
        if (!exitSound) {
            exitSound = new Audio("/personal-ps2-portfolio/audio/exit.mp3");
        }
    }, { once: true });

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const userEmail = document.getElementById("email").value;
        const userMessage = document.getElementById("message").value;

        // Email regex pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(userEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                user_email: userEmail,
                message: userMessage,
            }
        ).then(function(response) {
            console.log("SUCCESS!", response.status, response.text);

            document.getElementById("success-message").style.display = "block";
            document.getElementById("contact-form").reset();

            setTimeout(() => {
                document.getElementById("success-message").style.display = "none";
            }, 3000);
        }, function(error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
    });

    function playSound(audio) {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(error => console.error("Error playing sound:", error));
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
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
