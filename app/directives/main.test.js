export default ngModule => {
    describe(`main`, () => {
        beforeEach(window.module(ngModule.name));

        it(`should test properly`, () => {
            expect(true).to.be.true;
        });
    });
};