import { CityList } from "../types";

export function sortArrayByList(array: CityList, list: string[]) {
  // Crear un mapa de títulos y objetos correspondientes
  const map = new Map();
  array.forEach((obj) => map.set(obj.title, obj));

  // Crear un nuevo array ordenado según el listado
  const sortedArray = list.map((title) => map.get(title));

  // Eliminar elementos indefinidos o que no estén en el listado
  const filteredArray = sortedArray.filter((obj) => obj !== undefined);

  return filteredArray;
}
