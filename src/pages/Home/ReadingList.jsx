import React from "react";
import { useSelector } from "react-redux";
import ReadingCard from "../../components/ReadingCard";

const ReadingList = () => {
  const lists = useSelector((state) => state.readingList);

  return (
    <>
      <div className="flex justify-center items-center font-bold text-xl">
        <h2>Reading History</h2>
      </div>
      {lists
        .sort((a, b) => b.count - a.count)
        .map((content) => (
          <ReadingCard key={content._id} content={content} />
        ))}
    </>
  );
};

export default ReadingList;
