const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

async function isWordInSentence(word, sentence) {

    const prompt = `Task: Determine whether the word '${word}' is in the following sentence. 

Note: Your response must be in JSON format, adhering to the following schema:

\`\`\`json
{
    wordInSentence: true/false
}
\`\`\`

Sentence: ${sentence}
`;

    console.log("prompt: ", prompt)

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo-1106',
        response_format: { type: "json_object" },
        max_tokens: 100,
    });

    console.log(chatCompletion.choices[0].message.content);

    if (JSON.parse(chatCompletion.choices[0].message.content).wordInSentence !== undefined) return JSON.parse(chatCompletion.choices[0].message.content).wordInSentence;
    else throw Error("The model did not return the correct JSON structure.");
}


(async () => {
    console.log(await isWordInSentence('orange', "1234"));
    console.log(await isWordInSentence('orange', "My favourite fruit is not orange."));
})();