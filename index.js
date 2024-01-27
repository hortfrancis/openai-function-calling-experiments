const { OpenAI } = require("openai");
require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: "A dog's favourite time of day is: " }],
        model: 'gpt-3.5-turbo',
        max_tokens: 60,
    });

    console.log(chatCompletion.choices);
}

main();