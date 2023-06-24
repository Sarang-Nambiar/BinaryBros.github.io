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

})



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



