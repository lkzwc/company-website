import React, { Component } from 'react'
import ImgDocker from '../../components/ImgDocker/ImgDocker'
import Device1 from '../../assets/Device/1.png'
import Device2 from '../../assets/Device/2.png'
import Device3 from '../../assets/Device/3.png'
import Device4 from '../../assets/Device/4.png'
import Style from '../CardIOT/CardIOT.less'
import OrderFrom from '../../components/Order/OrderFrom'

export default class Device extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            deviceInfo: [
                {
                    alt: "",
                    src: Device1,
                    title: "随身WIFI插电款",
                    desc: "69元不限量、不限速",
                    num: 400
                },
                {
                    alt: "",
                    src: Device2,
                    title: "路由器彩屏版",
                    desc: "无限WIFI 全程4G高速",
                    num: 236
                },
                {
                    alt: "",
                    src: Device3,
                    title: "路由器+6800毫安充电宝",
                    desc: "云端智能三网切换 支持闪充、快充",
                    num: 300
                },
                {
                    alt: "",
                    src: Device4,
                    title: "云路由+8000毫安充电板",
                    desc: "云端智能三网切换 支持闪充、快充",
                    num: 321
                },
            ]
        }
    }

    purChase = () => {
        this.setState(() => ({
            showModal: !this.state.showModal
        }))
    }

    callBackCancel = () => {
        this.setState(() => ({
            showModal: !this.state.showModal
        }))
    }

    callBackOK = (value) => {
        console.log("获取表单数据", value)
        this.setState(() => ({
            showModal: !this.state.showModal
        }))
    }
    render() {
        return (
            <div className={Style.content}>
                {
                    this.state.deviceInfo.map((item, index) => {
                        return (
                            <ImgDocker
                                key={index}
                                src={item.src}
                                title={item.title}
                                desc={item.desc}
                                num={item.num}
                                pur={this.purChase} />
                        )
                    })
                }
                {
                    this.state.showModal ?
                        <OrderFrom
                            showModal={this.state.showModal}
                            callBackCancel={this.callBackCancel}
                            callBackOK={this.callBackOK}
                        /> : ''
                }
            </div>
        )
    }
}
