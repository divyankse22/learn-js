const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myTotal = myNumbers.reduce((acc,currval)=>{
    return acc+currval
},-1);
console.log(myTotal);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);