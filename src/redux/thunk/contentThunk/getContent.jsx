import { getContent } from "../../actionCreators/contentAction";

const fetchAContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-five.vercel.app/content/${id}`);
        const data = await res.json();
        if (data) {
            dispatch(getContent(data));
        }
    }
}
export default fetchAContent;