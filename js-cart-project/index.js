let cart = [
  { id: 1, name: "Rice", price: 60, qty: 2 },
  { id: 2, name: "Milk", price: 30, qty: 3 },
  { id: 3, name: "Bread", price: 40, qty: 1 },
  { id: 4, name: "Eggs", price: 6, qty: 12 }
];

//finding total price per item
let getItemTotal = cart.map(item => ({name: item.name, total: item.price*item.qty}))
console.log(getItemTotal)

//cart Total
let getCartTotal = getItemTotal.reduce((total,price) => total+price.total, 0)
console.log("Total: ",getCartTotal)

//expensive items
let getExpensiveItems = cart.filter(item => item.price >= 40)
console.log(getExpensiveItems)

//finding product
let findItem = cart.find(item => item.name === "Milk")
console.log(findItem)

//gst added cart price
let getTotalWithGst = cart.map(item => ({gstPrice: item.price*item.qty*1.18})).reduce((total,cartPrice) => total+cartPrice.gstPrice, 0)
console.log(getTotalWithGst)

//return summary
let totalQuantity = cart.reduce((sum, item) => sum+item.qty,0)

let summary = {
    totalItems: cart.length,
    TotalItems: totalQuantity,
    grandTotal: getCartTotal,
    totalWithGst: getTotalWithGst
}
console.log(summary)