# Template Props for GH Copilot

## New Component Props

This is the base prompt. Add and tweak

```
Create me a <COMPONENT_NAME> with the following requirements:
- <REQUIREMENTS>
- Props interface should extend test ID Interface
- It should add javadoc comments to the props interface, not jsdocs annotations
- Should export props interface.
- For any styles, use tailwind css conventions. It is installed in this application
See `heading.tsx` for code style preferences

Next, create a storybook file that uses the component and demonstrate it's uses. Use `heading.story.tsx` as a example. Requirements are:
- Please be sure to add the tags `autodocs` so story can autogenerate the docs from the component props comments
- It should be able to create many variations as it can
- Pass in the Component as the prop property. Use `component: Heading` as code style preferences

Finally, Create me two cypress test files
- Please use `heading.cy.ts` as code preferences
- create me a cypress visual regression test that captures the component image snapshot. It's should use examples from the Storybook file. Requirements are:
  - File name should be {component-name}.vr.cy.tsx
  - Use `cy.mount`
  - Use `cy.findByTestId(testId).matchImageSnapshot()` to get the proper element
- create me a cypress test with that tests the functionality. It's should use examples from the Storybook file. Requirements are:
  - File name should be {component-name}.cy.tsx
  - Use `cy.mount`
  - Use `cy.findByTestId(testId)` to get the proper element

Additional information.
- Please use path aliasing. Know that `@` is a reference to the source directory.
```
