const toggleButton = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('red')
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })

})

const search = document.getElementsByClassName('search')[0]
const search_icon = document.getElementsByClassName('search_icon')[0]

search_icon.addEventListener('click', () => {
    search.classList.toggle('red')

})



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




const open = document.querySelectorAll('.open')[0]
const modal = document.querySelectorAll('.modal')[0]
const close = document.querySelectorAll('.close')[0]
open.addEventListener('click', () => {
    modal.classList.add('open_model')
})
close.addEventListener('click', () => {
    modal.classList.remove('open_model')
})




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