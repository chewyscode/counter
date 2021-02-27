//Declare initial variables

let count = 0;

const counter = document.querySelector('#value')

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
     if(styles.contains('decrease')){
         count--;
        
     }
     else if(styles.contains('reset')){
         count = 0;
         
     }
     else if(styles.contains('increase')){
        count++;
       
     }
     if(count > 0){
         counter.style.color = 'green'
     }
     else if(count < 0){
         counter.style.color = 'red'
     }
     else{
         counter.style.color ='black'
     }
     value.textContent = count
});
});

