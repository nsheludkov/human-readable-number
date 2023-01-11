const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{1})(\d{2})$/

const getLT20 = (n) => a[Number(n)]
const getGT20 = (n) => b[n[0]] + ' ' + a[n[1]]

module.exports = function toReadable (number) {
    const num = Number(number)
    if (isNaN(num)) return ''
    if (num === 0) return 'zero'
  
    const numStr = num.toString()
    if (numStr.length > 3) {
      throw new Error('overflow') // Does not support converting more than 3 digits yet
    }
  
    const [, n4, n5] = ('000' + numStr).substr(-3).match(regex) // left pad zeros
  
    let str = ''
    str += n4 != 0 ? getLT20(n4) + 'hundred ' : ''

    str += n5 != 0 ? (getLT20(n5) || getGT20(n5)) : ''
  
    return str.trim()
}

