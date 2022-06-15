import "./styles/Button.css";

export default function Button({ className, children }) {
  return <div className={`button ${className}`}>{children}</div>;
}
