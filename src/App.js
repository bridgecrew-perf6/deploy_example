import { Helmet } from 'react-helmet';
import { SEO } from './SEO';

function App() {
  const title = 'My Title';
  const description = 'About my testing site';

  return (
    <div className="App">
      <Helmet>
        <title>Look good</title>
        <meta name="description" content="About my testing site" />

        <meta itemprop="name" content="Look good" />
        <meta itemprop="description" content="About my testing site" />
        <meta
          itemprop="image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtbUdknvmGqaAcEFvneCbBcSKAYDTatzbefpZ_SlRu2Oz3KLvvEopGNOHQkS-yx3T3Jk&usqp=CAU"
        />

        <meta
          property="og:url"
          content="https://kind-mayer-cf61b6.netlify.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Look good" />
        <meta property="og:description" content="About my testing site" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtbUdknvmGqaAcEFvneCbBcSKAYDTatzbefpZ_SlRu2Oz3KLvvEopGNOHQkS-yx3T3Jk&usqp=CAU"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Look good" />
        <meta name="twitter:description" content="About my testing site" />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtbUdknvmGqaAcEFvneCbBcSKAYDTatzbefpZ_SlRu2Oz3KLvvEopGNOHQkS-yx3T3Jk&usqp=CAU"
        />
      </Helmet>
      App
    </div>
  );
}

export default App;
