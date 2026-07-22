export const getGroundwaterColor = (
  depth: number
) => {

  if (depth <= 20)
    return "#22c55e";

  if (depth <= 50)
    return "#eab308";

  return "#ef4444";
};

export const getMineralStatus = (
  tds: number
) => {

  return tds > 500
    ? "Unsafe"
    : "Safe";
};