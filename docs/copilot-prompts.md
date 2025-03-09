# Template Props for GH Copilot

## New Component Props

This is the base prompt. Add and tweak
```
Create me a <COMPONENT_NAME> with the following requirements:
- <REQUIREMENTS>
- Props interface should extend test ID Interface
- It should add javadoc comments to the props interface, not jsdocs
- Should export props interface.
- For any styles, make them follow atomic style so later on I can easily import them into a SCSS File
See `heading.tsx` for code style preferences

Next, create a storybook file that uses the component and demonstrate it's uses. Use `heading.story.tsx` as a example. Requirements are:
- Please be sure to add the tags `autodocs` so story can autogenerate the docs from the component props comments
- Pass in the Component as the prop property. Use `component: Heading` as code style preferences

Finally, create me a cypress visual regression test with it's example uses from the Storybook file. Requirements are:
- Please use `heading.cy.ts` as code preferences
- Use `cy.mount`
- Use `cy.findByTestId(testId).matchImageSnapshot()` to get the proper element

Additional information.
- Please use path aliasing. Know that `@` is a reference to the source directory.
```
