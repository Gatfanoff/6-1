const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const arr = ["name", "level"];

export default function orderByProps(obj, order) {
  const result = [];
  const missingProps = [];

  for (const key of order) {
    if (obj.hasOwnProperty(key)) {
      result.push({ key, value: obj[key] });
    } else {
      missingProps.push(key);
    }
  }

  for (const key in obj) {
    if (!order.includes(key)) {
      result.push({ key, value: obj[key] });
    }
  }

  if (missingProps.length > 0) {
    throw new Error(`В объекте нет свойств: ${missingProps.join(", ")}`);
  }

  return result;
}