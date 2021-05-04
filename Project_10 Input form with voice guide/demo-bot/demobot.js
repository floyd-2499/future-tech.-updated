// console.log("hey");

const nameForm = document.querySelector('#form');
const outputName = document.querySelector('#display');          // form

const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");       //bot

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


nameForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = nameForm.elements.username;                  
    const botInput = nameForm.elements.botname;
    addName(nameInput.value, botInput.value)
    // nameInput.value = '';
    // botInput.value = '';
});

const addName = (username, botname) =>{
    const speech = new SpeechSynthesisUtterance();
    const x = document.getElementById("display");
    if (nameForm.elements.username.value.length == 0 && nameForm.elements.botname.value.length == 0)
    { 
        speech.text = "Please Enter your name and also name the Chat-bot!";
        x.style.display = "none";
    } else{
        speech.text = `Hello ${username} ,  ${botname} Chat-bot is ready to assist you.  `;
    }
           
    speech.volume = 1;                                       
    speech.rate = 0.9;
    speech.pitch = 1.1;
    window.speechSynthesis.speak(speech);

    const nameOutput = document.createElement('p');
    nameOutput.append(speech.text);
    outputName.append(nameOutput);
}

function botVoice(message, username, botname) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry dear! I'm not coded for this input";                             

    if (message.includes('how are you')) {
        speech.text = "I am fine, thanks! How are you?";
    }                                                                                          

    if (message.includes('your name') && nameForm.elements.botname.value.length != 0 ) {
        speech.text = `My name is ${botname}`;
    }else if (message.includes('your name') && nameForm.elements.botname.value.length == 0 ){
        speech.text = `Please give me a name in the form, above, after you reload the page!`;
    }


    speech.volume = 1;                                       
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    // window.speechSynthesis.speak(speech);

    var element = document.getElementById("output");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = (e) =>{
    e.preventDefault();
    console.log('Voice activated');
};

// recorder.onresult = (event) => {
//     // console.log(event);
//     const resultIndex = event.resultIndex;
//     const transcript = event.results[resultIndex][0].transcript;          Original code
//     // voice2text.textContent = transcript;
//     var element = document.getElementById("output"); //try let
//     element.appendChild(addHumanText(transcript));
//     botVoice(transcript);
// };


function addHumanText(text){
    const chatContainer = document.createElement("div"); //creating html in js
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");                                   

    const chatText =document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox);
    return chatContainer;
}

function addBotText(text){
    const chatContainer1 = document.createElement("div");  
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");

    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    const chatText1 =document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1);
    return chatContainer1;
}
recorder.onresult = (event) => {
    // console.log(event);
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;
    // const nameForm = document.querySelector('#form');
    const nameInput = nameForm.elements.username;
    const botInput = nameForm.elements.botname;
    // voice2text.textContent = transcript;                                               edited code  & its working but some glitch
    var element = document.getElementById("output"); //try let
    element.appendChild(addHumanText(transcript));
    botVoice(transcript, nameInput.value, botInput.value);
};

voice.addEventListener('click', () =>{
  recorder.start();
});

// for form display none function 
// experiment --!!
function myFunction() {
    const x = document.getElementById("displaynone");
    const nameForm = document.querySelector('#form');

    if (nameForm.elements.username.value.length == 0 && nameForm.elements.botname.value.length == 0)
    { 
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
  }
//    Success broi