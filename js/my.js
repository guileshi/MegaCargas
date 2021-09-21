/* Esconder a barra do topo */
$(window).scroll(function (e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop(); // Variavel para pegar o scroll
    var isHide = true; // Deixar a barra transparente ao entrar no site

    // Se o scroll não for 0, adiciona a classe para esconder
    if (scroll != 0) { 
        $('#topBar').addClass("menuContact-hide");
        isHide = false
    } else { // Se o scroll for 0, remove a classe para esconder
        $('#topBar').removeClass("menuContact-hide");
        isHide = true
    }

    if (isHide) { // Se estiver escondido, deixa a barra transparente
        $('#navbarTop').removeClass("topbarSolid")
    } else if (!isHide) { // Se não estiver escondido, deixa a barra solida
        $('#navbarTop').addClass("topbarSolid")
    }

    // Quando o scroll for maior que 200, mostra a seção de serviço
    if (scroll >= 200) { 
        $('#services').removeClass("hide");
    }

    // Quando o scroll for maior que 550, mostra o botão para voltar para o topo
    if (scroll >= 550) {
        $('#rotas').removeClass("hide");
        $('.voltarTopo').removeClass("sideSlide")
    } else if (scroll < 550) {
        $('.voltarTopo').addClass("sideSlide")
    }

    // Quando o scroll for 750, mostra o a seção de contatos da pagina de index
    if (scroll >= 750) {
        $('#contatos').removeClass("hide");
    }

    // Apenas um exemplo de teste
    // var person = {
    //     name: 'hbt',
    //     age: 21
    // };
    // person['name']

    // Ao clicar no botão de collapse, deixa a barra de navegação solida
    $('#colapsoBtn').click(function () {
        $('#navbarTop')['addClass']("topbarSolid");
    })
});

(function ($) {
    /*Efeito de rolagem de tela para os links clicados */
    var $doc = $('html,body');
    $(".scroll-page").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})(jQuery);

/* Mudar conteudo de um formulario */
$('.mystuff_hide').hide(); /* Começa Escondido */
$('#mystuff').change(function () {

    if ($(this).val() == "opt2") {
        $('.mystuff_hide').show(); /* Mostrar */
        $('#valorNota, #peso, #quantidade').attr('required', true);
    } else {
        $('.mystuff_hide').hide(); /* Esconder */
        $('#valorNota, #peso, #quantidade').removeAttr('required');
    }
});

// Transição de tela de loading
$(window).on("load", function () {
    $(".gooey").fadeOut("slow");
});