
declare namespace magibit {
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
}
