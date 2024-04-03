// * responsive navbar 
const toggleButton = document.getElementById('toggleNav');

const navLinks = document.querySelector('.right-links');
document.getElementById('toggleNav').innerHTML = "Hide ";
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
    if (document.getElementById('toggleNav').innerHTML === "show ") {
        document.getElementById('toggleNav').innerHTML = "Hide ";
    }
    else {
        document.getElementById('toggleNav').innerHTML = "show ";
    }
});

// * mouse courser 

let mouse = document.querySelector('.cursor');
let links = document.querySelectorAll('.right-links a');

window.addEventListener('mousemove', cursorFun);

function cursorFun(e) {
    mouse.style.top = e.pageY+ 'px';
    mouse.style.left = e.pageX + 'px';
}

links.forEach( links => {
    links.addEventListener('mouseover', () => {
        
    });
});