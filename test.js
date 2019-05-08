/*Sum test*/

describe('calculate testsSum', () => {

    it('should test value 1 and 2', function () {
        const act = calculateSum(1, 2);
        const exp = 3;

        assert.equal(act, exp);
    });

    const mock1 = [0, 5, 10, 100, 1000, 10500];
    const mock2 = [0, 7, 80, 90, 6000, 10500];

    for (let i = 0; i <= mock1.length - 1; i++){

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = calculateSum(value1, value2);
            const exp = value1 + value2;

            assert.equal(act, exp);
        });
    }

    it('test value - 1 and 5', function () {
        const act = calculateSum(-1, 5);

        assert.isFalse(act);
    });

    it('should test value 1 and 10501', function () {
        const act = calculateSum(1, 10501);

        assert.isFalse(act);
    });

    it('sum test value 79832 and 38501', function () {
        const act = calculateSum(79832, 38501);

        assert.isFalse(act);
    });

    it('test first arg NaN', function () {
        const act = calculateSum("test", 10500);

        assert.isFalse(act);
    });

    it('test second arg NaN', function () {
        const act = calculateSum(5, 'test');

        assert.isFalse(act);
    });

    it('test first & second arg NaN', function () {
        const act = calculateSum('test', 'test');

        assert.isFalse(act);
    });

    it('test first & second arg undefined', function () {
        const act = calculateSum();

        assert.isFalse(act);
    });


});


/*Multiplication test*/

describe('calculateMultipl tests', () => {

    it('should test value 1 and 2', function () {
        const act = calculateMultipl(4, 2);
        const exp = 8;

        assert.equal(act, exp);
    });

    const mock1 = [0, 13, 27, 125, 999];
    const mock2 = [0, 24, 89, 201, 999];

    for (let i = 0; i < mock1.length - 1; i++){
        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = calculateMultipl(value1, value2);
            const exp = value1 * value2;

            assert.equal(act, exp);
        });
    }

    it('test -3 and 35', function () {
        const act = calculateMultipl(-3, 35);

        assert.isFalse(act);
    });

    it('should test value 0 and 536', function () {
        const act = calculateMultipl(3, 55555);

        assert.isFalse(act);
    });

    it('test first arg NaN', function () {
        const act = calculateMultipl("test", 10500);

        assert.isFalse(act);
    });

    it('test second arg NaN', function () {
        const act = calculateMultipl(5, 'test');

        assert.isFalse(act);
    });

    it('test first & second arg NaN', function () {
        const act = calculateMultipl('test', 'test');

        assert.isFalse(act);
    });

    it('test first & second arg undefined', function () {
        const act = calculateMultipl();

        assert.isFalse(act);
    });
});

/*Divide test*/

describe('calculateDiv tests', () => {

    it('should test value 1 and 2', function () {
        const act = calculateDiv(6, 3);
        const exp = 2;

        assert.equal(act, exp);
    });

    const mock1 = [1, 14, 79, 241, 450, 999];
    const mock2 = [1, 7, 80, 367, 531, 999];

    for (let i = 0; i <= mock1.length - 1; i++) {

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = calculateDiv(value1, value2);
            const exp = value1 / value2;

            assert.equal(act, exp);
        });
    }

    it('test -8 and 43', function () {
        const act = calculateDiv(-8, 43);

        assert.isFalse(act);
    });

    it('should test value 432 and 0', function () {
        const act = calculateDiv(432, 0);

        assert.isFalse(act);
    });

    it('divide test value 400000 value 2', function () {
        const act = calculateDiv(400000, 2);

        assert.isFalse(act);
    });

    it('test first arg NaN', function () {
        const act = calculateDiv("test", 28);

        assert.isFalse(act);
    });

    it('test second arg NaN', function () {
        const act = calculateDiv(89, 'test');

        assert.isFalse(act);
    });

    it('test first & second arg NaN', function () {
        const act = calculateDiv('test', 'test');

        assert.isFalse(act);
    });

    it('test first & second arg undefined', function () {
        const act = calculateDiv();

        assert.isFalse(act);
    });
});


/*Minus test*/

describe('calculateMinus tests', () => {

    it('should test value 1 and 2', function () {
        const act = calculateMinus(9, 4);
        const exp = 5;

        assert.equal(act, exp);
    });

    const mock1 = [0, 73, 150, 328, 674, 999];
    const mock2 = [0, 28, 111, 296, 599, 999];

    for (let i = 0; i <= mock1.length - 1; i++) {

        const value1 = mock1[i];
        const value2 = mock2[i];

        it(`test value1 ${value1} value2 ${value2}`, function () {
            const act = calculateMinus(value1, value2);
            const exp = value1 - value2;

            assert.equal(act, exp);
        });
    }

    it('test -2 and 10', function () {
        const act = calculateMinus(-2, 10);

        assert.isFalse(act);
    });

    it('should test value 28 and 37', function () {
        const act = calculateMinus(28, 37);

        assert.isFalse(act);
    });

    it('minus test value 287963 value 125471', function () {
        const act = calculateMinus(287963, 125471);

        assert.isFalse(act);
    });

    it('test first arg NaN', function () {
        const act = calculateMinus("test", 11);

        assert.isFalse(act);
    });

    it('test second arg NaN', function () {
        const act = calculateMinus(33, 'test');

        assert.isFalse(act);
    });

    it('test first & second arg NaN', function () {
        const act = calculateMinus('test', 'test');

        assert.isFalse(act);
    });

    it('test first & second arg undefined', function () {
        const act = calculateMinus();

        assert.isFalse(act);
    });
});