def on_forever():
    pins.B1.digital_write(True)
    pause(1000)
    pins.B1.digital_write(False)
    pause(1000)
forever(on_forever)
