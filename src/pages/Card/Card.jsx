import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({  content }) => {
    const {title,_id,total_view,image_url,time,details,author}=content
    return (
        <Link to='/'>
        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
        <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
          <img src={image_url} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </a>

        <div className="flex flex-col flex-1 p-4 sm:p-6">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">
            <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{title.slice(0,28)+"..."}</a>
          </h2>

                <p className="text-gray-500 mb-8">{ details.slice(0,100) + '...'}</p>

          <div className="flex justify-between items-end mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                <img src={author.img} loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
              </div>

              <div>
                <span className="block text-indigo-500">{author.name?author.name:"Unknown"}</span>
                            <span className="block text-gray-400 text-sm">{ author.published_date?author.published_date:"Not found"}</span>
              </div>
            </div>

            <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
          </div>
        </div>
            </div>
            </Link>
    );
};

export default Card;