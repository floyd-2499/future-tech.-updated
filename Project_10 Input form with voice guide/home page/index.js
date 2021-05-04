// Response 
const userform = document.querySelector('#userform')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();
userform.addEventListener('submit', function(e){
    e.preventDefault(); 
    const usernameInput = userform.elements.username;
    addName(usernameInput.value)
    usernameInput.value = '';  
})
const addName = (username) => {
    const speech = new SpeechSynthesisUtterance();
    if (userform.elements.username.value.length == 0)
    { 
        speech.text = "Please Enter your name..!!";
    } else{
        speech.text = `Hello ${username}, Welcome to our web-page - The Future Technology with Javascript. Our Page is ready to serve you. All the best for your Research`;
    }
           
    speech.volume = 1;                                       
    speech.rate = 0.9;
    speech.pitch = 1.1;
    window.speechSynthesis.speak(speech);
}

// image change
const delayImageChanges = (newImage, delay) => {
    return new Promise((resolve, reject) => {
    setTimeout( () => {
        document.getElementById("main_img").src = newImage;       
        resolve();
    }, delay)
})
}
async function imageChange() {
    await delayImageChanges("2.jpg", 3000)
    await delayImageChanges("4.jpg", 3000)
    await delayImageChanges("5.jpg", 3000)
    await delayImageChanges("1.jpg", 3000)
}
imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () => imageChange().then( () =>imageChange().then( () => imageChange().then( () => imageChange() )) ) ) ) ) ) )


// submit feedback

function myFunction() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Thank you for your Feedback";
    speech.volume = 1;                                       
    speech.rate = 0.9;
    speech.pitch = 1.1;
    window.speechSynthesis.speak(speech);
  }