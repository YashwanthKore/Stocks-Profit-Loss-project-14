var initialPrice = document.querySelector("#initial-price")
var noOfStocks = document.querySelector("#no-of-stocks")
var currentPrice = document.querySelector("#current-price")
var outputMessage = document.querySelector("#output-message")
var btnCheck = document.querySelector("#btn-check")

function calculateProfitOrLoss(){
if(initialPrice.value > currentPrice.value){
  var  loss= (initialPrice.value- currentPrice.value)*noOfStocks.value
  var lossPercentage = (loss/initialPrice.value)*100
  outputMessage.innerHTML =  "The loss is "+ loss + "rupees and the loss percent is "+ lossPercentage+"%"
}

else if(currentPrice.value > initialPrice.value){
    var profit = (currentPrice.value- initialPrice.value)*noOfStocks.value
    var profitPercentage = (profit/initialPrice.value)*100

    outputMessage.innerHTML = "The profit is "+ profit + "rupees and the profit percent is "+ profitPercentage+"%"
}
else{
    outputMessage.innerHTML = "No profit - No loss"
}
}


btnCheck.addEventListener("click",calculateProfitOrLoss)