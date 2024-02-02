import { React, useEffect, useState } from "react";

export default function App() {
  const [newsItems, setNewsItems] = useState([]);

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

  return (
    <div className="app">
      <Header />
      <Main>
        <NewsBox newsItems={newsItems} />
        <ArticleBox />
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

function ArticleBox() {
  return (
    <div className="article-box">
      <SearchBar />
      <ul>
        <ArticleCard />
      </ul>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <h2>Read an article</h2>
      <input type="text" placeholder="search for a topic" />
    </div>
  );
}

function ArticleCard() {
  return (
    <li className="article-card">
      <div className="article-image">
        <img
          src="https://image.cnbcfm.com/api/v1/image/107342257-1701510839311-gettyimages-1808128597-US_GAS_PRICES.jpeg?v=1706834062&w=1920&h=1080"
          alt=""
        />
      </div>
      <div className="article-card-info">
        <h6>Threads Rises to 130 Million Users, Seeing Steady Growth</h6>
        <button>View Article</button>
      </div>
    </li>
  );
}

function Footer() {
  return <div className="footer">Crafted with ❤️ by Tufail dar</div>;
}
