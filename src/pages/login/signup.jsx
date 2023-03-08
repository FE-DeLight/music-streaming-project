import React from "react";

export default function signup() {
    return (
        <div>
            <div className="wrapper">
                <form>
                    <label>회원 가입</label>
                    <input className="idpw" name="id" placeholder="아이디(이메일)"
                           type="text"
                           id="roll"
                           name="roll"
                           required
                           minLength="10"
                           maxLength="20"/>
                    <input className="idpw" name="password" placeholder="비밀번호"
                           type="password"
                           required
                    />
                    <input className="idpw" name="password" placeholder="비밀번호 확인"
                           type="password"
                           required
                    />
                    <input className="idpw" name="phone" placeholder="휴대폰 번호 (-제외)"
                           type="number"
                           required
                    />
                    <button className="submit-button" type="submit">회원가입</button>
                </form>
            </div>
            <style jsx>{`
                label {
                    color: #181818;
                    text-align: center;
                    padding-bottom: 30px;
                    font-size: 30px;
                    margin: 0;
                    font-weight: 600;
                }

                .wrapper {
                  border: 1px solid #d9d9d9;
                  width: 682px;
                  padding: 50px 120px;
                }
                form {
                display: flex;
                flex-direction: column;
                }
                .idpw {
                  border: 0;
                  border-bottom: 1px solid #ebebeb;
                  height: 58px;
                  margin: 10px 0 20px 0;
                  font-size: 16px;
                }
                .submit-button {
                  height: 62px;
                  line-height: 62px;
                  font-size: 18px;
                  pointer-events: none;
                  cursor: default;
                  background-color: #3f3fff;
                  border: none;
                  color: #fff;
                  font-weight: 600;
                  opacity: .3;
                }
            `}
            </style>
        </div>
    );
}
