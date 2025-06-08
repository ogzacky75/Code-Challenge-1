// Simplified Mobile Money Transaction Fee Estimator 📱

let studentFeeAmount = prompt("Enter Student Fee",500)

let minFee = 1.5/100*(studentFeeAmount)
let maxFee = 1.5/100*(studentFeeAmount)


if (minFee <=10){
	console.log(parseInt(studentFeeAmount+=10))
}else if (minFee <70){
	console.log(parseInt(studentFeeAmount+=10))

}else if (maxFee >=70){
	console.log(parseInt(studentFeeAmount+=70))
}else{
	console.log("Enter Fee Amount")
}