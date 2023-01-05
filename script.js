//Responsive Header
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Rating Slide
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if (count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//Menu
//Show Pizzas on Menu
function showMenuPizza() {
    document.getElementById('menuPizza').style.display = "flex";
    document.getElementById('menuBurguer').style.display = "none";
    document.getElementById('menuDrink').style.display = "none";
    document.getElementById('menuPizza').style.animationName = "fadeIn";
    
    document.querySelector('#itemPizza').classList.add("active");
    document.querySelector('#itemBurguer').classList.remove("active");
    document.querySelector('#itemDrink').classList.remove("active");
}

//Show Burguers on Menu
function showMenuBurguer() {
    document.getElementById('menuPizza').style.display = "none";
    document.getElementById('menuBurguer').style.display = "flex";
    document.getElementById('menuDrink').style.display = "none";
    document.getElementById('menuBurguer').style.animationName = "fadeIn";
    
    document.querySelector('#itemPizza').classList.remove("active");
    document.querySelector('#itemBurguer').classList.add("active");
    document.querySelector('#itemDrink').classList.remove("active");
}

//Show drinks on Menu
function showMenuDrink() {
    document.getElementById('menuPizza').style.display = "none";
    document.getElementById('menuBurguer').style.display = "none";
    document.getElementById('menuDrink').style.display = "flex";
    document.getElementById('menuDrink').style.animationName = "fadeIn";
    
    document.querySelector('#itemPizza').classList.remove("active");
    document.querySelector('#itemBurguer').classList.remove("active");
    document.querySelector('#itemDrink').classList.add("active");
}