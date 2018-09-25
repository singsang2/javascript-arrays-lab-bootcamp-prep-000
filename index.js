// Add your functions and code here
function destructivelyAppendKitten(name){
  kitten.push(name)
  return kitten
}

function destructivelyPrependKitten(name){
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveFirstKitten(){
  kitten.shift()
  return kitten
}

function destructivelyRemoveLastKitten(){
  kitten.pop()
  return kitten
}

function appendKitten(name){
  return [...kitten, name]
}

function prependKitten(name){
  return [name, ...kitten]
}

function removeLastKitten(){
  return kitten.slice(0, kitten.length-1)
}

function removeFirstKitten(){
  return kitten.slice(1)
}

