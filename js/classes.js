import pencilBox from "./pencilBox.js";

const newPencilBox = new pencilBox(
	"Pencil Box",
	30,
	"red",
	12,
	12,
	24,
	false,
	"2020-05-1 00:00:00"
);

console.log("The Pencil Box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);
