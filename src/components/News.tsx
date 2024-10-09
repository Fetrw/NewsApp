import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = 6;

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0f13ddb43d8f4510a3175fdff04deff8"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching news");
        }
        return response.json();
      })
      .then((data) => setNews(data.articles))
      .catch(() => setError("Error fetching news"));
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(news.length / newsPerPage);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">News</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {currentNews.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description || "No description available"}
                </p>
                <a
                  href={article.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              key={index}
            >
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default News;
