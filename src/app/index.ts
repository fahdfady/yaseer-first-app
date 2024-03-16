import { renderAppDDOM, nest, createEffect, createSignal, template } from 'yaseer'

const root = <HTMLElement>document.getElementById("root");
const div = template('div', { class: "max-w-6xl mx-auto bg-stone-900 text-center text-white p-2" });
const h1 = template('h1',
    { class: 'text-xl ddom', id: "title2" }
    , "Hello World!");
const p = template('p', { id: "my-p" }, 'just testing if i can nest multiple elements under one parent')
const p2 = template('p', { id: "my-p2" }, 'just testing if i can nest multiple elements under two parents')

const [getCount, setCount] = createSignal(0);
const increment = () => {
    setCount(getCount() + 1);
};

const countElement = template('h1', { style: 'margin:0; margin-top:20px;' }, getCount().toString());
const increaseBtn = template('button', { style: "my-p2", onclick: increment }, 'increase number')

// Create an effect that updates the count element whenever the count changes
createEffect(() => {
    console.log("effect");
    countElement.textContent = getCount().toString();
});

nest(div,
    [h1, p,
        [template('div'), p2,
        nest(template('span', { id: "play" }, "testing"), template('p', {}, "string")),
            countElement,
            increaseBtn
        ],
        countElement,
        increaseBtn,
        template('br'),
    ]);

renderAppDDOM(root, div);