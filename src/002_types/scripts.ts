// boolean (true / false);

let isOpen: boolean;

isOpen = false;

// string ("foo", 'foo', `foo`)
let message: string;
message = "";

// number (int, float, hex, binary)
let total: number;
// total = '1';
total = 1;

// array (type[])
let items: number[];
items = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "2"];

// enum
enum Colors {
  white = "#FFF",
  black = "#000",
  gray = "#777",
}

// any (any type) AVOID using this
let thing;
thing = undefined || "" || 1;

// void (empty)
const logger = (): void => {};

// null | undefined

// never
function error(): never {
  throw new Error("error");
}

// object
let car: object;

car = {
  brand: "Ford",
  year: 2020,
  model: "ka",
};
