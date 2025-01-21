function data(ano, mes, dia) {
    if (ano !== undefined && mes !== undefined && dia !== undefined) {
        return new Date(ano, mes - 1, dia);
    }
    return null; // Retorna null se qualquer argumento estiver ausente
}

function compara(alfa, beta){
    if(alfa[3] < beta[3]){
        return alfa[3] - beta[3];
    }
}

//contratos.sort(compara);

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

        // Formatar datas
        const execucaoFormatada = execucao ? new Date(execucao).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '-';
        const vigenciaFormatada = vigencia ? new Date(vigencia).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '-';

        // Criar linha para a tabela
        const linha = document.createElement("tr");

        // Adicionar colunas
        linha.innerHTML = `
            <td data-label="Objeto">${objeto}</td>
            <td data-label="Empresa">${empresa}</td>
            <td data-label="Prazo de Execução">${execucaoFormatada}</td>
            <td data-label="Prazo de Vigência">${vigenciaFormatada}</td>
            <td data-label="Dias Restantes">${diasRestantes !== null ? diasRestantes : "-"}</td>
        `;

        // Adicionar linha à tabela
        tabela.appendChild(linha);

        if(diasRestantes < 0){
            linha.style.backgroundColor = "red";
            linha.style.color = "yellow";
        }else if(diasRestantes < 21){
            linha.style.backgroundColor = "red";
            linha.style.color = "white";
        }else if(diasRestantes < 45){
            linha.style.backgroundColor = "yellow";
        }
    }
}

var contratos = [
    [
        'Objeto',
        'Empresa',
        'Execução',
        'Vigência'
    ],
    [
        'Calçamento Rio do Peixe',
        'CGCON',
        data(2024, 11, 10),
        data(2025, 1, 9)
    ],
    [
        'Fins Diversos',
        'T.J. Engenharia',
        data(2025, 1, 17),
        data(2025, 1, 17)
    ],
    [
        'Calçamento Estrada Taboão',
        'Construpav',
        data(2025, 3, 3),
        data(2025, 3, 3)
    ],
    [
        'Reforma da Escola do Tabuão',
        'MF Farias',
        data(2025, 2, 3), // Adicione uma data válida aqui
        data(2025, 3, 4)
    ],
    [
        'Calçamento do Cristo',
        'Loredo Engenharia',
        data(2025, 3, 27), // Adicione uma data válida aqui
        data(2025, 3, 27)
    ],
    [
        'Trevo',
        'CONSTRUPAV',
        data(2025, 1, 4), // Adicione uma data válida aqui
        data(2025, 3, 27)
    ],
    [
        'Quadra Sintética',
        'CGCON',
        data(2025, 1, 28), // Adicione uma data válida aqui
        data(2025, 4, 28)
    ],
    [
        'Reforma da UBS',
        'Diego José',
        data(2025, 3, 16), // Adicione uma data válida aqui
        data(2025, 5, 9)
    ],
];