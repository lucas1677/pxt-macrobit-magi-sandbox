namespace magibit {

    /**
     * 项目内部的数据类型非法制过滤
     * @param {MagibitActuator.InnerNumberType} innerType
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