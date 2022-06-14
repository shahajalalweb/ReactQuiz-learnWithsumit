import "./styles/TextInput.css";

export default function TextInput({ icon, ...rest }) {
  return (
    <div className="textInput">
      <input {...rest} />
      <span className="mererial-icons-outlined">{icon}</span>
    </div>
  );
}
