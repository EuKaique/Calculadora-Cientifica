$(function(){
    //Declaração das variáveis
    var btnComum = $('#btn-comum');
    var btnCientifica = $('#btn-cientifica');
    var tecladoCientifica = $('.cal-cientifica');
    var calculadora = $('.calculadora');
    var botoes = $('.botoes');
    var visor = $('.visor');
    var textoCalculo = $('#text-calculo');

    //Adiciona e remove a classe ativo, mostra e oculta funções das calculadoras
    btnComum.on('click',function(){
        btnCientifica.removeClass('ativo');
        btnComum.addClass('ativo');

        tecladoCientifica.fadeToggle(300);

        //trata as dimensões da calculadora
        calculadora.width('50%');
        visor.width('45%');
        botoes.css('margin-left','0px');
        btnCientifica.css('margin-left','40px');
        btnComum.css('margin-left','10px');
        textoCalculo.css('margin-left','28%');
    });

    btnCientifica.on('click',function(){
        btnComum.removeClass('ativo');
        btnCientifica.addClass('ativo');

        tecladoCientifica.fadeIn(300);

        //trata as dimensões da calculadora
        calculadora.width('80%');
        visor.width('61%');
        botoes.css('margin-left','3.5rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','16%');
    });

});