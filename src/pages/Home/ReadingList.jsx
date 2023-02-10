import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addReadingCount } from "../../redux/actionCreators/contentAction";

const ReadingList = () => {
    const lists = useSelector(state => state.readingList)
    const dispatch=useDispatch()
  return (
    <>
      <div className="flex justify-center items-center font-bold text-xl">
        <h2>Reading History</h2>
      </div>
{
     lists.map(content=> <Link key={content._id} onClick={()=>dispatch(addReadingCount(content._id))} to={`/content/${content._id}`} className="p-10 flex justify-center items-center">
    <div className=" w-full lg:max-w-full ">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${content.image_url})`}} title="Mountain">
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{content?.title}</div>
          <p className="text-gray-700 text-base">{content?.details?content.details.slice(0,100) +'...':"No Details"}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={content.author.img} alt="Avatar of Writer"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{content?.author.name}</p>
            <p className="text-gray-600">{content?.time}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>)
}
    </>
  );
};

export default ReadingList;
