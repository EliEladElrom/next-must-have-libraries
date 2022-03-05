# NEXT-MHL
## A Professional Starter React Nextjs with Must-Have Libraries (MHL) 

![test](https://github.com/EliEladElrom/next-must-have-libraries/workflows/test/badge.svg)
![lint](https://github.com/EliEladElrom/next-must-have-libraries/workflows/lint/badge.svg)
![CI](https://github.com/EliEladElrom/next-must-have-libraries/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/next-must-have-libraries.svg)](https://badge.fury.io/js/next-must-have-libraries)
[![GitHub issues](https://img.shields.io/github/issues/EliEladElrom/next-must-have-libraries)](https://github.com/EliEladElrom/next-must-have-libraries/issues)
[![DeepScan grade](https://deepscan.io/api/teams/11491/projects/14393/branches/266604/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11491&pid=14393&bid=266604)
[![codecov](https://codecov.io/gh/EliEladElrom/next-must-have-libraries/branch/main/graph/badge.svg?token=6HEUnw0uTD)](undefined) - [Get Badges](https://medium.com/react-courses/set-an-ultimate-react-automated-dev-ci-cycle-with-husky-jest-puppeteer-github-actions-codecov-46b923c4f8e3)

## Opinionated project includes:

- Initial [Next.js](https://nextjs.org/) project - bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- NextJS v12.x
- React & React DOM v17
- Type Checker - TypeScript v4.x
- Storybook v6.x (Webpack@5 support)
- Lint - ESlint & Eslint-config-next
- Mocking - Mock Service Worker
- CSS-in-JS Modules — Styled Components
- Unit Testing - Jest + react-testing-library
- E2E testing - Cypress
- Format - Prettier
- Git hooks - Husky
- Useful utilities - analyzer Bundle, react-uuid (create unique Id)
- Generate templates
- `next-password-protect` check `_app.tsx` to enable

![alt text](https://miro.medium.com/max/1400/1*XYPQ7W7oCRGVTcFIoOq27Q.jpeg)

If you want to generate HTML in the client browser check [CRA-MHL](https://github.com/EliEladElrom/cra-template-must-have-libraries)

## Run Scripts

Inside the project directory run using `npm` or `yarn`:

- `dev` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `build` - builds the app for production to the `build` folder.
- `start` - Runs the built app in production mode. You can add port: `"start": "next start -p 8081"`.
- `export` - create an export static folder, default `out` folder.
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


## Usage

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app my-app -e https://github.com/EliEladElrom/next-must-have-libraries
```

Or;

```bash
yarn create next-app my-app -e https://github.com/EliEladElrom/next-must-have-libraries
```

### Run

```bash
yarn dev
# or
npm run dev
```

Entry point `pages/index.tsx`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Configure Storybook Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

Example;

```
npx generate-react-cli component Header --type=story
```

Or use the complex story;

```
npx generate-react-cli component Header --type=complex-story
```

Will result with the following components;

1. components/Header/Header.tsx
2. components/Header/Header.stories.tsx
3. components/Header/index.ts

## Eslint configurations

Lint set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.

## Analyzing the Bundle Size

Use source-map-explorer (yarn add  --dev source-map-explorer);

````
$ yarn analyze
````

## Environment Variables

The following environment variables `.env` are in use throughout the project.
See `.env.sample` for examples:

| Name                                                   | Description                                     |
| ------------------------------------------------------ | ----------------------------------------------- |
| `PUBLIC_ENVIRONMENT`                                   | Environment                                     |


If you can use help with your React project or have a burning question, or an issue in your project that needs help with, I invite you to hire me as your [Coach](https://elielrom.com). My strategy is 100% results-oriented. If you want to sample how I work 1-on-1, let’s schedule a one-time deep dive [Consultation](https://elielrom.com/CoachingHourly).
Additionally, [I will tutor you in react, javascript, typescript, mongodb, node, d3.](https://www.fiverr.com/elieladelrom/tutor-you-in-react-javascript-typescript-mongodb-node-d3) 

## Where to go from here?

- [Take the interactive d3 and React Course](https://www.udemy.com/course/integrating-d3js-with-react/?referralCode=4C1ADE35AB8633B90205)
- [View the article on Medium](https://medium.com/react-courses/setting-up-an-opinionated-starter-nextjs-professional-react-17-project-with-must-have-reactjs-5c99577e3641)
- [Visit my site EliElrom.com](https://elielrom.com)
- [Learning React?](https://github.com/EliEladElrom/react-tutorials)

If you like this library, don't be shy to star it 🙏
