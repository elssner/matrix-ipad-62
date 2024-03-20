input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    matrix.rasterCircle(32, 32, 32)
    matrix.rasterCircle(32, 32, 30)
    matrix.line(10, 60, 100, 9, true)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    i1 = matrix.matrix16x8(`
        # # # . . . . . . . . . . # # #
        # . . . . . . . . . . . . . . #
        # . . . . . . . . . . . . . . #
        . . . . . . . # # . . . . . . .
        . . . . . . . # # . . . . . . .
        # . . . . . . . . . . . . . . #
        # . . . . . . . . . . . . . . #
        # # # . . . . . . . . . . # # #
        `)
    matrix.writeImage(i1, 0, 0, 7)
    matrix.writeDisplay()
})
function Konfiguration () {
    matrix.comment("elssner/matrix-ipad-62")
    matrix.comment("1 Erweiterung:")
    matrix.comment("calliope-net/matrix")
}
let i1: Image = null
matrix.init(matrix.ePages.y64)
matrix.clearMatrix()
