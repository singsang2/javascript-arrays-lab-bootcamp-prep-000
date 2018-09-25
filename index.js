// Add your functions and code here
function destructivelyAppendKittens(name, kitten){
  name.push(kitten)
  return name
}

function destructivelyPrependKitten(name, kitten){
  name.unshift(kitten)
  return name
}

function destructivelyRemoveFirstKitten()