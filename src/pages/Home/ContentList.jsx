import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GridLoader} from 'react-spinners'
import TableData from '../../components/TableData';
import fetchContents from '../../redux/thunk/contentThunk/fetchContents';

const ContentList = () => {
    const contents = useSelector(state => state?.contents);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContents())
    }, [])

    if (!contents.length) {
        return <div className="flex justify-center items-center">
            <GridLoader color="#36d7b7" />

        </div>
    }
    return (
        <div className="flex justify-center items-center">
        <table className="w-[90%] text-sm justify-center text-left text-gray-500 bg-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                {
                    contents?.map((content,id) => <TableData key={id} content={ content} />)
            }
                </tbody>
            </table>
            </div>
    );
};

export default ContentList;