const toggleButton = document.getElementsByClassName('menu')[0]
const navbar = document.getElementsByClassName('navbar')[0]
console.log(navbar)
console.log(toggleButton)
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('red')
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })

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