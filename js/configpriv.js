window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    if (
        window.location.pathname.includes('about.html') ||
        window.location.pathname.includes('servicios.html') ||
        window.location.pathname.includes('gallery.html') ||
        window.location.pathname.includes('testimony.html') ||
        window.location.pathname.includes('carta.html')
    ) {
        navbar.classList.add('scrolled'); 
        navbar.style.background = '#151219';
    } else {
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (navbarTogglerIcon) {
                navbar.style.background = '#151219'; 
            }
        } else {
            navbar.classList.remove('scrolled');
            if (navbarTogglerIcon) {
                navbar.style.background = 'transparent'; 
            }
        }
    }
});

$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});


$(document).ready(function(){
    $('#multiImageCarousel').slick({
      dots: false,          
      infinite: true,     
      speed: 500,         
      slidesToShow: 4,    
      slidesToScroll: 1,  
      autoplay: true,      
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3, 
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2, 
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

componente = document.getElementById('titulo-primavera-bar');
const textoServicios = "Primavera bar";
index = 0;

function liveWriting (){
    if(index < textoServicios.length){
        mode = "writing";
    } else {
        mode = "erasing";
        setTimeout(liveWriting,1000);
    }
    
    if(mode == "writing"){
        componente.textContent += textoServicios[index];
        index++;
        setTimeout(liveWriting,100);
    }
    
    if(mode == "erasing"){
        componente.textContent[index] = "";
        index--;
        setTimeout(liveWriting,100);
    }
}

liveWriting();

