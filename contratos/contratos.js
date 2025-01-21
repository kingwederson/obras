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
        data(7, 2, 2025),
        data(9, 1, 2025)
    ],
    [
        'Fins Diversos',
        'T.J. Engenharia',
        data(17, 1, 2025),
        data(17, 1, 2025)
    ],
    [
        'Proceso de Serralheria',
        'Diversos',
        data(),
        data(1, 3, 2025)
    ],
    [
        'Calçamento Estrada Taboão',
        'Construpav',
        data(3, 3, 2025),
        data(3, 3, 2025)
    ],
    [
        'Calçamento do Cristo',
        'Loredo Engenharia',
        data(),
        data(27, 3, 2025)
    ],
    [
        'Trevo',
        'CONSTRUPAV',
        data(4, 1, 2025),
        data(27, 3, 2025)
    ],
    [
        'Processo de Materiais de Construção',
        'Diversos',
        data(),
        data(1, 4, 2025)
    ],
    [
        'Reforma da Escola do Tabuão',
        'MF Farias',
        data(3, 2, 2025),
        data(3, 4, 2025)
    ],
    [
        'Quadra Sintética',
        'CGCON',
        data(28, 1, 2025),
        data(28, 4, 2025)
    ],
    [
        'Reforma da UBS',
        'Diego José',
        data(16, 3, 2025),
        data(9, 5, 2025)
    ],
    [
        'Processo de Cascalho',
        'Diversos',
        data(),
        data(1, 9, 2025)
    ]
];

function compara(alfa, beta){
    if(Number(alfa[3]) < Number(beta[3])){
        return alfa[3] - beta[3];
    }
}

//contratos.sort(compara);

function data(dia, mes, ano) {
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

        // Formatar datas
        const execucaoFormatada = execucao ? new Date(execucao).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Indefinido';
        const vigenciaFormatada = vigencia ? new Date(vigencia).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Indefinido';

        // Criar linha para a tabela
        const linha = document.createElement("tr");

        // Adicionar colunas
        linha.innerHTML = `
            <td data-label="Objeto">${objeto}</td>
            <td data-label="Empresa">${empresa}</td>
            <td data-label="Prazo de Execução">${execucaoFormatada}</td>
            <td data-label="Prazo de Vigência">${vigenciaFormatada}</td>
            <td data-label="Dias Restantes">${diasRestantes !== null ? diasRestantes : "Não definido"}</td>
        `;

        // Adicionar linha à tabela
        tabela.appendChild(linha);

        if(diasRestantes < 0){
            linha.style.backgroundColor = "red";
            linha.style.color = "yellow";
        }else if(diasRestantes < 21){
            linha.style.backgroundColor = "red";
            linha.style.color = "white";
        }else if(diasRestantes < 42){
            linha.style.backgroundColor = "yellow";
        }
    }
}