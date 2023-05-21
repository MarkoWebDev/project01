import React, { FC, useCallback, useEffect, useState } from "react";
import "../../styles/highOrderComp.scss";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

interface HighOrderCompProps {}

const HighOrderComp: FC<HighOrderCompProps> = (Component: any, url: any) => {
  const HOC: any = () => {
    const [data, setData] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getTopHeadlines = useCallback(async () => {
      setLoading(true);
      try {
        const request = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const response = await request.json();
        if (response.status === "error") {
          setLoading(false);
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
          setLoading(false);
          setData(response.articles);
        }
      } catch (error: any) {
        setLoading(false);
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
    }, []);

    useEffect(() => {
      getTopHeadlines();
    }, [getTopHeadlines]);

    return (
      <div>
        {loading ? (
          <div className="loading">
            <ClipLoader
              color="rgba(15, 16, 16, 1)"
              size={125}
              speedMultiplier={0.5}
            />
          </div>
        ) : (
          <Component data={data} apiURL={url}></Component>
        )}
      </div>
    );
  };
  return HOC;
};

export default HighOrderComp;
