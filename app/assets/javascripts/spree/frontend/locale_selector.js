window.addEventListener('DOMContentLoaded', () => {
  const localeSelector = document.querySelector('[data-js-locale-selector] select')

  localeSelector.addEventListener('change', (event) => {
    event.target.form.submit()
  })
})
