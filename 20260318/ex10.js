const test = "test";
const test1 = undefined;

const result1 = test ?? null;
const result2 = test1 ?? "뒤에꺼";

console.log(result1);
console.log(result2);
