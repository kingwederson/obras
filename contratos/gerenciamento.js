function data(ano, mes, dia) {
    if (ano !== undefined && mes !== undefined && dia !== undefined) {
        return new Date(ano, mes - 1, dia);
    }
    return null; // Retorna null se qualquer argumento estiver ausente
}

function criarplanilha() {
    const tabela = document.getElementById("listadecontratos");
    const hoje = new Date(); // Data atual

    // Ignorar o cabeçalho e iterar sobre os contratos
    for (let i = 1; i < contratos.length; i++) {
        const contrato = contratos[i];
        const [objeto, empresa, execucao, vigencia] = contrato;

        // Calcular dias restantes para a vigência
        let diasRestantes = null;
        if (vigencia) {
            const diferencaMs = new Date(vigencia) - hoje;
            diasRestantes = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24)); // Conversão para dias
        }

        // Criar linha para a tabela
        const linha = document.createElement("tr");

        // Adicionar colunas
        linha.innerHTML = `
            <td>${objeto}</td>
            <td>${empresa}</td>
            <td>${execucao ? formatarData(execucao) : "-"}</td>
            <td>${vigencia ? formatarData(vigencia) : "-"}</td>
            <td>${diasRestantes !== null ? diasRestantes : "-"}</td>
        `;

        // Adicionar linha à tabela
        tabela.appendChild(linha);
    }
}