

/* SVG DE ONDA */
(function() {

  var viewWidth, xPos;

  viewWidth = -1 * $(window).width();
  xPos = 0;

  $(document).on('scroll', function() {

    if (xPos > viewWidth) {
      xPos -= 20;
    } else {
      xPos = 0;
    }

    $('#svg').css('left', xPos);
  });

}());

////////////////////
// Automate Animation
////////////////////

(function() {

  var obj, scrollToThis, interval;

  obj = $('body');
  scrollToThis = obj.height();

  function scroll(callback) {

    obj.animate({
      scrollTop: 0
    }, 10000);
  }
  
  obj.scrollTop(obj.height());
  scroll();

}());







// VOLTAR AO TOPO
$(function() {
  $('.topo a').click(function() {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});

// FUNÇÕES PARA DIMINUIR OU AUMENTAR O TAMANHO DA FONTE DO CONTEÚDO DO TEXTO
var tamanhoFonte = 16;
var tamanhoLinha = tamanhoFonte + 10;

function diminuirFonte(){
    console.log("%c INICIANDO FUNÇÃO PARA DIMINUIR TAMANHO DA FONTE","background:#D62261;color:#fff;");
    tamanhoFonte = tamanhoFonte - 2;
    if(tamanhoFonte==0){
      tamanhoFonte = 2;
    }
    tamanhoLinha = tamanhoFonte + 10;
    $(".conteudo-texto article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article blockquote").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article blockquote").css("line-height",tamanhoLinha+"px");
}




function aumentarFonte(){
  console.log("%c INICIANDO FUNÇÃO PARA AUMENTAR TAMANHO DA FONTE","background:#D62261;color:#fff;");
  tamanhoFonte = tamanhoFonte + 2;
    if(tamanhoFonte==60){
      tamanhoFonte = 58;
    }
    tamanhoLinha = tamanhoFonte + 10;
    $(".conteudo-texto article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article blockquote").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article blockquote").css("line-height",tamanhoLinha+"px");
}


// ABRIR O SUB MENU
function abrirSubMenu(idMenu){

  if(idMenu==1){
    $("#subMenuCursos").css("display","block");
    $("#subMenuSaidas").css("display","none");
  }

  if(idMenu==2){
    $("#subMenuSaidas").css("display","block");
    $("#subMenuCursos").css("display","none");
  }




}


// FECHAR O SUB MENU
function fecharSubMenu(idMenu){
  
  if(idMenu==1){
    $("#subMenuCursos").css("display","none");
  }

  if(idMenu==2){
    $("#subMenuSaidas").css("display","none");
  }

}

/* FUNÇÃO PARA ABRIR OU FECHAR A BUSCA */
var busca = 0;
function abrirFecharBusca(){
   
   if(busca==0){
     $(".caixa-busca").css("top","101px");
     busca=1;
   }else{
     $(".caixa-busca").css("top","0px");
     busca=0;
   }

}

var menuAberto = 0;
function abrirFecharMenuMobile(){
    
    if(menuAberto==0){

      // MUDAR A CLASSE DO ÍCONE
      $(".gatilhos-menu-mobile a i").removeClass("fa-bars");
      $(".gatilhos-menu-mobile a i").addClass("fa-times");
      $(".menu-mobile").css("top","66px");
      
      menuAberto=1;
    }else{
      
      // MUDAR A CLASSE DO ÍCONE
      $(".gatilhos-menu-mobile a i").removeClass("fa-times");
      $(".gatilhos-menu-mobile a i").addClass("fa-bars");
      $(".menu-mobile").css("top","-101vh");

      menuAberto=0;
    }


}





// FUNÇÕES PARA DIMINUIR OU AUMENTAR O TAMANHO DA FONTE DO CONTEÚDO DO TEXTO
var tamanhoFonte = 16;
var tamanhoLinha = tamanhoFonte + 10;

function diminuirFonte(){
    console.log("%c INICIANDO FUNÇÃO PARA DIMINUIR TAMANHO DA FONTE","background:#D62261;color:#fff;");
    tamanhoFonte = tamanhoFonte - 2;
    if(tamanhoFonte==0){
      tamanhoFonte = 2;
    }
    tamanhoLinha = tamanhoFonte + 10;
    $(".conteudo-texto article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article blockquote").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article blockquote").css("line-height",tamanhoLinha+"px");
}




function aumentarFonte(){
  console.log("%c INICIANDO FUNÇÃO PARA AUMENTAR TAMANHO DA FONTE","background:#D62261;color:#fff;");
  tamanhoFonte = tamanhoFonte + 2;
    if(tamanhoFonte==60){
      tamanhoFonte = 58;
    }
    tamanhoLinha = tamanhoFonte + 10;
    $(".conteudo-texto article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article blockquote").css("font-size",tamanhoFonte+"px");
    $(".conteudo-texto article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo-texto article blockquote").css("line-height",tamanhoLinha+"px");
}



/* ATIVAR CLASSE SOBRE AS LISTAS */
function ativarSAList(seletor){
  
  $("section.slides-ambientes .container ol li").removeClass("active");
  $(seletor).addClass("active");

}



// FECHAR A GALERIA FULL SCREEN
function fecharGaleriaFullScreen(){
   
   console.log("FECHANDO GALERIA");
   $(".galeria-full-screen").fadeOut(500);
   
   // GARANTIR QUE ELA ESTARÁ LIMPA NO MOMENTO DA INICIALIZAÇÃO
   $('#galeriaFullScreen').html("");
   $('#galeriaFullScreen').trigger('destroy.owl.carousel');
 
}


// ABRIR A GALERIA FULLSCREEN PARA AS GALERIAS ÚNICAS (POST TYPE)
function abrirGaleriaFullScreen(seletor, uniqueGaleriaContainer){

       // PEGANDO A PRIMEIRA IMAGEM (IMAGEM CLICADA
       var primeiraImagem = $(seletor).attr("data-url");
       var legendaImagem  = $(seletor).attr("data-legenda");
   
       console.log("ABRINDO GALERIA ESTAMOS EM PÁGINAS DE GALERIAS");
       $(".galeria-full-screen").fadeIn(500);
              
       // CARREGAR IMAGENS
       console.log("OBTENDO AS IMAGENS DA GALERIA");
       var miniaturas = $("#galeriaContainer"+uniqueGaleriaContainer+" .mini-caixa").children('a').map(function(){
             return $(this).attr('data-url');
       }).get();
       console.log("IMAGENS OBTIDAS:");
       console.log(miniaturas);

       // LEGENDA MENORES
       console.log("OBTENDO AS LEGENDAS DAS IMAGENS DE MINIATURAS DA GALERIA");
       var legendas = $("#galeriaContainer"+uniqueGaleriaContainer+" .mini-caixa").children('a').map(function(){
             return $(this).attr('data-legenda');
       }).get();

       console.log("LEGENDAS OBTIDAS:");
       console.log(legendas);

       // ALIMENTAR A DIV DO CARROUSEL
       // DEMAIS IMAGENS (AS QUE ESTAVAM NA MINIATURA)

       $("#galeriaFullScreen").append('<div class="item"><img src="'+primeiraImagem+'" alt="'+legendaImagem+'"/><p>'+legendaImagem+'</p></div>');

       for(var i = 0;i<miniaturas.length;i++){
              if(legendaImagem!=legendas[i]){               
                 $("#galeriaFullScreen").append('<div class="item"><img src="'+miniaturas[i]+'" alt="'+legendas[i]+'"/><p>'+legendas[i]+'</p></div>');
              }
       }

       // INICIALIZAR O SLIDE
       galeriaFullScreenInit();

}

                        var galeriaFullScreen;
                        var galeriaCriada = 0;

                        function galeriaFullScreenInit(){
                              

                              galeriaFullScreen = $('#galeriaFullScreen').owlCarousel({
                                        loop:true,
                                        margin:0,
                                        items: 1,
                                        autoplay: true,
                                        center: true,
                                        navText: [
                                            '<img src="images/esquerda.png" alt="Imagem anterior">',
                                            '<img src="images/direita.png" alt="Próxima imagem">'
                                        ], 
                                        navContainer: '.custom-nav-galeria',
                                        autoplayTimeout:6500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                       
                                });

                        }