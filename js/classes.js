import pencilBox from "./pencilBox.js";

const newPencilBox = new pencilBox(
	"Pencil Box",
	30,
	"red",
	12,
	12,
	24,
	false,
	"2022-05-1 00:00:00"
);

console.log("The Pencil Box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);

console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());
