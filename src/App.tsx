import { useState } from "react";
import "./App.css";

const courses = [{ name: "mth101", url: "https://mth101-vu.netlify.app" }];
function App() {
  const [coursesToDisplay, setCoursesToDisplay] = useState(courses);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="container mx-auto   ">
      <NavBar />
      <MainDescription />
      <div className="prose">
        <h1 className="mt-6 md:mt-10">List Of Available Notes:</h1>
      </div>
      <div className="mt-4 md:mt-8 md:px-24 p-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setCoursesToDisplay(
                courses.filter((d) =>
                  d.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-2 md:mt-4 md:px-24 p-4">
        {coursesToDisplay.map((d) => {
          return (
            <button className="btn btn-primary mb-2">
              <a target="_blank" href={d.url}>
                {d.name.toUpperCase()}
              </a>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Virtual University Short Notes</a>
      </div>
      <div className="flex-none">
        <div className="">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="correct-vu-notes-logo-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainDescription = () => {
  return (
    <div className="prose mx-auto p-2 md:max-w-[80ch]">
      <h3>
        This is a Hobby Project, If you like these notes feel free to share it
        with your friends. These are high quality summarized notes you can use
        to cover up your syllabus in no time.
      </h3>
    </div>
  );
};
