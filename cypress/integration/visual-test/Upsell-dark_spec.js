describe('Upsell dark mode visual regression check', () => {
  beforeEach(() => {
    cy.visit('/visual-test/Upsell-dark');
  });

  it('Compares snapshots', () => {
    cy.get('[data-test-id="visual-test"]').toMatchImageSnapshot({
      name: 'Upsell-dark',
      imageConfig: {
        threshold: 0.001,
        thresholdType: 'percent',
      },
    });
  });
});