import { config } from 'dotenv';

import { Configuration, OpenAIApi } from 'openai'; // Configuration to setup the api
// OpenAIAPI is the class that will be used to make requests to the API
import readline from 'readline';

function isNumeric(input) {
    var regex = /^[0-9]+$/; // Regular expression to match only numbers
    return regex.test(input);
}
// Accepting user input 
const submitbtn = document.getElementById('submitbtn');
submitbtn.addEventListener('click', () => {
    const inputs = {};
    
    const q1input = document.getElementById('q1input');

    if(q1input.textContent !== "" && isNumeric(q1input.textContent)) {
        inputs.q1input = q1input.textContent;
    } else if(!isNumeric(q1input.textContent)){
        // TODO : Add error message
    }else{
        // TODO : Add error message
    }

    const q2inputYes = document.getElementById('hotelRecommendationYes');
    const q2inputNo = document.getElementById('hotelRecommendationNo');

    if(q2inputYes.checked) {
        inputs.q2input = q2inputYes.value;
    }else if(q2inputNo.checked) {
        inputs.q2input = q2inputNo.value;
    }

    const q3input = document.getElementById('q3input');
    if(q3input.textContent !== "" && isNumeric(q3input.textContent)) {
        inputs.q3input = q3input.textContent;
    }else if(!isNumeric(q3input.textContent)) {
        // TODO : Add error message
    }

    
    const q4input1 = document.getElementById('NoAdult');

    if (isNumeric(q4input1.textContent)){
        // accept the user input
    }else if(q4input1.textContent !== "") {
        q4input1.textContent = 0;
    }else if(!isNumeric(q4input1.textContent)){
        // TODO : Add error message
    }else{
        // TODO : Add error message
    }

    const NoChild = document.getElementById('NoChild');

    if (isNumeric(NoChild.textContent)){
        // accept the user input
    }else if(NoChild.textContent !== "") {
        NoChild.textContent = 0;
    } else if(!isNumeric(NoChild.textContent)){
        // TODO : Add error message
    }else{
        // TODO : Add error message
    }

    const NoInfants = document.getElementById('NoInfants');

    if (isNumeric(NoInfants.textContent)){
        // accept the user input
    }else if(NoInfants.textContent !== "") {
        NoInfants.textContent = 0;
    }
    else if(!isNumeric(NoInfants.textContent)){
        // TODO : Add error message
    }else{
        // TODO : Add error message
    }

    const q4input = {}; // Initialize an empty object

    q4input.Adult = q4input1;
    q4input.Child = NoChild;
    q4input.Infant = NoInfants;

    inputs.q4input= q4input.textContent;


    const q5inputYes = document.getElementById('purposeBusiness');
    const q5inputNo = document.getElementById('purposeTourist');
    const otherPurposeInput = document.getElementById('otherPurposeInput');

    let q5input;

    if (q5inputYes.checked) {
    q5input = q5inputYes.value;
    } else if (q5inputNo.checked) {
    q5input = q5inputNo.value;
    } else {
    q5input = otherPurposeInput.value;
}
    inputs.q5input = q5input.textContent;

    const q6inputYes = document.getElementById('transportPublic');
    const q6inputNo = document.getElementById('transportTaxis');
    const otherPurposeInput2 = document.getElementById('otherPurposeInput2');

    let q6input;

    if (q6inputYes.checked) {
    q6input = q6inputYes.value;
    } else if (q6inputNo.checked) {
    q6input = q6inputNo.value;
    } else {
    q6input = otherPurposeInput2.value;
}
    inputs.q6input = q6input.textContent;

})

// Creating template prompt
// prompt engineering
const prompt = 'Create a trip to Hanoi '

// Setting up the OpenAI API

config();
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

// const userInterface = readline.createInterface({ // getting user input
//     input: process.stdin,
//     output: process.stdout
// })

// userInterface.prompt();
// userInterface.on('line', async (input) => {
//     const res = await openai.createChatCompletion({
//         model:"gpt-3.5-turbo",
//         messages:[{role:"user", content:input}]
//     })
//     console.log(res.data.choices[0].message.content);
//     userInterface.prompt();
// })

const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }]
})


