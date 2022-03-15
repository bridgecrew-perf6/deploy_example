import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
        <meta property="og:title" content="Og Title" />
        <meta property="og:description" content="Og description" />
      </Helmet>
      App
    </div>
  );
}

export default App;
