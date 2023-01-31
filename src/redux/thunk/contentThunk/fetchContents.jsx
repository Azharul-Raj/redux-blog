const fetchContents = () => {
    return async (dispatch, getState) => {
        const res = await fetch("");
        const data = await res.json();
    }
}