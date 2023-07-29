const Button = (props) => {
  return (
    <button
      value={props.value}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
