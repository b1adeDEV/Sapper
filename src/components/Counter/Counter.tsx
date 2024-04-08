import "./Counter.css"

type TProps = {
    counter:number
    click: VoidFunction
}

export const Counter = (props:TProps) => {
    return(
        <div className="btn_counter">
            <h2 className="counter">{props.counter}</h2>
            <button onClick={props.click}  className="reset_btn">Reset</button>
        </div>
    )
}