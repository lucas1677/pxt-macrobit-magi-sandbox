/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#000000 block="motor"
namespace motor {

    export enum Motor {
        M1 = 0,
        M2 = 1
    }

    export enum MotorDirection {
        Forward = 0,
        Backward = 1
    }

    /**
     * change motor's speed and direction
     */
    //% blockId=magi_motor_set_speed
    //% blockGap=8
    //% advanced=false
    //% block="🍎 Motor |%motor| running with direction |%direction| and speed|%speed"
    //% weight=80
    export function setMotorSpeed(motor: Motor, direction: MotorDirection, speed: number): void {

    }

    /**
     * stop all motor
     */
    //% blockId=magi_motor_stop_all
    //% blockGap=8
    //% advanced=false
    //% block="Motor stop all"
    //% weight=50
    export function stopAllMotor() {
        setMotorSpeed(Motor.M1, MotorDirection.Forward, 0);
        setMotorSpeed(Motor.M2, MotorDirection.Forward, 0);
    }
}