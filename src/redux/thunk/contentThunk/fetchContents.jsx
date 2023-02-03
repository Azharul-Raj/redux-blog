
import { getContents } from "../../actionCreators/contentAction";

const fetchContents = () => {
    return async (dispatch, getState) => {
        console.log(getState())
        const res = await fetch("https://tech-blog-server-five.vercel.app/contents?order=");
        const data = await res.json();
        // console.log(data)
        if (data) {
            dispatch(getContents(data))
        }
    }
}
export default fetchContents;