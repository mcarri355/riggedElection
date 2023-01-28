let nixon = document.getElementById("nixonBtn")
let mcgovern = document.getElementById("mcgovernBtn")
let span = document.getElementsByTagName('span')
var vote = 0

function onload(){
    alert("Vote For Nixon")
}


mcgovern.addEventListener('mousemove', move)

function voteNixon(){
   vote++
   mcgovernBtn.style.position = 'static'
   alert("Good Job Voting For Nixon. Please Vote Again!")
   console.log(vote)
   if(vote == 1){
        mcgovern.removeEventListener('mousemove', move)
        mcgovern.addEventListener('click', error)
   }
    if(vote == 2){
        mcgovern.removeEventListener('click', error)
        mcgovern.addEventListener('mouseover', change)
        mcgovern.addEventListener('mouseout', revert)
        mcgovern.addEventListener('click', fakeout)
    }
    if(vote == 3){
        mcgovern.removeEventListener('mouseover', change)
        mcgovern.removeEventListener('mouseout', revert)
        mcgovern.removeEventListener('click', fakeout)
        mcgovern.innerHTML = 'Right Click'
        mcgovern.addEventListener('contextmenu', rightClick)
        mcgovern.addEventListener("contextmenu", (e) => {e.preventDefault()});
        mcgovern.addEventListener('click', leftClick)
    }
    if(vote == 4){
        mcgovern.style.background = 'blue'
        mcgovern.innerHTML = 'Vote For McGovern'
        mcgovern.removeEventListener('contextmenu', rightClick)
        mcgovern.removeEventListener("contextmenu", (e) => {e.preventDefault()});
        mcgovern.removeEventListener('click', leftClick)
    }
}
function move(){
    if(vote == 0){
    this.style.position = 'absolute'
    this.style.left = Math.random()*75 + 'vw'
    this.style.top = Math.random()*75 + 'vh'
    }
}

function error(){
    if(vote == 1){
        for(i = 0; i < 10; i++){
            let errorText = document.createElement("span");
            errorText.innerHTML = "Error";
            errorText.style.position = 'absolute'
            errorText.style.left = Math.random()*95 + 'vw'
            errorText.style.top = Math.random()*95 + 'vh'
            errorText.style.color = 'white'
            errorText.style.fontSize = 'x-large'
            document.body.appendChild(errorText)

            setTimeout(function(){
                errorText.remove();
            }, 2000);
        }
    }
}


function change(){
    if(vote == 2){
        this.style.background = 'red'
        this.innerHTML = 'Vote For Nixon'
    }
}

function revert(){
    if(vote == 2){
        this.style.background = 'blue'
        this.innerHTML = 'Vote For McGovern'
    }
}

function fakeout(){
    if(vote == 2){
        vote++
        alert("Good Job Voting For Nixon. Please Vote Again!")
        this.style.background = 'blue'
        this.innerHTML = 'Vote For McGovern'
    }
}

function rightClick(){
    if(vote == 3){
        this.innerHTML = 'Vote For Nixon'
        this.style.background = 'red'
        this.innerHTML = 'Vote For Nixon'
    }
}


function leftClick(){
    if(vote == 3){
        vote++
        alert("Good Job Voting For Nixon. Please Vote Again!")
        this.style.background = 'blue'
        this.innerHTML = 'Vote For McGovern'
    }
}


        








