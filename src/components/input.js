function Input(props) {
  const template = `
    <input
      class="${props.class} message-area"
      placeholder="${props.placeholder}"
      type="${props.type}" >
    </input>
  `;

  return template;
}

export default Input;