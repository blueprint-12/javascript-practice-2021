import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // validation debouncing 처리
  useEffect(() => {
    // 설정된 타이머의 식별자를 반환한다고 치자
    const identifier = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6,
      );
    }, 1000);
    //useEffect 에서 return 을 할 수 있는데 무조건 함수여야만 한다. (clean up 함수)
    //첫실행 제외 useEffect가 실행되기 전에 클린업 함수가 먼저 실행된다. (최초 실행 1번 제외)
    //또한, 이펙트를 특정한 컴포넌트가 DOM에서 언마운트될 때마다 실행된다. 즉, 컴포넌트가 재사용될 때마다,
    // 모든 새로운 사이드 이펙트 함수가 실행되기 전에 && 컴포넌트가 제거되기 전에 실행된다.

    //실행 순서를 확인해보고싶다면 return 함수에 console.log() 로 찍어보면 됩니다.
    return () => {
      console.log('클린 업!');
      //clearTimeout에 식별자를 보내서 새로운 타이머를 설정할 수 있다!
      //즉, 새로운 타이머를 설정하기 전에 마지막 타이머를 지우는 것
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes('@'),
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
