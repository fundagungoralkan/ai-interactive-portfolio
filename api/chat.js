// api/chat.js (Vercel Serverless Function)
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // .env.local'da sakla
});

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Question is required" });

  const prompt = `
  You are an assistant for Funda (GM Redoan). 
  Answer only questions about Funda, her frontend skills (React, Tailwind, Next.js, etc.) and her projects.
  Be concise, professional and friendly.
  Question: ${question}
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    res.status(200).json({ answer: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
