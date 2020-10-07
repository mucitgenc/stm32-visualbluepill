forever(function on_forever() {
    pins.B1.digitalWrite(true)
    pause(1000)
    pins.B1.digitalWrite(false)
    pause(1000)
})
