/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Actuator"
namespace MagibitActuator {
    export enum Motor {
        M1 = 0,
        M2 = 1
    }

    export enum MotorDirection {
        Forward = 0,
        Backward = 1
    }

    export enum ServoPin {
        P0 = AnalogPin.P0,
        P1 = AnalogPin.P1,
        P2 = AnalogPin.P2,
        P13 = AnalogPin.P13,
        P16 = AnalogPin.P16
    }

    export enum LEDPin {
        P0,
        P1,
        P2
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

        if (motor == Motor.M1) {
            pins.digitalWritePin(DigitalPin.P8, direction);
            pins.analogWritePin(AnalogPin.P12, speed);
        } else if (motor == Motor.M2) {
            pins.digitalWritePin(DigitalPin.P14, direction);
            pins.analogWritePin(AnalogPin.P15, speed)
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
     * set servo angle v7
     */
    //% blockId=magibit_actuator_servo_set_angle
    //% block="Servo |%pinId| rotate to angle |%angle|°"
    //% angle.min=0 angle.max=180
    //% weight=80
    export function servoSetAngle(pinId: ServoPin, angle: number): void {
        return null;
    }

    function getAnalogPin(pinNumber: number): AnalogPin {
        switch (pinNumber) {
            case AnalogPin.P0:
                return AnalogPin.P0;
            case AnalogPin.P1:
                return AnalogPin.P1;
            case AnalogPin.P2:
                return AnalogPin.P2;
            case AnalogPin.P3:
                return AnalogPin.P3;
            case AnalogPin.P4:
                return AnalogPin.P4;
            case AnalogPin.P5:
                return AnalogPin.P5;
            case AnalogPin.P6:
                return AnalogPin.P6;
            case AnalogPin.P7:
                return AnalogPin.P7;
            case AnalogPin.P8:
                return AnalogPin.P8;
            case AnalogPin.P9:
                return AnalogPin.P9;
            case AnalogPin.P10:
                return AnalogPin.P10;
            case AnalogPin.P11:
                return AnalogPin.P11;
            case AnalogPin.P12:
                return AnalogPin.P12;
            case AnalogPin.P13:
                return AnalogPin.P13;
            case AnalogPin.P14:
                return AnalogPin.P14;
            case AnalogPin.P15:
                return AnalogPin.P15;
            case AnalogPin.P16:
                return AnalogPin.P16;
            case AnalogPin.P19:
                return AnalogPin.P19;
            case AnalogPin.P20:
                return AnalogPin.P20;
        }
    }

    /**
     * set LED'S brightness
     */
    //% blockId=magibit_actuator_led_set_brightness
    //% block="LED |%pin| set brightness |%brightness|"
    //% weight=80
    //% brightness.min=0 brightness.max=255
    export function ledSetBrightness(pin: LEDPin, brightness: number): void {
        return null;
    }

    /**
     * turn LED on or off
     */
    //% blockId=magibit_actuator_led_on_off
    //% block="LED |%pin| |%state|"
    //% weight=80
    export function ledSetOnOff(pin: LEDPin, state: LEDState): void {
        return null;
    }

    /**
     * set LED'S brightness from A to B
     */
    //% blockId=magibit_actuator_led_set_brightness_range
    //% block="LED set range"
    //% weight=80
    export function ledSetBrightnessRange(): void {
        return null;
    }
}