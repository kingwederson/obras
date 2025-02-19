var contratos = [
    [
        'Objeto',
        'Empresa',
        'Execução',
        'Vigência'
    ],
    [
        'Reforma da Escola do Tabuão',
        'MF Farias',
        data(3, 2, 2025),
        data(3, 4, 2025)
    ],
    [
        'Calçamento Estrada Taboão',
        'Construpav',
        data(3, 3, 2025),
        data(3, 3, 2025)
    ],
    [
        'Quadra Sintética',
        'CGCON',
        data(13, 3, 2025),
        data(28, 4, 2025)
    ],
    [
        'Reforma da UBS',
        'Diego José',
        data(16, 3, 2025),
        data(9, 5, 2025)
    ],
    [
        'Calçamento do Cristo',
        'Loredo Engenharia',
        data(27, 3, 2025),
        data(27, 3, 2025)
    ],
    [
        'Trevo',
        'CONSTRUPAV',
        data(27, 3, 2025),
        data(27, 3, 2025)
    ],
    [
        'Processo de Materiais de Construção',
        'Diversos',
        data(),
        data(1, 4, 2025)
    ],
    [
        'Processo de Serralheria',
        'Diversos',
        data(4, 4, 2025),
        data(4, 4, 2025)
    ],
    [
        'Calçamento Rio do Peixe',
        'CGCON',
        data(9, 5, 2025),
        data(9, 5, 2025)
    ],
    [
        'Fins Diversos',
        'T.J. Engenharia',
        data(17, 6, 2025),
        data(17, 6, 2025)
    ],
    [
        'Processo de Cascalho',
        'Diversos',
        data(),
        data(1, 9, 2025)
    ],
    [
        'SAMU',
        '',
        data(),
        data(14, 9, 2025)
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
        let diasRestantesVigencia = null;
        let diasRestantesExecucao = null;
        if (vigencia) {
            const diferencaVig = new Date(vigencia) - hoje;
            diasRestantesVigencia = Math.ceil(diferencaVig / (1000 * 60 * 60 * 24)); // Conversão para dias
        }
        if (execucao) {
            const diferencaExec = new Date(execucao) - hoje;
            diasRestantesExecucao = Math.ceil(diferencaExec / (1000 * 60 * 60 * 24)); // Conversão para dias
        }

        var prazo = 0;
        if(diasRestantesExecucao !== null){
            if(diasRestantesVigencia < diasRestantesExecucao){
                prazo = diasRestantesVigencia;
            }if(diasRestantesVigencia > diasRestantesExecucao){
                prazo = diasRestantesExecucao;
            }else{
                prazo = diasRestantesVigencia;
            }
        }else{
            prazo = diasRestantesVigencia;
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
            <td data-label="Menor Prazo">${prazo}</td>
            <td data-label="Prazo de Execução">${execucaoFormatada}</td>
            <td data-label="Dias Restantes para Execução" class="numero">${diasRestantesExecucao !== null ? diasRestantesExecucao : "Não definido o"} ${diasRestantesExecucao**2 < 1.5 ? "dia" : "dias"}</td>
            <td data-label="Prazo de Vigência">${vigenciaFormatada}</td>
            <td data-label="Dias Restantes para Vigência" class="numero">${diasRestantesVigencia !== null ? diasRestantesVigencia : "Não definido o"} ${diasRestantesVigencia**2 < 1.5 ? "dia" : "dias"}</td>
        `;

        // Adicionar linha à tabela
        tabela.appendChild(linha);

        if(prazo < 0){
            linha.style.backgroundColor = "black";
            linha.style.color = "yellow";
        }else if(prazo > 360){
            linha.style.backgroundColor = "white";
            linha.style.color = "black";
        }else{
            linha.style.backgroundColor = `hsl(${prazo*0.67}, 100%, 50%)`;
            linha.style.color = "black";
        }
    }
}
