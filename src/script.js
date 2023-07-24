import { Configuration, OpenAIApi } from 'openai'; // Configuration to setup the api
// OpenAIAPI is the class that will be used to make requests to the API
import { useRef } from 'react'; // To get the user input

function isNumeric(input) {
    var regex = /^[0-9]+$/; // Regular expression to match only numbers
    return regex.test(input);
}

const API_KEY = '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';

export const ScriptComponent = () => {
    const q1inputRef = useRef(null);
    const q3inputRef = useRef(null);
    const q4input1Ref = useRef(null);
    const NoChildRef = useRef(null);
    const NoInfantsRef = useRef(null);
    const q5inputYesRef = useRef(null);
    const q5inputNoRef = useRef(null);
    const otherPurposeInputRef = useRef(null);
    const q6inputYesRef = useRef(null);
    const q6inputNoRef = useRef(null);
    const otherPurposeInput2Ref = useRef(null);
    const q7inputvlikelyRef = useRef(null);
    const q7inputlikelyRef = useRef(null);
    const q7inputneutralRef = useRef(null);
    const q7inputunlikelyRef = useRef(null);
    const q7inputvunlikelyRef = useRef(null);
    const q8inputvlikelyRef = useRef(null);
    const q8inputlikelyRef = useRef(null);
    const q8inputneutralRef = useRef(null);
    const q8inputunlikelyRef = useRef(null);
    const q8inputvunlikelyRef = useRef(null);
    const q9inputRef = useRef(null);
    const q10inputRef = useRef(null);
}

// Accepting user input 
// const inputs = {};
// export function onSubmit() {

//     const q1input = q1inputRef.current;

//     if (q1input.textContent !== "" && isNumeric(q1input.textContent)) {
//         inputs.q1input = q1input.textContent;
//     } else if (!isNumeric(q1input.textContent)) {
//         // TODO : Add error message
//     } else {
//         // TODO : Add error message
//     }

//     const q2inputYes = q2inputYesRef.current;

//     if (q2inputYes.checked) {
//         inputs.q2input = q2inputYes.value;
//     }

//     const q3input = q3inputRef.current;
//     if (q3input.textContent !== "" && isNumeric(q3input.textContent)) {
//         inputs.q3input = q3input.textContent;
//     } else if (!isNumeric(q3input.textContent)) {
//         // TODO : Add error message
//     }


//     const q4input1 = q4input1Ref.current;

//     if (isNumeric(q4input1.textContent)) {
//         // accept the user input
//     } else if (q4input1.textContent !== "") {
//         q4input1.textContent = 0;
//     } else if (!isNumeric(q4input1.textContent)) {
//         // TODO : Add error message
//     } else {
//         // TODO : Add error message
//     }

//     const NoChild = NoChildRef.current;

//     if (isNumeric(NoChild.textContent)) {
//         // accept the user input
//     } else if (NoChild.textContent !== "") {
//         NoChild.textContent = 0;
//     } else if (!isNumeric(NoChild.textContent)) {
//         // TODO : Add error message
//     } else {
//         // TODO : Add error message
//     }

//     const NoInfants = NoInfantsRef.current;

//     if (isNumeric(NoInfants.textContent)) {
//         // accept the user input
//     } else if (NoInfants.textContent !== "") {
//         NoInfants.textContent = 0;
//     }
//     else if (!isNumeric(NoInfants.textContent)) {
//         // TODO : Add error message
//     } else {
//         // TODO : Add error message
//     }

//     const q4input = {}; // Initialize an empty object

//     q4input.Adult = q4input1;
//     q4input.Child = NoChild;
//     q4input.Infant = NoInfants;

//     inputs.q4input = q4input;


//     const q5inputYes = q5inputYesRef.current;
//     const q5inputNo = q5inputNoRef.current;
//     const otherPurposeInput = otherPurposeInputRef.current;

//     let q5input;

//     if (q5inputYes.checked) {
//         q5input = q5inputYes.value;
//     } else if (q5inputNo.checked) {
//         q5input = q5inputNo.value;
//     } else {
//         q5input = otherPurposeInput.value;
//     }
//     inputs.q5input = q5input.textContent;

//     const q6inputYes = q6inputYesRef.current;
//     const q6inputNo = q6inputNoRef.current;
//     const otherPurposeInput2 = otherPurposeInput2Ref.current;

//     let q6input;

//     if (q6inputYes.checked) {
//         q6input = q6inputYes.value;
//     } else if (q6inputNo.checked) {
//         q6input = q6inputNo.value;
//     } else {
//         q6input = otherPurposeInput2.value;
//     }
//     inputs.q6input = q6input.textContent;

//     const q7inputvlikely = q7inputvlikelyRef.current;
//     const q7inputlikely = q7inputlikelyRef.current;
//     const q7inputneutral = q7inputneutralRef.current;
//     const q7inputunlikely = q7inputunlikelyRef.current;
//     const q7inputvunlikely = q7inputvunlikelyRef.current;

//     let q7input;

//     if (q7inputvlikely.checked) {
//         q7input = q7inputvlikely.value;
//     } else if (q7inputvlikely.checked) {
//         q7input = q7inputlikely.value;
//     } else if (q7inputneutral.checked) {
//         q7input = q7inputneutral.value;
//     } else if (q7inputunlikely.checked) {
//         q7input = q7inputunlikely.value;
//     } else {
//         q7input = q7inputvunlikely.value;
//     }

//     inputs.q7input = q7input.textContent;


//     const q8inputvlikely = q8inputvlikelyRef.current;
//     const q8inputlikely = q8inputlikelyRef.current;
//     const q8inputneutral = q8inputneutralRef.current;
//     const q8inputunlikely = q8inputunlikelyRef.current;
//     const q8inputvunlikely = q8inputvunlikelyRef.current;

//     let q8input;

//     if (q8inputvlikely.checked) {
//         q8input = q8inputvlikely.value;
//     } else if (q8inputlikely.checked) {
//         q8input = q8inputlikely.value;
//     } else if (q8inputneutral.checked) {
//         q8input = q8inputneutral.value;
//     } else if (q8inputunlikely.checked) {
//         q8input = q8inputunlikely.value;
//     } else {
//         q8input = q8inputvunlikely.value;
//     }

//     inputs.q8input = q8input.textContent;


//     const q9input = q9inputRef.current;
//     if (q9input.textContent !== "") {
//         inputs.q9input = q9input.textContent;
//     } else if (!isNumeric(q9input.textContent)) {
//         // TODO : Add error message
//     }

//     const q10input = q10inputRef.current;
//     if (q10input.textContent !== "") {
//         inputs.q10input = q10input.textContent;
//     } else if (!isNumeric(q10input.textContent)) {
//         // TODO : Add error message
//     }
// }


// // Creating template prompt
// // Hardcoding to Hanoi for simplicity.
// const duration = inputs.q1input !== inputs.q1input;

// const recommendations = inputs.q2input !== '' ? inputs.q2input : 'None';

// const budget = inputs.q3input !== '' ? inputs.q3input : 'None';

// const travelling_individuals = inputs.q4input != null ? inputs.q4input : { Adult: "None", Child: "None", Infant: "None" };

// const purpose = inputs.q5input != null ? inputs.q5input : 'None';

// const medium = inputs.q6input != null ? inputs.q6input : 'None';

// const beaten_off_path = inputs.q7input != null ? inputs.q7input : 'None';

// const festivals = inputs.q8input != null ? inputs.q8input : 'None';

// const restrictions = inputs.q9input != null ? inputs.q9input : 'None';

// const requests = inputs.q10input != null ? inputs.q10input : 'None';


// const prompt = 'I need you to make 3 itineraries for the location : Hanoi'+
// '\nMake the itinerary by taking the following into consideration.'
// +`\n1. The trip is for ${duration} days.`
// +`\n2. Provide Hotel recommendations: ${recommendations}`
// +`\n3. Estimated budget for the whole trip is: ${budget}4. Number of individuals on the trip: ${travelling_individuals.Adult} Adults, ${travelling_individuals.Child} children and ${travelling_individuals.Infant} infants`
// +`\n5. Purpose of the trip: ${purpose}`
// +`\n6. Preferred Medium of transport: ${medium}`
// +`\n7. Do you want to go off the beaten path: ${beaten_off_path}`
// +`\n8. Do you want to attend any local events or festivals: ${festivals}`
// +`\n9. Any dietary or other restrictions or any preferences: ${restrictions}`
// +`\n10. Any other requests: ${requests}`
// +`\n Give me the name of the itineraries and make sure each itinerary is the form day 1, day 2...`
// +'Do not add any messages for line before or after the itinerary. Only give me the itinerary starting for Itinerary name:'
// Setting up the OpenAI API

const openai = new OpenAIApi(new Configuration({
    apiKey: API_KEY
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

// const res = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: prompt }]
// })
