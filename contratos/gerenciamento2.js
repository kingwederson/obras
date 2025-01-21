function data(ano, mes, dia) {
    return new Date(ano, mes - 1, dia);
}

function criarplanilha() {
    var tabela = document.getElementById('listadecontratos');
    contratos.forEach(function(contrato, index) {
        if (index === 0) return; // Skip header row
        var row = tabela.insertRow();
        contrato.forEach(function(celula) {
            var cell = row.insertCell();
            cell.textContent = celula instanceof Date ? celula.toLocaleDateString() : celula;
        });
    });
}