const getRandomInteger = (max, min = 0) => {
  return Math.round(Math.random() * max + min)
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

const getRandomStr = () => {
  let random = getRandomInteger(5)
  if (random < 10) {
    random = `00${random}`
  } else if (random > 10 && random < 100) {
    random = `0${random}`
  }
  return random
}

export {
  getRandomInteger,
  getScrollHeight,
  getWindowHeight,
  getRandomStr
}
