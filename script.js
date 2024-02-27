function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
    
    if (message.trim() != "") {
        var chatOutput = document.getElementById("chat-output");
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerText = message;
        chatOutput.appendChild(messageElement);
        
        // Clear input field after sending message
        userInput.value = "";
    }
}
