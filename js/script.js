
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

    