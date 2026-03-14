import { useState } from "react";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    const newMessage = { type: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Serverless API çağrısı
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setMessages([...messages, newMessage, { type: "ai", text: data.reply }]);
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 w-80 bg-gray-900 text-white rounded-xl shadow-lg transition-all ${
        open ? "h-96" : "h-14"
      } overflow-hidden flex flex-col`}
    >
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer bg-emerald-600 rounded-t-xl"
        onClick={() => setOpen(!open)}
      >
        <span>Hi! Ask Me</span>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="flex-1 p-3 flex flex-col overflow-y-auto space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-lg ${
                msg.type === "user"
                  ? "bg-emerald-700 self-end"
                  : "bg-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      )}

      {open && (
        <div className="flex p-2 border-t border-gray-700">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-2 py-1 rounded bg-gray-800 text-white focus:outline-none"
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="ml-2 px-3 py-1 bg-emerald-500 rounded hover:bg-emerald-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
