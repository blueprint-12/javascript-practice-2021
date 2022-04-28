//페이지 로딩 후 ajax통신으로 API불러오기
$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'http://spartacodingclub.shop/sparta_api/weather/seoul',
    data: {},
    success: function (response) {
      let temper = response['temp'];
      $('#titleTemp').text(temper);
    },
  });
});
