export const epsilon = () => {
  let e = 1.0;
  while (1 + e !== 1.0) e /= 2.0;

  return e;
};
