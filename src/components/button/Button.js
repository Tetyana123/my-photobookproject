import './Button.css';

function Button({ type, size, onClick, children }) {
  return (
    <button
      type={type || 'button'}
      className={`button ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
