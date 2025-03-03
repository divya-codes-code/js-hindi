const marvel_heros = ["Thor", "Ironman", "spiderman"]

const dc_heros= ["spiderman", "batsman", "flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(another_array);
console.log(real_another_array);

console.log(Array.isArray("DIVYA"))
console.log(Array.from("Divya"))
console.log(Array.from({name:"Divya"}))