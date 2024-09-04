const appPaths: string[] = ['/'];

describe('Smoke check', () => {
    appPaths.forEach((path) => {
        it(`Visit "${path}"`, () => {
            cy.visit(path);
            cy.get('body').should('be.visible');
        });
    });
});
