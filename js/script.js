    //     if ($('#typewriter').length > 0) {
    //     var textContainer = document.querySelector('#typewriter');
    //     var textWhiter = ['Desenvolvedor', 'Designer'];

    //     function whiter(str, done) {
    //         var char = str.split('').reverse();
    //         var typer = setInterval(function () {
    //             if (!char.length) {
    //                 clearInterval(typer);
    //                 return setTimeout(done, 1500); 
    //             }
    //             var next = char.pop();
    //             textContainer.innerHTML += next;
    //         }, 100);
    //     }

    //     function cleaner(done) {
    //         var char = textContainer.innerHTML;
    //         var nr = char.length;
    //         var typer = setInterval(function () {
    //             if (nr-- === 0) {
    //                 clearInterval(typer);
    //                 return done();
    //             }
    //             textContainer.innerHTML = char.slice(0, nr);
    //         }, 50);
    //     }

    //     function footer(content) {
    //         var atual = -1;
    //         function prox() {
    //             if (atual < content.length - 1)
    //                 atual++;
    //             else
    //                 atual = 0;
    //             var str = content[atual];
    //             whiter(str, function () {
    //                 cleaner(prox);
    //             });
    //         }
    //         prox(prox);
    //     }

    //     footer(textWhiter);
    // }

    let paginaAtual = 1

    function trocarParaPagina1(){
        paginaAtual = 1
        $(`.page1`).css({
            display: `block`,
        });
        $(`.page2`).css({
            display: `none`,
        });
        $(`.page3`).css({
            display: `none`,
        });
        $(`.page4`).css({
            display: `none`,
        });
        $(`.page5`).css({
            display: `none`,
        });
    }
    function trocarParaPagina2(){
        paginaAtual = 2
        $(`.page1`).css({
            display: `none`,
        });
        $(`.page2`).css({
            display: `block`,
        });
        $(`.page3`).css({
            display: `none`,
        });
        $(`.page4`).css({
            display: `none`,
        });
        $(`.page5`).css({
            display: `none`,
        });
    }
    // function trocarParaPagina3(){
    //     paginaAtual = 3
    //     $(`.page1`).css({
    //         display: `none`,
    //     });
    //     $(`.page2`).css({
    //         display: `none`,
    //     });
    //     $(`.page3`).css({
    //         display: `block`,
    //     });
    //     $(`.page4`).css({
    //         display: `none`,
    //     });
    //     $(`.page5`).css({
    //         display: `none`,
    //     });
    // }
    // function trocarParaPagina4(){
    //     paginaAtual = 4
    //     $(`.page1`).css({
    //         display: `none`,
    //     });
    //     $(`.page2`).css({
    //         display: `none`,
    //     });
    //     $(`.page3`).css({
    //         display: `none`,
    //     });
    //     $(`.page4`).css({
    //         display: `block`,
    //     });
    //     $(`.page5`).css({
    //         display: `none`,
    //     });
    // }
    // function trocarParaPagina5(){
    //     paginaAtual = 5
    //     $(`.page1`).css({
    //         display: `none`,
    //     });
    //     $(`.page2`).css({
    //         display: `none`,
    //     });
    //     $(`.page3`).css({
    //         display: `none`,
    //     });
    //     $(`.page4`).css({
    //         display: `none`,
    //     });
    //     $(`.page5`).css({
    //         display: `block`,
    //     });
    // }
    
    function proximaPagina(){
        if (paginaAtual === 1){
            trocarParaPagina2()
        }
        if (paginaAtual === 2){
            trocarParaPagina3()
        }
        if (paginaAtual === 3){
            trocarParaPagina4()
        }
        if (paginaAtual === 4){
            trocarParaPagina5()
        }
    }
    function paginaAnterior(){
        if (paginaAtual === 2){
            trocarParaPagina1()
        }
        if (paginaAtual === 3){
            trocarParaPagina2()
        }
        if (paginaAtual === 4){
            trocarParaPagina3()
        }
        if (paginaAtual === 5){
            trocarParaPagina4()
        }
    }