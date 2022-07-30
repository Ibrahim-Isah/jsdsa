/**
 *O(n)
 * @param {*} n
 */
function shoutWhatsUpDawg(n) {
	for (let i = 0; i < n; i++) {
		console.log('Whats up dawg?!');
	}
	for (let i = 0; i < n; i++) {
		console.log('Whats up dawg?!');
	}
}

shoutWhatsUpDawg(4);

/**
 *O(1)
 * @param {*} n
 */
function shoutWhatsUpDawg2(n) {
	for (let i = 0; i < 4; i++) {
		console.log('whats up dawg?!');
	}
}
