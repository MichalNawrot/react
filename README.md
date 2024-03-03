# react-foundations

https://nextjs.org/learn/react-foundations/

## Table of contents

- [ ] User Interface - how users will consume and interact with your application.
- [ ] Routing - how users navigate between different parts of your application.
- [ ] Data Fetching - where your data lives and how to get it.
- [ ] Rendering - when and where you render static or dynamic content.
- [ ] Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.
- [ ] Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).
- [ ] Performance - how to optimize your application for end-users.
- [ ] Scalability - how your application adapts as your team, data, and traffic grow.
- [ ] Developer Experience - your team's experience building and maintaining your application.

# JavaScript Essentials

- [Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Objects](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Arrays and array methods](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Template literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
- [Ternary Operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [ES Modules and Import / Export Syntax](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)


## notes

> **Imperative programming** is like giving a chef step-by-step instructions on how to make a pizza.
> **Declarative programming** is like ordering a pizza without being concerned about the steps it takes to make the pizza.

- when iterating over an array React will give us a warning about a missing `key` prop. This is because React needs something to uniquely identify items in an array so it knows which elements to update in the DOM.
- In React, event names are *camelCased*. The `onClick` event is one of many possible events you can use to respond to user interaction. For example, you can use `onChange` for input fields or `onSubmit` for forms.

### Three core concepts

- Components
  - components are functions that returns UI elements
  - should be capitalized to distinguish them from plain HTML and JavaScript
  - use React components the same way you'd use regular HTML tags, with angle brackets <>
- Props
  - props are passed to components as the first function parameter
- State
  - the state is initiated and stored within a component.
  - You can pass the state information to children components as props, but the **logic for updating the state should be kept within the component** where state was initially created.
  - Hooks allow you to add additional logic such as state to your components.
  - Think of state as any information in your UI that changes over time, usually triggered by user interaction.
