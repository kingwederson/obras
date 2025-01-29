var botinas = [
    {
        numero: 37,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 38,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 39,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 40,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 41,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 42,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 43,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    },
    {
        numero: 44,
        estoque: 50,
        usuarios:[
            'Fulano',
            'Ciclano',
            'Beltrano'
        ]
    }
]

botinas.forEach(tamanho => {
    document.getElementById(`num${tamanho.numero}`).getElementsByClassName('emuso')[0].innerHTML = `${tamanho.usuarios.length}`
    document.getElementById(`num${tamanho.numero}`).getElementsByClassName('emestoque')[0].innerHTML = `${tamanho.estoque-tamanho.usuarios.length}`
});

//document.getElementById(`num${botinas.numero}`).innerText = `${botinas[3].usuarios.length}`