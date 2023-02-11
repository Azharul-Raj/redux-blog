import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import fetchContents from "../../redux/thunk/contentThunk/fetchContents";
import Card from "../Card/Card";

const Home = () => {
  const [order, setOrder] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContents(order));
  }, [order]);
  const contents = useSelector((state) => state?.contents);
  if (!contents.length) {
    return (
      <div className="flex justify-center items-center">
        <HashLoader size={100} color="#36d7b7" />
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between lg:mr-16 lg:mb-5">
        <div className="flex-1"></div>
        <div
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="relative inline-block text-left"
        >
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Filter By
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isFilterOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link
                  to="/"
                  onClick={() => setOrder("asc")}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  By First Upload
                </Link>
                <Link
                  to="/"
                  onClick={() => setOrder("desc")}
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  By Last Upload
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {contents?.map((content) => (
          <Card key={content._id} content={content} />
        ))}
      </div>
    </>
  );
};

export default Home;
