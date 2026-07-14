const chatButton = document.getElementById("chatBtn");
const uploadButton = document.getElementById("uploadBtn");
chatButton.addEventListener("click",
    function () {
        alert("Welcome to IntelliSpark AI chat.");
        window.location.href = "chat.html";
    });
uploadButton.addEventListener("click",
    function () {
        alert("Image Upload feature coming soon.");
    });