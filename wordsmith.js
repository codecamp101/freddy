const txt = document.querySelector('#txt');
const hintBtn = document.querySelector('#hintBtn');
hintBtn.addEventListener('click',  () => {
    writeTxt ();
});
function writeTxt () {
    const text = 'To walk unsteadyly, as like a baby';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if(count === text.length -  1) clearInterval(id);
            txt.textContent += text[count];
           count++;
    }, 100)
}
let score  = 0;
const checkBtn = document.querySelector('#checkBtn');
checkBtn.addEventListener('click', () => {
    console.log("I have just been clicked.")
    document.querySelector('#cup > i').textContent = score;
    score += 5;
    document.querySelector('#action').Style.backgroundImage = `url('conffeti.gif')`
    const tid = setTimeout(() => {
        document.querySelector('#action').Style.backgroundImage = 'none'
        clearTimeout(tid);
    }, 2000);
});
//STRING METHOD
//.slice(start, end)  //slices a portion of a string
//.contact(...string)  //joins all chars in a strigs
//.trims()   //it removes spaces at  the beginning and the end of a string
//.at (...index)  ////chooses the char at the index
//.length //tells how many chars are in  a string
//toLowerCase() //writes all chars in lower case
//toUpperCase() //writes all chars in upper case
//