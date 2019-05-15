const getRandomInteger = (max, min = 0) => {
  return Math.round(Math.random() * max + min)
}

const getRandomChar = () => {
  return Math.random().toString(36).substring(2)
}

const getScrollHeight = () => {
  let scrollHeight = 0
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

const getWindowHeight = () => {
  let windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  return windowHeight
}

export {
  getRandomInteger,
  getScrollHeight,
  getWindowHeight,
  getRandomChar
}
