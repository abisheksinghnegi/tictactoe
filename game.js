let box= document.querySelectorAll(".box");
let winmess= document.querySelector("#winmessage");
let messcont= document.querySelector(".messcont");
let resbtn= document.querySelector("#resbtn");
let newbtn= document.querySelector("#newbtn");
let score= document.querySelector("#score");

let turn0= true;

const disablebox=()=>{
    for (let boxes of box){
        boxes.disabled=true;
        
    }
}

const boxenabled=()=>{
    for (let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}

const showwinner=(winner)=>{
    winmess.innerText=`Congratulation  ${winner} is winner`;
    messcont.classList.remove("hide");
    disablebox();
}

const reset=()=>{
    turn0=true;
    messcont.classList.add("hide");
    boxenabled();
}

let winalgo=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

box.forEach((box) => {
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="O";
            turn0=false;
        } else{
            box.innerText="X";
            turn0=true;
        }
        checkwinner();
        box.disabled=true;
    }); 
});

const checkwinner=()=>{
    for(pattern of winalgo){
        let p1= box[pattern[0]].innerText;       
        let p2= box[pattern[1]].innerText; 
        let p3= box[pattern[2]].innerText; 

        if(p1!=""&& p2!=""&& p3!=""){
            if(p1===p2&&p2===p3){
                console.log("winner",p1);
                showwinner(p1);

                let Xscore=0
                let Oscore=0
                if (p1=="X"){
                    Xscore++;
                    score.innerText=`X score is ${Xscore} and ${Oscore}`;
                    score.classList.remove("hide");
                }else{
                    Oscore++;
                    score.innerText=`X score is ${Xscore} and  ${Oscore}`;
                    score.classList.remove("hide");
                }

                
            }
        }
    }
};


resbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
