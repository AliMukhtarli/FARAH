/**
 * Central route path constants — use these instead of hard-coded strings.
 */
export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  product: (slug) => `/product/${slug}`,
  about: '/about',
  contact: '/contact',
};
