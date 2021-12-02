import React from "react";
import style from "./Foot.less";

export default function Foot() {
    return (
        <div className={style.foot}>
            <div className={style.info}>
                <div className={style.left}>
                    <span>公众号：流客科技</span>
                    <span>电话：155563 55573</span>
                </div>
                <div className={style.right}>
                    <span>地区：陕西西安</span>
                    <span>邮箱：liuketh@outlook.com</span>
                </div>
            </div>
            <div className={style.declare}>
                <span>
                    <a
                        href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
                        target="_black"
                    >
                        陕ICP备20008168号
                    </a>
                    流客科技-万网之流,来者皆客 ©流客科技
                </span>
            </div>
        </div>
    );
}
