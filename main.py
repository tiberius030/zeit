def on_button_a():
    basic.show_number(Stunden)
    basic.show_leds("""
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        """)
    basic.show_number(Minuten)
    basic.pause(200)
    basic.clear_screen()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    basic.show_number(Sekunden)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Stunden = 0
Minuten = 0
Sekunden = 0
Sekunden = 0
Minuten = 0
Stunden = 0
basic.pause(100)
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.WHOLE))
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.WHOLE))
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(587, music.beat(BeatFraction.WHOLE))
music.play_tone(523, music.beat(BeatFraction.WHOLE))
music.play_tone(440, music.beat(BeatFraction.WHOLE))
basic.pause(200)
music.play_tone(262, music.beat(BeatFraction.WHOLE))
music.play_tone(330, music.beat(BeatFraction.WHOLE))
music.play_tone(440, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
basic.pause(200)
music.play_tone(330, music.beat(BeatFraction.WHOLE))
music.play_tone(415, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(523, music.beat(BeatFraction.WHOLE))
basic.pause(200)
music.play_tone(330, music.beat(BeatFraction.HALF))
basic.pause(200)
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.WHOLE))
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(622, music.beat(BeatFraction.WHOLE))
music.play_tone(659, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(587, music.beat(BeatFraction.WHOLE))
music.play_tone(523, music.beat(BeatFraction.WHOLE))
music.play_tone(440, music.beat(BeatFraction.WHOLE))
basic.pause(200)
music.play_tone(262, music.beat(BeatFraction.WHOLE))
music.play_tone(330, music.beat(BeatFraction.WHOLE))
music.play_tone(440, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
basic.pause(100)
music.play_tone(330, music.beat(BeatFraction.WHOLE))
music.play_tone(415, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(523, music.beat(BeatFraction.WHOLE))
basic.pause(200)
music.play_tone(330, music.beat(BeatFraction.HALF))
basic.pause(200)
music.play_tone(523, music.beat(BeatFraction.WHOLE))
music.play_tone(494, music.beat(BeatFraction.WHOLE))
music.play_tone(440, music.beat(BeatFraction.WHOLE))
music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
    music.PlaybackMode.UNTIL_DONE)
music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.create_sound_expression(WaveShape.SQUARE,
        1600,
        1,
        255,
        0,
        382,
        SoundExpressionEffect.NONE,
        InterpolationCurve.CURVE),
    music.PlaybackMode.UNTIL_DONE)
music._play_default_background(music.built_in_playable_melody(Melodies.CHASE),
    music.PlaybackMode.UNTIL_DONE)
music._play_default_background(music.built_in_playable_melody(Melodies.WEDDING),
    music.PlaybackMode.UNTIL_DONE)
music._play_default_background(music.built_in_playable_melody(Melodies.POWER_UP),
    music.PlaybackMode.UNTIL_DONE)
basic.show_icon(IconNames.YES)
basic.pause(3000)
basic.clear_screen()

def on_forever():
    global Sekunden, Minuten, Stunden
    Sekunden += 1
    basic.pause(823)
    if Sekunden == 60:
        Minuten += 1
        Sekunden = 0
    elif Minuten == 60:
        Stunden += 1
        Minuten = 0
    elif Stunden == 24:
        Stunden = 0
    else:
        basic.set_led_color(0xff0000)
basic.forever(on_forever)
