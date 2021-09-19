export const WIND_DIRECTION = {
  'С': {from: 348.75, to: 33.75, degree: 0},
  'СВ': {from: 33.75, to: 78.75, degree: 45},
  'В': {from: 78.75, to: 123.75, degree: 90},
  'ЮВ': {from: 123.75, to: 168.75, degree: 135},
  'Ю': {from: 168.75, to: 213.75, degree: 180},
  'ЮЗ': {from: 213.75, to: 258.75, degree: 225},
  'З': {from: 258.75, to: 303.75, degree: 270},
  'СЗ': {from: 303.75, to: 348.75, degree: 315},
}

export function currentWindDirection(obj, deg) {
  for (let key in obj) {
    if (deg >= obj[key].from && deg <= obj[key].to) {
      return [key, obj[key].degree];
    }
    if ((deg > 348.75) || (deg >= 0 && deg <= obj[key].to)) {
      return [key, obj[key].degree];
    }
  }
}