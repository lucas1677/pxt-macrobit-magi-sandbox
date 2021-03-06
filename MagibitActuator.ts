/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Actuator"
namespace actuator {
    /**
     * 定义项目中使用的内部数据类型
     */
    export enum InnerNumberType {
        ANALOG,
        DIGITAL
    }
    export enum Motor {
        M1,
        M2
    }

    export enum MotorDirection {
        Forward,
        Backward
    }

    export enum LEDPin {
        P0,
        P1,
        P2,
        P13,
        P16
    }

    export enum LEDState {
        ON,
        OFF
    }
    /**
     * change motor's speed and direction
     */
    //% blockId=magibit_actuator_motor_set_speed
    //% block="Motor |%motor| running with direction |%direction| and speed |%speed|"
    //% weight=80
    //% speed.min=0 speed.max=1023
    export function motorSetSpeed(motor: Motor, direction: MotorDirection, speed: number): void {

        let speedVal = filterInnerTypeNumber(InnerNumberType.ANALOG, speed);

        if (motor == Motor.M1) {
            pins.digitalWritePin(DigitalPin.P8, direction);
            pins.analogWritePin(AnalogPin.P12, speedVal);
        } else if (motor == Motor.M2) {
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
        motorSetSpeed(Motor.M1, MotorDirection.Forward, 0);
        motorSetSpeed(Motor.M2, MotorDirection.Forward, 0);
    }


    /**
     * set LED'S brightness
     */
    //% blockId=magibit_actuator_led_set_brightness
    //% block="LED |%pin| set brightness |%brightness|"
    //% weight=80
    //% brightness.min=0 brightness.max=1023
    export function ledSetBrightness(pin: LEDPin, brightness: number): void {

        let brightnessVal = filterInnerTypeNumber(InnerNumberType.ANALOG, brightness);

        switch (pin) {
            case LEDPin.P0:
                pins.analogWritePin(AnalogPin.P0, brightnessVal);
                break;
            case LEDPin.P1:
                pins.analogWritePin(AnalogPin.P1, brightnessVal);
                break;
            case LEDPin.P2:
                pins.analogWritePin(AnalogPin.P2, brightnessVal);
                break;
            case LEDPin.P13:
                pins.analogWritePin(AnalogPin.P13, brightnessVal);
                break;
            case LEDPin.P16:
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
    export function ledSetOnOff(pin: LEDPin, state: LEDState): void {
        switch (state) {
            case LEDState.ON:
                ledSetBrightness(pin, 1023);
                break;
            case LEDState.OFF:
                ledSetBrightness(pin, 0);
                break;
        }
    }

    /**
     * 项目内部的数据类型非法制过滤
     * @param {InnerNumberType} innerType
     * @param {number} analogNumber
     * @returns {number}
     */
    export function filterInnerTypeNumber(innerType: InnerNumberType, analogNumber: number): number {
        switch (innerType) {
            case InnerNumberType.ANALOG: {
                if (analogNumber < 0 || analogNumber == null) {
                    return 0;
                } else if (analogNumber > 1023) {
                    return 1023;
                } else {
                    return analogNumber;
                }
            }
            case InnerNumberType.DIGITAL: {
                if (analogNumber < 0 || analogNumber == null) {
                    return 0;
                } else {
                    return analogNumber;
                }
            }
        }
        return 0;
    }
}