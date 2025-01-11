let clock = document.getElementById("clock");
function displaytime(){
    const date = new Date();
    const hours = date.getHours();
    
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    clock.textContent = (`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    function time(){
        setTimeout(displaytime, 1000);
    }
    return time();
}
displaytime();

function darkmode(){
    document.body.classList.add(`active`);
    clock.classList.add(`active`);
    
    
}
function lightmode(){
    document.body.classList.remove(`active`);
    clock.classList.remove(`active`);
    
   
}
