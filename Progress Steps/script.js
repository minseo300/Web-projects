const circles=document.querySelectorAll(".circle");
const bars=document.querySelectorAll(".bar");
const prev=document.querySelector(".btns #prev");
const next=document.querySelector(".btns #next");

let step=0;
const DISABLED="disabled";
const ACTIVE="active";
const CIRCLE_ACTIVE="circle-active";
function checkStep()
{
    if(step===0)
    {
        next.disabled=false;
        prev.classList.add(DISABLED);
        prev.classList.remove(ACTIVE);
        next.classList.add(ACTIVE);
        prev.disabled=true;
    }
    else if(step===3)
    {
        next.classList.add(DISABLED);
        next.classList.remove(ACTIVE);
        next.disabled=true;
    }
    else
    {
        next.classList.add(ACTIVE);
        prev.classList.add(ACTIVE);
        prev.disabled=false;
        next.disabled=false;
    }
}
function coloring(step)
{
    bars[step].classList.add(ACTIVE);
    circles[step+1].classList.add(CIRCLE_ACTIVE);
}
function returnColoring(step)
{
    circles[step].classList.remove(CIRCLE_ACTIVE);
    bars[step-1].classList.remove(ACTIVE);
}
function handlePrev()
{
    returnColoring(step);
    step=step-1;
    checkStep();
}
function handleNext()
{
    coloring(step);
    step=step+1;
    checkStep();
}

checkStep();
if(prev)
{
    prev.addEventListener("click",handlePrev);
}
if(next)
{
    next.addEventListener("click",handleNext);
}

