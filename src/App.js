import { React, useEffect, useState } from "react";

export default function App() {
  const [newsItems, setNewsItems] = useState([]);
  const [articleItems, setArticleItems] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    async function getNews() {
      var url =
        "https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=3db17b9c150c49a6a07ad1fff46cafe0";

      var req = new Request(url);

      const response = await fetch(req);
      const data = await response.json();
      setNewsItems(data.articles);
    }

    getNews();
  }, []);

  useEffect(() => {
    async function getArticles() {
      var url = "";

      if (initialLoad) {
        url =
          "https://newsapi.org/v2/everything?" +
          "q=Apple&" +
          "from=2024-02-03&" +
          "sortBy=popularity&" +
          "apiKey=3db17b9c150c49a6a07ad1fff46cafe0";
      } else {
        url =
          "https://newsapi.org/v2/everything?" +
          "q=" +
          query +
          "&" +
          "from=2024-02-01&" +
          "sortBy=popularity&" +
          "pageSize=20&" +
          "apiKey=3db17b9c150c49a6a07ad1fff46cafe0";
      }

      var req = new Request(url);

      const response = await fetch(req);
      const data = await response.json();

      if (initialLoad) {
        setFeaturedArticles(data.articles);
        setInitialLoad(false);
      } else setArticleItems(data.articles);
    }

    getArticles();
  }, [query, initialLoad]);

  return (
    <div className="app">
      <Header />
      <Main>
        <NewsBox newsItems={newsItems} />
        <ArticleBox
          featuredArticles={featuredArticles}
          articleItems={articleItems}
          query={query}
          setQuery={setQuery}
        />
      </Main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      NewsBox
      <span>
        <p>News & Articles</p>
      </span>
    </header>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

function NewsBox({ newsItems }) {
  return (
    <div className="news-box">
      <h2>Top Headlines in India</h2>

      <ul>
        {newsItems.map((news) => (
          <NewsCard news={news} />
        ))}
      </ul>
    </div>
  );
}

function NewsCard({ news }) {
  return (
    <li className="news-card">
      <div className="news-card-image">
        <img src={news.urlToImage} alt="img" />
      </div>
      <div className="news-card-info">
        <h6>{news.title}</h6>
        <p>{news.description}</p>
        <a href={news.url} target="blank">
          <button>Read Full News</button>
        </a>
      </div>
    </li>
  );
}

function ArticleBox({ articleItems, query, setQuery, featuredArticles }) {
  return (
    <div className="article-box">
      {console.log(featuredArticles)}
      <SearchBar query={query} setQuery={setQuery} />
      <ul>
        {featuredArticles.length > 0
          ? featuredArticles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))
          : articleItems.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
      </ul>
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <h2>Read an article</h2>
      <input
        type="text"
        placeholder="search for a topic"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <div className="article-card-info">
        <h6>{article.title}</h6>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          <button>View Article</button>
        </a>
      </div>
    </li>
  );
}

function Footer() {
  return <div className="footer">Crafted with ❤️ by Tufail dar</div>;
}
