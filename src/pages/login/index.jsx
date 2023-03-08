import React from "react";
import Link from "next/link";

export default function login() {
    return (
        <div>
            <div className="wrapper">
                <form>
                    <input className="idpw" name="id" placeholder="아이디(이메일)"
                           type="text"
                           id="roll"
                           name="roll"
                           required
                           minlength="10"
                           maxlength="20"/>
                    <input className="idpw" name="password" placeholder="비밀번호"
                            type="password"
                    />
                    <label>
                        <input
                            type="checkbox"
                            className="checkbox"
                        />
                        <span>아이디 저장</span>
                    </label>
                    <button className="submit-button" type="submit">로그인</button>
                </form>
                <div className="sub-container">
                    <ul>
                        <li>
                            <Link href="/login/findId">아이디 찾기</Link>
                        </li>
                        <li>비밀번호 찾기</li>
                    </ul>
                    <div>
                        <Link href="/login/signup">회원가입</Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
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
                .sub-container {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                }
                ul {
                  display: flex;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                }
                li:first-child::after {
                    color: #c4c4c4;
                    content: "|";
                    font-size: 1px;
                    padding: 0 10px;
                }
            `}
            </style>
        </div>
    );
}
