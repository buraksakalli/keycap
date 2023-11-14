# Keycap

[![npm version](https://badge.fury.io/js/keycap.svg)](https://badge.fury.io/js/keycap)
![keycap](https://github.com/buraksakalli/keycap/assets/10114716/ea114e89-6fbc-47c6-ad87-b71046cec882)

Keycap is a lightweight, customizable keyboard key (kbd) component for React. It's designed to visually represent keyboard keys in your user interface, complete with a "pressed" style to give users feedback when keys are active.

## Preview

You can see a live demo [here](https://keycap.vercel.app/).

## Features

- Lightweight with no external dependencies.
- Easy to use and integrate into your React projects.
- Customizable styles for both light and dark mode.
- Pressed key state for interactive feedback.

## Installation

To install the package, use npm:

```bash
npm install keycap

or yarn:

yarn add keycap
```

## Usage

Here is a basic example of how to use the `Keycap` component:

```jsx
import { Keycap } from "keycap";

function App() {
  return (
    <div>
      <Keycap activeKey="A">A</Keycap>
      <Keycap activeKey="B">B</Keycap>
      <Keycap activeKey="C">C</Keycap>
      <Keycap activeKey="Meta">⌘</Keycap>
      <Keycap activeKey="Enter">↵</Keycap>
    </div>
  );
}

export default App;
```

## Props

- `activeKey`: (string) The key that the `Keycap` component should respond to.
- `children`: (node) The content to display inside the keycap, typically a single letter or symbol.
- `className`: (string) Optional. A class name to add custom styles to the keycap.

## Styling

The component uses the following CSS variables for theming, which you can override in your stylesheet:

```css
/* Light Mode */
--keycap-text-color: rgb(150, 159, 175);
--keycap-gradient: linear-gradient(
  -225deg,
  rgb(213, 219, 228) 0%,
  rgb(248, 248, 248) 100%
);
--keycap-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230), inset 0 0 1px 1px #fff,
  0 1px 2px 1px rgba(30, 35, 90, 0.4);
--keycap-key-pressed-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff,
  0 1px 1px 0 rgba(30, 35, 90, 0.4);

/* Dark Mode */
--keycap-text-color-dark: rgb(127, 132, 151);
--keycap-gradient-dark: linear-gradient(
  -26.5deg,
  rgb(38, 39, 43) 0%,
  rgb(58, 59, 63) 100%
);
--keycap-key-shadow-dark: inset 0 -2px 0 0 rgb(28, 29, 33), inset 0 0 1px 1px
    rgb(48, 49, 53), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
--keycap-key-pressed-shadow-dark: inset 0 -2px 0 0 rgb(28, 29, 33), inset 0 0
    1px 1px rgb(48, 49, 53), 0 1px 1px 0 rgba(3, 4, 9, 0.5);
```

You can customize these variables in your CSS to match your app's theme.

## Contributing

If you have any suggestions or improvements, please submit a pull request or open an issue. Contributions are always welcome!

## License

This project is licensed under the MIT License
