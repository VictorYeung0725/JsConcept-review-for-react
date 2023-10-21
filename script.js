const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//NOTE 1. Destructuring
const book = getBook(2);
book;

//the normal way in js
// const title = book.title;
// const author = book.author;

//the desturcturing object
const {
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
  reviews,
} = book;
title;
author;
genres;
reviews;

//The desturturing array
// const [primaryGenres, secondGenres] = genres;
// primaryGenres;
// secondGenres;

//NOTE
//Rest operator
const [primaryGenres, secondGenres, ...reminingGenres] = genres;
reminingGenres;

//Spread operator on array
const newGenres = [genres, 'TheNewGenres'];
newGenres;

const spreadGenres = [...genres, 'theNenGenres'];
spreadGenres;

//Spread operator on object for adding new properties
const updatedBook = { ...book, moviePublicationDate: '2001-12-19' };
updatedBook;

//Spread operator on obejct for updating the existing object (Not mutate)
const overWriteBook = {
  ...book,
  moviePublicationDate: '2001-12-19',
  //adding the new properties, overwrite, the spread operator must put first
  pages: 300,
};
overWriteBook;

//NOTE Template literal ES6 easily re-write string

//NOTE ternary operator instead of if-else statement

const pagesRange = pages < 2000 ? 'yes' : 'no';
pagesRange;

//NOTE Arrow function review (quick and short )
//old way (function expression)
// function getYear(string) {
//   return string.split('-')[0];
// }
//new way (function declration)
const getYear = (str) => str.split('-')[0];
console.log(getYear(publicationDate));

const summary = `${title} is a book with ${pages} long book written by ${author} and published on ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
summary;

//NOTE Short circuiting and logical operators (&& or ||)
// In some circumstance the operator will look at the first value
// and return immediately without even look at the second value
console.log(true && 'return true?');
console.log(false && 'return true?');
console.log(hasMovieAdaptation && 'this book has a movie');
console.log(!hasMovieAdaptation && 'this book has a movie');

//NOTE Truthy and Falsy Values
//Falsy : false , 0, -0, "" ,null, undefined, NaN
//Truthy: anyother value beside Falsy

console.log('victor' && 'This is a turthy value');
console.log(0 && 'This is a falsy value');

console.log(true || 'something');
console.log(false || 'something');

console.log(book.translations.spanish);
//Can set a fallback value incase there is no value
const spanishTranslation = book.translations.spanish || 'Not translated';
console.log(spanishTranslation);

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// console.log(countWrong);

//Important concept : nullish coalescing operator  ??
// This operator will only return the second value when the first value is null or undefind
// but not when the value is 0 or string
// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// console.log(count);

//NOTE Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  goodreads;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
  // return reviewCount;
}

console.log(getTotalReviewCount(book));
