let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let colors=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keydown",()=>{
    
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelup(){
userseq=[];
level++;
h2.innerText=`level ${level}`;
let randidx=Math.floor(Math.random()*3);
let randcolor=colors[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
gameflash(randbtn);

}
function checkans(idx){
    
    if(userseq[idx]=== gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),500);
        }
        
    }else{
        h2.innerHTML=`game over! your score was : <b>${level}</b><br> press a key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function buttonpress(){
    
    let btn=this;
    
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
   checkans(userseq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",buttonpress);
}
function reset(){
    level=0;
    started=false;
    gameseq=[];
    userseq=[];
}