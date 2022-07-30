/**
 * O(n ^ 2)
 * @param {*} arr
 */

function shoutWordPairs(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i] + ' ' + arr[j]);
		}
	}
}
shoutWordPairs(['candle', 'rice', 'breadi']);

/**
 * O(n * m)
 * @param {*} arr
 */
function shoutWordPairs2(arr, arr2) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			console.log(arr[i] + ' ' + arr2[j]);
		}
	}
}
shoutWordPairs(['candle', 'rice', 'breadi'], ['cucumber', 'apple']);
