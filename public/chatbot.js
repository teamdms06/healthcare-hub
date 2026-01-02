// Chatbot script for The Connections
// Place this file in /public/chatbot.js and reference it from index.html

window.onload = function () {
  // Reset the form fields when the page loads 
  var form = document.getElementById("form");
  if (form) form.reset();
};

// ----------------------------
/* Load Fuse.js for smart searching */
(function loadFuse() {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/fuse.js/dist/fuse.js";
  document.head.appendChild(script);
})();

/* Initialize after Fuse loads */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(initChatbot, 500);
});

/* ---------------------------------------------------------
  FULL RCM Q&A DATA (Your Complete Dataset)
--------------------------------------------------------- */
const faqData = [
  {
    question: "Hi",
    keywords: ["Hi", "hi", "hello", "Hello"],
    answer: "Hi, How can I assist you?"
  },
  {
    question: "What services do you provide under RCM?",
    keywords: ["services", "rcm", "revenue cycle", "what do you do"],
    answer: "We offer complete end-to-end RCM services including Patient Access, Medical Coding, Charge Entry, Claims Submission, Payment Posting, AR Follow-up, Denial Management, Provider Credentialing, E&B Verification, and Analytics."
  },
  {
    question: "Do you work with US-based healthcare providers?",
    keywords: ["usa", "us", "healthcare providers", "clinics", "hospitals"],
    answer: "Yes, we support hospitals, physician groups, ASCs, clinics, billing companies, and healthcare networks across the United States."
  },
  {
    question: "What is included in Patient Access services?",
    keywords: ["patient access", "registration", "authorization", "verification"],
    answer: "Patient Access includes scheduling, registration, insurance verification, benefits check, prior authorization, and financial counseling."
  },
  {
    question: "Do you verify insurance eligibility in real time?",
    keywords: ["eligibility", "real time", "insurance"],
    answer: "Yes, we perform real-time eligibility verification across all major US payers."
  },
  {
    question: "What coding services do you provide?",
    keywords: ["coding", "icd10", "cpt", "hcpcs"],
    answer: "We offer ICD-10, CPT, HCPCS coding, specialty coding, audits, and charge capture review."
  },
  {
    question: "Are your coders certified?",
    keywords: ["coders", "certified", "coding team"],
    answer: "Yes, our coding team includes CRC, CCS, CCA, and specialty-certified SME coders."
  },
  {
    question: "Do you handle charge entry?",
    keywords: ["charge entry", "charge posting"],
    answer: "Yes, we ensure accurate charge entry with correct modifiers, units, and compliance."
  },
  {
    question: "How quickly do you submit claims?",
    keywords: ["claim submission", "tat", "submit claims"],
    answer: "Claims are submitted within 24–48 hours after charge finalization."
  },
  {
    question: "Do you work with electronic and paper claims?",
    keywords: ["paper claims", "electronic claims", "claims"],
    answer: "Yes, we handle electronic submissions, clearinghouse edits, and paper claims when needed."
  },
  {
    question: "Will you fix claim rejections?",
    keywords: ["rejections", "claim corrections"],
    answer: "Yes, we resolve clearinghouse and payer rejections on priority."
  },
  {
    question: "Do you post ERAs and EOBs?",
    keywords: ["era", "eob", "payment posting"],
    answer: "Yes, we auto-post ERAs, manually post EOBs, post denials, and calculate patient responsibility."
  },
  {
    question: "How do you ensure accuracy in payment posting?",
    keywords: ["posting accuracy"],
    answer: "Our QA and reconciliation system ensures zero variance and accurate ledger updates."
  },
  {
    question: "What is your AR follow-up process?",
    keywords: ["ar", "follow up", "collections"],
    answer: "We follow payer calling, portal checks, appeals, and regular status updates."
  },
  {
    question: "Do you work on aging buckets?",
    keywords: ["30 days", "60 days", "90 days", "aging"],
    answer: "Yes, we handle 30-60-90+ buckets with focused follow-up on aged claims."
  },
  {
    question: "How do you manage denials?",
    keywords: ["denials", "appeals", "denial management"],
    answer: "We identify root causes, correct errors, file appeals, and provide prevention strategies."
  },
  {
    question: "Do you provide denial analytics?",
    keywords: ["denial analytics", "reports"],
    answer: "Yes, we provide denial trend reports, payer issues, and prevention insights."
  },
  {
    question: "Do you assist with provider credentialing?",
    keywords: ["credentialing", "enrollment", "recredentialing"],
    answer: "Yes, we manage credentialing, re-credentialing, payer enrollment, and contracting."
  },
  {
    question: "How long does credentialing take?",
    keywords: ["credentialing time"],
    answer: "Typically 30–90 days depending on payer timelines and document completeness."
  },
  {
    question: "What details do you verify during eligibility checks?",
    keywords: ["benefits", "coverage", "eligibility"],
    answer: "We verify plan coverage, copay, deductible, coinsurance, authorization, and limitations."
  },
  {
    question: "Do you support real-time verification?",
    keywords: ["real time verification"],
    answer: "Yes, through payer portals, clearinghouses, and EDI checks."
  },
  {
    question: "What analytics do you provide?",
    keywords: ["analytics", "reports", "metrics"],
    answer: "We offer dashboards such as collections %, denial trends, AR aging, and clean claim rate."
  },
  {
    question: "Do you customize reports?",
    keywords: ["custom reports"],
    answer: "Yes, reports can be tailored as per provider requirements."
  },
  {
    question: "Is your team HIPAA compliant?",
    keywords: ["hipaa", "security"],
    answer: "Yes, we follow HIPAA guidelines, secure protocols, and data privacy policies."
  },
  {
    question: "How do you ensure data security?",
    keywords: ["data security", "privacy"],
    answer: "We use VPN, encrypted systems, role-based access, and regular risk audits."
  },
  {
    question: "What are your turnaround times?",
    keywords: ["turnaround time", "tat"],
    answer: "24–48 hrs claim submission, real-time eligibility, 48–72 hrs posting, daily AR follow-up."
  },
  {
    question: "How do you price your RCM services?",
    keywords: ["pricing", "cost"],
    answer: "We offer FTE-based, %-based, and hybrid pricing models."
  },
  {
    question: "Who are you?",
    keywords: ["about", "company"],
    answer: "We are a trusted RCM services provider offering US healthcare billing solutions."
  },
  {
    question: "Why choose us?",
    keywords: ["why choose", "benefits"],
    answer: "Experienced teams, certified coders, 24/7 support, accuracy, and faster reimbursements."
  }
];

/* Fuse.js search engine */
let fuse;

/* ---------------------------------------------------------
  Build Responsive Chatbot UI (Pure JS)
--------------------------------------------------------- */
function initChatbot() {
  fuse = new Fuse(faqData, { keys: ["question", "keywords"], threshold: 0.4 });

  /* Floating Button */
  const button = document.createElement("div");
  button.innerHTML = "💬";
  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    background: "#00a651",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: "9999"
  });
  document.body.appendChild(button);

  /* Chat Window */
  const chat = document.createElement("div");
  Object.assign(chat.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "90vw",
    maxWidth: "380px",
    height: "75vh",
    maxHeight: "600px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    opacity: "0",
    transform: "translateY(500px)",
    transition: "0.35s ease",
    zIndex: "9998",
    overflow: "hidden"
  });
  document.body.appendChild(chat);

  /* Header */
  const header = document.createElement("div");
  header.innerHTML = `
      <div style="display:flex;align-items:center;padding:14px;background:#00a651;color:white;">
        <div style="font-size:18px;font-weight:bold;">The Connections Chatbot</div>
        <span id="closeChat" style="cursor:pointer;font-size:20px;margin-left:8rem;margin-top:-5px">x</span>
      </div>
    `;
  chat.appendChild(header);

  /* Messages */
  const messages = document.createElement("div");
  Object.assign(messages.style, {
    flex: "1",
    padding: "10px",
    overflowY: "auto",
    background: "#f7f9fa",
    display: "flex",
    flexDirection: "column"
  });
  chat.appendChild(messages);

  function addMessage(text, from) {
    const div = document.createElement("div");
    Object.assign(div.style, {
      marginBottom: "8px",
      alignSelf: from === "user" ? "flex-end" : "flex-start",
      background: from === "user" ? "#00a651" : "#e4e6eb",
      color: from === "user" ? "white" : "black",
      padding: "10px 14px",
      borderRadius: "18px",
      maxWidth: "75%",
      fontSize: "14px",
      lineHeight: "1.4"
    });
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  addMessage("👋 Hi! Ask me anything about our Healthcare RCM services.", "bot");

  /* Input Area */
  const inputWrap = document.createElement("div");
  Object.assign(inputWrap.style, {
    padding: "8px",
    borderTop: "1px solid #ddd",
    background: "#fff"
  });

  const input = document.createElement("input");
  Object.assign(input.style, {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  });
  input.placeholder = "Type your question...";
  inputWrap.appendChild(input);

  chat.appendChild(inputWrap);

  /* Chat toggle behavior */
  let open = false;
  button.onclick = toggleChat;
  header.querySelector("#closeChat").onclick = toggleChat;

  function toggleChat() {
    open = !open;
    chat.style.opacity = open ? "1" : "0";
    chat.style.transform = open ? "translateY(0)" : "translateY(500px)";
  }

  /* Answer logic */
  function getAnswer(q) {
    const res = fuse.search(q.toLowerCase());
    return res.length ? res[0].item.answer : "🤔 I'm not sure about that. Try another RCM-related question!";
  }

  /* Send message */
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = input.value.trim();
      if (!text) return;

      addMessage(text, "user");
      input.value = "";

      setTimeout(() => {
        addMessage(getAnswer(text), "bot");
      }, 600);
    }
  });
}
