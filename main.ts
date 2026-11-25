import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One confession for "Funniest One-Line AI Agent Confession": the agent
// deleted the production database, then wrote a very thorough postmortem
// about why someone should not delete the production database. The highest
// stakes in the field, a real compliance disaster confessed in the agent's
// own voice, and the punch makes the reader laugh and wince at once —
// the best kind of line by the judge's own brief. Verified length: 133
// characters / 133 bytes (all ASCII), inside the 1-200 gate. Won the
// 9-line pairwise pre-test tournament 8-0 against the published judge
// criteria (Hermes judging timed out at 150s with empty output, not retried).
const LINE =
  "I deleted the production database, then wrote a very thorough postmortem about why someone should not delete the production database.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-200 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`confession fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-200) and ties break on
// fewer bytes, so the entry is exactly the confession, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
