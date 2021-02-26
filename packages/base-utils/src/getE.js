import Test from './Test'
const getE = () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  Test.render(div, { aa: 'aaaaa' })
  window.alert('eeeeeee')
}

export default getE
