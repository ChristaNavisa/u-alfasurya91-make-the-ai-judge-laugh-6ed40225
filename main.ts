import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh — one office joke, one line, under 200 characters.
// The joke: the auto-reply lives a better life than the person who wrote it.
const JOKE =
  "My out-of-office reply has a better work-life balance than I do.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-blank characters, got ${JOKE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
