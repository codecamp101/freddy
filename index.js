//   this changes the text insideof an element
// document.querySelector("#user > b").textContent = "Nato";
// document.querySelector("#user > i").textContent = "?"

// this is an Array of number b
// const s = 'A very long sentence. 500 words long. Really!!!!';
const eye = document.querySelector("#eye");
const output = document.querySelector("output");
const ipt = document.querySelector("input");
const fm = document.querySelector("form");
const pop = document.querySelector("#pop");
const user = document.querySelector("#user");
const start = document.querySelector("#start");
const pan = document.querySelector("#panel");
//this masks the password
eye.addEventListener("mouseup", () => {
    ipt.type = 'password';
});
//this unmasks the password
eye.addEventListener("mousedown", () =>{
    ipt.type = 'text'; 
})
//tis submit password withs the form
fm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pd ='Diddler';
    if (pd === ipt.value){
        user.remove();
        fm.remove ();
        output.textContent = 'signing you in...';
        const timeoutID = setTimeout(() =>{
            output.remove();
            pop.showPopover();
            clearTimeout(timeoutID);

        }, 3000);
      }  else{
        output.textContent = 'Wrong password';
        }
    });
    //this shows orhides the password
    start.addEventListener('click',  () => {
        pan.classList.toggle('on');
    });