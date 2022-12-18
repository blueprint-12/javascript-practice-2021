function identify() {
  return this.name.toUpperCase();
}

function speak() {
  let greeting = 'hello, I am' + identify.call(this);
  console.log(greeting);
}

let me = {
  name: 'alex',
};

let you = {
  name: 'rachel',
};
identify.call(me);
identify.call(you); //me & you 의 이름 대문자변환
speak.call(me); //hello, I amALEX
speak.call(you); //hello, I amRACHEL
{
  function identify(context) {
    return context.name.toUpperCase();
  }

  function speak(context) {
    let greeting = 'hello I am ' + identify(context);
    console.log(greeting);
  }

  let you = {
    name: 'koala',
  };

  identify(you);
  speak(you);
}
