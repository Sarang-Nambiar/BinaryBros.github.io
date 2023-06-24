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

    const q7inputvlikely = document.getElementById('openVeryLikely');
    const q7inputlikely = document.getElementById('openLikely');
    const q7inputneutral = document.getElementById('openNeutral');
    const q7inputunlikely = document.getElementById('openUnlikely');
    const q7inputvunlikely = document.getElementById('openVeryUnlikely');

    let q7input;

    if (q7inputvlikely.checked) {
    q7input = q7inputYes.value;
    } else if (q7inputlikely.checked) {
    q7input = q7inputlikely.value;
    } else if (q7inputneutral.checked) {
    q7input = q7inputneutral.value;
    }else if (q7inputunlikely.checked) {
    q7input = q7inputunlikely.value;
    }else {
    q7input = q7inputvunlikely.value;
    }

    inputs.q7input = q7input.textContent;


    const q8inputvlikely = document.getElementById('participateVeryLikely');
    const q8inputlikely = document.getElementById('participateLikely');
    const q8inputneutral = document.getElementById('participateNeutral');
    const q8inputunlikely = document.getElementById('participateUnlikely');
    const q8inputvunlikely = document.getElementById('participateVeryUnlikely');

    let q8input;

    if (q8inputvlikely.checked) {
    q8input = q8inputYes.value;
    } else if (q8inputlikely.checked) {
    q8input = q8inputlikely.value;
    } else if (q8inputneutral.checked) {
    q8input = q8inputneutral.value;
    }else if (q8inputunlikely.checked) {
    q8input = q8inputunlikely.value;
    }else {
    q8input = q8inputvunlikely.value;
    }

    inputs.q8input = q8input.textContent;


    const q9input = document.getElementById('q9input');
    if(q9input.textContent !== "") {
        inputs.q9input = q9input.textContent;
    }else if(!isNumeric(q9input.textContent)) {
        // TODO : Add error message
    }

    const q10input = document.getElementById('q10input');
    if(q10input.textContent !== "") {
        inputs.q10input = q10input.textContent;
    }else if(!isNumeric(q10input.textContent)) {
        // TODO : Add error message
    }

})

// Creating template prompt
// Hardcoding to Hanoi for simplicity.
const duration = inputs.q1input !== inputs.q1input;

const recommendations = inputs.q2input !== '' ? inputs.q2input : 'None';

const budget = inputs.q3input !== '' ? inputs.q3input : 'None';

const travelling_individuals = inputs.q4input != null ? inputs.q4input : {Adult: "None", Child: "None", Infant: "None"};

const purpose = inputs.q5input != null ? inputs.q5input : 'None';

const medium = inputs.q6input != null ? inputs.q6input : 'None';

const beaten_off_path = inputs.q7input != null ? inputs.q7input : 'None';

const festivals = inputs.q8input != null ? inputs.q8input : 'None';

const restrictions = inputs.q9input != null ? inputs.q9input : 'None';

const requests = inputs.q10input != null ? inputs.q10input : 'None'; 


const prompt = 'I need you to make 3 itineraries for the location : Hanoi'+
'\nMake the itinerary by taking the following into consideration.'
+'\n1. The trip is for ${duration} days.'
+'\n2. Provide Hotel recommendations: ${recommendations}'
+'\n3. Estimated budget for the whole trip is: ${budget}4. Number of individuals on the trip: ${travelling_individuals.Adult} Adults, ${travelling_individuals.Child} children and ${travelling_individuals.Infant} infants'
+'\n5. Purpose of the trip: ${purpose}'
+'\n6. Preferred Medium of transport: ${medium}'
+'\n7. Do you want to go off the beaten path: ${beaten_off_path}'
+'\n8. Do you want to attend any local events or festivals: ${festivals}'
+'\n9. Any dietary or other restrictions or any preferences: ${restrictions}'
+'\n10. Any other requests: ${requests}'
+'\n Give me the name of the itineraries and make sure each itinerary is the form day 1, day 2...'

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


