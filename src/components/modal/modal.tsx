import "./modal.css"

type TProps = {
    active:boolean
    counter: number
    click: VoidFunction
}


const Modal = ({active, counter, click}:TProps) => {
    return(
        <div className={active ? "modal active": "modal"}>
            <div className="modal_content" onClick={(e) => e.stopPropagation() }>
                <h2>Вы выиграли!</h2>
                <span>Попыток: {counter}</span>
                <button className="reset_btn" onClick={click}>Reset</button>
            </div>
        </div>
    )
}

export default Modal