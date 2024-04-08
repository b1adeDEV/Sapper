import "./Card.css"

type TProps = {
    show: VoidFunction
    style: string
    text: string
    ringStyle: string
}

export const Card = (props:TProps) => {
    return(
        <div className={props.style} onClick={props.show}>
            <h1 className={props.ringStyle}>{props.text}</h1>
        </div>
    )
}
