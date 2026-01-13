function send() {
    let user = document.getElementById("user").value;
    let box = document.getElementById("messages");

    box.innerHTML += "<p><b>You:</b> " + user + "</p>";

    let reply = "I don't understand ";

    if (user.toLowerCase().includes("hello"))
        reply = "Hello ";

    else if (user.toLowerCase().includes("name"))
        reply = "I am Deepak's chatbot ";

    else if (user.toLowerCase().includes("how are you"))
        reply = "I'm fine! How about you?";

    else if (user.toLowerCase().includes("bye"))
        reply = "Goodbye ";

    box.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
    document.getElementById("user").value = "";
}
