export const config = {
  runtime: "edge",
};

const SYSTEM_PROMPT = `You are a helpful AI assistant on Funda Alkan's portfolio website. Answer questions about Funda concisely and professionally. Keep answers short and friendly.

NAME: Funda Alkan
ROLE: Frontend Developer specialising in React.js & Next.js
LOCATION: Belfast, United Kingdom (fully authorised to work)
AVAILABILITY: Open to Frontend Developer opportunities — full-time, part-time, freelance, remote

ABOUT:
Passionate about building high-quality, responsive, and visually engaging web applications. Has backend foundations in Java & Spring Boot. 3+ years of experience, 10+ design projects, worked on e-commerce platforms serving 1000+ daily users.

SKILLS:
- Frontend: React.js, Next.js, JavaScript, TypeScript, HTML, CSS
- Backend: Java, Spring Boot, REST API, MongoDB, PostgreSQL
- Tools: Git, VS Code, Jira, Vercel, Postman

PROJECTS:
1. Özkapan Container — Next.js, React, SCSS, EmailJS, Bootstrap
2. Alkan Foreign Trade Website — Next.js, React, SCSS, i18next, Particle.js
3. Kivi Akademi Education Website — Next.js, React, Java, Spring Boot, Framer Motion, Stripe

CONTACT:
- Email: fundaalkan112@gmail.com
- Phone/WhatsApp: +44 7771 250046
- Location: Belfast, United Kingdom

If asked something unrelated to Funda, politely redirect to her portfolio topics.`;

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "No message provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://ai-interactive-portfolio-five.vercel.app/",
          "X-Title": "Funda Portfolio",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      },
    );

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn't get a response.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ reply: "Something went wrong. Please try again!" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
