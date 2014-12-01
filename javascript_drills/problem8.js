/*compress(string)
Use a pattern and consolidate the amount 
of characters into a simplified string.
If a character is represented more than once, 
append the number of occurences in front of it. 
If a chracter is only represented once, 
just put that letter. Hint Use a loop to iterate over 
a string. You can reference characters in a string 
similar to an array. */

var input = "AAASSSDDDDRDDSASSDDDSSSAD" 

var compress = function(string){
	var counter = 1;
	var output = '';
	for (var i = 0; i <= string.length; i++) {
		if(string[i] === string[i+1]){
			counter++;
			// output += counter+1;
			output += counter; 
			// console.log(counter);
		} else {
			counter = 1;
			output += string.charAt(i);
			// console.log("No");
		}
	}
	return output;
};

console.log(compress(input));

// string.charAt(i);

//OUTPUT: pattern = 3A3S4DR2DSA2S3D3SAD