import React, { FC, useCallback, useState } from "react";
import HighOrderComp from "../HOC/HighOrderComp";
import mockImage from "../../assets/images/mockImage.jpg";
import { Link } from "react-router-dom";
import "../../styles/newsBody.scss";
import InfiniteNews from "../InfiniteScrollNews/InfiniteNews";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface AllNewsProps {
  data: ArticleProps[];
}

interface ArticleProps {
  title: string;
  url: string;
  urlToImage: string | undefined;
  description: string;
  publishedAt: string;
}

const AllNews: FC<AllNewsProps> = React.memo(({ data }: AllNewsProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const getSortedData = () => {
    const storage = localStorage.getItem("sorted");
    if (!storage) {
      return data;
    }
    return JSON.parse(storage);
  };

  const [initialData, setInitialData] = useState<ArticleProps[]>(getSortedData);
  const [order, setOrder] = useState<string>("asc");

  const parseTime = useCallback((time: string) => {
    const parsedDate = new Date(time).toLocaleDateString();
    const convertDate = parsedDate.split("/");
    const day = convertDate[1];
    const month = convertDate[0];
    const year = convertDate[2];
    const parsedTime = new Date(time).toLocaleTimeString("hr-HR", {
      timeZone: "Europe/Zagreb",
    });
    const europeanTime = parsedTime.split(":");
    const hours = europeanTime[0];
    const minutes = europeanTime[1];
    return `${day}.${month}.${year} ${hours}:${minutes}h`;
  }, []);

  const sortByDate = useCallback(() => {
    let sorted = [...initialData].sort((a, b): number => {
      if (order === "asc") {
        return new Date(a.publishedAt) > new Date(b.publishedAt) ? 1 : -1;
      } else {
        return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
      }
    });

    setOrder((prev: string) => (prev === "asc" ? "desc" : "asc"));
    setInitialData(sorted);
    localStorage.setItem("sorted", JSON.stringify(sorted));
  }, [initialData, order]);

  return (
    <>
      <div>
        <div className={isMobile ? "mobile-sort-btn" : "sort-btn"}>
          <button className="btn-sort" onClick={sortByDate}>
            Order news Asc or Desc
          </button>
        </div>
        {initialData.slice(1, 2).map((item: ArticleProps, index: number) => {
          return (
            <div
              key={index}
              className={isMobile ? "header-section-mobile" : "header-section"}
            >
              <div className={isMobile ? "header-mobile-left" : "header-left"}>
                <h1 className={isMobile ? "title-mobile" : "title"}>
                  {item.title}
                </h1>
                <div className={isMobile ? "mobile-btns" : ""}>
                  <Link className="category-btn" to={item.url}>
                    Kategorija
                  </Link>
                  <Link className="category-btn" to={item.url}>
                    Vrijeme čitanja 5 min
                  </Link>
                  <p className={isMobile ? "mobile-time" : "time"}>
                    Published: {parseTime(item.publishedAt)}
                  </p>
                </div>
              </div>
              <div
                className={isMobile ? "mobile-header-right" : "header-right"}
              >
                {item.urlToImage !== undefined || item.urlToImage !== null ? (
                  <img
                    className={
                      isMobile ? "mobile-header-right-img" : "header-right-img"
                    }
                    loading="lazy"
                    src={item.urlToImage}
                    alt={item.description}
                  />
                ) : (
                  <img
                    className={
                      isMobile ? "mobile-header-right-img" : "header-right-img"
                    }
                    loading="lazy"
                    src={mockImage}
                    alt={item.description}
                  />
                )}
              </div>
            </div>
          );
        })}
        <hr />
      </div>
      <div className={isMobile ? "mobile-middle-section" : "middle-section"}>
        {initialData.slice(2, 5).map((item: ArticleProps, index: number) => {
          return (
            <div className="card" key={index}>
              {item.urlToImage === undefined || item.urlToImage === null ? (
                <img
                  width={360}
                  height={222}
                  loading="lazy"
                  src={mockImage}
                  alt={item.description}
                />
              ) : (
                <img
                  width={360}
                  height={222}
                  loading="lazy"
                  src={item.urlToImage}
                  alt={item.description}
                />
              )}
              <p className="time">Published: {parseTime(item.publishedAt)}</p>
              <h2 className="title">{item.title}</h2>
              <Link className="category-btn" to={item.url}>
                Enter
              </Link>
            </div>
          );
        })}
      </div>
      <hr />
      <div className={isMobile ? "bottom-section-mobile" : "bottom-section"}>
        <div className="column">
          {initialData.slice(5, 10).map((item: ArticleProps, index: number) => {
            return (
              <div
                className={isMobile ? "mobile-card-bottom" : "card-bottom"}
                key={index}
              >
                <div>
                  {item.urlToImage === undefined || item.urlToImage === null ? (
                    <img
                      className={
                        isMobile ? "mobile-image-bottom" : "bottom-img"
                      }
                      loading="lazy"
                      src={mockImage}
                      alt={item.description}
                    />
                  ) : (
                    <img
                      className={
                        isMobile ? "mobile-image-bottom" : "bottom-img"
                      }
                      loading="lazy"
                      src={item.urlToImage}
                      alt={item.description}
                    />
                  )}
                </div>
                <div className={isMobile ? "mobile-right-side" : "right-side"}>
                  <p className="time">
                    Published: {parseTime(item.publishedAt)}
                  </p>
                  <h3 className={isMobile ? "mobile-bottom-title" : "title"}>
                    {item.title}
                  </h3>
                  <Link
                    className={
                      isMobile ? "mobile-category-btn-bottom" : "category-btn"
                    }
                    to={item.url}
                  >
                    Enter
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <InfiniteNews></InfiniteNews>
        </div>
      </div>
      <hr className={isMobile ? "rule-none" : "rule"} />
    </>
  );
});

const url: string = `http://localhost:5000/api/everything`;

const AllNewsComponent: any = HighOrderComp(AllNews, url);

export default AllNewsComponent;
