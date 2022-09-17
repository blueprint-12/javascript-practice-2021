import React from 'react';
import styled from 'styled-components';

function Bubble() {
  return (
    <>
      <Box
        onClick={(e) => {
          console.log(e.target + 'I am from div');
        }}
      >
        <Img
          onClick={(e) => {
            e.stopPropagation();
            console.log(e.target + 'I am from img');
          }}
        />
        <Button
          onClick={(e) => {
            e.stopPropagation();
            console.log(e.target + 'I am from button');
            window.location.href =
              'https://www.google.com/search?q=%ED%8C%8C%EC%9D%B4%EC%8D%AC+SSR&rlz=1C1CHZN_koKR950KR950&sxsrf=ALiCzsZG_im6w_za7BQbQA4vmwtiKMAwvw%3A1663412178761&ei=0qclY9P7LcjL2roP3Yy70Ac&ved=0ahUKEwjTrJ6g1Zv6AhXIpVYBHV3GDnoQ4dUDCA4&uact=5&oq=%ED%8C%8C%EC%9D%B4%EC%8D%AC+SSR&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABCABBAKOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoHCCMQ6gIQJzoQCAAQgAQQhwIQsQMQgwEQFDoHCAAQsQMQQzoKCAAQgAQQhwIQFEoECEEYAEoECEYYAFAAWIoRYP0RaARwAXgDgAHdAYgBvxKSAQYwLjEyLjKYAQCgAQGwAQrAAQE&sclient=gws-wiz';
          }}
        >
          버튼
        </Button>
      </Box>
    </>
  );
}
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  height: 1000x;
  background-color: aquamarine;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  background-color: black;
  background-image: url('http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg');
  background-position: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60px;
  height: 30px;
  color: blue;
`;

export default Bubble;
