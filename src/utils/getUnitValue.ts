const getUnitValue = (unit: any, key: any | undefined, origin = undefined) => {
  if (key === undefined) {
    return origin;
  } else if (typeof unit === 'object' && key in unit) {
    return unit[key];
  } else {
    return key;
  }
};

export default getUnitValue;
