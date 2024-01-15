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
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(622, music.beat(BeatFraction.Whole))
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(622, music.beat(BeatFraction.Whole))
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(587, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(330, music.beat(BeatFraction.Half))
basic.pause(200)
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(622, music.beat(BeatFraction.Whole))
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(622, music.beat(BeatFraction.Whole))
music.playTone(659, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(587, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Whole))
basic.pause(200)
music.playTone(330, music.beat(BeatFraction.Half))
basic.pause(200)
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
basic.pause(200)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 382, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
basic.pause(3000)
basic.clearScreen()
basic.forever(function () {
    Sekunden += 1
    basic.pause(823)
    if (Sekunden == 60) {
        Minuten += 1
        Sekunden = 0
    } else if (Minuten == 60) {
        Stunden += 1
        Minuten = 0
    } else if (Stunden == 24) {
        Stunden = 0
    } else {
        basic.setLedColor(0xff0000)
    }
})
