/**
 * Shared animation config for a premium, smooth feel across the site.
 */

export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  out: [0.22, 0.61, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const viewport = { once: true, margin: "-80px" } as const;

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: ease.smooth },
};

export const fadeUpStagger = (delay = 0.08) => ({
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: ease.out },
  getDelay: (i: number) => delay * i,
});

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.25, ease: ease.out } },
  whileTap: { scale: 0.99 },
};

export const buttonHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
};
