import { deleteContent } from "../../actionCreators/contentAction";

const deleteAContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-five.vercel.app/content/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type":"application/json"
            }
        });
        const data = await res.json();
        if (data) {
            console.log("deleted")
            dispatch(deleteContent(id))
        }
    }
}
export default deleteAContent;