
/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#000000 block="Magibit Actuator"
namespace MagibitActuator {
    export enum Motor {
        M1,
        M2
    }

    export enum MotorDirection {
        Forward,
        Backward
    }
    /**
     * change motor's speed and direction
     */
    //% blockId=magibit_actuator_motor_set_speed
    //% block="🍎 Motor |%motor| running with direction |%direction| and speed |%speed|"
    //% weight=80
    export function setMotorSpeed(motor: Motor, direction: MotorDirection, speed: number): void {

    }

}