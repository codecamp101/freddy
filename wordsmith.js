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