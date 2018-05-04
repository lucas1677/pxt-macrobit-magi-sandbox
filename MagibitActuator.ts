
/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#000000 block="Magibit Actuator"
namespace MagibitActuator {
    enum Motor {
        M1 = 0,
        M2 = 1
    }

    enum MotorDirection {
        Forward = 0,
        Backward = 1
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