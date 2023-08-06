
let qrDiv =document.getElementById("qrcode")
let qrcodePrent =document.getElementById("qrcodePrent")

function generateQr(link){
	new QRCode(qrDiv,  {
		text: link,
		width: 500,
		height: 500,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H,
		
	});
}

let linkInput = document.getElementById('linkInput')
let headingInput = document.getElementById('headingInput')

let qrHeading = document.getElementById('qrHeading')

let qrButton = document.getElementById('qrButton')

let printBtn = document.getElementById('printBtn')

qrButton.addEventListener('click',()=>{
	let linkValue= linkInput.value
	let headingValue=headingInput.value
	let isUrlCorrect;
	try {
		 isUrlCorrect = new URL(linkValue);	
	} catch (error) {
		console.log(error)
		window.alert("Invalid url , please enter valid url ")
	}
	
	if(isUrlCorrect){
		// console.log(isUrlCorrect)
	generateQr(linkValue)
	const h1 = document.createElement("h1");
const textNode = document.createTextNode(headingValue);
h1.appendChild(textNode);

	qrHeading.appendChild(h1)
	printBtn.classList.remove("d-none");
	}

})

printBtn.addEventListener("click",()=>{
	var divContents = qrcodePrent.innerHTML;
	console.log(divContents)
	var a = window.open('', '', 'height=500, width=500');
	a.document.write('<html>');

	a.document.write('<body >');
	a.document.write(divContents);
	a.document.write('</body></html>');
	a.document.close();
	a.print();
})


