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
        P0,
        P1,
        P2,
        P13,
        P16
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
        } else if(motor == Motor.M2) {
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
     * set servo angle
     */
    //% blockId=magibit_actuator_servo_set_angle
    //% block="Servo |%pin| rotate to angle |%angle|°"
    //% angle.min=0 angle.max=180
    //% weight=80
    export function servoSetAngle(pin: ServoPin, angle: number): void {
        return null;
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