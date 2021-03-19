import { parseTime, parseToBoolean, parseToNumber, parseToPositiveNumberOrNull, serializeCategoryId, serializeDuration, serializeFee } from "../components/EventForm/utils/eventFormFieldParsers";

describe('eventFormFieldsParsers', () => {
    it('should parseToNumberOrNull', () => {
        expect(parseToPositiveNumberOrNull('1')).toBe(1);
        expect(parseToPositiveNumberOrNull('0')).toBe(null);
        expect(parseToPositiveNumberOrNull('df')).toBe(null);
        expect(parseToPositiveNumberOrNull('')).toBe(null);
        expect(parseToPositiveNumberOrNull('-4')).toBe(null);
    });

    it('should parseToNumber', () => {
        expect(parseToNumber('-4')).toBe(-4);
        expect(parseToNumber('1')).toBe(1);
        expect(parseToNumber('')).toBe(0);
        expect(parseToNumber('null')).toBe(0);
    });

    it('should parseToBoolean', () => {
        expect(parseToBoolean('1')).toBeTruthy();
        expect(parseToBoolean('0')).toBeFalsy();
        expect(parseToBoolean('test')).toBeFalsy();
        expect(parseToBoolean('')).toBeFalsy();
    });

    it('should parseTime', () => {
        expect(parseTime('00:00')).toBe("00:00");
        expect(parseTime('12:00')).toBe("12:00");
        expect(parseTime('12:01')).toBe("12:01");
        expect(parseTime('13:01')).toBe("12:01");
    });

    it('should serializeCategoryId', () => {
        expect(serializeCategoryId(1)).toBe(1);
        expect(serializeCategoryId(0)).toBe(0);
        expect(serializeCategoryId('test')).toBe(null);
    });

    it('should serializeDuration', () => {
        expect(serializeDuration(null)).toBe(0);
        expect(serializeDuration(0)).toBe(0);
        expect(serializeDuration(1)).toBe(3600);
    });

    it('should serializeFee', () => {
        expect(serializeFee(null, true)).toBe(null);
        expect(serializeFee(null, false)).toBe(null);
        expect(serializeFee(20, false)).toBe(null);
        expect(serializeFee(20, true)).toBe(20);

    });
});
