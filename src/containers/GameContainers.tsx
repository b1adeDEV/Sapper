import { SetStateAction, useState } from "react"
import { Card } from "../components/Card/Card"
import Arr from "../components/Card Data/card.data"
import "./GameContainers.css"
import { Counter } from "../components/Counter/Counter"
import Modal from "../components/modal/modal"




export const Game = () => {
    const [arr, setArr] = useState(Arr)
    const [counter, setCounter] = useState(0)
    const [ring, setRing] = useState("ringHide")
    const [modalActive, setModalActive] = useState(false)


    const onShowHandler = (index:number) => {
        if(arr[index].class == "card") {
            const copyCounterState = counter
            setCounter(copyCounterState+1)
        }
        const copyState = [...arr]
        copyState[index].class = "hide"
        setArr(copyState)
        
        if(arr[index].Ring == "o") {
            setRing("ringShow")
            setModalActive(true)
        }
    }

    const reset = () => {
        setArr(Arr())
        setCounter(0)
        setRing("ringHide")
        setModalActive(false)
        
    }

    return(
        <div className="container">
            <div className="CardGame">
            {
                arr.map((item,index) => (
                         <Card 
                         key={index} 
                         show={() => onShowHandler(index)} 
                         style={arr[index].class} 
                         text={arr[index].Ring} 
                         ringStyle={ring}/>
                ))
            }
            </div>
            <Counter counter={counter} click={reset}/>
            <Modal 
                active={modalActive}
                counter={counter} 
                click={reset}/>
        </div>
        
    )
}