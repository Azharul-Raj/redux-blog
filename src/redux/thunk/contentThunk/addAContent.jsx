
import { addContent } from "../../actionCreators/contentAction";

const AddAContent = (data) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-five.vercel.app/content`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json"
            },
        });
        const result = await res.json();
        if (result) {
            dispatch(addContent(data))
        }
    }
}
export default AddAContent;