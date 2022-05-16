// import style from "./style.css";
// import { h } from "preact";
import { html } from "htm/preact";
// const html = htm.bind(h);

const Hello = (props) => {
  return html`
    <div>
      <br />
      <br />
      <h1>${props.name}</h1>
      <p>This is the Hello component.</p>
    </div>
  `;

  //   return html`<h1>Hello ${props.name}!</h1>`;
};

export default Hello;
