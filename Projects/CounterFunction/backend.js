let counter = 0;

document.getElementById("counting").innerText = counter;

function increment(){
    counter++;
    document.getElementById("counting").innerText = counter;
}

function decrement(){
    if(counter > 0){
        counter--;
    }
    document.getElementById("counting").innerText = counter;
}