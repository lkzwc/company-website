import React, { Component } from "react";
import ImgDocker from "../../components/ImgDocker/ImgDocker";
import DXcard1 from "../../assets/Card/1.png";
import DXcard2 from "../../assets/Card/11.jpg";
import LTcard1 from "../../assets/Card/2.jpg";
import DX179card1 from "../../assets/Card/179-1.png";
import DX179card2 from "../../assets/Card/179-2.png";
import Style from "./CardIOT.less";
import OrderFrom from "../../components/Order/OrderFrom";

/**
 * 无限流量卡页面
 */
export default class CardIOT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            productInfo: [
                {
                    alt: "",
                    src: DXcard1,
                    title: "电信兴安旭卡",
                    desc: "电信卡 需要实名 不能换卡槽",
                    num: 236,
                },
                {
                    alt: "",
                    src: DXcard2,
                    title: "电信秒卡板版",
                    desc: "电信卡 需要实名 可换卡槽",
                    num: 251,
                },
                {
                    alt: "",
                    src: LTcard1,
                    title: "联通翼卡全国版",
                    desc: "阿里巴巴亲儿子 值的购买",
                    num: 333,
                },
                {
                    alt: "",
                    src: DX179card1,
                    title: "179电信小王卡",
                    desc: "179电信卡 网速慢 游戏不卡 值的选择",
                    num: 856,
                },
                {
                    alt: "",
                    src: DX179card2,
                    title: "179电信大王卡",
                    desc: "179电信卡 网速慢 游戏不卡 值的选择",
                    num: 652,
                },
            ],
        };
    }
    purchase = () => {
        this.setState(() => ({
            showModal: !this.state.showModal,
        }));
    };

    callBackCancel = () => {
        this.setState(() => ({
            showModal: !this.state.showModal,
        }));
    };

    callBackOK = (value) => {
        console.log("获取表单数据", value);
        this.setState(() => ({
            showModal: !this.state.showModal,
        }));
    };

    render() {
        return (
            <div className={Style.content}>
                {this.state.productInfo.map((info, index) => {
                    return (
                        <ImgDocker
                            key={index}
                            alt={info.alt}
                            src={info.src}
                            title={info.title}
                            desc={info.desc}
                            num={info.num}
                            pur={this.purchase}
                        />
                    );
                })}
                {
                    <OrderFrom
                        showModal={this.state.showModal}
                        callBackCancel={this.callBackCancel}
                        callBackOK={this.callBackOK}
                    />
                }
            </div>
        );
    }
}
