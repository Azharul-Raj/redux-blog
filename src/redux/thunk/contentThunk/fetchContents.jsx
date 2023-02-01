import { getContents } from "../../actionCreators/contentAction";

const fetchContents = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:3001/contents");
        const data = await res.json();
        // console.log(data)
        if (data) {
            dispatch(getContents(data))
        }
    }
}
export default fetchContents;