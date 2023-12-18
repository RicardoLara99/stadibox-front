## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Explanation

- hooks: Here we have the hooks that the front use to fetch the data
- services: Here is the conection with the back, in the real life, there's the graphql query's, in this case, we only import the static data
- src
  - features: All the components that we use to make the front
  - pages: Each file corresponds a path that the user can access

## Clues

You only have to create new components and modify the files in src folder.

Remember that the view should be like https://www.figma.com/file/TbnOWkmDxRyCGFVCGqdFhx/Test---Front-end-v2?type=design&node-id=0%3A1&mode=design&t=wQpo6loLqJ4XTGXJ-1

We have 3 cases: the property has one, more than one or zero pictures, the view changes acording to this

While we recognize sharing code is a common practice in the open source community, we ask
that you refrain from sharing any part of this interview submission publicly to ensure a fair and
equal interview process for all. We also ask that any code written by others is cited appropriately.
