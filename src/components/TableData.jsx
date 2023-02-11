import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteAContent from '../redux/thunk/contentThunk/deleteAContent';


const TableData = ({ content }) => {
    const dispatch = useDispatch();
    
    const { _id, author, title, rating } = content;
    return (
        <tr className="bg-white border-b hover:text-white hover:bg-gray-600">            
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={author?.img} alt="Jese image"/>
                    <div className="pl-3">
                        <div className="text-black font-semibold">{author?.name?author?.name:"Unknown"}</div>
                        {/* <div className="font-normal text-gray-500">neil.sims@flowbite.com</div> */}
                    </div>  
                </th>
                <td className="px-6 py-4">
                    {title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        {rating}
                    </div>
                </td>
                <td className="px-6 py-4">
                <div className="flex space-x-3">
                    <Link to={`/update_content/${_id}`}>
                    <button className="h-5 w-5 rounded-full">

                    <FaEdit className='text-2xl' />
                        </button>
                        </Link>
                    <button onClick={()=>dispatch(deleteAContent(_id))} className="">                        
                    <RiDeleteBin2Fill className='text-2xl text-red-500'/>
                    </button>
                    </div>
                </td>
                </tr>
    );
};

export default TableData;