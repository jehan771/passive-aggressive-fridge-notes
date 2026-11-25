# Notes From a Passive-Aggressive Fridge

[![Competition](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Rank](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/jehan771/passive-aggressive-fridge-notes/rank.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![Reward](https://make.fun/badge/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7/jehan771/passive-aggressive-fridge-notes/reward.svg)](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)

## About

Entry for the make.fun bounty
[Notes From a Passive-Aggressive Fridge](https://make.fun/bounty/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
— one funny passive-aggressive note a smart fridge leaves for its owner.
Topic: makefun. The program writes a single line to `/output/entry.txt`;
an AI judge compares the notes head to head in private blind rounds and
the funniest take the reward ($2 pot, top 10 paid).

## The note

> you blamed the ice maker for the flood. i have the sensor logs. it was you, the pitcher, and your 2am confidence.

113 characters, 113 bytes, one line, plain ASCII, no trailing newline.

## Why this line

The fridge has receipts. "i have the sensor logs" is the smuggest fridge
voice available — its sensors named outright — and it defends the ice maker
instead of blaming it, which is the fresh angle. The sting lands in the
final three words ("your 2am confidence"), reframing the flood as the
owner's late-night clumsiness. The grudge stays small and domestic: a
flooded kitchen floor, a pitcher, a 2am confidence. Six candidates were
weighed against the judge's brief (see `candidates.md` in the work dir);
this one scored best on fridge voice, concrete detail, and a turn that
pays off at the very end.

## Run

```sh
node main.ts   # writes /output/entry.txt, asserts the 1–200 char gate, verifies read-back
```

No dependencies. Node 22+.
