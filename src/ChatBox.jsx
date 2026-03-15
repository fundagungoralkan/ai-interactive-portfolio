import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are a helpful AI assistant on Funda Alkan's portfolio website. Answer questions about Funda concisely and professionally. Keep answers short and friendly.

NAME: Funda Alkan
ROLE: Frontend Developer specialising in React.js & Next.js
LOCATION: Belfast, United Kingdom (fully authorised to work)
AVAILABILITY: Open to Frontend Developer opportunities — full-time, part-time, freelance, remote

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

If asked something unrelated to Funda, politely redirect to her portfolio topics.`;

const SUGGESTIONS = [
  { label: "Who is Funda?", q: "Who is Funda?" },
  { label: "Skills", q: "What are her skills?" },
  { label: "Projects", q: "Tell me about her projects" },
  { label: "Available?", q: "Is she available for hire?" },
  { label: "Contact", q: "How can I contact her?" },
];

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [welcomed, setWelcomed] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const showWelcome = () => {
    if (!welcomed) {
      setMessages([
        {
          type: "bot",
          text: "Hi! 👋 I'm Funda's AI assistant. Ask me anything about her skills, projects, or how to get in touch!",
        },
      ]);
      setWelcomed(true);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    showWelcome();
  };

  const handleSend = async (text) => {
    const val = (text || input).trim();
    if (!val || loading) return;

    setMessages((prev) => [...prev, { type: "user", text: val }]);
    setInput("");
    setLoading(true);
    setMessages((prev) => [
      ...prev,
      { type: "bot", text: "Thinking...", typing: true },
    ]);

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization:
            "Bearer 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",
          "HTTP-Referer": "https://ai-interactive-portfolio-five.vercel.app",
          "X-Title": "Funda Portfolio",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: val },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });
      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't get a response.";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { type: "bot", text: reply };
        return updated;
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          type: "bot",
          text: "Something went wrong. Please try again!",
        };
        return updated;
      });
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          background: "#1a1a2e",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#3d5afe")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a2e")}
        title="Chat with Funda's AI"
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            zIndex: 999,
            width: "348px",
            maxHeight: "500px",
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            animation: "fadeUp 0.2s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1a1a2e",
              padding: "13px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "#3d5afe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                FA
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Funda's AI Assistant
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "11px",
                  }}
                >
                  Powered by AI
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgba(255,255,255,0.55)",
                fontSize: "20px",
                lineHeight: 1,
                padding: "0 2px",
              }}
            >
              ×
            </button>
          </div>

          {/* AI Badge */}
          <div
            style={{
              margin: "8px 14px 0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#f5f5f5",
              border: "0.5px solid rgba(0,0,0,0.08)",
              borderRadius: "8px",
              padding: "6px 10px",
              fontSize: "11.5px",
              color: "#666",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3d5afe"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
            Real AI ·{" "}
            <span style={{ color: "#3d5afe", fontWeight: 500 }}>LLaMA 3.1</span>{" "}
            · Free
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px 14px 6px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "90%",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                  padding: "9px 13px",
                  borderRadius: "14px",
                  whiteSpace: "pre-wrap",
                  alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                  background: msg.type === "user" ? "#1a1a2e" : "#f0f0f0",
                  color: msg.type === "user" ? "#fff" : "#1a1a2e",
                  borderBottomRightRadius: msg.type === "user" ? "4px" : "14px",
                  borderBottomLeftRadius: msg.type === "bot" ? "4px" : "14px",
                  opacity: msg.typing ? 0.6 : 1,
                  fontStyle: msg.typing ? "italic" : "normal",
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chips */}
          <div
            style={{
              padding: "8px 14px 4px",
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                onClick={() => handleSend(s.q)}
                style={{
                  fontSize: "12px",
                  padding: "5px 11px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  background: "#f5f5f5",
                  border: "0.5px solid rgba(0,0,0,0.1)",
                  color: "#555",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1a1a2e";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f5f5f5";
                  e.currentTarget.style.color = "#555";
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "10px 12px",
              borderTop: "0.5px solid rgba(0,0,0,0.08)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Funda..."
              disabled={loading}
              style={{
                flex: 1,
                fontSize: "13.5px",
                padding: "7px 11px",
                border: "0.5px solid rgba(0,0,0,0.15)",
                borderRadius: "8px",
                outline: "none",
                background: "#f9f9f9",
                color: "#1a1a2e",
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: loading ? "#ccc" : "#1a1a2e",
                cursor: loading ? "not-allowed" : "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default ChatBox;
