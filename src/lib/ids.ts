// Unique ids for SVG gradients, so several marks can share a page.
let n = 0;
export const uid = (prefix: string) => `${prefix}-${++n}`;
