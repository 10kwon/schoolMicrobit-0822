function convertCtoF (C: number) {
    return C * 1.8 + 32
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    serial.writeLine("Current Temperature: " + input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertCtoF(input.temperature()))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
