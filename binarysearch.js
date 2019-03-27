
for (var a=[],i=0;i<50;++i) a[i]=i;

function generate(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  //function for creating array
//obtained from https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript
    console.log(array)
    array = array.sort()
    console.log(array)
  return array;
}
//função de buscar linear
function linearSearch(lista,valor){
  for (let index=0;index<lista.length;index++ ){
      if(lista[index]===valor){
          return index;
      }
  }
  return -1;
}

arranjo = generate(arranjo);
console.time('Linear Search')
let result = linearSearch(a, 5)
console.timeEnd('Linear Search')
console.log(result)