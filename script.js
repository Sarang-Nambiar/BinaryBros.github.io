import { config } from 'dotenv';

import { Configuration, OpenAIApi } from 'openai'; // Configuration to setup the api
// OpenAIAPI is the class that will be used to make requests to the API
import readline from 'readline';
config();    

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

const userInterface = readline.createInterface({ // getting user input
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt();
userInterface.on('line', async (input) => {
    const res = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[{role:"user", content:input}]
    })
    console.log(res.data.choices[0].message.content);
    userInterface.prompt();
})


