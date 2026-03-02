// console.log('Explore API');

// const person = {
//     name: "selim",
//     fruit: "dalim",
//     dish: "halim",
//     friends: ['alim','kolim','lamim'],
//     isRich: false,
//     money: 40000
// }

// console.log(person, typeof person);

// // JSON -> js object with notation
// // JSON.stringify

// const personJSON = JSON.stringify(person)
// console.log(personJSON, typeof personJSON);

// const perseJSON = JSON.parse(personJSON);
// console.log(perseJSON)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))