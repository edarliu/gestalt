describe('PageHeader visual regression check', () => {
  beforeEach(() => {
    cy.visit('/visual-test/PageHeader-thumbnail-badge-iconButton');
  });

  const BREAKPOINTS = { xs: 360, sm: 576, md: 768, lg: 1312 };

  Object.keys(BREAKPOINTS).forEach((size) => {
    it(`Compares snapshots on ${size}:${BREAKPOINTS[size]}px breakpoint`, () => {
      cy.viewport(BREAKPOINTS[size], 1080);
      cy.get('[data-test-id="visual-test"]').toMatchImageSnapshot({
        name: `PageHeader-thumbnail-badge-iconButton-${size}`,
        imageConfig: {
          threshold: 0.001,
          thresholdType: 'percent',
        },
      });
    });
  });
});