
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_menu")


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () =>{ 
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




function printPattern(rows){

    for (let i = rows; i>=1; i--){
            let row = "*";

            for (let j = i; j <= (rows - 1) * 2; j++){
                row += " ";
            }
            console.log(row);
        }
}

printPattern(5);