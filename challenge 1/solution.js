const S = "abppplee"
let D = ["able", "ale", "apple", "bale", "kangaroo"]
let theBiggest = 0
let indexOfThTarget;
D.forEach( (word,index) =>{
  let SCopy = S.slice()
	let lengthOfSub = 0;
  word.split('').some( (letter)=> {
    let indexInSCopy = SCopy.indexOf(letter)
    if( indexInSCopy > -1){
    	lengthOfSub++
      delete SCopy[indexInSCopy]
      return false
    }else{
    	return true
    }
  })
  if(lengthOfSub > theBiggest){
  	indexOfThTarget = index
  	theBiggest = lengthOfSub
  }
})
//D[indexOfThTarget] is the answer
console.log(D[indexOfThTarget])