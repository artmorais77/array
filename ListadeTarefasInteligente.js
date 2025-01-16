/*
    Adicionar uma nova tarefa à lista. 
    Marcar uma tarefa como completa pelo id. 
    Remover uma tarefa da lista pelo id.
    Listar todas as tarefas pendentes (não concluídas).
    Listar todas as tarefas concluídas.
    Contar quantas tarefas pendentes existem.
    Ordenar as tarefas por estado (as pendentes vêm antes das concluídas).
 */

const tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', completa: false },
    { id: 2, descricao: 'Ir ao supermercado', completa: true },
    { id: 3, descricao: 'Ler um livro', completa: false },
];
//     Adicionar uma nova tarefa à lista.
function adicionarTarefa(tarefa) {
    tarefas.push(tarefa)
}
//     Marcar uma tarefa como completa pelo id.
function marcarCompleta(id) {
    const tarefa = tarefas.find((item) => item.id === id)
    if (tarefa) {
        tarefa.completa === true
        console.log(`Tarefa marcada "${tarefa.descricao}"como concluida`)
    } else {
        console.log(`Tarefa com o id "${id}" não encontrado`)
    }
}
//    Remover uma tarefa da lista pelo id.
function removerTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id)
    if (index !== -1) {
        const tarefaRemovida = tarefas.splice(index, 1)
        console.log(`Tarefa excluida com sucesso`)
    } else {
        console.log(`Tarefa com o id "${id}" não encontrado`)
    }
}

//     Listar todas as tarefas pendentes (não concluídas).
function listarPendentes() {
    const filtro = tarefas.filter((item) => item.completa === false)
    console.log(filtro)
}

//    Listar todas as tarefas concluídas.
function listarConcluidas() {
    const filtro = tarefas.filter((item) => item.completa === true)
    console.log(filtro)
}

//    Contar quantas tarefas pendentes existem.
function contarPendentes() {
    const pendentes = tarefas.filter((item) => item.completa === false)
    return pendentes.length
}

const totalPendentes = contarPendentes()

console.log(totalPendentes)

//Ordenar as tarefas por estado (as pendentes vêm antes das concluídas).


function ordenarTarefasPorEstado() {
    const pendentes = tarefas.filter((item) => item.completa === false)
    const concluidas = tarefas.filter((item) => item.completa === true)
    console.log( pendentes, concluidas)
}






