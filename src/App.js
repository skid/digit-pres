import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Deploying a React App</h1>
      </header>
      <main>
        <h2>Create the app!</h2>

        <pre>npx create-react-app digit</pre>
        <pre>code digit</pre>
        <pre>npm start</pre>

        <h2>A React App is just a bunch of static files</h2>
        <p>
          Deployment is simple. It's just copying the <code>public</code> directory to a server on the internet.
        </p>
        <p>
          Before you deploy, make sure you have a production build ready. The following command will create a{" "}
          <code>build</code> folder inside the project and every time you run it, it will overwrite the old one.
        </p>

        <pre>npm run build</pre>

        <h2>1. Oldschool Deployment</h2>
        <p>We put this here for historic reasons. There are better ways now.</p>
        <p>You will need:</p>
        <ul>
          <li>SSH access to a server on the internet, ideally with a domain name</li>
          <li>
            A server such as Nginx running on port <code>443</code> (or <code>80</code>)
          </li>
        </ul>
        <p>Then just copy your folder over to a path inside the server's root directory.</p>

        <pre>scp -r build/ user@server:/var/www/html/digit-pres</pre>

        <p>
          If you're building a SPA, configure your routes. For example, this is <Link to="/page">another page</Link>.
        </p>
        <p>
          You must configure your server to not return 404 when any of your routes are requested. For nginx, this does
          the trick:
        </p>
        <pre>
          location /digit-pres {"{"}
          <br />
          {"  "}try_files $uri $uri/ /index.html;
          <br />
          {"}"}
          <br />
        </pre>

        <h2>2. Github Pages</h2>
        <p>Free hosting, good enough for most projects.</p>
        <p>You will need a Github account and a repo with your app's code.</p>
        <pre>git init .</pre>
        <pre>git add .</pre>
        <pre>git commit -m "Initial commit"</pre>
        <pre>git remote add origin git@github.com:username/repo.git</pre>
        <pre>git push -u origin master</pre>

        <p>
          Install the <code>gh-pages</code> package as a dev dependency
        </p>
        <pre>npm install gh-pages --save-dev</pre>

        <p>
          Add the following to your <code>package.json</code> file:
        </p>
        <pre>
          {"{"}
          <br />
          {"  "}"homepage": "https://username.github.io/repo",
          <br />
          {"  "}"scripts": {"{"}
          <br />
          {"    "}"predeploy": "npm run build",
          <br />
          {"    "}"deploy": "gh-pages -d build",
          <br />
          {"  "}
          {"}"}
          <br />
          {"}"}
          <br />
        </pre>

        <p>
          For SPAs make sure you redirect to your index.html file. On Github Pages, add a <code>_redirects</code> file
          to your <code>public</code> directory with the following line:
        </p>
        <pre>{"/"}* /index.html 200</pre>

        <p>Then deploy:</p>
        <pre>npm run deploy</pre>

        <h2>Other Options</h2>
        <p>There are many:</p>
        <ul>
          <li>Netlify</li>
          <li>Vercel (Next.js)</li>
          <li>Firebase</li>
        </ul>

        <h2>Do you need a backend?</h2>
        <p>Most React applications fetch data via an API, so they are purely frontend.</p>
        <p>But if your app has a backend, it can also serve your html/js</p>
        <p>A word on SSR</p>
      </main>
    </div>
  );
}

export default App;
