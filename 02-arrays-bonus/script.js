const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Ed',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// usando for
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// usando filter
// const longNames = teachers.filter(teacher => teacher.length >= 5);
// console.log(longNames);
  
// 3. Rimuovi 'Ed' dall'array teachers

// usando filter
const updatedTeachers = teachers.filter(teachers => teachers !== 'Ed');
console.log(updatedTeachers);

// usando splice
// const index = teachers.indexOf('Ed');

// if (index !== -1) {
//     teachers.splice(index, 1);
// }

// console.log(teachers);
