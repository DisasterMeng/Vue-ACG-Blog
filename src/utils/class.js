const addClass = (el, className) => {
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
  return el
}

const removeClass = (el, className) => {
  if (hasClass(el, className)) {
    el.classList.remove(className)
  }
  return el
}

const hasClass = (el, className) => {
  return el.classList.contains(className)
}

const toggleClass = (el, className) => {
  el.classList.toggle(className)
  return el
}

export {
  addClass,
  hasClass,
  removeClass,
  toggleClass
}
