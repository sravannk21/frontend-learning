let priceList = [345,89,34,874,288,34]
console.log(priceList)

//added gst using map
let gstAddedPrice = priceList.map(p => p*1.18)
console.log(gstAddedPrice)

//product above 300
let midrangeItems = priceList.filter(p => p>300)
console.log(midrangeItems)

//calculation of toatal
let sumOfPrice = priceList.reduce((sum,price) => sum+price)
console.log(sumOfPrice)