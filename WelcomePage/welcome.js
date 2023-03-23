function askUserIfReadyToFly(){
    let footer = document.createElement('footer');
    document.body.append(footer);
    document.body.lastChild.classList.toggle('ask-user-if-ready');
    document.body.lastChild.innerHTML = `<h1>Are you ready to fly in <span>MCUStarship</span></h1>
    <button onclick="beginCountDown()">YES</button>
    <button>NO</button>`;
}




//Code for appearance of diaglogue boxes on after another...
function dialoguePopUp(askUserIfReadyToFly){


    const dialogueBoxes = document.getElementsByClassName('dialogue');
    let timings = 5000;                                               //Initializing the timer with 5s
    for(let i=0;i<dialogueBoxes.length;i++){
        setTimeout(() =>{
            if(i>0){
                dialogueBoxes.item(i-1).classList.toggle('hidden');   //When the loop moves on to another element it must remove 'hidden' class of previous element
            }
            dialogueBoxes.item(i).classList.toggle('hidden');
        },timings);
        timings=timings+5000;                                         //It manages proper time for dialogue box to appear on the screen
    }


    // Code for tiny triangle that appears at the bottom of dialogue boxes. I could have done it in css but I wanted to learn more about canvas so i prefered canvas over css.
    for(let i=1;i<=dialogueBoxes.length;i++){
        const canvas = document.getElementById(`canvas${i}`);
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
      
          ctx.beginPath();
          ctx.moveTo(0,0);
          ctx.lineTo(30,30);
          ctx.lineTo(30,0);
          ctx.lineTo(0,0);
          ctx.lineWidth = 5;
          ctx.strokeStyle = 'black';
          ctx.stroke();
          ctx.fillStyle = 'white';
          ctx.fill();
        }
    }
    setTimeout(()=>{
        askUserIfReadyToFly();
    },31000);
}
dialoguePopUp(askUserIfReadyToFly);
    


    //The code for the timer that plays at the end
    function beginCountDown(){
        let countDownTimer = document.getElementById('countdown');
        countDownTimer.children.item(0).textContent='10';
        let flameHider = document.getElementById('flame-hider');
        let rocketAnimation = document.getElementsByClassName('rocket');
        let timings = 1000; 
    for(let i=10;i>0;i--){
        setTimeout(()=>{
            countDownTimer.children.item(0).textContent--;
            if(countDownTimer.children.item(0).textContent<=3){
                countDownTimer.children.item(0).style.color='red'
                
            }
            else if(countDownTimer.children.item(0).textContent==5){
                countDownTimer.children.item(0).style.color='#8B8000';
                flameHider.classList.toggle('flame-hider');
                rocketAnimation.item(0).classList.toggle('rocket-ignition');
            }
            else if(countDownTimer.children.item(0).textContent<5){
                countDownTimer.children.item(0).style.color='#8B8000';
                
            }
            else{
                countDownTimer.children.item(0).style.color='green';
            }
           
           if(countDownTimer.children.item(0).textContent=='0'){
            setTimeout(()=>{
                countDownTimer.remove();
            },1000)
        }
        },timings);
        timings+=1000;
        
    }
    }
    
    
    




