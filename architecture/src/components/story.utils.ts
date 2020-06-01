const camel2Dash = v => {
  let ret = '';
  let prevLowercase = false;
  for (const s of v) {
    const isUppercase = s.toUpperCase() === s;
    if (isUppercase && prevLowercase) ret += '-';
    ret += s;
    prevLowercase = !isUppercase;
  }
  return ret.replace(/-+/g, '-').toLowerCase();
};

export const toAttr = (fn, config, name, raw) =>
  raw ? `${camel2Dash(name)}="${config}"` : `${camel2Dash(name)}="${config ? fn(config) : fn()}"`;

export const comps = (allProps, config = {}, raw) => {
  let ret = '';
  Object.entries(allProps).forEach(name => {
    ret += toAttr(name[1], config[name[0]], name[0], raw);
  });
  return ret;
};

export const buildComponent = (tag, allProps = {}) => (config, tmpl = '', raw = false) =>
  `<${tag} ${comps(allProps, config, raw)}>${tmpl}</${tag}>`;

export const buildSpecPage = (components, newSpecPage, component, params) => (
  componentParams,
  html,
  raw = true,
) => {
  const specParams = {
    html: component(componentParams, html, raw),
    components,
    autoApplyChanges: true,
    supportsShadowDom: true,
    ...params,
  };
  const spec = newSpecPage(specParams);
  spec.html = component(componentParams, html, raw);
  return spec;
};

export const text = val => val;
