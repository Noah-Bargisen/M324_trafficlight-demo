const app = require("./trafficlight");

describe('Test Suite Traffic Light', () => {
    it('should return "OUT OF ORDER" when no argument is provided', () => {
        expect(app.trafficLight()).toBe('OUT OF ORDER');
    });

    it('case red light', () => {
        expect(app.trafficLight('red')).toBe("DON'T WALK!");
    });

    it('case orange light', () => {
        expect(app.trafficLight('orange')).toBe('ATTENTION!');
    });

    it('case green light', () => {
        expect(app.trafficLight('green')).toBe('WALK!');
    });

    it('should return undefined for unsupported colors', () => {
        expect(app.trafficLight('blue')).toBeUndefined();
        expect(app.trafficLight('purple')).toBeUndefined();
        expect(app.trafficLight('yellow')).toBeUndefined();
    });
});
