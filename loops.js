function forLoop(array){
  for(let i = 0;i < 25; i++){
    if(i===1){
      array.push("I am 1 strange loop.")
    }
    else if(i!==1){
      array.push("I am ${i} strange loops.")
    }

  }
  return array
}

function whileLoop(number){
  while(number>=0){
    console.log('done')
    number--
  }
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function dowhileLoop(array){do {
array.pop()
} while (array.length > 0 && maybeTrue());

}
