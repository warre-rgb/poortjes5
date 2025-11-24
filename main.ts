basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        let knuffel = 0
        let voeding = 0
        if (voeding < 10 && knuffel < 10) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
