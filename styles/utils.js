const baseSize = 8;
const multiplierKeys = ["$0", "$1", "$2", "$3", "$4", "$5", "$6"];
const multipliers = {
  $0: 0.5,
  $1: 1,
  $2: 1.5,
  $3: 2,
  $4: 2.5,
  $5: 3,
  $6: 3.5,
};

export const generateSpacings = () => {
  return multiplierKeys.reduce((spacings, key) => {
    const spacing = baseSize * multipliers[key];

    spacings[key] = `${spacing}px`;

    return spacings;
  }, {});
};

export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);

  return `${color}${opacityHex}`;
};
