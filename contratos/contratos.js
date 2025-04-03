var contratos = [
    [
        'Objeto',
        'Empresa',
        'Execução',
        'Vigência'
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
        'Reforma da Escola do Tabuão',
        'MF Farias',
        data(3, 2, 2025),
        data(3, 4, 2025)
    ],
    [
        'Processo de Serralheria',
        'Diversos',
        data(4, 4, 2025),
        data(4, 4, 2025)
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
        'Lariba Engenharia',
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
    const hoje = new Date();
    const tbodyVigencia = document.getElementById('listadevigencia');
    const tbodyExecucao = document.getElementById('listadeexecucao');

    contratos.slice(1).forEach(contrato => {
        const objeto = contrato[0];
        const empresa = contrato[1];
        const prazoExecucao = contrato[2];
        const prazoVigencia = contrato[3];

        // Função para formatar a data no formato "03 Apr 2025"
        const formatarData = (data) => {
            return data.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
        };

        // Função para aplicar estilos de cor às linhas
        const aplicarEstiloLinha = (linha, prazo) => {
            if (prazo < 0) {
                linha.style.backgroundColor = "black";
                linha.style.color = "yellow";
            } else if (prazo > 360) {
                linha.style.backgroundColor = "white";
                linha.style.color = "black";
            } else {
                linha.style.backgroundColor = `hsl(${prazo * 0.67}, 100%, 50%)`;
                linha.style.color = "black";
            }
        };

        // Preenchendo a tabela de execução
        if (prazoExecucao) {
            const tempoRestanteExecucao = Math.ceil((prazoExecucao - hoje) / (1000 * 60 * 60 * 24)); // Dias restantes
            const trExecucao = document.createElement('tr');
            trExecucao.innerHTML = `
                <td>${objeto}</td>
                <td>${empresa}</td>
                <td>${formatarData(prazoExecucao)}</td>
                <td>${tempoRestanteExecucao > -1 ? `Falta(m) ${tempoRestanteExecucao} dia(s)` : `Expirou há ${-tempoRestanteExecucao} dia(s)`}</td>
            `;
            aplicarEstiloLinha(trExecucao, tempoRestanteExecucao);
            tbodyExecucao.appendChild(trExecucao);
        }

        // Preenchendo a tabela de vigência
        if (prazoVigencia) {
            const tempoRestanteVigencia = Math.ceil((prazoVigencia - hoje) / (1000 * 60 * 60 * 24)); // Dias restantes
            const trVigencia = document.createElement('tr');
            trVigencia.innerHTML = `
                <td>${objeto}</td>
                <td>${empresa}</td>
                <td>${formatarData(prazoVigencia)}</td>
                <td>${tempoRestanteVigencia > -1 ? `Falta(m) ${tempoRestanteVigencia} dia(s)` : `Expirado há ${-tempoRestanteVigencia} dia(s)`}</td>
            `;
            aplicarEstiloLinha(trVigencia, tempoRestanteVigencia);
            tbodyVigencia.appendChild(trVigencia);
        }
    });
}
