function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function getRandomColor() {
  const date = new Date();
  const seconds = date.getSeconds();
  const red = Math.round(Math.sin(seconds * 0.1) * 127 + 128); // 根据时间计算红色分量
  const green = Math.round(Math.sin(seconds * 0.2) * 127 + 128); // 根据时间计算绿色分量
  const blue = Math.round(Math.sin(seconds * 0.3) * 127 + 128); // 根据时间计算蓝色分量
  return rgbToHex(red, green, blue);
}
