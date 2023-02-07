const preferedTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const setPreferedTheme = function () {
  document.documentElement.setAttribute('data-bs-theme', preferedTheme())
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  setPreferedTheme()
})
window.addEventListener('DOMContentLoaded', () => {
  setPreferedTheme()
})
