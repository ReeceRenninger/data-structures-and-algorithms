'use strict';

const { TestScheduler } = require("jest");
const { Movies } = require("./movies");
const { sortTitle, sortYear, compareYear, compareTitle } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Ratatouille",
      "Stardust",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });

  test('can sort movies by year', () => {
    const yearOne = {year: 2000};
    const yearTwo = {year: 2001};

    expect(compareYear(yearOne, yearTwo)).toBe(1);
  });

  test('can sort movies by title', () => {
    const titleOne = {title: 'The Intouchables'};
    const titleTwo = {title: 'Valkyrie'};

    expect(compareTitle(titleOne, titleTwo)).toBe(-1);
  });
});
