const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const arr = ["name", "level"];

function orderByProps (obj, order) {
    const result = [];
    for (const key of order) {
       if (obj.hasOwnProperty(obj)) {
        result.push({key, value: obj[key]})
       } 
    }
    
    const sort = Object.keys(obj).sort();
    for (const key of sort) {
        result.push({key, value: obj[key] })
    }
    return result
}
