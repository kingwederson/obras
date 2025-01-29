var botinas = [
    {
        numero: 37,
        estoque: 3,
        usuarios:[
            //
        ]
    },
    {
        numero: 38,
        estoque: 16,
        usuarios:[
            //
        ]
    },
    {
        numero: 39,
        estoque: 39,
        usuarios:[
            //
        ]
    },
    {
        numero: 40,
        estoque: 75,
        usuarios:[
            //
        ]
    },
    {
        numero: 41,
        estoque: 87,
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
        estoque: 19,
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