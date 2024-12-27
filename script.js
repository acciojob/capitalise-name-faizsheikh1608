//your JS code here. If required.
const input = document.querySelector('#fname');
input.addEventListener('blur',()=>{
	input.value = input.value.toUpperCase()
})