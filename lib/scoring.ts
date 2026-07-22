export const calculateSustainability = (depth: number, mineralScore: number) => {
  // Logic: Lower depth (0-20) and high mineral score result in higher sustainability
  const depthScore = depth > 50 ? 20 : depth > 20 ? 50 : 90;
  return Math.round((depthScore * 0.6) + (mineralScore * 0.4));
};