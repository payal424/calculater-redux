import {  useSelector } from "react-redux";
const DisplayComp = () => {
    const val1 = useSelector(store => store.amt)
    const val2 = useSelector(store => store.mult)
    return(
        <div>
           <div><h1>{val1}</h1></div>
           <div><h1>{val2}</h1></div>
        </div>
    )
}
export default DisplayComp;