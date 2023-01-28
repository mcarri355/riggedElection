let nixon = document.getElementById("nixonBtn")
let mcgovern = document.getElementById("mcgovernBtn")
var vote = 0

function onload(){
    alert("Vote For Nixon")
}

mcgovern.addEventListener('mouseover', move)


function voteNixon(){
   vote++
   mcgovernBtn.style.position = 'static'
   alert("Good Job Voting For Nixon. Please Vote Again!")
   console.log(vote)
   if(vote == 1){
        mcgovern.removeEventListener('mouseover', move)
        mcgovern.addEventListener('click', error)
   }
    if(vote == 2){
        mcgovern.removeEventListener('click', error)
        error1.remove();
    }
}


function move(){
    if(vote == 0){
    this.style.position = 'absolute'
    this.style.left = Math.random()*75 + 'vw'
    this.style.top = Math.random()*75 + 'vh'
    }
}
mcgovern.addEventListener('click',error())

function error(){
    if(vote == 1){
        for(let i = 0; i < 10; i++){
            var error = document.createElement("p")
            error.innerText = "Error. Vote Nixon To Fix"
            error.style.fontSize = 'x-large'
            error.style.color = 'white'
            error.style.position = 'absolute'
            error.style.left = Math.random()*90 + 'vw'
            error.style.top = Math.random()*90 + 'vh'
            document.body.appendChild(error);
        } 
    }
}









