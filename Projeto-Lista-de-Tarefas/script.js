let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('arealista');

function adicionarTarefa() {
  
  // vamos pegar o valor digitado
  let valorInput = input.value;
  
  // Se não fir vazio, nulo ou indefinido
  if ((valorInput !== "") && (valorInput !== null) && (inputTarefa !== undefined)) {
    ++contador;
    let novoItem = `    <div id="${contador}" class="item">
      <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        <i class="mdi mdi-check-circe"></i>
      </div>
      <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
      </div>
      <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete">Deletar</button>
      </div>
    </div>`;
    //  Adiciona conteúdo no main
    main.innerHTML += novoItem;
    
    // Limpa a área de input
    input.value = "";
    input.focus();
  }
}

function deletar(id) {
  let tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  let item = document.getElementById(id);
  let classe = item.getAttribute('class');
  
  if (classe == "item") {
    item.classList.add('clicado');
    let icone =document.getElementById('icone_'+ id);
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');
    
    item.parentNode.appendChild(item);
    
  }
  else {
    item.classList.remove('clicado');
    let icone =document.getElementById('icone_'+ id);
    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
  }
}

input.addEventListener("keyup", function(event){
  // Se teclou Enter (13)
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
})