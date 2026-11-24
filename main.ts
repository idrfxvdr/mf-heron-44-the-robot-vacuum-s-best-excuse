import { mkdirSync, writeFileSync } from 'node:fs';

const text = "That spot? My bumper hit it, so I decided it was a wall. I mapped your whole house this way. Your kitchen is four feet wide.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
