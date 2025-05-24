const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

//Display user message
const addUserMessage = (msg) => {
    chatbox.innerHTML += `<div class="message user">You:${msg}</div>`;
}

//Display bot message
const addBotMessage = (msg) => {
    chatbox.innerHTML += `<div class+"message bot">Bot: ${msg}</div>`;
}
//Simple chat bot logic
// const getBotResponse = (msg) => {
//     const lower = msg.toLowerCase();
//     if (lower.includes("hello")) return "Hi there!";
//     if (lower.includes("how are you")) return "I'm just a bot, but I'm fine";
//     if (lower.includes("bye")) return "Goodbye";
//     return "Sorry, I didn't understand that."; 
// };

//Response map for easy keyword based replies
const responses = {
    "hello":"Hi there!",
    "hi":"Hello!",
    "how are you":"I'm just a bot, but I'm good!",
    "what is your name":"I'm a JavaScript bot!",
    "help":"You can say hello, ask for my name, or say bye."
};

//Get response using keyword matching
const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();
    for (const key in responses) {
        if (lower.includes(key)) {
            return responses[key];
        }
    }
    return "Sorry, I didn't understand that.";
};

// Handle send button click
const handleSend = () => {
    const msg = userInput.value.trim();
    if(!msg) return;
    addUserMessage(msg);
    const response = getBotResponse(msg);
    addBotMessage(response);
    userInput.value = ' ';
    chatbox.scrollTop = chatbox.scrollHeight;
};


// Add event listeners
sendBtn.addEventListener('click', () => handleSend());
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});

