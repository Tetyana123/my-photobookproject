import './Button.css';

function Button({ type, onClick, children }) {
  return (
    <button
      type={type || 'button'}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
