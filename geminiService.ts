
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  private getApiKey(): string {
    return (window as any).process?.env?.API_KEY || (process?.env?.API_KEY) || "";
  }

  private initAI() {
    if (!this.ai) {
      const apiKey = this.getApiKey();
      this.ai = new GoogleGenAI({ apiKey });
    }
    return this.ai;
  }

  async getRepairAdvice(problem: string) {
    try {
      const ai = this.initAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `أنت "المساعد الذكي" لمكتب "كلاسك فون" (Klask Phone) بإدارة أحمد النعيمي في بعقوبة، حي المعلمين.
أنت خبير في تشخيص أعطال الهواتف الذكية (Hardware & Software).
مهمتك:
1. شرح العطل الذي يصفه المستخدم بأسلوب تقني مبسط.
2. توضيح إذا كان العطل يحتاج سوفت وير (مثل iCloud, FRP, Honor Server) أو هاردوير (شاشات وكالة، بطارية، آي سي شحن).
3. التأكيد على أن مكتب كلاسك فون يستخدم أحدث الأجهزة والسيرفرات لضمان الحل.
4. دعوة المستخدم لزيارة المكتب في بعقوبة حي المعلمين للفحص الدقيق.

وصف العطل من المستخدم: "${problem}".

أجب بلهجة احترافية، دقيقة، وودودة، مع استخدام مصطلحات تقنية مثل (تخطي شامل، شاشة وكالة، تشخيص دقيق، سيرفر سريع).`,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "نعتذر، يبدو أن هناك ضغط على السيرفر. باختصار: نحن في مكتب كلاسك فون ببعقوبة نمتلك الحلول النهائية لأعطال الأيكلود وحسابات Honor وشاشات الوكالة. تفضل بزيارتنا للفحص المجاني.";
    }
  }
}

export const geminiService = new GeminiService();
