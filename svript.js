// menu dropdown
const toggleButton = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('red')
})

// FAQ affiche
// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('active')
//     })

// })

const quistion = document.querySelectorAll('.quistion')
const faq = document.querySelectorAll('.faq')
for (let i=0 ; i<quistion.length;i++){
    quistion[i].addEventListener('click', function () {
        faq[i].classList.toggle('active')
        for (let g = 0; g < quistion.length; g++) {
        if (g != i) {
            faq[g].classList.remove('active')
        }
    }
    })
    
}




// search
const search = document.getElementsByClassName('search')[0]
const search_icon = document.getElementsByClassName('search_icon')[0]

search_icon.addEventListener('click', () => {
    search.classList.toggle('red')

})


// footer 
const p = document.querySelectorAll('.list_title');
const ul = document.querySelectorAll('.footer_section .link .ul');
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener('click', function () {
        // for(let g =0; g<p.length;g++)
        // ul[g].style.display = "none";

        if (ul[i].style.display === "flex") {
            ul[i].style.display = "none";
        }
        else {
            ul[i].style.display = "flex";
            for (let g = 0; g < p.length; g++) {
                if (g != i) {
                    ul[g].style.display = "none";
                }
            }
        }
    })
}

// const openMore = document.querySelectorAll('.open_more');
// const modalService = document.querySelectorAll('.modal-service');
// const closeSer = document.querySelectorAll('.close_ser');
// console.log(modalService)
// for(let f=0 ; f< openMore.length ; f++){
//     openMore[f].addEventListener('click', () => {
//         modalService[f].classList.add('open_model')
//     })
    
// }
// for(let f=0 ; f< closeSer.length ; f++){
//     closeSer[f].addEventListener('click', () => {
//         modalService[f].classList.remove('open_model')
//     })
// }




// const open = document.querySelectorAll('.open')[0]
// const modal = document.querySelectorAll('.modal')[0]
// const close = document.querySelectorAll('.close')[0]
// open.addEventListener('click', () => {
//     modal.classList.add('open_model')
// })
// close.addEventListener('click', () => {
//     modal.classList.remove('open_model')
// })


// modal 
const openMore = document.querySelectorAll('.open');
const modalService = document.querySelectorAll('.modal');
const closeSer = document.querySelectorAll('.close');
console.log(modalService)
for(let f=0 ; f< openMore.length ; f++){
    openMore[f].addEventListener('click', () => {
        modalService[f].classList.add('open_model')
    })
    
}
for(let f=0 ; f< closeSer.length ; f++){
    closeSer[f].addEventListener('click', () => {
        modalService[f].classList.remove('open_model')
    })
}

// affiche drop

const drop_service = document.querySelector('.drop_service')
const droped = document.querySelector('.droped')
drop_service.addEventListener('click' , ()=>{
    droped.classList.toggle('affiche')
})

document.addEventListener("DOMContentLoaded", function () {
const carousel = document.querySelector('.testimonials');
const items = document.querySelectorAll('.test-client');
const itemWidth = items[0].clientWidth;
const  interval = 2000;
let index=0;
function scrollcarousel(){
    index  = (index + 1) % items.length;
    const translateX = -index * itemWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}
setInterval(scrollcarousel, interval);
});






// const list = document.getElementsByClassName('list');
// const li = createElement('li');
// console.log(li);
// const li = document.getElementsByName('text');
// console.log(li);
// const li = document.querySelector(".item");


// li.classList.add("red")// add style
//li.classList.remove("red")//remove style

// li.id = "class"//add id or change

// const attribute = li.setAttribute("id" , "nime")
// console.log(attribute)
// console.log(li);

// const btn =document.getElementsByClassName("button")[0]
// btn.addEventListener("click", () => {
//          li.classList.toggle("red")
// })