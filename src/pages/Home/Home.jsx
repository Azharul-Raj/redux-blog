import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import fetchContents from '../../redux/thunk/contentThunk/fetchContents';
import Card from '../Card/Card';

const Home = () => {
    const dispatch = useDispatch();
    const contents=useSelector(state=>state?.contents)
    useEffect(() => {
        dispatch(fetchContents())
    }, [])
    if (!contents.length) {
        return <div className="flex justify-center items-center">
           <HashLoader size={100} color="#36d7b7" />
       </div> 
    }
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8'>
            {
                contents?.map(content => <Card key={content._id} content={ content} />)
            }
        </div>
    );
};

export default Home;