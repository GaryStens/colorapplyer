function applyColor(color, value) {
    if (color == 'reset') {
        return '\x1b[0m' + value
    } else if (color == 'bright') {
        return '\x1b[1m' + value
    } else if (color == 'dim') {
        return '\x1b[2m' + value
    } else if (color == 'underscore') {
        return '\x1b[4m' + value
    } else if (color == 'blink') {
        return '\x1b[5m' + value
    } else if (color == 'reverse') {
        return '\x1b[7m' + value
    } else if (color == 'hidden') {
        return '\x1b[8m' + value
    } else if (color == 'fgblack') {
        return '\x1b[30m' + value
    } else if (color == 'fgred') {
        return '\x1b[31m' + value
    } else if (color == 'fggreen') {
        return '\x1b[32m' + value
    } else if (color == 'fgyellow') {
        return '\x1b[33m' + value
    } else if (color == 'fgblue') {
        return '\x1b[34m' + value
    } else if (color == 'fgmagenta') {
        return '\x1b[35m' + value
    } else if (color == 'fgcyan') {
        return '\x1b[36m' + value
    } else if (color == 'fgwhite') {
        return '\x1b[37m' + value
    }
}

module.exports = { applyColor }
