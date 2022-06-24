const objectA = {
	a: 20,
	b: true,
};

const copyOfA = objectA;
copyOfA.a = 35;
console.log(copyOfA);
console.log(objectA);
