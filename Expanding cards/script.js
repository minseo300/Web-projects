const items=document.getElementsByClassName("item");
let selected=items[0];
let beforeSelected;
const HIDDEN="hidden";
const MAIN="main";
const OTHER="other";
function handleClick(event)
{
    beforeSelected=selected;
    const item_index=Array.from(items).indexOf(event.target);
    selected=items[item_index];
    if(beforeSelected!==selected)
    {
        handleSelected();
    }
    else if(beforeSelected===selected)
    {
        console.log("clicked same");
    }

}
function handleSelected()
{
    selected.firstChild.nextSibling.classList.remove(HIDDEN);
    selected.classList.add(MAIN);
    selected.classList.remove(OTHER);
    if(beforeSelected)
    {
        beforeSelected.classList.remove(MAIN);
        beforeSelected.classList.add(OTHER);
        beforeSelected.firstChild.nextSibling.classList.add(HIDDEN);
    }
}
if(items)
{
    handleSelected(selected);
    Array.from(items).forEach(item=>
        item.addEventListener("click",handleClick)
    );

}

