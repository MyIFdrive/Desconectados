function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

function changeMarcado() {
  const orginal = document.querySelector('.normal').style.display='none'
  const marcado = document.querySelector('.marcado').style.display='block'
}

function changeNormal() {
  const orginal = document.querySelector('.normal').style.display='block'
  const marcado = document.querySelector('.marcado').style.display='none'
}

function rotate () {
  document.querySelector('#topo').style.rotate='405deg'
  
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
     })
}

  

        
