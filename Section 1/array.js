const my_array=['xt',233,true,undefined];
console.log(my_array);
console.log(typeof my_array);
console.log(Array.isArray(my_array));

const movie=['godzilla','deedpool','Dark knight','spiderman','animal']
console.log(movie.length);
console.log(movie.at(-2));
console.log(movie.indexOf('spiderman'));
console.log(movie.slice(0));
console.log(movie.slice(-4,-2));

movie.push('joker')
console.log(movie);

movie.unshift('avenger')
console.log(movie);

movie.shift()
console.log(movie)