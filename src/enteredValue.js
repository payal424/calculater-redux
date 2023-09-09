import { useDispatch } from "react-redux"
import { addition ,subition, mulition, divition} from "./store/action"
import {  useState } from "react"

const EnteredValue = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const disp = useDispatch()
    const onChangeHandler1 =(event)=>{
        event.preventDefault()
        setNum1(event.target.value)    
    }

    const onChangeHandler2 =(event)=>{
        event.preventDefault()
        setNum2(event.target.value)   
    }
    const onAddHandler =(event)=>{
        event.preventDefault()
        disp(addition([num1,num2]))
    }
    const onSubHandler =(event)=>{
        event.preventDefault()
        disp(subition([num1,num2]))
    }
    const onMulHandler =(event)=>{
        event.preventDefault()
        disp(mulition([num1,num2]))  
    }
    const onDivHandler =(event)=>{
        event.preventDefault()
        disp(divition([num1,num2]))
    }
    
    return(<div>
        <form>
        <div>
            <input type = 'number' onChange = {onChangeHandler1}></input>
            <input type = 'number'  onChange = {onChangeHandler2}></input>
        </div>
        <div>
        <button type = 'submit' onClick={onAddHandler}>add</button>
        <button onClick={onSubHandler}>sub</button>
        <button onClick={onMulHandler}>mul</button>
        <button onClick={onDivHandler}>divi</button>
        </div>
        </form>
    </div>)
}
export default EnteredValue
