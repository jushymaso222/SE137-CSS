//reference to the button that opens and closes the tray
var trayButton = document.querySelector(`aside button:first-child`)

//opens and closes the tray when the button is clicked
trayButton.addEventListener(`click`, toggle)
function toggle(e)
{
   document.querySelector(`.tray`).classList.toggle(`hide`)
}

//Tab buttons are stored in an array
var buttons = Array.from(document.querySelectorAll(`nav button`))
var details = Array.from(document.querySelectorAll(`details`))
console.log(details)

//Adds event listeners to all buttons in the array
for(let i=0; i<buttons.length; i++)
{
   buttons[i].addEventListener(`click`, butts)
}

for(let i=0; i<details.length; i++)
{
   details[i].addEventListener(`click`, deets)
}

//removes the active class from all buttons and adds it to the one that was clicked
//Adds tab name to the breadcrumbs
function butts(e)
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].classList.remove(`active`);
    }
    if (e.target.nodeName == 'BUTTON') {
        e.target.classList.add(`active`)
        document.querySelector(`#breadcrumbs`).innerHTML= `<a href="#">SE137</a> > <a href="#">W6</a> > <a href="#">Homework</a> > <a href="#">${e.target.innerText}</a>`
    }

}

function deets(e) {
    var svg = e.target.querySelector(`path`)
    e.target.classList.toggle(`activeTab`)

    if (e.target.classList.contains(`activeTab`)) {
        svg.setAttribute('d', "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z");
    } else {
        svg.setAttribute('d', "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z");
    }
}

