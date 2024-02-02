import { React } from "react";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <NewsBox />
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

function NewsBox() {
  return (
    <div className="news-box">
      <h2>Top Headlines in India</h2>
      <ul>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </div>
  );
}

function NewsCard() {
  return (
    <li className="news-card">
      <div className="news-card-image">
        <img
          src="https://image.cnbcfm.com/api/v1/image/107342257-1701510839311-gettyimages-1808128597-US_GAS_PRICES.jpeg?v=1706834062&w=1920&h=1080"
          alt="img"
        />
      </div>
      <div className="news-card-info">
        <h6>
          Meta earnings top estimates as forecast, buyback, and new dividend
          send shares soaring - Yahoo Finance
        </h6>
        <p>
          Meta reported Q4 2023 earnings on the top and bottom line, while
          offering a strong Q1 outlook.
        </p>
        <button>Read News</button>
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

function Modal() {
  return (
    <div className="Modal">
      <h5>Title</h5>
      <span>❌</span>
      <p>
        Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244
        qui font partie du Cadre de transparence et de consentement dIAB) et
        nous utiliserons également des témoins et vos données person… [+982
        chars]
      </p>
      <div className="article-details">
        <p>Source : Yahoo</p>
        <p>Author : Shehlik K Manzoor</p>
        <p>Publish Date : 20 Nov 2023</p>
      </div>
    </div>
  );
}
