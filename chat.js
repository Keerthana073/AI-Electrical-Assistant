let question = document.getElementById("question");
let sendBtn = document.getElementById("sendBtn");
let chatArea = document.getElementById("chatArea");
const electricalTopics ={
            resistance:"Resistance opposes the flow of current and without resistor, too much current can damage components.",
            capacitor:"A capacitor store electrical energy temporarily and releases it when needed.",
            voltage: "Voltage is the force that pushes electrons through a wire.",
            current: "Current is the amount of electricity flowing through a wire.",
            battery: "A battery stored chemical energy and supplies electrical energy.",
            ohm: "ohm is the SI unit of electrial resistance.",
            resistorcolorcode: "Black-0,Brown-1,Orange-3,Yellow-4, Green-5,Blue-6,Violet-7,Grey-8,White-9.",
            diode: "A diode allows current to flow only one direction.",
            led: "LED stand for light emitting diode.",
            transistor: "A transistor is used as a switch and an amplifier.",
            ac: "AC means Alternating current. It changes direction periodically.",
            dc: "Dc means Direct current. It flows in only one direction."
        }
    async function sendMessage(){
        let userMessage = question.value.toLowerCase();
        if(userMessage ==="") {
            alert("Please Enter a Question!");
            return;
        }
        chatArea.innerHTML += "<p><b><span style='color:blue;'>You:</span></b> " + userMessage + "</p>";
        chatArea.scrollTop = chatArea.scrollHeight;
        chatArea.innerHTML += "<p id='thinking'><b><span style='color:green;'>AI:</span></b> Thinking...</p>";
        let aiReply = await getGeminiResponse(userMessage);
        question.value ="";
        if(userMessage.includes("hello")||
            userMessage.includes("hi")||
            userMessage.includes("hey")||
            userMessage.includes("good morning")||
            userMessage.includes("good aftornoon")||
            userMessage.includes("good evening")
        ){
            aiReply = "Hello! welcome to IntelliSpark AI";
         
         }/*
          for(let topic in electricalTopics){
                if(userMessage.includes(topic))
                {
                     aiReply = electricalTopics[topic];
                    break;
                }
            }
            if(!aiReply){
                aiReply = "Sorry! I dont know  this topic yet.";
            } */
        setTimeout(function() {
                 let thinking= document.getElementById("thinking");
                  if(thinking){
                    thinking.remove();
                  }
            chatArea.innerHTML +="<p><b><span style='color:green;'>AI:</span></b> "+ aiReply +"</p>";
            chatArea.scrollTop= chatArea.scrollHeight;
        }, 2000);
    }
     
     async function getGeminiResponse(userMessage) {
    try {
        const response = await fetch(
            "http://127.0.0.1:5000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage
                })
            }
        );
        if(!response.ok){
            return "Gemini API Error:"+response.status;
        }
        const data = await response.json();
        return data.reply;

    } catch (error) {
        
        return "⚠️ Gemini AI is not responding. Please try again.";
    }
}
      
    sendBtn.addEventListener("click",sendMessage);
    
    question.addEventListener("keydown",
        function(event){
            if(event.key ==="Enter"){
                sendMessage();
            }
        });