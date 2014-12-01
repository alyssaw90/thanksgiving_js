//pair(obj)
//Construct array pairs from Objects.
//You can grab all keys using Object.keys(obj) and iterate over it like any other array.

var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

var pair = function (object) {
	var keysArray = Object.keys(object);
	finalArray = keysArray.map(function(element, index){
		return [element, object[element]];
	})
	return finalArray;
}
// console.log(keys)
console.log(pair(obj));

// obj.forEach(function(element){
// 	console.log(element);
// })

/* OUTPUT: [ [ 'Anil', 'Bridgpal' ],
  [ 'Markus', 'Guehrs' ],
  [ 'Jackie', 'Herrlin' ],
  [ 'Avand', 'Amiri' ] ] */

