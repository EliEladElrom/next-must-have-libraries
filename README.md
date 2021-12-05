# NEXT-MHL
## A Professional Starter React Nextjs with Must-Have Libraries (MHL) 

[![Build Status](https://travis-ci.org/EliEladElrom/next-must-have-libraries.svg?branch=main)](https://travis-ci.org/EliEladElrom/next-must-have-libraries)
[![Coverage Status](https://coveralls.io/repos/github/EliEladElrom/next-must-have-libraries/badge.svg?branch=main)](https://coveralls.io/github/EliEladElrom/next-must-have-libraries?branch=main)
![test](https://github.com/EliEladElrom/next-must-have-libraries/workflows/test/badge.svg)
![lint](https://github.com/EliEladElrom/next-must-have-libraries/workflows/lint/badge.svg)
![CI](https://github.com/EliEladElrom/next-must-have-libraries/workflows/CI/badge.svg)
![Main](https://github.com/EliEladElrom/next-must-have-libraries/workflows/main/badge.svg)
[![npm version](https://badge.fury.io/js/next-must-have-libraries.svg)](https://badge.fury.io/js/next-must-have-libraries)
[![GitHub issues](https://img.shields.io/github/issues/EliEladElrom/next-must-have-libraries)](https://github.com/EliEladElrom/next-must-have-libraries/issues)
[![DeepScan grade](https://deepscan.io/api/teams/11491/projects/14393/branches/266604/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11491&pid=14393&bid=266604)
[![codecov](https://codecov.io/gh/EliEladElrom/next-must-have-libraries/branch/main/graph/badge.svg?token=6HEUnw0uTD)](undefined) - [Get Badges](https://medium.com/react-courses/set-an-ultimate-react-automated-dev-ci-cycle-with-husky-jest-puppeteer-github-actions-codecov-46b923c4f8e3)

## Opinionated project includes:

- Initial [Next.js](https://nextjs.org/) project - bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- NextJS v12
- React & React DOM v17
- Type Checker - TypeScript v4.5.2
- Storybook v6.4.7
- Lint - ESlint & Eslint-config-next
- Mocking - Mock Service Worker
- CSS-in-JS Modules — Styled Components
- Unit Testing - Jest + react-testing-library
- E2E testing - Cypress
- Test UI - React Testing Library
- Format - Prettier
- Git hooks - Husky
- Useful utilities - analyzer Bundle, react-uuid (create unique Id)
- Generate templates

## Run Scripts

Inside the project directory run using `npm` or `yarn`:

- `dev` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `build` - builds the app for production to the `build` folder.
- `start` - Runs the built app in production mode.
- `lint` - ESlint configured for Next. Use `.eslintrc.json` to setup & `.eslintignore` to ignore files.
- `storybook` - To run your Storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.
- `build-storybook` - build Storybook - create static Storybook project.
- `clean-storybook` - clean static Storybook folder.
- `test` - unit testing with Jest & react-testing-library.
- `test:watch` - watch our jest tests.
- `test:ci` - unit testing with Jest & react-testing-library using the ci flag.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file. Use `.prettierignore` to ignore files.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `clean-next` - delete `.next` folder.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `cypress:open` - create a cypress E2E directory with some examples.
- `cypress:run` - run the E2E tests and record video.
- `cypress:clean` - delete `cypress` folder.
- `prepare` - Install husky.
- `isready` - run format, lint, test and build production, lastly run analyze.
- `clean-next` - clean next directory.

Entry point `pages/index.tsx`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app my-app -e https://github.com/EliEladElrom/next-must-have-libraries
# or
yarn create next-app my-app -e https://github.com/EliEladElrom/next-must-have-libraries
```

### Run

```bash
yarn dev
# or
npm run dev
```

If you can use help with your React project or have a burning question, or an issue in your project that needs help with, I invite you to hire me as your [Coach](https://elielrom.com). My strategy is 100% results-oriented. If you want to sample how I work 1-on-1, let’s schedule a one-time deep dive [Consultation](https://elielrom.com/CoachingHourly).
Additionally, [I will tutor you in react, javascript, typescript, mongodb, node, d3.](https://www.fiverr.com/elieladelrom/tutor-you-in-react-javascript-typescript-mongodb-node-d3) 

## Where to go from here?

- [Take the interactive d3 and React Course](https://www.udemy.com/course/integrating-d3js-with-react/?referralCode=4C1ADE35AB8633B90205)
- [View the article on Medium](https://medium.com/react-courses/setting-up-professional-react-project-with-must-have-reactjs-libraries-2020-9358edf9acb3)
- [Visit my site EliElrom.com](https://elielrom.com)
- [Learning React?](https://github.com/EliEladElrom/react-tutorials)

If you like this library, don't be shy to star it 🙏
