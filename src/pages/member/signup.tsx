import React from 'react';
import { useForm } from 'react-hook-form';

export default function signup({
  onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid, isSubmitting },
    getValues,
  } = useForm();

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="idpw-wrpper">
            <input
              className="idpw"
              placeholder="이메일"
              type="email"
              id="email"
              aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '올바른 이메일 형식이 아닙니다.',
                },
              })}
            />
            {errors.email && <errorsMessage role="alert">{errors.email.message}</errorsMessage>}
          </div>
          <div className="idpw-wrpper">
            <input
              className="idpw"
              name="password"
              placeholder="비밀번호"
              type="password"
              aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요.',
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                  message: '비밀번호는 영문+숫자+특수문자 조합으로 입력해주세요.',
                },
              })}
            />
            {errors.password && <errorsMessage role="alert">{errors.password.message}</errorsMessage>}
          </div>
          <div className="idpw-wrpper">
            <input
              className="idpw"
              type="password"
              placeholder="비밀번호 확인"
              {...register('passwordConfirmation', {
                required: '비밀번호가 서로 다릅니다.',
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || '비밀번호가 서로 다릅니다.';
                  },
                },
              })}
            />
            {errors.passwordConfirmation && (
              <errorsMessage role="alert">{errors.passwordConfirmation.message}</errorsMessage>
            )}
          </div>
          <div className="idpw-wrpper">
            <input
              className="idpw"
              name="phone"
              placeholder="휴대폰 번호 (-제외)"
              type="number"
              {...register('phone', {
                required: '"-" 뺴고 입력해주세요.',
                pattern: {
                  value: /-/,
                },
              })}
            />
            {errors.email && <errorsMessage role="alert">{errors.phone.message}</errorsMessage>}
          </div>
          <button className={isValid ? 'login' : 'submit-button'} disabled={isSubmitting} type="submit">
            회원가입
          </button>
        </form>
      </div>

      <style jsx>
        {`
          .wrapper {
            border: 1px solid #d9d9d9;
            width: 682px;
            padding: 50px 120px;
            margin: 0 auto;
          }
          .idpw-wrpper {
            width: 100%;
            position: relative;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          .idpw {
            width: 100%;
            border: 0;
            border-bottom: 1px solid #ebebeb;
            height: 58px;
            margin: 10px 0 20px 0;
            font-size: 16px;
            position: relative;
          }
          label {
            margin-bottom: 20px;
          }
          .submit-button {
            height: 62px;
            line-height: 62px;
            font-size: 18px;
            background-color: #d9d9ff;
            border: none;
            color: #fff;
            font-weight: 600;
          }
          .login {
            height: 62px;
            line-height: 62px;
            font-size: 18px;
            text-align: center;
            background-color: #3f3fff;
            border: none;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
          }
          errorsMessage {
            color: #ff4d78;
            font-weight: 500;
            font-size: 0.625rem;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            border-bottom: 1px solid #ff4d78;
            padding-bottom: 6px;
          }
        `}
      </style>
    </div>
  );
}
