import react, {useState} from "react";
import { ReactDOM } from "react";

const Button= ()=>{

const [count, setCount] = useState(0);
const [count2, setount] = useState(2);
const [count5, setunt] = useState(5);

    function buttonClick(){
setCount(count++)
    }
    function uttonClick(){
setCount(count+5)
    }
    function ttonClick(){
setCount(count+5)
    }
    return <div>
        <button onClick={buttonClick}>Test{count}</button>
        <button onClick={uttonClick}>Test{count2}</button>
        <button onClick={ttonClick}>Test{count}</button>
        </div>
}

export default Button;