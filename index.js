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
    //this format a unix number into the human-readable data
    const dob = new Date ('11/21/2013').getTime();//this format in Java script mm-yyy
    pan.querySelector('#dob').textContent =Intl.DateTimeFormat('en', {dateStyle: 'full'}).format(dob);

//FUNCTION
//A function is a group of statements that does not run unless when called
function calculator () {
    console.log(2 + 4);
    console.log(10 - 5);
    console.log(10 / 5);
    console.log(10 * 5);
    console.log(5 % 3); //modulus (short form is mod); the remainder of
    }
    calculator();
    function callConfetti() {
   /* const t = "ninja";
    const u = "ajnin";
    console.log(t + u); //concatenation: join strings together
    */
   const d = new Date("02/04/2025").getDate();
   const m = new Date("02/04/2025").getMonth();
   const today = Date.now();
   console.log(new Date(today).getDate())
   if (new Date(today ).getDate() === d && new Date(today).getMonth()===m) {
    pan.classList.add(bgi)
   }
    };
    callConfetti();