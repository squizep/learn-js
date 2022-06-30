/*class Comment {
	constructor(text) {
		this.text = text,
		this.votesQty = 0
	}

	upvote() {
		this.votesQty += 1;
	}

	static mergeComments(first, second) {
		return `${first} ${second}`;
	}
}
const firstComment = new Comment('First comment');
const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment');
firstComment.upvote();
firstComment.upvote();
firstComment.upvote();
console.log(firstComment);
secondComment.upvote();
secondComment.upvote();
console.log(secondComment);
thirdComment.upvote();
console.log(thirdComment);
Comment.mergeComments('first comment', 'second comment');
*/

/*class NumberArray extends Array {
	sum() {
		return this.reduce((el, acc) => acc + el);
	}
}
const myArray = new NumberArray(2, 5, 7, 8, 15);
console.log(myArray); */

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json))
	.catch((error) => console.error(error));
