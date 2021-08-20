const inputName = document.querySelector('[data-js="username"]')
const dontChange = ['da', 'das', 'de', 'do', 'dos']

inputName.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')

  e.target.value = valueAsArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : fixCase(word)
  }).join(' ')
})

function fixCase (word) {
  if(word.length === 0){
  return ''
  }

  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

// correção pelo fdaciuk.
