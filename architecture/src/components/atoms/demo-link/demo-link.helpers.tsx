import { boolean, select, text } from '@storybook/addon-knobs';

import { buildComponent, buildSpecPage } from '../../story.utils';

export const component = buildComponent('demo-link', {
  ariaLabel: (prop = 'ver detalle') => text('ariaLabel', prop),
  color: (prop = 'sea') => select('color', ['brand1', 'brand2', 'brand3', 'gray100'], prop),
  href: (prop = 'demo.pe') => text('href', prop),
  disable: (prop = false) => boolean('disable', prop),
});
export const buildComponentTest = (newSpecPage, baseComponent, specParams = {}) =>
  buildSpecPage(baseComponent, newSpecPage, component, specParams);
