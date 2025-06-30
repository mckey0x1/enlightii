import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";

export async function getSandbox(sandboxId: string) {
  try {
    const sandbox = await Sandbox.connect(sandboxId);
    return sandbox;
  } catch (error) {
    console.error("Error getting sandbox:", error);
    throw new Error("Failed to retrieve sandbox");
  }
}

export function lastAssistantTextMesssagesContent(result: AgentResult) {
  const lastAssistantTextMesssagesIndex = result.output.findLastIndex(
    message => message.role === "assistant"
  );

  const message = result.output[lastAssistantTextMesssagesIndex]as | TextMessage | undefined;

  return message?.content ? typeof message.content === "string" ? message.content : message.content.map((c)=> c.text).join("") : undefined;
}
