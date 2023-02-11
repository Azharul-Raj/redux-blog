

const readCounter = (store) => (next) => (action) => {

    return next(action)
}
export default readCounter;