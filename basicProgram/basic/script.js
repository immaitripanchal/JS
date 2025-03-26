let head = document.querySelector('h1');
head.innerText = head.innerText + 'from apna college student ';

let divs = document.querySelectorAll('.box');
let idx = 0;
for (div of divs) {
	divs[idx].innerText = `unique text ${idx + 1} `;
	idx++;
}
