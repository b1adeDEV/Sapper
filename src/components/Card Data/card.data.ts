type TArrCard = {
    Ring: string
    hasItem: boolean
    class:string
}
const Arr = () => {
    let ArrCard: TArrCard[] = []
    for (let i = 0; i < 36; i++) {
        let card = 
        {
            class:"card",
            Ring: "",
            hasItem : true 
        }
        ArrCard.push(card)
    }
let random_num = Math.floor(Math.random()* ArrCard.length)
ArrCard[random_num].hasItem = true
ArrCard[random_num].Ring = "o"
console.log(ArrCard);
return ArrCard
}

export default Arr

