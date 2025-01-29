var botinas = [
    {
        numero: 37,
        estoque: 2,
        usuarios:[
            //
        ]
    },
    {
        numero: 38,
        estoque: 14,
        usuarios:[
            //
        ]
    },
    {
        numero: 39,
        estoque: 34,
        usuarios:[
            //
        ]
    },
    {
        numero: 40,
        estoque: 70,
        usuarios:[
            //
        ]
    },
    {
        numero: 41,
        estoque: 84,
        usuarios:[
            //
        ]
    },
    {
        numero: 42,
        estoque: 50,
        usuarios:[
            //
        ]
    },
    {
        numero: 43,
        estoque: 30,
        usuarios:[
            //
        ]
    },
    {
        numero: 44,
        estoque: 16,
        usuarios:[
            //
        ]
    }
]

botinas.forEach(tamanho => {
    document.getElementById(`num${tamanho.numero}`).getElementsByClassName('emuso')[0].innerHTML = `${tamanho.usuarios.length}`
    document.getElementById(`num${tamanho.numero}`).getElementsByClassName('emestoque')[0].innerHTML = `${tamanho.estoque-tamanho.usuarios.length}`
});

//document.getElementById(`num${botinas.numero}`).innerText = `${botinas[3].usuarios.length}`