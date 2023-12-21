input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(Stunden)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showNumber(Minuten)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(Sekunden)
})
let Stunden = 0
let Minuten = 0
let Sekunden = 0
Sekunden = 0
Minuten = 0
Stunden = 0
basic.pause(100)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Sekunden += 1
    basic.pause(800)
    if (Sekunden == 60) {
        Minuten += 1
        Sekunden = 0
    } else if (Minuten == 60) {
        Stunden += 1
        Minuten = 0
    } else if (Stunden == 24) {
        Sekunden = 0
    } else {
        basic.setLedColor(0xff0000)
    }
})
