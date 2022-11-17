// ES6 Number.isNaN 폴리필
{
  if (!Number.isNaN) {
    Number.isNaN = function (n) {
      return typeof n === 'number' && window.isNaN(n);
    };
  }

  const a = 2 / 'foo';
  const b = 'foo';

  console.log(Number.isNaN(a)); //true
  console.log(Number.isNaN(b)); //false
}
