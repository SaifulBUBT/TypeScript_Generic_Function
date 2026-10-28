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

//*************8 */
interface ApiResponse<T> {
  data: T;
  status: number;
  timeStamp: string;
}

interface Paginated<T> {
  items: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
};

type UserResponse = ApiResponse<Paginated<User>>;

type ProductResponse = ApiResponse<Paginated<Product>>;

const userResponse: UserResponse = {
  data: {
    items: [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ],
    totalCount: 2,
    currentPage: 1,
    totalPages: 1,
  },
  status: 200,
  timeStamp: new Date().toISOString(),
};

const productResponse: ProductResponse = {
  data: {
    items: [
      { id: 1, title: "Laptop", price: 999.99 },
      { id: 2, title: "Mouse", price: 29.99 },
    ],
    totalCount: 2,
    currentPage: 1,
    totalPages: 1,
  },
  status: 200,
  timeStamp: new Date().toISOString(),
};

console.log(userResponse.data.items);
