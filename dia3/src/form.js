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

// correção pelo fdaciuk. ^^^

function $ (selector) {
  return document.querySelector(selector)
}

const form = document.querySelector('[data-js="form"]')
const select = document.createElement('select')
const colors = ['#6B7280','#EF4444', '#0000FF', '#00FFFF', '#7FFF00']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})


select.addEventListener('change', (e) => {
  colorsContainer.innerHTML = ''

  Array.from(e.target.selectedOptions).forEach(option => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.background = option.value
    document.body.appendChild(div)
  })
})

select.setAttribute('multiple','')
form.appendChild(select)
document.body.appendChild(colorsContainer)

// 00:54

