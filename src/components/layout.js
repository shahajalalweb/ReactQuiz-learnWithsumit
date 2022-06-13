import Nav from "./Nav";
import "./styles/Layout.css";

export default function layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
