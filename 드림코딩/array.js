'use strict';

// Array๐ง

// 1. ์ ์ธ๋ฐฉ๋ฒ
const arr = new Array();
const arr2 = [1, 2];

// 2. Index position
// ์ธ๋ฑ์ค๋ฅผ ํตํด์ ๋ฐฐ์ด์ ์ ๊ทผํ๊ธฐ
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0], fruits[1]);
// ์ธ๋ฑ์ค๋ 0์ด ์ฒ์, ๋ง์ง๋ง ์ธ๋ฑ์ค๋ array.length -1 ํ๋ฉด ๋๋ค.
console.log(fruits[fruits.length - 1]); // banana

// 3. Looping over an array
// ๋ฐฐ์ด ์ํํ๋ ๋ฐฉ๋ฒ

console.clear();

// 1. for loop ์ฌ์ฉํ๊ธฐ
// 2. for ...of ์ฌ์ฉํ๊ธฐ
// 3. forEach API ์ฌ์ฉํ๊ธฐ ์ ์ผ ๊ฐ๋จ
for (let fruit of fruits) {
  console.log(fruit);
}
//forEach๋ ์ธ์๋ก ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐ๋๋ฐ ์ฝ๋ฐฑํจ์๋ 3๊ฐ์ง ์ธ์๋ฅผ ๋ฐ์ ์ ์์,
// value, index, array ๊ทผ๋ฐ array์์ฒด๋ ๊ตณ์ด ์๋ฐ์์์ ์
// forEachํจ์๋ ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐฐ์ด์ ๊ฐ๊ฐ์ ์์๋ง๋ค ์คํ์ํด
// callbackํจ์๋ฅผ ์ต๋ชํจ์๋ก ์์ฑํ๋ฉด ํ์ดํํจ์ ํ์์ผ๋ก ์จ์ ๊ฐํธํ๊ฒ ํํ๊ฐ๋ฅ

/*
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});
*/
// ์ฐธ๊ณ ๋ก ํ์ดํํจ์์ ๊ฒฝ์ฐ์ ํ์ค์ง๋ฆฌ ์ฝ๋์ด๋ฉด ์ค๊ดํธ๋ ์ธ๋ฏธ์ฝ๋ก ์ด ํ์์์, ์์ ์ฝ๋๋ฅผ ์๋์ ๊ฐ์ด ํํ๊ฐ๋ฅ
//forEach๋ ๋ฐฐ์ด์ ์์(value)๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํ๋ค.
fruits.forEach((fruit) => console.log(fruit));

// 4. ๋ฐฐ์ด์ ๋ํ๊ธฐ, ์ญ์ , ๋ณต์ฌ ํ๋๋ฒ(Addition, deletion, copy)
// push: ๋ฐฐ์ด์ ๋งจ ๋ค์ ์์ดํ์ ๋ฃ์
fruits.push('๋ธ๊ธฐ', '๋ณต์ญ์');
// pop: ๋ฐฐ์ด์ ๋งจ ๋ค์์๋ถํฐ ์์ดํ์ ์ญ์ 
fruits.pop(); //๋งจ ๋ค์ ์๋ ๋ณต์ญ์ ์ญ์ 
console.log(fruits); // apple, banana, ๋ธ๊ธฐ

// unshift: ๋ฐฐ์ด์ ๋งจ ์๋ถํฐ ์์ดํ์ ๋ฃ์
fruits.unshift('์๊ณผ์ผ1', '์๊ณผ์ผ2');
// shift: ๋ฐฐ์ด์ ๋งจ ์๋ถํฐ ์์ดํ์ ์ญ์ 
fruits.shift(); // ์๊ณผ์ผ1 ์ญ์ 
console.log(fruits); //['์๊ณผ์ผ2', 'apple', 'banana', '๋ธ๊ธฐ']

// note!! shift์ unshift ๋ pop๊ณผ push๋ณด๋ค ํจ์ฌ ๋๋ฆฌ๋ค! ๊ทธ๋์ ์ ์์ฐ๋๋ด;
// ์ ์ผ ๋ค์์ ์์ดํ์ ์ ๊ทผํ๋ ๊ฒ์ ๋ฐ์ดํฐ๋ฅผ ๋น๊ณต๊ฐ์ ํ ๋นํ๊ณ  ์ญ์ ํ๊ณ  ํ๋ ๊ฒ์ด๋ผ์ ํ๋๋ง ์์ง์ด๋ฉด๋์ง๋ง
// ๋งจ์์์ ์์ดํ์ ์์ ํ๋ ๊ฒ์ ๋ฐฐ์ด ์ ์ฒด๊ฐ ์ฌ์ ๋ ฌ์ํด์ผํ๊ธฐ ๋๋ฌธ์ ๋ฐฐ์ด์ ํฌ๊ธฐ๊ฐ ํด์๋ก ์ฑ๋ฅ ์ ํ๋ฅผ ๋ถ๋ฌ์จ๋ค.

// ์ธ๋ฑ์ค๋ฅผ ์ฌ์ฉํด์ ์ํ๋ ์์ดํ์ ์ญ์  ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ

//splice ๋ฅผ ์ฌ์ฉํ๋ฉด ์ง์ ๋ ์์น์์ ์์ดํ์ ์ญ์ ํ ์์์
// splice(start, deleteCount? ) ์ด๋ค param ๋ค์ "?"๊ฐ ๋ถ์ผ๋ฉด optional
// start num์ ํด๋นํ๋ index๋ถํฐ(์๋ ํฌํจ๋์ ์ญ์ ), ์ํ๋ ์ซ์๊น์ง ์ญ์ ํจ
// ์ผ๋ง๋ ์ง์ธ์ง ์ง์ ํ์ง ์์ผ๋ฉด ํด๋น index๋ถํฐ ๋ค๋ฅผ ์ซ๋ค ์ญ์ ํจ

console.clear();
fruits.push('๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3');
console.log(fruits); //ย ['์๊ณผ์ผ2', 'apple', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3'] 7๊ฐ์ item์ด ๋ด๊ฒจ์์
fruits.splice(1, 1); // index 1 ๋ถํฐ 1๊ฐ๋ง ์ฆ, apple๋ง ์ญ์ 
console.log(fruits); //ย ['์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3']
// splice(start, deleteCount?, ...items)
// 3๋ฒ์งธ ์ธ์๋ก ์ถ๊ฐํ  ์์ดํ๋ค์ ์ฃผ๋ฉด ์ญ์ ๋๋ ์ฒซ๋ฒ์งธ ์ฆ, start ๋ถํฐ 3๋ฒ ์ธ์๋ก ์ค ์์ดํ๋ค์ด ์ฝ์๋๋ค.
fruits.splice(0, 1, 'new์๊ณผ์ผ1', 'new์๊ณผ์ผ2');
console.log(fruits); //['new์๊ณผ์ผ1', 'new์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3']

// 2๊ฐ์ ๋ฐฐ์ด์ ํฉ์น๊ธฐ, concat(ํฉ์น  item ํน์ array)
// ์๋๋ฐฐ์ด๋ช.concat(ํฉ์น๋ ค๋ Item or Array) ํฉ์น๋ ค๋ ์์ดํ์ด๋ ๋ฐฐ์ด์ ์๋๋ฐฐ์ด์ ๋ค์ ๋ถ๋๋ค.
const fruits2 = ['๋ฐฐ', '์ค์ธ๋จธ์ค์บฃ'];
const combinedFruits = fruits.concat(fruits2);
console.log(combinedFruits);
//['new์๊ณผ์ผ1', 'new์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3', '๋ฐฐ', '์ค์ธ๋จธ์ค์บฃ']

console.clear();
// 5. Searching (๋ฐฐ์ด ๊ฒ์ฌ)
// find the index

// indexOf() ์ฌ์ฉํ๊ธฐ -> ํด๋น ๋ฐ์ดํฐ๊ฐ ์๋ index๋ฅผ ๋ฆฌํดํ๋ค.
console.log(fruits); //ย ['new์๊ณผ์ผ1', 'new์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3']
console.log(fruits.indexOf('new์๊ณผ์ผ1')); //0
console.log(fruits.indexOf('๊ณผ์ผ1')); //4
//indexOf()๋ ๋ฐฐ์ด์ ์๋ ์์๋ฅผ ์ฐพ๊ณ ์ํ๋ฉด -1 ์ ๋ฐํํ๋ค.
console.log(fruits.indexOf('์๋๊ณผ์ผ')); // -1

//includes() ์ฌ์ฉํ๊ธฐ -> ํด๋น ๋ฐ์ดํฐ(element)๊ฐ ์์ผ๋ฉด true, ์์ผ๋ฉด false ๋ฆฌํด
console.log(fruits.includes('์๋๊ณผ์ผ')); //f
console.log(fruits.includes('๋ธ๊ธฐ')); //t

console.clear();
//lastIndexOf
// ์ค๋ณต๋ฐ์ดํฐ๊ฐ ์์ ๊ฒฝ์ฐ?
fruits.push('new์๊ณผ์ผ1');
console.log(fruits); //['new์๊ณผ์ผ1', 'new์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3', 'new์๊ณผ์ผ1'
console.log(fruits.indexOf('new์๊ณผ์ผ1')); // 0์ด๋ผ๊ณ  ๋ธ indexOf์ ๊ฒฝ์ฐ๋ ๋งจ์ฒ์ ๋ง๋๋ ๋ฐ์ดํฐ๋ฅผ returnํ๊ณ 
console.log(fruits.lastIndexOf('new์๊ณผ์ผ1')); // 7 lastIndexOf์ ๊ฒฝ์ฐ๋ ๋ง์ง๋ง์ ๋ง๋๋ ๋ฐ์ดํฐ๋ฅผ return

// H.W Array ๊ด๋ จ lib ์ฝ์ด๋ณด๊ธฐ(lib.es5.d.ts)
// ์๋์ฐ(ctrlํค) ๋งฅ(commandํค) ๋๋ฅด๊ณ  ํด๋น api๋๋ฅด๋ฉด ๋จ

console.clear();
const poped = fruits.pop();
console.log(fruits, poped);
const modifiedFruits = fruits.concat(poped);
//๋ค์ ์์๋ณต๊ตฌ ์ํด
console.log(modifiedFruits); //['new์๊ณผ์ผ1', 'new์๊ณผ์ผ2', 'banana', '๋ธ๊ธฐ', '๊ณผ์ผ1', '๊ณผ์ผ2', '๊ณผ์ผ3', 'new์๊ณผ์ผ1'];

//join() API
// string ํ์์ seperator๋ฅผ optional param์ผ๋ก ์ ์
// ๋ง์ฝ์ ๊ทธ๋ฅ ()์ผ๋ก ์๋ต๋ ์ฑ๋ก ์ฐ๋ฉด "," ์ฝค๋ง๋ก ๊ตฌ๋ถํ string์ ๋ฐํํจ
// ์ ๋ (' ') ๊ณต๋ฐฑ์ ๋ฃ์ด์ ๊ตฌ๋ถํ์
const joinedArr = modifiedFruits.join(' ');
console.log(joinedArr); //new์๊ณผ์ผ1 new์๊ณผ์ผ2 banana ๋ธ๊ธฐ ๊ณผ์ผ1 ๊ณผ์ผ2 ๊ณผ์ผ3 new์๊ณผ์ผ1 <- ๋ฐฐ์ด์๋๋ผ ๊ทธ๋ฅ string

console.clear();
//reverse() - element๋ฅผ ์ญ์์ผ๋ก ์ ๋ ฌํด์ ๋ฐํ
const reveredFruits = fruits.reverse();
console.log(reveredFruits);

//sort()
// ๋ํดํธ๋ ์ค๋ฆ์ฐจ์์ธ๋ฐ ์์คํค๊ฐ์ ํ ๋๋ก ์ ๋ ฌํ๋ค๊ณ  ํจ-> ๋ชจ๋  element๋ฅผ ๋ฌธ์์ด๋ก ์ทจ๊ธ
// ์ฆ ๋ด๋ถ์์ ์๋ํ๋ ๋น๊ตํจ์๋ฅผ ์์ฑํด์ค์ผํจ
// ๋ฐฐ์ด์ ์์ 2๊ฐ๋ฅผ param์ผ๋ก ๋ฐ์์ ์ด๋ฅผ ๋น๊ตํ๊ณ  return ๊ฐ์ ๋ฐ๋ผ ์ ๋ ฌ
// ๋ฆฌํด๊ฐ์ด 0๋ณด๋ค ์์ ๊ฒฝ์ฐ a๊ฐ b๋ณด๋ค ์์ผ๋ก ์ค๊ฒ ์ ๋ ฌํ๊ณ  (์ค๋ฆ์ฐจ์: ์์๊ฐ -> ํฐ๊ฐ )
// 0๋ณด๋ค ํด ๊ฒฝ์ฐ b๊ฐ a ์์ผ๋ก ์ค๊ฒ ์ ๋ ฌ (๋ด๋ฆผ์ฐจ์: ํฐ๊ฐ -> ์์๊ฐ)
// 0์ ๋ฆฌํดํ  ๊ฒฝ์ฐ ์ฌ์ ๋ ฌํ์ง ์์
// ์ฃผ์) ๋, ์๋ณธ ๋ฐฐ์ด์ธ arr๊ฐ ์ ๋ ฌ์ด ๋๊ณ , ๋ฆฌํดํ๋ ๊ฐ ๋ํ ์๋ณธ ๋ฐฐ์ด์ธ arr์ ๊ฐ๋ฆฌํค๊ณ  ์์
// ์ฆ, ์๋ณธ์ ๋ด์ฉ๋ ๊ฐ์ด ๋ณ๊ฒฝ๋ฉ๋๋ค.
// sortedArr numArr sortedArr2 ๋ชจ๋ ๊ฐ์ ๋ด์ฉ์ผ๋ก ๋ณ๊ฒฝ๋จ
console.clear();
const numArr = [2, 6, 114, 6453, 23, 461, -1];
const sortedArr = numArr.sort((a, b) => a - b); //์ค๋ฆ์ฐจ์
const sortedArr2 = numArr.sort((a, b) => b - a); //๋ด๋ฆผ์ฐจ์
console.log(sortedArr, sortedArr2);

const sortedFruits = fruits.sort();
console.log(sortedFruits);
/*0: "banana"
1: "new์๊ณผ์ผ1"
2: "new์๊ณผ์ผ2"
3: "๊ณผ์ผ1"
4: "๊ณผ์ผ2"
5: "๊ณผ์ผ3"
6: "๋ธ๊ธฐ"
*/
