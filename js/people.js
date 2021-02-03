import Person from './person.js';

const firstNames = ['John', 'Talbot', 'Pierre', 'Thomas', 'Elias', 'Josiah', 'William', 'Henry', 'David', 'Joseph', 'Grove', 'Nicholas', 'James', 'Sarah', 'Andonia', 'Margaret', 'Jane', 'Ellen', 'Nancy', 'Elizabeth', 'Ann', 'Mary', 'Susan', 'Ambrose', 'Carol'];
const lastNames = ['Bidwell', 'Bartleson', 'Baldridge', 'Barnett', 'Nye', 'Green', 'De Smet', 'Fitzpatrick', 'Marsh', 'Belden', 'Belty', 'Brolaski', 'Chandler', 'Walton', 'Thomas', 'Tveiten', 'Kring', 'Zografos', 'Svensen', 'Costanza', 'Vandelay'];
const occupations = ['farmer', 'banker', 'miner', 'baker', 'barber', 'blacksmith', 'bookkeeper', 'butcher', 'carpenter', 'clerk', 'ferrier', 'cooper', 'grocer', 'merchant', 'jeweler', 'lawyer', 'miller', 'minister', 'painter', 'peddler', 'artist', 'sawbones', 'sailor', 'bartender', 'cobbler', 'weaver', 'stonemason', 'student', 'tailor', 'tinman', 'wagonmaker', 'watchmaker', 'wood sawer'];

function getPeople (num) {
  const people = createPeople(num);
  console.table(people);

  // fetch('./data.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     // data;
  //   });
  
  function createPeople (num) {
    const people = [];
    for (let index = 0; index < num; index++) {
      const firstName = getRandomString(firstNames);
      const lastName = getRandomString(lastNames);
      const occupation = getRandomString(occupations);
      const age = getAge(12, 65);
      const person = new Person(firstName, lastName, occupation, age);
      people.push(person);
    }
    return people;
  }
  
  /**
   * @name getRandomString
   * @param {Array} list List of strings
   * @returns {String} One random string from the list.
   */
  function getRandomString (list) {
    const index = Math.floor(Math.random() * Math.floor(list.length));
    return list[index];
  }
  /**
   * @name getAge
   * @param {number} min Minimum age.
   * @param {number} max Maximum age.
   * @returns {number} Age of person.
   */
  function getAge (min, max) {
    return Math.floor(Math.random() * Math.floor(max - min) + min);
  };

  return people;
};

export { getPeople };
