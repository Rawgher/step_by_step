function Button({ onClick, children }) {
  return (
    <button className="button-purp" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
