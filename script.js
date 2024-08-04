document.addEventListener("DOMContentLoaded", () => {
    const blastElement = document.getElementById("blast");
    const videoElement = document.getElementById("friendshipVideo");
    const animationElement = document.getElementById("animation");
    const messageElement = document.getElementById("message");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    // Start the blast effect
    setTimeout(() => {
      blastElement.style.display = "none";
      videoElement.style.display = "block";
      videoElement.play();
    }, 2000); // Blast duration
  
    // Listen for the video end event
    videoElement.addEventListener("ended", () => {
      videoElement.style.display = "none";
      animationElement.style.display = "block";
  
      // Start typing message after the animation starts
      setTimeout(() => {
        const message = "Happy Friendship Day! Here's to another year of friendship!";
        let index = 0;
  
        function typeMessage() {
          if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeMessage, 100);
          } else {
            messageElement.classList.add('typing-effect');
  
            // Display the thank you message after the typing effect
            setTimeout(() => {
              thankYouMessage.style.display = "block";
              thankYouMessage.innerHTML = "Thank You!<br><br>Our friendship is like a beautiful tapestry, woven with care and adorned with countless memories. Each thread represents a moment we've shared, from the joyous laughter to the comforting silences. Your presence in my life is a gift I cherish deeply, and on this special day, I want you to know how much you mean to me. Here's to the countless more memories we'll create together. Thank you for being you.";
            }, 1000); // Delay before showing the thank you message
          }
        }
  
        typeMessage();
      }, 4000); // Start typing after 4 seconds (animation duration)
    });
  });
  