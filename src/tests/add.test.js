const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

//まずはtest関数を使用する
//第一引数がテスト内容で、第二引数はアロー関数
//アロー関数内には、先に関数宣言を行った関数とその結果を書く
test("should return Hello Mike", () => {
  const result = generateGreeting("Mike");
  expect(result).toBe("Hello Mike");
});
