// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


async function getResponse() {
    const prompt = document.getElementById("user_input").value;

    const result = await model.generateContent(prompt);

    document.getElementsByClassName("chattext").innerHTML = result;
}