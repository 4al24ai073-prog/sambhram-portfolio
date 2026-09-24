const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        try {
            const response = await fetch(
                "http://localhost:5000/api/messages",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                }
            );

            const data = await response.json();

            if (data.success) {
                alert("Message sent successfully!");

                contactForm.reset();
            } else {
                alert(data.message);
            }

        } catch (error) {
            console.error("Error:", error);

            alert(
                "Unable to send message. Make sure the backend is running."
            );
        }
    });
}