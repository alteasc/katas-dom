// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div')

document.body.appendChild(divVacio)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement('div')
const p = document.createElement('p')

document.body.appendChild(divP)
divP.appendChild(p)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const divLoopP = document.createElement('div')

for (let i = 1; i < 7; i++) {
  const p = document.createElement('p')
  divLoopP.appendChild(p)
}

document.body.appendChild(divLoopP)

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const pText = document.createElement('p')
pText.textContent = 'Soy dinámico!'
document.body.appendChild(pText)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ulApps = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ulApps.appendChild(li)
}

document.body.appendChild(ulApps)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const pBorrables = document.querySelectorAll('.fn-remove-me')

for (const pBorrable of pBorrables) {
  pBorrable.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const div = document.querySelectorAll('div')
const pCentral = document.createElement('p')
pCentral.textContent = 'Voy en medio!'

document.body.insertBefore(pCentral, div[2])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divsClase = document.querySelectorAll('.fn-insert-here')
for (const divClase of divsClase) {
  const pDentro = document.createElement('p')
  pDentro.textContent = 'Voy dentro!'
  divClase.appendChild(pDentro)
}
