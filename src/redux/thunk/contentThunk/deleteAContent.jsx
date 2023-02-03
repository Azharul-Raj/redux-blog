import { deleteContent } from "../../actionCreators/contentAction";

const deleteAContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-five.vercel.app/content/${id}`);
        const data = await res.json();
        if (data) {
            dispatch(deleteContent(id))
        }
    }
}
export default deleteAContent;