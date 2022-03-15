import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
        <link rel="canonical" href="https://kind-mayer-cf61b6.netlify.app/" />
        <meta property="og:title" content="Og Title" />
        <meta property="og:description" content="Og description" />
      </Helmet>
      App
    </div>
  );
}

export default App;
