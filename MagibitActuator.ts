/**
 * support for motor
 */
    //% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Actuator"
namespace actuator {
    /**
     * change motor's speed and direction
     */
    //% blockId=magibit_actuator_motor_set_speed
    //% block="Motor |%motor| running with direction |%direction| and speed |%speed|"
    //% weight=80
    //% speed.min=0 speed.max=1023
    export function motorSetSpeed(motor: magibit.Motor, direction: magibit.MotorDirection, speed: number): void {

        let speedVal = magibit.filterInnerTypeNumber(magibit.InnerNumberType.ANALOG, speed);

        if (motor == magibit.Motor.M1) {
            pins.digitalWritePin(DigitalPin.P8, direction);
            pins.analogWritePin(AnalogPin.P12, speedVal);
        } else if (motor == magibit.Motor.M2) {
            pins.digitalWritePin(DigitalPin.P14, direction);
            pins.analogWritePin(AnalogPin.P15, speedVal)
        }
    }

    /**
     * stop all motor
     */
    //% blockId=magibit_actuator_motor_stop_all
    //% block="Motor stop all"
    //% weight=80
    export function motorStopAll(): void {
        motorSetSpeed(magibit.Motor.M1, magibit.MotorDirection.Forward, 0);
        motorSetSpeed(magibit.Motor.M2, magibit.MotorDirection.Forward, 0);
    }


    /**
     * set LED'S brightness
     */
    //% blockId=magibit_actuator_led_set_brightness
    //% block="LED |%pin| set brightness |%brightness|"
    //% weight=80
    //% brightness.min=0 brightness.max=1023
    export function ledSetBrightness(pin: magibit.LEDPin, brightness: number): void {

        let brightnessVal = magibit.filterInnerTypeNumber(magibit.InnerNumberType.ANALOG, brightness);

        switch (pin) {
            case magibit.LEDPin.P0:
                pins.analogWritePin(AnalogPin.P0, brightnessVal);
                break;
            case magibit.LEDPin.P1:
                pins.analogWritePin(AnalogPin.P1, brightnessVal);
                break;
            case magibit.LEDPin.P2:
                pins.analogWritePin(AnalogPin.P2, brightnessVal);
                break;
            case magibit.LEDPin.P13:
                pins.analogWritePin(AnalogPin.P13, brightnessVal);
                break;
            case magibit.LEDPin.P16:
                pins.analogWritePin(AnalogPin.P16, brightnessVal);
                break;
        }
    }

    /**
     * turn LED on or off
     */
    //% blockId=magibit_actuator_led_on_off
    //% block="LED |%pin| |%state|"
    //% weight=80
    export function ledSetOnOff(pin: magibit.LEDPin, state: magibit.LEDState): void {
        switch (state) {
            case magibit.LEDState.ON:
                ledSetBrightness(pin, 1023);
                break;
            case magibit.LEDState.OFF:
                ledSetBrightness(pin, 0);
                break;
        }
    }
}