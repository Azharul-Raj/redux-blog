import { getContent } from "../../actionCreators/contentAction";

const fetchAContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:3001/content/${id}`);
        const data = await res.json();
        if (data) {
            dispatch(getContent(data));
        }
    }
}
export default fetchAContent