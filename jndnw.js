const scientist = [
    {
      first: "Albert",
      last: "Einstein",
      year: 1879,
      passed: 1955
    },
    {
      first: "Isaac",
      last: "Newton",
      year: 1643,
      passed: 1727
    },
    {
      first: "Galileo",
      last: "Galilei",
      year: 1564,
      passed: 1642
    },
    {
      first: "Marie",
      last: "Curie",
      year: 1867,
      passed: 1934
    },
    {
      first: "Johannes",
      last: "Kepler",
      year: 1571,
      passed: 1630
    },
    {
      first: "Nicolaus",
      last: "Copernicus",
      year: 1473,
      passed: 1543
    },
    {
      first: "Max",
      last: "Planck",
      year: 1858,
      passed: 1947
    },
    {
      first: "Katherine",
      last: "Blodgett",
      year: 1898,
      passed: 1979
    },
    {
      first: "Ada",
      last: "Lovelace",
      year: 1815,
      passed: 1852
    },
    {
      first: "Sarah E.",
      last: "Goode",
      year: 1855,
      passed: 1905
    },
    {
      first: "Lise",
      last: "Meitner",
      year: 1878,
      passed: 1968
    },
    {
      first: "Hanna",
      last: "Hammarström",
      year: 1829,
      passed: 1909
    }
  ];
  // 1) отримати масив вчених що народилися в 19 ст
//   const findBorn = scientist.filter((elem=>elem.year > 1799 && elem.year < 1900));
//   console.log(findBorn);


  // 2) знайти суму років скільки прожили всі вченні
//   const summYear  = scientist.reduce ( (acc, {passed,year}) => acc + ( passed - year), 0 );
//   console.log(summYear);


  // 3) Відсортувати вчених по алфавіту
// const alphabet = scientist.sort((a,b) => a.first > b.first ? 1 : -1 );
// console.log(alphabet);


  // 4) Відсортувати вчених по даті народження

//   const alphabet = scientist.sort((a,b) => a.years > b.years ? 1 : -1 );
// console.log(alphabet); 

  // 5) Відсортувати вчених по кількості прожитих років

//   const findLove = scientist.sort ( ( a,b) => a.passed - a.year - (b.passed - b.year)); 
//   console.log(findLove);
  // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

//   const deleteBorn = scientist.filter ( (elem => elem.year < 1399 || elem.year > 1799));
//   console.log(deleteBorn)
  // 7) Знайти вченого який народився найпізніше.
//   const moreThen = scientist.map( elem => elem.year);
//   console.log(Math.max(...moreThen));

// const moreThen = scientist.sort((a,b) => a.years > b.years ? -1 : 1 );
//   console.log(moreThen[0]);
  // 8) Знайти рік народження Albert Einstein
//   const AlbertBorn = scientist.find(elem=> elem.first=== 'Albert' || elem.first === 'Einstein');
//   console.log(AlbertBorn.year);
  // 9) Знайти вчених прізвище яких починається на літеру С
// const Surname = scientist.filter(elem=> elem.last[0] ==='C')
// console.log(Surname)
  // 10) Видалити з масива всіх вчених імя яких починається на A

//   const deleteA = scientist.filter(elem=> elem.first[0] !=='A')
// console.log(deleteA)

//   
  
