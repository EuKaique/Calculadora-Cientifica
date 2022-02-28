$(function(){
    //Declaração das variáveis
    var btnComum = $('#btn-comum');
    var btnCientifica = $('#btn-cientifica');
    var tecladoCientifica = $('.cal-cientifica');
    var calculadora = $('.calculadora');
    var botoes = $('.botoes');
    var visor = $('.visor');
    var textoCalculo = $('#text-calculo');
    var telaCalculadora = window.screen.width;
    var rceElevado = $('#rce-elevado');
    var rcDez = $('#rcDez');
    var rcFact = $('#rcFact');
    var rcLn = $('#rcLn');
    var rcLog = $('#rcLog');
    var rcSeno = $('#rcSeno');
    var rcCos = $('#rcCos');
    var rcRaiz = $('#rcRaiz');
    var rcPot = $('#rcPot');
    var rcTan = $('#rcTan');
    var rcFra = $('#rcFra');
    var rcExp = $('#rcExp');
    var rcTT = $('#rcTT');
    var rcE = $('#rcE');
    var rcPon = $('#rcPon');
    var rcPercentage = $('#rcPercentage');
    var rc9 = $('#rc9');
    var rc8 = $('#rc8');
    var rc7 = $('#rc7');
    var rc6 = $('#rc6');
    var rc5 = $('#rc5');
    var rc4 = $('#rc4');
    var rc3 = $('#rc3');
    var rc2 = $('#rc2');
    var rc1 = $('#rc1');
    var rc0 = $('#rc0');
    var rcParenA = $('#rcParenA');
    var rcParenB = $('#rcParenB');
    var rcC = $('#rcC');
    var rcBack = $('#rcBack');
    var rcMais = $('#rcMais');
    var rcMenos = $('#rcMenos');
    var rcMulti = $('#rcMulti');
    var rcDivide = $('#rcDivide');

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

        if(telaCalculadora <= '1000' && telaCalculadora > '800'){
            calculadora.width('28rem');
            visor.width('78%');
            botoes.css('margin-left','0px');
            botoes.css('margin-top','0.5rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('left','20%');
            textoCalculo.css('top','4.5rem');
            textoCalculo.css('position','relative');
        }
        if(telaCalculadora <= '1620' && telaCalculadora > '1000'){
            botoes.css('margin-left','3.5rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('margin-left','28%');
        }
        if(telaCalculadora <= '800' && telaCalculadora > '600'){
            visor.width('100%');
            botoes.css('margin-top','0.8rem');
            textoCalculo.css('margin-left','31%');
        }
        if(telaCalculadora <= '600' && telaCalculadora > '500'){
            calculadora.width('18rem');
            visor.width('92%');
            textoCalculo.css('margin-left','26%');
            $('#btn-cientifica').css('margin-left','0');
            $('#btn-cientifica').css('margin-right','0');
        }
        if(telaCalculadora <= '500' && telaCalculadora > '340'){
            calculadora.width('18rem');
            visor.width('92%');
            textoCalculo.css('margin-left','26%');
            $('#btn-cientifica').css('margin-left','0');
            $('#btn-cientifica').css('margin-right','0');
            rcBack.css('padding','0.5rem 0.8rem');
            rcMais.css('padding','0.5rem 1.16rem');
            rcMenos.css('padding','0.5rem 1.33rem');
            rcMulti.css('padding','0.5rem 1.2rem');
            rcDivide.css('padding','0.5rem 1.3rem');
            $('.btn-teclado').css('margin-left','0.2rem');
        }
    });

    btnCientifica.on('click',function(){
        btnComum.removeClass('ativo');
        btnCientifica.addClass('ativo');

        tecladoCientifica.fadeIn(400);

        //trata as dimensões da calculadora
        if(telaCalculadora <= '1620' && telaCalculadora > '1000'){
            calculadora.width('80%');
            visor.width('61%');
            botoes.css('margin-left','3.5rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('margin-left','16%');
        }
        if(telaCalculadora <= '1000' && telaCalculadora > '800'){
            calculadora.width('53rem');
            visor.width('61%');
            botoes.css('margin-left','3.5rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('left','0%');
        }
        if(telaCalculadora <= '800' && telaCalculadora > '600'){
            calculadora.width('46rem');
            calculadora.height('28rem');
            botoes.css('margin-left','0.95rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('margin-left','9%');
            textoCalculo.css('top','4.5rem');
            textoCalculo.css('position','relative');
            visor.width('56%');
            rceElevado.css('padding','0.4rem 2.3rem');
            rcLn.css('padding','0.5rem 2.2rem');
            rcLog.css('padding','0.5rem 1.8rem');
            rcExp.css('padding','0.5rem 1.8rem');
            rcPot.css('padding','0.5rem 2.5rem');
            rcDez.css('padding','0.5rem 2.4rem');
            rcSeno.css('padding','0.5rem 2rem');
            rcCos.css('padding','0.5rem 2.3rem');
            rcTan.css('padding','0.5rem 2.4rem');
            rcTT.css('padding','0.5rem 2.6rem');
            rcFact.css('padding','0.5rem 2rem');
            rcPercentage.css('padding','0.5rem 2rem');
            rcRaiz.css('padding','0.5rem 2.2rem');
            rcFra.css('padding','0.5rem 1.6rem');
            rcE.css('padding','0.5rem 2.2rem');
            rcParenA.css('padding','0.5rem 2rem');
            rcParenB.css('padding','0.5rem 2rem');
            rcC.css('padding','0.5rem 2rem');
            rcBack.css('padding','0.5rem 1rem');
            rc9.css('padding','0.5rem 2rem');
            rc8.css('padding','0.5rem 2rem');
            rc7.css('padding','0.5rem 2rem');
            rc6.css('padding','0.5rem 2rem');
            rc5.css('padding','0.5rem 2rem');
            rc4.css('padding','0.5rem 2rem');
            rc3.css('padding','0.5rem 2rem');
            rc2.css('padding','0.5rem 2rem');
            rc1.css('padding','0.5rem 2rem');
            rc0.css('padding','0.5rem 2rem');
            rcPon.css('padding','0.5rem 2.2rem');
            rcIgual.css('padding','0.86rem 2rem');
        }
        if(telaCalculadora <= '600' && telaCalculadora > '500'){
            calculadora.width('30rem');
            calculadora.height('28rem');
            botoes.css('margin-left','0');
            botoes.css('margin-top','0.7rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('margin-left','9%');
            textoCalculo.css('top','4.5rem');
            textoCalculo.css('position','relative');
            visor.width('100%');
            rceElevado.css('padding','0.4rem 1.3rem');
            rcLn.css('padding','0.5rem 1.2rem');
            rcLog.css('padding','0.5rem 0.9rem');
            rcExp.css('padding','0.5rem 0.9rem');
            rcPot.css('padding','0.5rem 1.5rem');
            rcDez.css('padding','0.5rem 1.4rem');
            rcSeno.css('padding','0.5rem 1rem');
            rcCos.css('padding','0.5rem 1.3rem');
            rcTan.css('padding','0.5rem 1.4rem');
            rcTT.css('padding','0.5rem 1.6rem');
            rcFact.css('padding','0.5rem 1rem');
            rcPercentage.css('padding','0.5rem 1rem');
            rcRaiz.css('padding','0.5rem 1.2rem');
            rcFra.css('padding','0.5rem 0.6rem');
            rcE.css('padding','0.5rem 1.2rem');
            rcParenA.css('padding','0.5rem 1rem');
            rcParenB.css('padding','0.5rem 1rem');
            rcC.css('padding','0.5rem 1rem');
            rcBack.css('padding','0.5rem 1rem');
            rc9.css('padding','0.5rem 1rem');
            rc8.css('padding','0.5rem 1rem');
            rc7.css('padding','0.5rem 1rem');
            rc6.css('padding','0.5rem 1rem');
            rc5.css('padding','0.5rem 1rem');
            rc4.css('padding','0.5rem 1rem');
            rc3.css('padding','0.5rem 1rem');
            rc2.css('padding','0.5rem 1rem');
            rc1.css('padding','0.5rem 1rem');
            rc0.css('padding','0.5rem 1rem');
            rcPon.css('padding','0.5rem 1.2rem');
            rcIgual.css('padding','0.86rem 1rem');
        }
        if(telaCalculadora <= '500' && telaCalculadora > '340'){
            calculadora.width('22.5rem');
            calculadora.css('margin-left','2%');
            calculadora.height('28rem');
            botoes.css('margin-left','0');
            botoes.css('margin-top','0.7rem');
            btnCientifica.css('margin-left','0px');
            btnComum.css('margin-left','0px');
            textoCalculo.css('margin-left','9%');
            textoCalculo.css('top','4.5rem');
            textoCalculo.css('position','relative');
            visor.width('100%');
            rceElevado.css('padding','0.4rem 1.1rem');
            rceElevado.css('margin-left','-0.8rem');
            rcLn.css('padding','0.5rem 1rem');
            rcLog.css('padding','0.5rem 0.7rem');
            rcExp.css('padding','0.5rem 0.7rem');
            rcPot.css('padding','0.5rem 1.35rem');
            rcDez.css('padding','0.5rem 0.8rem');
            rcSeno.css('padding','0.5rem 0.4rem');
            rcCos.css('padding','0.5rem 0.7rem');
            rcTan.css('padding','0.5rem 0.8rem');
            rcTT.css('padding','0.5rem 1rem');
            rcFact.css('padding','0.5rem 0.8rem');
            rcPercentage.css('padding','0.5rem 0.8rem');
            rcRaiz.css('padding','0.5rem 1rem');
            rcFra.css('padding','0.5rem 0.4rem');
            rcE.css('padding','0.5rem 1rem');
            rcParenA.css('padding','0.5rem 0.8rem');
            rcParenB.css('padding','0.5rem 0.8rem');
            rcC.css('padding','0.5rem 0.7rem');
            rcBack.css('padding','0.5rem 0.2rem');
            rcMais.css('padding','0.5rem 0.7rem');
            rcMenos.css('padding','0.5rem 0.7rem');
            rcMulti.css('padding','0.5rem 0.7rem');
            rcDivide.css('padding','0.5rem 0.7rem');
            rcBack.css('margin-left','-0.8rem');
            rcMais.css('margin-left','-0.8rem');
            rcMenos.css('margin-left','-0.8rem');
            rcMulti.css('margin-left','-0.8rem');
            rcDivide.css('margin-left','-0.8rem');
            rc9.css('padding','0.5rem 0.8rem');
            rc8.css('padding','0.5rem 0.8rem');
            rc7.css('padding','0.5rem 0.8rem');
            rc6.css('padding','0.5rem 0.8rem');
            rc5.css('padding','0.5rem 0.8rem');
            rc4.css('padding','0.5rem 0.8rem');
            rc3.css('padding','0.5rem 0.8rem');
            rc2.css('padding','0.5rem 0.8rem');
            rc1.css('padding','0.5rem 0.8rem');
            rc0.css('padding','0.5rem 0.8rem');
            rcPon.css('padding','0.5rem 1rem');
            rcIgual.css('padding','0.86rem 0.8rem');
            $('.btn-teclado').css('margin-left','-0.8rem !important');
        }

    });

});

// Trata o tamanho da calculadora conforme a tela

function tela(){
    var btnComum = $('#btn-comum');
    var btnCientifica = $('#btn-cientifica');
    var tecladoCientifica = $('.cal-cientifica');
    var calculadora = $('.calculadora');
    var botoes = $('.botoes');
    var visor = $('.visor');
    var textoCalculo = $('#text-calculo');
    var telaCalculadora = window.screen.width;
    var rceElevado = $('#rce-elevado');
    var rcDez = $('#rcDez');
    var rcFact = $('#rcFact');
    var rcLn = $('#rcLn');
    var rcLog = $('#rcLog');
    var rcSeno = $('#rcSeno');
    var rcCos = $('#rcCos');
    var rcRaiz = $('#rcRaiz');
    var rcPot = $('#rcPot');
    var rcTan = $('#rcTan');
    var rcFra = $('#rcFra');
    var rcExp = $('#rcExp');
    var rcTT = $('#rcTT');
    var rcE = $('#rcE');
    var rcPon = $('#rcPon');
    var rcPercentage = $('#rcPercentage');
    var rc9 = $('#rc9');
    var rc8 = $('#rc8');
    var rc7 = $('#rc7');
    var rc6 = $('#rc6');
    var rc5 = $('#rc5');
    var rc4 = $('#rc4');
    var rc3 = $('#rc3');
    var rc2 = $('#rc2');
    var rc1 = $('#rc1');
    var rc0 = $('#rc0');
    var rcParenA = $('#rcParenA');
    var rcParenB = $('#rcParenB');
    var rcC = $('#rcC');
    var rcBack = $('#rcBack');
    var rcIgual = $('#rcIgual');
    var rcMais = $('#rcMais');
    var rcMenos = $('#rcMenos');
    var rcMulti = $('#rcMulti');
    var rcDivide = $('#rcDivide');
    
    if(telaCalculadora <= '1280' && telaCalculadora > '1000'){
        calculadora.width('80%');
        visor.width('61%');
        botoes.css('margin-left','3.5rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','16%');
    }
    
    if(telaCalculadora <= '1000' && telaCalculadora > '800'){
        calculadora.width('53rem');
        calculadora.height('28rem');
        botoes.css('margin-left','3.5rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','8%');
    }

    if(telaCalculadora <= '800' && telaCalculadora > '600'){
        calculadora.width('46rem');
        calculadora.height('28rem');
        botoes.css('margin-left','0.95rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','9%');
        textoCalculo.css('top','4.5rem');
        textoCalculo.css('position','relative');
        visor.width('56%');
        rceElevado.css('padding','0.4rem 2.3rem');
        rcLn.css('padding','0.5rem 2.2rem');
        rcLog.css('padding','0.5rem 1.8rem');
        rcExp.css('padding','0.5rem 1.8rem');
        rcPot.css('padding','0.5rem 2.5rem');
        rcDez.css('padding','0.5rem 2.4rem');
        rcSeno.css('padding','0.5rem 2rem');
        rcCos.css('padding','0.5rem 2.3rem');
        rcTan.css('padding','0.5rem 2.4rem');
        rcTT.css('padding','0.5rem 2.6rem');
        rcFact.css('padding','0.5rem 2rem');
        rcPercentage.css('padding','0.5rem 2rem');
        rcRaiz.css('padding','0.5rem 2.2rem');
        rcFra.css('padding','0.5rem 1.6rem');
        rcE.css('padding','0.5rem 2.2rem');
        rcParenA.css('padding','0.5rem 2rem');
        rcParenB.css('padding','0.5rem 2rem');
        rcC.css('padding','0.5rem 2rem');
        rcBack.css('padding','0.5rem 1rem');
        rc9.css('padding','0.5rem 2rem');
        rc8.css('padding','0.5rem 2rem');
        rc7.css('padding','0.5rem 2rem');
        rc6.css('padding','0.5rem 2rem');
        rc5.css('padding','0.5rem 2rem');
        rc4.css('padding','0.5rem 2rem');
        rc3.css('padding','0.5rem 2rem');
        rc2.css('padding','0.5rem 2rem');
        rc1.css('padding','0.5rem 2rem');
        rc0.css('padding','0.5rem 2rem');
        rcPon.css('padding','0.5rem 2.2rem');
        rcIgual.css('padding','0.86rem 2rem');
    }
    if(telaCalculadora <= '600' && telaCalculadora > '500'){
        calculadora.width('30rem');
        calculadora.height('28rem');
        botoes.css('margin-left','0');
        botoes.css('margin-top','0.7rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','9%');
        textoCalculo.css('top','4.5rem');
        textoCalculo.css('position','relative');
        visor.width('100%');
        rceElevado.css('padding','0.4rem 1.3rem');
        rcLn.css('padding','0.5rem 1.2rem');
        rcLog.css('padding','0.5rem 0.9rem');
        rcExp.css('padding','0.5rem 0.9rem');
        rcPot.css('padding','0.5rem 1.5rem');
        rcDez.css('padding','0.5rem 1.4rem');
        rcSeno.css('padding','0.5rem 1rem');
        rcCos.css('padding','0.5rem 1.3rem');
        rcTan.css('padding','0.5rem 1.4rem');
        rcTT.css('padding','0.5rem 1.6rem');
        rcFact.css('padding','0.5rem 1rem');
        rcPercentage.css('padding','0.5rem 1rem');
        rcRaiz.css('padding','0.5rem 1.2rem');
        rcFra.css('padding','0.5rem 0.6rem');
        rcE.css('padding','0.5rem 1.2rem');
        rcParenA.css('padding','0.5rem 1rem');
        rcParenB.css('padding','0.5rem 1rem');
        rcC.css('padding','0.5rem 1rem');
        rcBack.css('padding','0.5rem 1rem');
        rc9.css('padding','0.5rem 1rem');
        rc8.css('padding','0.5rem 1rem');
        rc7.css('padding','0.5rem 1rem');
        rc6.css('padding','0.5rem 1rem');
        rc5.css('padding','0.5rem 1rem');
        rc4.css('padding','0.5rem 1rem');
        rc3.css('padding','0.5rem 1rem');
        rc2.css('padding','0.5rem 1rem');
        rc1.css('padding','0.5rem 1rem');
        rc0.css('padding','0.5rem 1rem');
        rcPon.css('padding','0.5rem 1.2rem');
        rcIgual.css('padding','0.86rem 1rem');
    }
    if(telaCalculadora <= '500' && telaCalculadora > '340'){
        calculadora.width('22.5rem');
        calculadora.css('margin-left','2%');
        calculadora.height('28rem');
        botoes.css('margin-left','0');
        botoes.css('margin-top','0.7rem');
        btnCientifica.css('margin-left','0px');
        btnComum.css('margin-left','0px');
        textoCalculo.css('margin-left','9%');
        textoCalculo.css('top','4.5rem');
        textoCalculo.css('position','relative');
        visor.width('100%');
        rceElevado.css('padding','0.4rem 1.1rem');
        rcLn.css('padding','0.5rem 1rem');
        rcLog.css('padding','0.5rem 0.7rem');
        rcExp.css('padding','0.5rem 0.7rem');
        rcPot.css('padding','0.5rem 1.35rem');
        rcDez.css('padding','0.5rem 0.8rem');
        rcSeno.css('padding','0.5rem 0.4rem');
        rcCos.css('padding','0.5rem 0.7rem');
        rcTan.css('padding','0.5rem 0.8rem');
        rcTT.css('padding','0.5rem 1rem');
        rcFact.css('padding','0.5rem 0.8rem');
        rcPercentage.css('padding','0.5rem 0.8rem');
        rcRaiz.css('padding','0.5rem 1rem');
        rcFra.css('padding','0.5rem 0.4rem');
        rcE.css('padding','0.5rem 1rem');
        rcParenA.css('padding','0.5rem 0.8rem');
        rcParenB.css('padding','0.5rem 0.8rem');
        rcC.css('padding','0.5rem 0.7rem');
        rcBack.css('padding','0.5rem 0.2rem');
        rcMais.css('padding','0.5rem 0.7rem');
        rcMenos.css('padding','0.5rem 0.7rem');
        rcMulti.css('padding','0.5rem 0.7rem');
        rcDivide.css('padding','0.5rem 0.7rem');
        rc9.css('padding','0.5rem 0.8rem');
        rc8.css('padding','0.5rem 0.8rem');
        rc7.css('padding','0.5rem 0.8rem');
        rc6.css('padding','0.5rem 0.8rem');
        rc5.css('padding','0.5rem 0.8rem');
        rc4.css('padding','0.5rem 0.8rem');
        rc3.css('padding','0.5rem 0.8rem');
        rc2.css('padding','0.5rem 0.8rem');
        rc1.css('padding','0.5rem 0.8rem');
        rc0.css('padding','0.5rem 0.8rem');
        rcPon.css('padding','0.5rem 1rem');
        rcIgual.css('padding','0.86rem 0.8rem');
        $('.btn-teclado').css('margin-left','-0.8rem');
    }
}

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

