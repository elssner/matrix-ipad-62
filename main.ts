input.onGesture(Gesture.TiltRight, function () {
    richtung = 1
    basic.showIcon(IconNames.ArrowSouthEast)
})
function moveY () {
    y += richtung
    matrix.setPixel(x, y, true)
    matrix.displayMatrixChangedPages()
}
function moveX () {
    x += richtung
    matrix.setPixel(x, y, true)
    matrix.displayMatrixChangedPages()
}
input.onGesture(Gesture.TiltLeft, function () {
    richtung = -1
    basic.showIcon(IconNames.ArrowNorthWest)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    richtung = richtung * -1
})
function Konfiguration () {
    matrix.comment("elssner/matrix-ipad-62")
    matrix.comment("1 Erweiterung:")
    matrix.comment("calliope-net/matrix")
}
input.onButtonEvent(Button.AB, input.buttonEventValue(ButtonEvent.Hold), function () {
    matrix.clearMatrix()
    matrix.displayMatrix()
})
let y = 0
let x = 0
let richtung = 0
matrix.init(matrix.ePages.y128)
matrix.displayMatrix()
richtung = 1
x = 0
y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        basic.setLedColors(0xff0000, 0x000000, 0x000000)
        moveX()
    } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
        basic.setLedColors(0x000000, 0x000000, 0xff0000)
        moveY()
    } else {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
