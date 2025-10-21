import serial
import time

arduino = serial.Serial(port = 'COM7', baudrate = 9600, timeout =1)

while True: 
    uIn = input("Enter command " \
    "[A], [B], [C], [D], [E], or [EXIT]: ")

    arduino.write(f"{uIn}\n".encode())
    time.sleep(1)

    if(uIn == "EXIT"):
        break