document.addEventListener("DOMContentLoaded", carregarTarefas);

function adicionarTarefa() {
  let tarefaInput = document.getElementById("tarefa");
  let tarefaTexto = tarefaInput.value.trim();
  if (tarefaTexto === "") return;

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(tarefaTexto);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  tarefaInput.value = "";

  carregarTarefas();
}

function carregarTarefas() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach((tarefa, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${tarefa} <button onclick="removerTarefa(${index})">Excluir</button>`;
    lista.appendChild(li);
  });
}

function removerTarefa(index) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  carregarTarefas();
}

function limparTarefas() {
  localStorage.removeItem("tarefas");
  carregarTarefas();
}
