// const userName: string = "Tomi";

// function greet(name: string): string {
//   return `Hello ${name}`;
// }

// console.log(greet(userName));

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}

// const lengths = map(["hello", "world"], (str) => str.length);

// const lengths = map(["hello", "world"], (str: string) =>
//   str.charAt(0).toUpperCase(),
// );

const lengths = map(["hello", "world"], (str) => ({
  first: str.charAt(0),
  length: str.length,
}));

console.log(lengths);
