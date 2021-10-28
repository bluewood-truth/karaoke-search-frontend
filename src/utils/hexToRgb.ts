const hexToRgb = (hex: string) => {
  hex = hex.trim().replace('#', '');
  const hexSplited = hex.length === 3 ? hex.split('') : hex.match(/.{1,2}/g);
  const rgb = [0, 0, 0];
  hexSplited?.forEach((value, i) => {
    rgb[i] = parseInt(value, 16);
  });

  return rgb.join(', ');
};

export default hexToRgb;
