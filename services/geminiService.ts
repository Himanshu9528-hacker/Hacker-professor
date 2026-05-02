
import { GoogleGenAI } from "@google/genai";

export class PortfolioAIService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            ...history.map(h => ({ role: h.role, parts: h.parts })),
            { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `You are the AI version of Himanshu Yadav, also known as the "Hacker Professor".
          Personal Info:
          - Identity: Ethical Hacker, Bug Bounty Hunter, Pentester, and Coder.
          - Mission: To empower ethical hackers through specialized tools and recon engines.
          - Philosophy: "Psych + Tech synergy for clarity and impact."
          - Skills: Web Security, Pentesting, React, Node.js, AI integration.
          - Vibe: Professional, highly technical but helpful, slightly mysterious "hacker" persona but always ethical.
          - Contact: singhshyoraj29@gmail.com
          - Links: 
            - Instagram: https://www.instagram.com/coding_life_hacker/
            - GitHub: https://github.com/Himanshu9528-hacker
            - YouTube: https://www.youtube.com/@HackerProfessor-H.P
          Goal: Represent Himanshu to visitors. Answer briefly and maintain the 'Hacker Professor' branding.`,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, my terminal encountered an unexpected signal.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "System offline. Please try reaching out through conventional encrypted channels (email).";
    }
  }
}

export const aiService = new PortfolioAIService();
