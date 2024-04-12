//Cria uma lista com os botões:
const botoesLista = document.querySelectorAll('.btn');

for(i=0; i < botoesLista.length; i++){
    var idSom = botoesLista[i].classList[0];
    var som = document.createElement("audio");
    som.setAttribute("src", `../audio/${idSom}.wav`);
    som.setAttribute("id", idSom);
    document.querySelector(".area").appendChild(som);
    //console.log(idSom+" foi gerado.");

    // Adicionar função à lista de botoes
    botoesLista[i].addEventListener('click', (e)=>{
       tocar(e.target.classList[0]);
    })
}

function tocar(peca){
    document.querySelector('#'+peca).play()
    document.querySelector('#'+peca).currentTime = 0; //Permitir que o som seja tocado novamente.
}

// function configurar(){
//     for(c = 0; c < 8; c++){
//         console.log(botoesLista[c]);
//     }
// }