let title = document.querySelector(".h-2nd");

let titleLoad = () =>{
    setTimeout(() => {
        title.textContent = "Development";
    }, 0);
    setTimeout(() => {
        title.textContent = "Programming";
    }, 4000);
    setTimeout(() => {
        title.textContent = "Javascript";
    }, 8000);
    setTimeout(() => {
        title.textContent = "Python";
    }, 12000);
   
    setTimeout(() => {
        title.textContent = "DSA";
    }, 16000);
    setTimeout(() => {
        titleLoad();
    }, 20000);
    
    
}

titleLoad();
