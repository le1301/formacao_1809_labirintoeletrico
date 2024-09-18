input.onButtonPressed(Button.A, function () {
    counter = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(counter)
})
function sinalizador () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
}
let counter = 0
counter = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        sinalizador()
        counter += 1
        music.ringTone(262)
        basic.pause(8)
        music.stopAllSounds()
    }
})
