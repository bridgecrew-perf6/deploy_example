import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Helmet>
        <title>My Home</title>
        <meta name="title" content="My Home" />
        <meta name="description" content="About my testing website" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="My Home" />
        <meta property="og:description" content="About my testing website" />
        <meta
          property="og:image"
          content={`${window.location.href}/logo192.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="My Home" />
        <meta
          property="twitter:description"
          content="About my testing website"
        />
        <meta
          property="twitter:image"
          content={`${window.location.href}/logo192.png`}
        />
      </Helmet>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <title>My About</title>
        <meta name="title" content="My About" />
        <meta name="description" content="About my testing website /about" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="My About" />
        <meta property="og:description" content="About my testing website /about" />
        <meta
          property="og:image"
          content={`${window.location.href}/logo192.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="My About" />
        <meta
          property="twitter:description"
          content="About my testing website /about"
        />
        <meta
          property="twitter:image"
          content={`${window.location.href}/logo192.png`}
        />
      </Helmet>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
