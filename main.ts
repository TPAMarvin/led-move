let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
let position = 0
strip.show()
basic.forever(function () {
    if (position < 4) {
        strip.rotate(1)
        position = position + 1
    } else {
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        position = 0
    }
    strip.show()
    basic.pause(100)
})
