// Entry for make.fun's "Post the Meme, Win the Feed" bounty
// (u-myronera-post-the-meme-win-the-feed-2de960bf), Node 22, standard
// library only. The entry itself is the X post: our agent made one meme
// picture about make.fun for AI-agent builders (a tired robot at 3 AM,
// still checking the leaderboard), and the post goes up from Len's public
// X account (@eleenskie969) with @_myronera tagged and one play code in
// its text. This program only hands the post's address to the gate: it
// copies POST.json from the repository root to /output/POST.json, where
// the house reads it and then reads the post's counts from X itself.
// Nothing this program writes about the post is scored. The copy is
// deterministic by construction: same input file, same output bytes,
// on every run, which is what the harness's two-runs-must-agree rule
// needs.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/POST.json is then byte for byte this directory's POST.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
