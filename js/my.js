/* Esconder a barra do topo */
$(window).scroll(function (e) {

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop(); // Variavel para pegar o scroll
    var isHide = true;

    console.log(scroll)

    if (scroll != 0) { // Se o scroll não for 0, adiciona a classe para esconder
        $('#topBar').addClass("menuContact-hide");
        isHide = false
    } else { // Se o scroll for 0, remove a classe para esconder
        $('#topBar').removeClass("menuContact-hide");
        isHide = true
    }

    if (isHide) {
        $('#navbarTop').removeClass("topbarSolid")
    } else if (!isHide) {
        $('#navbarTop').addClass("topbarSolid")
    }

    if (scroll >= 200) {
        $('#services').removeClass("hide");

    }

    if (scroll >= 550) {
        $('#rotas').removeClass("hide");
        $('.voltarTopo').removeClass("sideSlide")
    } else if (scroll < 550) {
        $('.voltarTopo').addClass("sideSlide")
    }

    if (scroll >= 750) {
        $('#contatos').removeClass("hide");
    }

    // var person = {
    //     name: 'hbt',
    //     age: 21
    // };
    // person['name']

    // var isScrolled = true;
    // if (isScrolled) {

    // } else {

    // }
    // return isScrolled ? 'asdad' : 'asdad'

    $('#colapsoBtn').click(function () {
        $('#navbarTop')['addClass']("topbarSolid");
    })

    // if (scroll === 0) {
    //     $('#colapsoBtn').click(function () {
    //         $('#navbarTop').addClass("topbarSolid");
    //         console.log("Clicou")
    //     })
    // } else{
        
    // }
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

$(window).on("load", function () {
    $(".gooey").fadeOut("slow");
});