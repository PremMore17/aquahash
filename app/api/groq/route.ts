import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {

    const { zoneData } = await request.json();

    const prompt = `
      Analyze this groundwater zone:

      ${JSON.stringify(zoneData)}

      Return ONLY valid JSON:

      {
        "sustainability_score": number,
        "risk_level": string,
        "mineral_insight": string,
        "recommendations": string[]
      }
    `;

    const completion =
      await groq.chat.completions.create({

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama3-8b-8192",

        response_format: {
          type: "json_object",
        },
      });

    const result = JSON.parse(
      completion.choices[0].message.content || "{}"
    );

    return NextResponse.json(result);

  } catch (error) {

    return NextResponse.json(
      {
        error: "Failed to analyze groundwater data",
      },
      {
        status: 500,
      }
    );
  }
}