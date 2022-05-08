window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
 showNavOnScroll()
 showBackToTopButtonOnScroll()
 ActivateMenuAtCurrentSection(home)
 ActivateMenuAtCurrentSection(services)
 ActivateMenuAtCurrentSection(about)
 ActivateMenuAtCurrentSection(contact)
}

function ActivateMenuAtCurrentSection(section){
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção ja passou da linha
  // quais dados eu vou precisar?

  //o topo da secao
  const sectionTop = section.offsetTop

  // a altura da secao
  const sectionHeight = section.offsetHeight

  // o topo da secao chegou ou ultrapssou a linha alvo
  const sectionTopReacheOrPassedTargetLine = targetLine >= sectionTop

  // onde a secao terminar 
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da secao
  const sectionBounderies = sectionTopReacheOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBounderies){
    menuElement.classList.add('active')
  }
}


function showNavOnScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else{
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if(scrollY > 400){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home, #home img, #home stats, #services, #services header #services .card, #about, #about header, #about .content`);