const TABLE_NAME = 'hljs-ln'

const LINE_NAME = 'hljs-ln-line'

const CODE_BLOCK_NAME = 'hljs-ln-code'

const NUMBERS_BLOCK_NAME = 'hljs-ln-numbers'

const NUMBER_LINE_NAME = 'hljs-ln-n'

const DATA_ATTR_NAME = 'data-line-number'

const BREAK_LINE_REGEXP = /\r\n|\r|\n/g

// https://github.com/wcoder/highlightjs-line-numbers.js
class lineNumbers {
  isHljsLnCodeDescendant (domElt) {
    let curElt = domElt
    while (curElt) {
      if (curElt.className && curElt.className.indexOf('hljs-ln-code') !== -1) {
        return true
      }
      curElt = curElt.parentNode
    }
    return false
  }

  getHljsLnTable (hljsLnDomElt) {
    let curElt = hljsLnDomElt
    while (curElt.nodeName !== 'TABLE') {
      curElt = curElt.parentNode
    }
    return curElt
  }

  // Function to workaround a copy issue with Microsoft Edge.
  // Due to hljs-ln wrapping the lines of code inside a <table> element,
  // itself wrapped inside a <pre> element, window.getSelection().toString()
  // does not contain any line breaks. So we need to get them back using the
  // rendered code in the DOM as reference.
  edgeGetSelectedCodeLines (selection) {
    // current selected text without line breaks
    let selectionText = selection.toString()

    // get the <td> element wrapping the first line of selected code
    let tdAnchor = selection.anchorNode
    while (tdAnchor.nodeName !== 'TD') {
      tdAnchor = tdAnchor.parentNode
    }

    // get the <td> element wrapping the last line of selected code
    let tdFocus = selection.focusNode
    while (tdFocus.nodeName !== 'TD') {
      tdFocus = tdFocus.parentNode
    }

    // extract line numbers
    let firstLineNumber = parseInt(tdAnchor.dataset.lineNumber)
    let lastLineNumber = parseInt(tdFocus.dataset.lineNumber)

    // multi-lines copied case
    if (firstLineNumber !== lastLineNumber) {
      let firstLineText = tdAnchor.textContent
      let lastLineText = tdFocus.textContent

      // if the selection was made backward, swap values
      if (firstLineNumber > lastLineNumber) {
        let tmp = firstLineNumber
        firstLineNumber = lastLineNumber
        lastLineNumber = tmp
        tmp = firstLineText
        firstLineText = lastLineText
        lastLineText = tmp
      }

      // discard not copied characters in first line
      while (selectionText.indexOf(firstLineText) !== 0) {
        firstLineText = firstLineText.slice(1)
      }

      // discard not copied characters in last line
      while (selectionText.lastIndexOf(lastLineText) === -1) {
        lastLineText = lastLineText.slice(0, -1)
      }

      // reconstruct and return the real copied text
      let selectedText = firstLineText
      let hljsLnTable = this.getHljsLnTable(tdAnchor)
      for (let i = firstLineNumber + 1; i < lastLineNumber; ++i) {
        let codeLineSel = this.format('.{0}[{1}="{2}"]', [CODE_BLOCK_NAME, DATA_ATTR_NAME, i])
        let codeLineElt = hljsLnTable.querySelector(codeLineSel)
        selectedText += '\n' + codeLineElt.textContent
      }
      selectedText += '\n' + lastLineText
      return selectedText
      // single copied line case
    } else {
      return selectionText
    }
  }

  addStyles () {
    let css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML = this.format(
      '.{0}{border-collapse:collapse}' +
            '.{0} td{padding:0}' +
            '.{1}:before{content:attr({2})}',
      [
        TABLE_NAME,
        NUMBER_LINE_NAME,
        DATA_ATTR_NAME
      ])
    document.getElementsByTagName('head')[0].appendChild(css)
  }

  documentReady (options) {
    try {
      let blocks = options.el.querySelectorAll('code.hljs,code.nohighlight')
      for (let i in blocks) {
        if (blocks.hasOwnProperty(i)) {
          this.lineNumbersBlock(blocks[i], options)
        }
      }
    } catch (e) {
      console.error('LineNumbers error: ', e)
    }
  }

  initLineNumbersOnLoad (options) {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      this.documentReady(options)
    } else {
      window.addEventListener('DOMContentLoaded', () => this.documentReady(options))
    }
  }

  lineNumbersBlock (element, options) {
    if (typeof element !== 'object') return

    this.async(() => { element.innerHTML = this.lineNumbersInternal(element, options) })
  }

  lineNumbersValue (value, options) {
    if (typeof value !== 'string') return

    let element = document.createElement('code')
    element.innerHTML = value

    return this.lineNumbersInternal(element, options)
  }

  lineNumbersInternal (element, options) {
    // define options or set default
    options = options || {
      singleLine: false
    }

    // convert options
    let firstLineIndex = options.singleLine ? 0 : 1

    this.duplicateMultilineNodes(element)

    return this.addLineNumbersBlockFor(element.innerHTML, firstLineIndex)
  }

  addLineNumbersBlockFor (inputHtml, firstLineIndex) {
    let lines = this.getLines(inputHtml)

    // if last line contains only carriage return remove it
    if (lines[lines.length - 1].trim() === '') {
      lines.pop()
    }

    if (lines.length > firstLineIndex) {
      let html = ''

      for (let i = 0, l = lines.length; i < l; i++) {
        html += this.format(
          '<tr>' +
                        '<td class="{0} {1}" {3}="{5}">' +
                            '<div class="{2}" {3}="{5}"></div>' +
                        '</td>' +
                        '<td class="{0} {4}" {3}="{5}">' +
                            '{6}' +
                        '</td>' +
                    '</tr>',
          [
            LINE_NAME,
            NUMBERS_BLOCK_NAME,
            NUMBER_LINE_NAME,
            DATA_ATTR_NAME,
            CODE_BLOCK_NAME,
            i + 1,
            lines[i].length > 0 ? lines[i] : ' '
          ])
      }

      return this.format('<table class="{0}">{1}</table>', [ TABLE_NAME, html ])
    }

    return inputHtml
  }

  duplicateMultilineNodes (element) {
    let nodes = element.childNodes
    for (let node in nodes) {
      if (nodes.hasOwnProperty(node)) {
        let child = nodes[node]
        if (this.getLinesCount(child.textContent) > 0) {
          if (child.childNodes.length > 0) {
            this.duplicateMultilineNodes(child)
          } else {
            this.duplicateMultilineNode(child.parentNode)
          }
        }
      }
    }
  }

  /**
     * Method for fix multi-line elements implementation in highlight.js
     * @param {HTMLElement} element
     */
  duplicateMultilineNode (element) {
    let result = ''

    let className = element.className

    if (!/hljs-/.test(className)) return

    let lines = this.getLines(element.innerHTML)

    for (let i = 0; i < lines.length; i++) {
      let lineText = lines[i].length > 0 ? lines[i] : ' '
      result += this.format('<span class="{0}">{1}</span>\n', [ className, lineText ])
    }

    element.innerHTML = result.trim()
  }

  getLines (text) {
    if (text.length === 0) return []
    return text.split(BREAK_LINE_REGEXP)
  }

  getLinesCount (text) {
    return (text.trim().match(BREAK_LINE_REGEXP) || []).length
  }

  async (func) {
    window.setTimeout(func, 0)
  }

  /**
     * {@link https://wcoder.github.io/notes/string-format-for-string-formating-in-javascript}
     * @param {string} format
     * @param {array} args
     */
  format (format, args) {
    return format.replace(/\{(\d+)\}/g, (m, n) => args[n] || m)
  }
}

export default lineNumbers
