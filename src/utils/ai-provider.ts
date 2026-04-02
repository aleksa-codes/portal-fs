import { createAnthropic } from "@ai-sdk/anthropic"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { createOpenAI } from "@ai-sdk/openai"
import { generateText } from "ai"

const getMessagePrompt = (
  extension: string | undefined,
  path: string | undefined
) => {
  if (!extension || extension === "html") {
    return `Generate HTML code with content that matches following URL path: ${path}. The website design and colors should match the path. Use raw HTML/CSS. Minimum 100vh, responsive design, navigation, footer and multiple sections. For images use online sources that are topic-specific. No comments or extra tags.`
  } else if (extension === "json") {
    return `Generate JSON code with content that matches following URL path: ${path}. The structure should only contain relevant keys and values for the topic.`
  } else {
    return `Generate ${extension.toUpperCase()} code with content that matches following URL path: ${path}. The code should be valid and follow best practices for the language.`
  }
}

export const generateDimensionalContent = async (
  path: string,
  extension: string,
  provider: string,
  apiKey: string
) => {
  let model

  switch (provider) {
    case "openai":
      const openai = createOpenAI({ apiKey })
      model = openai("gpt-5.4-nano")
      break
    case "gemini":
      const google = createGoogleGenerativeAI({ apiKey })
      model = google("gemini-3.1-flash-lite-preview")
      break
    case "claude":
      const anthropic = createAnthropic({ apiKey })
      model = anthropic("claude-haiku-4-5")
      break
    default:
      throw new Error("UNKNOWN_DIMENSION_PROVIDER")
  }

  const prompt = getMessagePrompt(extension, path)

  const { text } = await generateText({
    model,
    system:
      "You are an expert interdimensional web compiler. Output ONLY the raw requested code. Do not wrap in markdown blocks. Do not say hello. Just output the raw requested code payload.",
    prompt,
  })

  return text.replace(/```(html|css|js|json)?/gi, "").trim()
}
