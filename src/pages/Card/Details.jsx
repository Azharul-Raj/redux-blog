import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FadeLoader} from 'react-spinners'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import fetchAContent from '../../redux/thunk/contentThunk/getContent';


const Details = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchAContent(id))
  }, [])

  const data = useSelector(state => state.content.content);
  if (!data) {
    return (
      <div className=" flex justify-center items-center">
      <FadeLoader size={100} color="#36d7b7" />

    </div>
    )
  }
  const { image_url, details, title,author } = data;
  return (
      <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-md px-4 md:px-8 mx-auto">
    <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
      <img src={image_url} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center" />
    </div>
    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{title}</h1>

    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">{details}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
        <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-full overflow-hidden shadow-lg">
          <img src={author.img} loading="lazy" alt="Photo by christian ferrer" className="w-full h-full object-cover object-center" />
        </div>

        <div>
          <div className="text-indigo-500 md:text-lg font-bold text-center sm:text-left">{author.name?author.name:"Unknown"}</div>
          <p className="text-gray-500 text-sm md:text-base text-center sm:text-left">date : {author.published_date}</p>
        </div>
      </div>
            
  </div>
      </div>
      </>
    );
};

export default Details;