const esmaecer = document.querySelector("#esmaecer");
    // criei uma variável que recebe a marcação de div com id esmaecer
    esmaecer.addEventListener("click", function(){
        // cria o evento de click na div esmaecer
        esmaecer.style.visibility = "hidden"
        // ao clicar na div esmaecer é pra desaparecer!!
        // esse atributo do css existe!! tem o valor visible e hidden
    })

const abrirmodal = document.querySelector("#abrirmodal");
    abrirmodal.addEventListener("click", function(){
        esmaecer.style.visibility = "visible"
    })