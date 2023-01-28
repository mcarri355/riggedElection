let nixon = document.getElementById("nixonBtn")
let mcgovern = document.getElementById("mcgovernBtn")
var vote = 0

function onload(){
    alert("Vote For Nixon")
}

function voteNixon(){
   vote++
   mcgovernBtn.style.position = 'static'
}


mcgovernBtn.onmouseover = function(){
    if(vote == 0){
    this.style.position = 'absolute'
    this.style.left = Math.random()*75 + 'vw'
    this.style.top = Math.random()*75 + 'vh'
    }
}

mcgovern.addEventListener('')









