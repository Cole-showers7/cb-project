const inputs = Array.from(document.querySelectorAll('input'))

inputs.forEach(input => {
    input.addEventListener("change",checkInput);
})

function checkInput(e){
    console.log(e.target.value)
}