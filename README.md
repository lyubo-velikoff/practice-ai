# PracticeAi

Demo [https://practice-ai.vercel.app/](https://practice-ai.vercel.app/)

## Pre-requisites

- `NX_CLOUD_ACCESS_TOKEN` env var. You can also create nx-cloud.env file and store it in there

## Start the application

Run `npx nx serve blog` to start the development server. Happy coding!

## Tools used

- [SWR](https://swr.vercel.app/) `stale-while-revalidate` Developed by Vercel is another popular data-fetching library with automatic caching, background refetching, and a simple API

## Build for production

Run `npx nx build blog` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
