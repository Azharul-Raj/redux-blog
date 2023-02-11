const updateAContent = (updatedDoc,id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tech-blog-server-five.vercel.app/content/${id}`, {
            method: "PUT",
            body:JSON.stringify(updatedDoc),
            headers: {
                "Content-type":"application/json"
            }
        });
        const data = await res.json();
        // if (data) {
        //     dispatch(deleteContent(id))
        // }
    }
}

export default updateAContent;