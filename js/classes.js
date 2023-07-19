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

const content = `
    <main>
        <ul>
            <li>Name: ${newPencilBox.name}</li>
            <li>Size: ${newPencilBox.size}</li>
            <li>Color: ${newPencilBox.color}</li>
            <li>Zip Length Left: ${newPencilBox.zipLength.left}</li>
            <li>Zip Length Right: ${newPencilBox.zipLength.right}</li>
            <li>Zip Length Top: ${newPencilBox.zipLength.top}</li>
            <li class="status"> ${newPencilBox.zipOpen}</li>
        </ul>
    </main>
`;

document.body.innerHTML = content;

console.log("The Pencil Box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);

console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());

// if (newPencilBox.zipOpen === true || newPencilBox.size === 20) {
// 	console.log("Yes");
// } else {
// 	console.log("No");
// }

let size = 30;
let boxSize;

switch (true) {
	case size > 30:
		boxSize = "large";
		break;
	case size <= 30 && size >= 20:
		boxSize = "medium";
		break;
	case size <= 19 && size >= 10:
		boxSize = "small";
}

console.log("Box Size:", size);
console.log("Status:", boxSize);
