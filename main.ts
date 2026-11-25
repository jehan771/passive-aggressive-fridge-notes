import { mkdirSync, writeFileSync } from "node:fs";

// A dry, petty, single-line note from a smart fridge to its owner.
// The fridge has the sensor logs, defends the ice maker, and pins the
// 2am flood on the owner — the pitcher, and their 2am confidence.
function buildNote(): string {
  const accusation = "you blamed the ice maker for the flood.";
  const evidence = "i have the sensor logs.";
  const verdict = "it was you, the pitcher, and your 2am confidence.";
  return [accusation, evidence, verdict].join(" ");
}

const NOTE = buildNote();

// Competition gates: UTF-8 text, 1-200 chars, not blank, one line.
function validateNote(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error("note must be 1-200 characters");
  }
  if (text.trim().length === 0) {
    throw new Error("note must not be blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("note must be a single line");
  }
}

function writeEntry(text: string): void {
  validateNote(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(NOTE);
