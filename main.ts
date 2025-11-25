input.onButtonPressed(Button.A, function () {
    knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    voeding += 5
})
let dood = 0
let knuffel = 20
let voeding = 20
loops.everyInterval(500, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeding < 10 && voeding > dood || knuffel < dood && voeding < dood) {
        basic.showIcon(IconNames.Sad)
    }
    if (true) {
        knuffel += 0
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
