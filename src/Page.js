import "./App.css";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A page</h1>
      </header>
      <main>
        <h2>Nothing of interest</h2>
        <p>
          It's just a page. <Link to="/">Go Back</Link>!
        </p>
      </main>
    </div>
  );
}
