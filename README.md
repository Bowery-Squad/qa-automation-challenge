# Technical Assessment for QA Engineer

## Overview

In this exercise, you will use Playwright (written in TypeScript) to create and complete three automated tests for Wikipedia.

You’ll start by implementing a login test from scratch, then finish two existing tests that were partially generated using Ranger’s test recorder and code generation tool.

You have one hour to complete this exercise. When the hour is up, your interviewer will rejoin the call to discuss your work. You’ll walk them through what you accomplished, highlight what went well, and note any improvements you would have made with additional time.

## Your Task

1. **Implement a login test and capture the storage state so the remaining tests run as a logged-in user:**
    - In `login.test.ts`, create a test that signs into Wikipedia.
    - Use the Wikipedia account credentials already provided in the `.env` file.

2. **Complete the Wikipedia search test:**
    - In `searchWikipedia.ts`, finish the existing test to correctly implement the test case described in the file.

3. **Complete the Wikipedia home page actions test:**
    - In `wikipediaHomepageActions.ts`, finish the existing test to correctly implement the test case described in the file.

Each test file contains more detailed instructions.

> **Note:** Only edit the following files:
> - `login.test.ts`
> - `searchWikipedia.ts`
> - `wikipediaHomepageActions.ts`

## Project Structure

```plaintext
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .env
└── src
    └── lib
        ├── all.test.ts
        ├── login.test.ts
        ├── tests
        │   ├── searchWikipedia.ts
        │   └── wikipediaHomepageActions.ts
    └── auth
        └── login.json
```

## Setup

### Requirements

- Node.js v22+
- npm

### Quick Start

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Install Playwright browsers:**
    ```bash
    npx playwright install
    ```

### Running Tests

#### Run all tests

To run all tests, use the `test` script in `package.json`:

```bash
npm run test
```

#### Run a specific test

To run a specific test, add `.only` to the test you want to isolate in `all.test.ts`, then run:

```bash
npm run test
```

## Need Help?

If you encounter technical issues during the assessment, do your best to unblock yourself. If you cannot proceed or have completed the task, inform your interviewer.