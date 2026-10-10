// Turns a project description into paragraphs and bullet lists.
// Lines starting with "- " become bullet points; other lines are paragraphs.
export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

export function formatDesc(text: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const last = blocks[blocks.length - 1];
    if (line.startsWith("- ") || line.startsWith("• ")) {
      const item = line.slice(2).trim();
      if (last && last.type === "ul") last.items.push(item);
      else blocks.push({ type: "ul", items: [item] });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return blocks;
}
