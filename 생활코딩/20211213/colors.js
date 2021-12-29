let Link = {
    setColor: function (color) {
    //   let alist = document.querySelectorAll("a");
    //   let i = 0;
    //   while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    //제이쿼리로 css속성 color값을 매개변수로 받은 color로 바꿔준다.
    $('a').css('color', color);
    }
  };
  
  let Body = {
    setColor: function (color) {
      //document.querySelector("body").style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
     // document.querySelector("body").style.backgroundColor = color;
     $('body').css('backgroundColor', color);
    },
  };
  // function bodySetColor(color) {
  //   document.querySelector("body").style.color = color;
  // }
  // function bodySetBackgroundColor(color) {
  //   document.querySelector("body").style.backgroundColor = color;
  // }
  function nightDayHandler(self) {
    const target = document.querySelector("body");
    if (self.value === "night") {
      Body.setBackgroundColor("black");
      Body.setColor("white");
      self.value = "day";

      link.setColor("powderblue");
    } else {
      Body.setBackgroundColor("white");
      Body.setColor("black");
      self.value = "night";

      Link.setColor("blue");
    }
  }

//   $(document).ready(function () {
// // 제이쿼리코드 작성 e.g.) $('a').css('color', color);
//   });