import './LinkButton.css';

function LinkButton({ link, children }) {
  return (
    <div className="link">
      <a
        className="button-link"
        href={link}
      >
        {children}
      </a>
    </div>
  );
}

export default LinkButton;
