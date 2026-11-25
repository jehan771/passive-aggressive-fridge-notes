// Notes From a Passive-Aggressive Fridge
// Writes one dry, petty, specific note from a smart fridge to its owner.
//
// The note (113 characters, no trailing newline):
//   you blamed the ice maker for the flood. i have the sensor logs.
//   it was you, the pitcher, and your 2am confidence.
//
// Why this note: the fridge has receipts. "i have the sensor logs" is the
// smuggest fridge voice available (sensors named outright); the ice maker
// gets defended instead of blamed; the sting lands in the final three
// words, reframing the flood as the owner's 2am clumsiness. Small domestic
// grudge, concrete detail, no rant, no threat.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const NOTE =
  "you blamed the ice maker for the flood. i have the sensor logs. " +
  "it was you, the pitcher, and your 2am confidence.";

const OUT = "/output/entry.txt";

// Gate, enforced before writing: UTF-8 text of 1 to 200 characters,
// not only white space, single line.
if (NOTE.length < 1 || NOTE.length > 200) {
  throw new Error(`note is ${NOTE.length} characters, gate is 1-200`);
}
if (!NOTE.trim()) {
  throw new Error("note is only white space");
}
if (NOTE.includes("\n")) {
  throw new Error("note must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, NOTE, "utf8");

// Read-back verification: the bytes on disk must be exactly the note.
const back = readFileSync(OUT, "utf8");
if (back !== NOTE) {
  throw new Error("read-back mismatch: entry.txt does not equal the note");
}
if (Buffer.byteLength(back, "utf8") !== 113) {
  throw new Error(
    `entry.txt is ${Buffer.byteLength(back, "utf8")} bytes, expected 113`,
  );
}

console.log(`wrote ${OUT}: ${NOTE.length} characters, 113 bytes`);
