import { html, fixture, expect } from '@open-wc/testing';

import '../src/craft-system';

describe('<craft-system>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<craft-system></craft-system>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <craft-system title="different"></craft-system>
    `);
    expect(el.title).to.equal('different');
  });
});
