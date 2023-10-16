import orderByProps from '../index';

test("Property order check", () => {
  const someHero = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const properOrder = orderByProps({ ...someHero }, ["name", "level"]);

  expect(properOrder).toEqual([
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ]);
});

test("Property error check", () => {
  const someHero = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  expect(() => {
    orderByProps({ ...someHero }, ["name", "level", "zodiac"]);
  }).toThrow("В объекте нет свойств: zodiac");
});