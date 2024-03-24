import { renderAppDDOM, nest, createEffect, createSignal, template } from 'yaseer'

export default function HomePage() {
    /**
     * Template Function
     * Creates an HTML element
     * @param {string} tagName - The tag you want for the HTML Elemnt.
     * @param {object (optional)} props - The props for the HTML element.
     * @param {string (optional)} innerText - The inner text for the div element.
     * @returns {HTMLElement} - The created div element.
     */
    const div = template('div', { class: "max-w-6xl mx-auto bg-stone-900 text-center text-white p-2" });
    const h1 = template('h1',
        { class: 'text-xl ddom', id: "title2" }
        , "Hello World!");
    const p = template('p', { id: "my-p" }, 'just testing if i can nest multiple elements under one parent');
    const p2 = template('p', { id: "my-p2" }, 'just testing if i can nest multiple elements under two parents');

    /**
     * createSignal Function
     * Creates a signal with the specified initial value.
     * @param {any} initialValue - The initial value for the signal.
     * @returns {Array} - An array containing the (getter) and (setter) functions for the signal.
     */
    const [getCount, setCount] = createSignal(0);

    /**
     * Increments the count value by 1.
     */
    const increment = () => {
        setCount(getCount() + 1);
    };

    const countElement = template('h1', { style: 'margin:0; margin-top:20px;' }, getCount().toString());
    const increaseBtn = template('button', { style: "my-p2", onclick: increment }, 'increase number')

    /**
     * createEffect Function
     * creates a sideEffect with a callback function that will be called whenever a change occur.
     */
    createEffect(() => {
        console.log("effect");
        countElement.textContent = getCount().toString();
    });

    /**
     * nest Function
     * Nests the specified elements under the parent element.
     * @param {HTMLElement} parent - The parent element.
     * @param {Array} elements - The elements to be nested under the parent element.
     */
    nest(div,
        [h1, p,
            [template('div'), p2,
            nest(template('span', { id: "play" }, "testing"), template('p', {}, "string")),
                countElement,
                increaseBtn
            ],
            countElement,
            template('br'),
            increaseBtn,
        ]);

    /**
     * Renders the app DDOM to the specified root element.
     * @param {HTMLElement} rootElement - The root element to render the app DDOM.
     * @param {HTMLElement} appDDOM - The app DDOM to be rendered.
     */
    renderAppDDOM(root, div);
}