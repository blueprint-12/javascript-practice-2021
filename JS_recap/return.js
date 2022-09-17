function counter() {
  for (let count = 1; ; count++) {
    // 무한 반복
    console.log(count + 'A'); // 5까지
    if (count === 5) {
      return;
    }
    console.log(count + 'B'); // 4까지
  }
  console.log(count + 'C'); // 절대 나타나지 않음
}

counter();
// 출력:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
