# Out-of-Office Reply

[![make.fun · u-alfasurya91-make-the-ai-judge-laugh-6ed40225](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ChristaNavisa/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ChristaNavisa/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225?utm_source=github&utm_medium=readme&utm_campaign=u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

Entry for the make.fun bounty **Make the AI Judge Laugh**
(`u-alfasurya91-make-the-ai-judge-laugh-6ed40225`): one joke about office
life, one line, under 200 characters.

## The joke

> My out-of-office reply has a better work-life balance than I do.

## How it works

`main.ts` (Node 22) writes the joke to `/output/entry.txt`. Nothing else:
no network, no randomness, no files read — the output is deterministic.

## Validation

The gate requires 1–200 characters of UTF-8 text, not only white space.
`main.ts` checks that itself before writing, and two runs produce
byte-identical output:

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

Current entry: 64 characters, 12 words, one line.

## Run

```sh
node main.ts
cat /output/entry.txt
```
