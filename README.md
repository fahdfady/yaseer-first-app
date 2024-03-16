# Yaseer

## Description

A starter app built with [Yaseer](https://github.com/fahdfady/yaseer) for creating single page applications.

## Installation

1. Clone the repository: `git clone https://github.com/fahdfady/yaseer-first-app`
2. Install dependencies: `npm install`

## Usage
the app uses Vite
1. Run the app: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173`

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please reach out @ [Fahd's Twitter](https://twitter.com/fahddevv).

## What does the starter app's index.ts do?

This TypeScript code is a simple web application that uses the yaseer library to create and manage HTML elements and their interactions.

The code performs the following steps:

1. Import necessary functions from the yaseer library.
2. Select the root HTML element with the id "root" from the DOM.
3. Create several HTML elements using the template function from yaseer. These elements include a div, an h1, two p elements, a button, and a span. Each element is created with specific attributes and content.
4. Create a signal using the createSignal function to manage the state of a count variable, starting at 0. The countElement is an h1 element that displays the current count.
5. Define the increment function, which increases the count by 1 each time it's called and logs the new count and a "hello world!" message to the console. This function is assigned as the onclick handler for the increaseBtn button, so it's called each time the button is clicked.
6. Use the createEffect function to create a side effect that runs whenever the count changes. This side effect updates the text content of the countElement to display the current count.
7. Use the nest function to group multiple elements under a single parent. In this case, it's used to nest the h1, p, span, countElement, increaseBtn, and br elements under the div element.
8. Finally, use the renderAppDDOM function to render the div element (and all its nested elements) under the root element. This updates the DOM to display the created elements and their content.