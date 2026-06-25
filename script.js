"use strict";

/* =========================================
   ELEMENTS
========================================= */

const pages = document.querySelectorAll(".page");

const bgSong = document.getElementById("bgSong");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const blehBtn = document.getElementById("blehBtn");
const startBtn = document.getElementById("startBtn");

const nextButtons = document.querySelectorAll(".nextBtn");

const loveAnswerBtn = document.getElementById("loveAnswerBtn");

const seeAnswerBtn = document.getElementById("seeAnswer");
const loveResult = document.getElementById("loveResult");
const stickerBox = document.getElementById("stickerBox");
const sticker = document.getElementById("sticker");

/* =========================================
   PAGE CHANGE
========================================= */

function showPage(pageId){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    const page=document.getElementById(pageId);

    if(page){

        page.classList.add("active");

    }

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* =========================================
   PAGE 1
========================================= */

yesBtn.addEventListener("click",()=>{

    showPage("page3");

});

noBtn.addEventListener("click",()=>{

    showPage("page2");

});

/* =========================================
   PAGE 2
========================================= */

blehBtn.addEventListener("click",()=>{

    showPage("page3");

});

/* =========================================
   PAGE 3
========================================= */

startBtn.addEventListener("click",()=>{

    showPage("page4");

});

/* =========================================
   QUESTION PAGES
========================================= */

nextButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        showPage(btn.dataset.next);

    });

});
/* =========================================
   PAGE 16
   MOVING BUTTON
========================================= */

let moveCount = 0;

const movePositions = [

    {
        top:"68%",
        left:"22%"
    },

    {
        top:"28%",
        left:"72%"
    },

    {
        top:"68%",
        left:"72%"
    }

];

loveAnswerBtn.addEventListener("click",()=>{

    if(moveCount < movePositions.length){

        loveAnswerBtn.style.position="absolute";

        loveAnswerBtn.style.top=
        movePositions[moveCount].top;

        loveAnswerBtn.style.left=
        movePositions[moveCount].left;

        loveAnswerBtn.style.transform=
        "translate(-50%,-50%)";

        moveCount++;

        return;

    }

    /* Open Page 17 */

    showPage("page17");

    /* Play Song */

    bgSong.currentTime = 0;

    bgSong.play().catch(()=>{});

});
/* =========================================
   PAGE 17
========================================= */

seeAnswerBtn.addEventListener("click",()=>{

    /* Hide Button */

    seeAnswerBtn.style.display="none";

    /* Love Message */

    loveResult.innerHTML=`

        <div class="loveText">

            YES I LOVEEE YOUHHH ❤️

            <br><br>

            SOOO MUCHHH PAGLIII 🥹❤️

        </div>

    `;

    /* Show Sticker */

    setTimeout(()=>{

        stickerBox.classList.add("show");

    },1200);

});


/* =========================================
   STICKER CLICK
========================================= */

sticker.addEventListener("click",()=>{

    showPage("page18");

});
    /* =========================================
   RESET
========================================= */

function resetWebsite(){

    moveCount=0;

    loveAnswerBtn.style.position="relative";

    loveAnswerBtn.style.top="";

    loveAnswerBtn.style.left="";

    loveAnswerBtn.style.transform="";

    stickerBox.classList.remove("show");

    seeAnswerBtn.style.display="inline-block";

    
}


/* =========================================
   PREVENT IMAGE DRAG
========================================= */

document.querySelectorAll("img").forEach(img=>{

    img.draggable=false;

});


/* =========================================
   PREVENT RIGHT CLICK
========================================= */

document.addEventListener("contextmenu",e=>{

    e.preventDefault();

});


/* =========================================
   PREVENT DOUBLE CLICK ZOOM
========================================= */

document.addEventListener("dblclick",e=>{

    e.preventDefault();

});


/* =========================================
   END
========================================= */

console.log("❤️ Love Website Loaded Successfully ❤️");
/* =========================================
   RESTART BUTTON
========================================= */

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click",()=>{

    location.reload();

});