# Playwright Playground

Sample project for exploring Playwright. Currently it has:

- Parallel local execution.
- Parallel execution in Github Actions with reporting.
- Multiple browsers support (Chromium, Firefox, WebKit).
- Mobile viewport emulation.
- [Page Object](https://martinfowler.com/bliki/PageObject.html) implementation.
- Dockerized execution.
- Basic tests for a sample application.
- Reporting and [traces](https://playwright.dev/docs/trace-viewer#introduction).
- ESLint and Prettier for code style enforcement with git hooks.

## Setup

This project requires Node.js (Version 20 or greater) and npm to be installed or Docker.

Install the dependencies by running the following command:

```bash
npm install
```

## Run

To run the tests, execute the following command:

```bash
npm run test
```

For headed mode (browser visible), run the following command:

```bash
npm run test:headed
```

It's also possible to run the tests inside a container to avoid installing node/npm:

```bash
npm run test:docker
```

Tests are also executed on every push and pull request in the Github Actions. The results are available in the `Actions` tab.

## Code style

This project uses ESLint and Prettier to enforce code style. The rules are defined in the `.eslintrc` and `.prettierrc` files. The code is automatically verified before committing using a git hook.

## Reporting

After running the tests, a report will be generated in the `./playwright-report` directory. Run the following command to open the report and preview the traces:

```bash
npx playwright show-report
```

The reports are also generated when executing the tests in the GitHub Actions. They are available in the `Artifacts` tab after the execution is finished. They can also be viewed using the same command above.

When a test fails, it's possible to see all the steps executed and network requests through the trace. The trace is a powerful tool for debugging and understanding what happened during the test execution.
