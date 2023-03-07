import React from "react";

export default function login() {
    return (
        <div>
            <div className="wrapper">
                <form>
                    <input className="idpw" name="id" placeholder="아이디(이메일)"/>
                    <input className="idpw" name="password" placeholder="비밀번호"/>
                    <label>
                        <input
                            type="checkbox"
                            className="checkbox"
                        />
                        <span>아이디 저장</span>
                    </label>
                    <button className="submit-button" type="submit">로그인</button>
                </form>
            </div>
            <style jsx>{`
                .wrapper {
                  border: 1px solid red;
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
                .checkbox {
                  margin-right: 20px;
                }
                label {
                  margin-bottom: 20px;
                }
                .submit-button {
                  height: 62px;
                  line-height: 62px;
                  font-size: 18px;
                  pointer-events: none;
                  cursor: default;
                  background-color: #d9d9ff;
                  border: none;
                  color: #fff;
                  font-weight: 600;
                }
            `}
            </style>
        </div>
    );
}
