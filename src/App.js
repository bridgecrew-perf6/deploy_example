import { SEO } from './SEO';

function App() {
  const title = 'My Title'
  const description = 'About my testing site'

  return (
    <div className="App">
      <SEO
        title={title}
        description={description}
        meta={[
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: "og:url",
            content: window.location.href,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:image",
            content: '/logo192.png',
          },
        ]}
      />
      App
    </div>
  );
}

export default App;
