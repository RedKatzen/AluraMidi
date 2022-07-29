function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play()
        
    } else {
        console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador],
          instrumento = tecla.classList[1];

    tecla.onclick = function () {
                //template string
        tocaSom(`#som_${instrumento}`);
    }

    tecla.onkeydown = function (evento) {

        //Informações sobre evento, click da tecla, console nav
        console.log(evento)

        if(evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
