import React, { useEffect, useState } from "react";
// import Modal from '../../components/modal'

export default function findId(): JSX.Element {
    // const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div>
                <button onClick={() => setShowModal(true)}>Open Modal</button>
                {/*<Modal*/}
                {/*    onClose={() => setShowModal(false)}*/}
                {/*    show={showModal}*/}
                {/*>*/}
                {/*    아이디는 test1 입니다.*/}
                {/*</Modal>*/}
            </div>
            <div className="wrapper">
                <form>
                    <label>아이디 찾기</label>
                    <input className="idpw" name="id" placeholder="이름"
                           type="text"/>
                    <input className="idpw" name="phone" placeholder="휴대폰 번호 (-제외)"
                           type="number"
                    />
                    <button className="submit-button" type="submit">다음</button>
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
