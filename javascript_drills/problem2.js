//zip(array, array2)
//Take two arrays, and combine them.

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function(array1, array2) {
	var newArray = [];

	array1.forEach(function(element,index){
		var subArray = [];
		subArray.push(array1[index]);
		subArray.push(array2[index]);
		newArray.push(subArray);
	})
	return newArray
}

console.log(zip(artists, albums));


/*OUTPUT: [ [ 'Passion Pit', 'Gossamer' ],
  [ 'Mumford and Sons', 'Sigh no more' ],
  [ 'MGMT', 'Time to Pretend' ] ] */

