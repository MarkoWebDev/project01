import { FC, useState, useRef, useCallback, useEffect } from "react";
import "../../styles/infiniteScroll.scss";
import { toast } from "react-toastify";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface InfiniteNewsProps {}

interface ArticleProps {
  title: string;
  url: string;
  urlToImage: string | undefined;
  description: string;
  publishedAt: string;
}

const InfiniteNews: FC<InfiniteNewsProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const refEl = useRef<HTMLDivElement>(null);
  const [news, setNews] = useState<ArticleProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<number>(0);

  const handleScroll = () => {
    if (refEl.current) {
      const { scrollTop, scrollHeight, clientHeight } = refEl.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPage(page + 1);
      }
    }
  };

  const fetchNews = useCallback(async () => {
    try {
      const request = await fetch(
        `http://localhost:5000/api/infiniteNews?page=${page}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const response = await request.json();
      if (response.status === "error") {
        toast.error(response.code, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        setPrevPage(page);
        setNews((prev: ArticleProps[]) => [...prev, ...response.articles]);
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    if (prevPage !== page) {
      fetchNews();
    }
  }, [page, fetchNews, prevPage]);

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

  return (
    <div>
      <div
        className={isMobile ? "mobile-infinite-section" : "infinite-section"}
      >
        <div className="infinite-body" onScroll={handleScroll} ref={refEl}>
          <div>
            {news?.map((item: ArticleProps, index: number) => {
              return (
                <div className="infinite-content" key={index}>
                  <p className="time">
                    Published: {parseTime(item.publishedAt)}
                  </p>
                  <p className="text">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteNews;
