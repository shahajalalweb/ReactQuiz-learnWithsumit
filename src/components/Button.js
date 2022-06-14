import "./styles/Button.css";

export default function Button({ children }) {
  return (
    <div className="button">
      <span>{children}</span>
    </div>
  );
}
