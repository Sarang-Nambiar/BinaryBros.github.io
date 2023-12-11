const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

// config()// Configuration to setup the api
// OpenAIAPI is the class that will be used to make requests to the API
const API_KEY = "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";
const openai = new OpenAIApi(new Configuration({
    apiKey: API_KEY,
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

const getRes = async (values) => {
    const prompt = `I need you to make 3 itineraries for the location : Hanoi` + `\nMake the itinerary by taking the following into consideration.`
    + `trip duration: ${values.tripDuration}`
    + `hotel recommendations: ${values.hotelRecommendation}`
    + `budget: ${values.budget}`
    + `number of individuals on the trip: ${values.adults} Adults, ${values.child} children and ${values.infants} infants`
    + `purpose of the trip: ${values.purpose}`
    + `preferred medium of transport: ${values.beaten_off_path}`
    + `Do you want to attend any local events or festivals: ${values.festivals}`
    + `Any dietary or other restrictions or any preferences: ${values.restrictions}`
    + `Any other requests: ${values.requests}`
    + `Give me the name of the itineraries and make sure each itinerary is the form day 1, day 2...`
    
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
    });

    return response.data.choices[0].message.content;
}

app.get('/', async (req, res) => {
    const values = req.query; 
    const response = await getRes(values);
    console.log(response);
    res.send(response);
})


app.listen(8000, () => {
    console.log('listening on port 8000');
})