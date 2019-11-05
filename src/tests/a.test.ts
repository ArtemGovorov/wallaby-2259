const expect = require('expect');

const execute = async function (): Promise<void> {
    throw new Error('Could not decide which path to take ;(');
};

it('execute: throws error when undecisive', () => {
    return expect(execute()).rejects.toEqual(
      new Error('Could not decide which path to take ;(')
    );
});