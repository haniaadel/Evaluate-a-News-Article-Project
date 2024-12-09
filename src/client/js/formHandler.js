// Export the handleSubmit function
export { handleSubmit };
export { updateUI };

// Replace checkForName with a function that checks the URL
import { checkForURL } from './urlChecker'

const form = document.getElementById('urlForm');
window.onload = function() {
    form.addEventListener('submit', handleSubmit);
};

async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value; // Get the URL from the input field
    Client.checkForURL(formText); // Check if the URL is valid

    const formUrl = {
        url: formText
    };
    const newData = await postUrl(formUrl);
    // console.log(newData);
    updateUI(newData);
};

// send url to server
const postUrl = async (data = {}) => {
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
    } catch (error) {
        console.log('THIS IS THE PROBLEM', error);
    }
};

const updateUI = async (object) => {
    try {
        document.getElementById('lang').innerHTML = `Language: ${object.data.response.language}`;
        console.log(`Language: ${object.data.response.language}`);

        const topic = pickTopic(object);
        // console.log(`THIS ${topic}`);
        document.getElementById('topic').innerHTML = `Topic: ${topic}`; 
        console.log(`Topic: ${topic}`);

        const sentence = createSentence(object);
        // console.log(`THIS ${sentence}`)
        document.getElementById('sentence').innerHTML = `Extracted sentence: "${sentence}"`;
        console.log(`Extracted sentence: "${sentence}"`);

    } catch (error){
        console.log('error', error);
    }
};

const createSentence = (object) => {
    let sentence ='';
    let words = object.data.response.sentences[5].words;
    // console.log(words);
    // console.log(words[3].token);
    for(let i=0; i<words.length; i++) {
        let tokens = words[i].token;
        sentence += `${tokens} `;
    };
    // console.log(sentence);
    return sentence;
};

const pickTopic = (object) => {
    let topic ='';
    let topics = object.data.response.topics;
    for(let i=0; i<topics.length; i++) {
        const score = topics[i].score;
        const label = topics[i].label;
        if(score === 1){ 
            topic = label;
            break;
        };
    };
    // console.log(topic);
    return topic;
};