//isPalindrome(string)
//Create a method called is_palindrome to check if a string is a palindrome. Do not use any reverse method.


function is_palindrome(string) {
	if (string.length === 0) {
		return true;
	}
	//Checks to see if first and last letters are the same.
	if (string[0] !== string[string.length -1]) {
		return false;
	}
	//This will truncate the string
	return is_palindrome(string.slice(1,string.length-1));
};

console.log(is_palindrome("aba"));