---
description: Token budget rules for this React Native project — avoid reading large static assets
---

# Context Budget Rules

This is a React Native project (Bangumi32) with significant static data. To conserve tokens, follow these rules strictly.

## NEVER read these paths (too large, wastes tokens)

- `src/assets/json/` — all JSON data files (mono.json, vib.json, substrings/*, typerank/*)
- `src/assets/` — images, fonts, and other binary assets (39M+)
- `dist/` — build output
- `node_modules/`
- `metro-cache/`
- `web/test/*.json` — test fixture data
- Any `.json` file over 50KB

## What you CAN do instead

- **Read source code** under `src/` freely (components, stores, utils, screens, etc.)
- **Read config files**: `package.json`, `tsconfig.json`, `app.json`, `eas.json`
- **Use grep/find** to locate where a JSON key or asset is referenced in code
- **Read the import statement** to understand the shape of data, rather than reading the data file itself
- If you need to know the structure of a JSON file, read only the **first 20 lines** with `Read` tool's `limit` parameter

## How to understand data without reading it

1. Find the TypeScript type definition for the data
2. Find the import/require statement to see how it's consumed
3. Read the store or utility that processes the data
4. Only read the actual data file as a last resort, and only the first few lines
