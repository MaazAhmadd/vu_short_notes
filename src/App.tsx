import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError } from "axios";

type NetlifyResponse = {
  ssl_url: string; // https://mth101-vu.netlify.app
  screenshot_url: string;
};
const courses = ["mth101"];
function App() {
  const [data, setData] = useState<NetlifyResponse[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.netlify.com/api/v1/sites", {
        headers: {
          Authorization: `Bearer ${process.env.SITES_FETCH_TOKEN}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError((err as AxiosError).response?.data as string);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto !bg-primary !text-secondary ">
      <NavBar />
      <MainDescription />
      <h1 className="mt-6 md:mt-10">List Of Available Notes:</h1>
      <div>
        {loading && <div className="mt-4 md:mt-8 md:px-24">Loading...</div>}
      </div>
      <div>{error && <div>{error}</div>}</div>
      <div className="mt-4 md:mt-8 md:px-24 p-4">
        {data && (
          <ol>
            {data.map((d) => {
              let coursename = "";
              courses.forEach((c) => {
                if (d.ssl_url.includes(c)) {
                  coursename = c;
                }
              });
              if (!coursename) {
                coursename = d.ssl_url;
              }

              return (
                <li>
                  <a
                    target="_blank"
                    href={d.ssl_url}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-2"
                  >
                    {coursename.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </div>
  );
}

export default App;

const NavBar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full">
      <img
        src="correct-vu-notes-logo-removebg-preview.png"
        alt=""
        className="md:size-14 size-10"
      />
      <h1 className="font-bold md:text-5xl text-2xl">
        Virtual University Short Notes
      </h1>
      <div className="md:w-10"></div>
    </div>
  );
};
const MainDescription = () => {
  return (
    <h3 className="text-center md:text-2xl text-lg mt-14 md:mt-20">
      This is a Hobby Project, If you like these notes feel free to share it
      with your friends
    </h3>
  );
};
