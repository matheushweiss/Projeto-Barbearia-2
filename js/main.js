// DOM - Document Object Model
// abre e fecha alguma coisa

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//console.log(toggle)

for (const element of toggle){
  element.addEventListener('click', function(){

nav.classList.toggle('show')



  })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function(){
 nav.classList.remove('show')
  })
}