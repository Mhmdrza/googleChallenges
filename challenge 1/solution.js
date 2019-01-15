const S = "abppplee"
const D = ["ablee", "ale", "apple", "bale", "kangaroo"]
let theBiggestSubsqnce = 0
let indexOfThTarget;
D.forEach( (word,index) =>{
  if(word.length > theBiggestSubsqnce){
    let SCopy = S.slice()
    let lengthOfSubsqnce = 0;
    let isSubsequence = !word.split('').some( (letter)=> {
      let indexInSCopy = SCopy.indexOf(letter)
      if( indexInSCopy > -1){
        lengthOfSubsqnce++
        Scopy = SCopy.slice(indexInSCopy, SCopy.length-indexInSCopy)
        return false
      }else{
        return true
      }
    })
    if((lengthOfSubsqnce > theBiggestSubsqnce) && isSubsequence){
      indexOfThTarget = index
      theBiggestSubsqnce = lengthOfSubsqnce
    }
	}
})
console.log(D[indexOfThTarget])