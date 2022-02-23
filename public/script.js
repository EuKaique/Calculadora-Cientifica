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

var visorZero = $('.visor-zero').text('0');

function teclado(num){
    
    var expressao = $('.visor-label').html();
    var visorLabel = $('.visor-label');
    var formula = $('#calculo');

    visorZero.css('display','none');
    
    visorLabel.text(expressao + num);

    formula.text(expressao + num);
    
    
    
}

//Faz o fatorial
$(document).on('click','#rcFact', function(){
    valor = Number($('.visor-label').html());

    var fatorial = 1;

    for(i=valor; i > 1; i--){
        fatorial = fatorial * i; 
    }
    
    $('#calculo').text(valor + '!');
    $('.visor-label').html(fatorial.toString().replace('.',','));
    

});

//Faz a raiz quadrada
$(document).on('click','#rcRaiz', function(){
    valor = Number($('.visor-label').html());

    raiz = Math.sqrt(valor);
    
    $('#calculo').text('√' + valor);
    $('.visor-label').html(raiz.toString().replace('.',','));
    
});

//Faz o logaritmo
$(document).on('click','#rcLog', function(){
    valor = parseFloat($('.visor-label').html());

    //log = Math.log(valor) / Math.log(2.71828182845904523);
    log = Math.log(valor);

    $('#calculo').text(valor + 'log');
    $('.visor-label').html(log.toString().replace('.',','));
    
});

//Faz o ln
$(document).on('click','#rcLn', function(){
    valor = parseFloat($('.visor-label').html());

    ln = Math.log(valor) / Math.log(2.71828182845904523);

    $('#calculo').text(valor + 'ln');
    $('.visor-label').html(ln.toString().replace('.',','));
    
});

//Faz a fração
$(document).on('click','#rcFra', function(){
    valor = parseFloat($('.visor-label').html());

    fracao = 1 / valor;
    
    $('#calculo').text(1 + '/' + valor);
    $('.visor-label').html(fracao.toString().replace('.',','));
    
});

//Faz o seno
$(document).on('click','#rcSeno', function(){
    valor = parseFloat($('.visor-label').html());

    seno = Math.sin(valor);
    
    $('#calculo').text(valor + 'sen');
    $('.visor-label').html(seno.toString().replace('.',','));
    
});

//Faz o coseno
$(document).on('click','#rcCos', function(){
    valor = parseFloat($('.visor-label').html());

    coseno = Math.cos(valor);
    
    $('#calculo').text(valor + 'cos');
    $('.visor-label').html(coseno.toString().replace('.',','));
    
});

//Faz a tangente
$(document).on('click','#rcTan', function(){
    valor = parseFloat($('.visor-label').html());

    tangente = Math.tan(valor);
    
    $('#calculo').text(valor + 'tan');
    $('.visor-label').html(tangente.toString().replace('.',','));
    
});

//Faz o exponencial
$(document).on('click','#rcExp', function(){
    valor = $('.visor-label').html();
    
    $('#calculo').text(valor + ',e+');
    $('.visor-label').html(valor + ',e+');
    
});

//Faz o euler
$(document).on('click','#rcE', function(){
    valor = parseFloat($('.visor-label').html());

    euler = (valor) * 2.71828182846;

    $('#calculo').text(valor + 'e');
    $('.visor-label').html(euler.toString().replace('.',','));
    
});

//Faz o euler elevado
$(document).on('click','#rce-elevado', function(){
    valor = parseFloat($('.visor-label').html());

    euler = 2.71828182846;
    eulerElevado = Math.pow(euler,valor);

    $('#calculo').text('e-elevado a ' + valor);
    $('.visor-label').html(eulerElevado.toString().replace('.',','));
    
});

//Faz o phi
$(document).on('click','#rcTT', function(){
    valor = parseFloat($('.visor-label').html());

    phi = (valor) * 3.14159265359;

    $('#calculo').text(valor + 'TT');
    $('.visor-label').html(phi.toString().replace('.',','));
    
});

//Faz a porcentagem
$(document).on('click','#rcPercentage', function(){
    valor = parseInt($('.visor-label').html());

    porcentagem = valor / 100;

    $('#calculo').text(valor + '%');
    $('.visor-label').html(porcentagem.toString().replace('.',','));
    
});

//Faz o 10 elevado a x
$(document).on('click','#rcDez', function(){
    valor = parseInt($('.visor-label').html());

    dezElevado = Math.pow(10,valor);

    $('#calculo').text('10 elevado a ' + valor);
    $('.visor-label').html(dezElevado.toString().replace('.',','));
    
});



function limparTudo(){
    visorZero.css('display','inline-block');
    visorZero.text('0');
    $('.visor-label').text('');
    $('#calculo').text('');
}

function limparUm(){
    var expressao = $('.visor-label').html();

    if(expressao != '0' && expressao.length != 1){
        $('.visor-label').html(expressao.substring(0, expressao.length -1));
    }
    if(expressao.length == 1){
        $('.visor-label').text('0');
    }

}

function calcular(){
    var expressao = document.querySelector('.visor-label').innerHTML;

    if(expressao){
 
        document.querySelector('.visor-label').innerHTML = eval(expressao);
    }
}

