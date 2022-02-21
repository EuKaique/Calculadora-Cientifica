$(function(){
    //Declaração das variáveis
    var btnComum = $('#btn-comum');
    var btnCientifica = $('#btn-cientifica');
    var tecladoCientifica = $('.cal-cientifica');
    var calculadora = $('.calculadora');
    var botoes = $('.botoes');
    var visor = $('.visor');
    var textoCalculo = $('#text-calculo');
    
    //var virgula = $('#rcVir');

    
    //Adiciona e remove a classe ativo, mostra e oculta funções das calculadoras
    btnComum.on('click',function(){
        btnCientifica.removeClass('ativo');
        btnComum.addClass('ativo');

        tecladoCientifica.hide();

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

        tecladoCientifica.fadeIn(400);

        //trata as dimensões da calculadora
        calculadora.width('80%');
        visor.width('61%');
        botoes.css('margin-left','3.5rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','16%');
    });

});

function teclado(num){
    /*
    if(num == 7){
        numeros[0] = 7;

    }else if(num == 8){
        numeros[1] = 8;
    }
    */
    //var colecao = numeros.values();

    var expressao = document.querySelector('.visor-label').innerHTML;
    var visorLabel = $('.visor-label');
    var formula = $('#calculo');

    visorLabel.text(expressao + num);
    formula.text(expressao + num);
    
    /*
    numeros.forEach(function () {
        $('.visor-label').attr('label');
        $('label').text(num);
    });
    */
   
    
}

function limparTudo(){
    $('.visor-label').text('');
    $('#calculo').text('');
}

function limparUm(){
    var expressao = document.querySelector('.visor-label').innerHTML;
    
    document.querySelector('.visor-label').innerHTML = expressao.substring(0, expressao.length -1);
}

function calcular(){
    var expressao = document.querySelector('.visor-label').innerHTML;

    if(expressao){
        document.querySelector('.visor-label').innerHTML = eval(expressao);
    }
}
