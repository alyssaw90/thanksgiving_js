//pluck(someArray, "someKey")
//Using map construct a function called Pluck that will input array, and grab all matching keys. 
//The function should return the of keys in an array.

var pluck = function(array,key){
	return array.map(function(e){
		return e[key];
	}); 
};

var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

var plucked = pluck(albums, 'artist');

console.log(plucked);

//OUTPUT: [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]