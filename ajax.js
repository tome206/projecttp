// Simple AJAX implementation for restaurant website
document.addEventListener("DOMContentLoaded", function () {
  // Handle contact form submission
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre message!");
      this.reset();
    });
  }

  // Handle review form submission
  const reviewForm = document.querySelector(".review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Merci pour votre avis!");
      this.reset();
    });
  }

  // Handle order buttons
  document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const itemName = this.parentElement.textContent
        .split(" :")[0]
        .replace("Commander", "")
        .trim();

      // AJAX to fetch command.xml
      fetch("command.xml")
        .then((response) => response.text())
        .then((data) => {
          // Parse XML
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "text/xml");

          // Check for parsing errors
          if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
            throw new Error("XML parsing error");
          }

          // Get message from XML
          const textElement = xmlDoc.querySelector("message > text");
          const message = textElement
            ? textElement.textContent
            : "Message not found";

          // Display message in the div
          const messageBox = document.getElementById("messageBox");
          const messageContent = document.getElementById("messageContent");

          if (messageBox && messageContent) {
            messageContent.innerHTML = "<p>" + message + "</p>";
            messageBox.style.display = "block";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(
            "Erreur lors de la récupération de la commande: " + error.message
          );
        });
    });
  });
});
