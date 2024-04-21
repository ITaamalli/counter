const decreaseBtn = document.getElementById ("decreaseBtn");
const resertBtn = document.getElementById ("resetBtn")
const increaseBtn = document.getElementById ("increaseBtn")
const countLabel = document.getElementById ("countLabel")

 let count=0;

 increaseBtn.onclick= function () {
    count++;
    countLabel.textContent = count

    
 }

 decreaseBtn.onclick= function () {
    count--;
    countLabel.textContent = count

    
 }

 resertBtn.onclick= function () {
    count=0;
    countLabel.textContent = count

    
 }