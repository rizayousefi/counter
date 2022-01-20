// counter Js:



const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");


let count = 0;

buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increment")) count ++;
        else if (classList.contains("decrement")) count --;
        else count = 0;


        if(count > 0) counterValue.style.color = "green";
        else counterValue.style.color = "red";
        counterValue.textContent = count;
    })
} );









// 1.incBtn : click => count ++ => counterValue.textCount
