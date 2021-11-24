import React, { Component } from 'react'
import Service1 from '../../assets/Service/1.jpg'
import Service2 from '../../assets/Service/2.jpg'
import Service3 from '../../assets/Service/3.jpg'
import ServiceDocker from '../../components/ServiceDocker/ServiceDocker'
import Style from './QA.less'

export default class Qa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serviceInfo: [
                {
                    alt: "",
                    src: Service1,
                    title: "客服一号 早10:00~晚8:00",
                    desc: "回复速度快 及时 态度好",
                    info: "累计服务上千次"
                },
                {
                    alt: "",
                    src: Service2,
                    title: "客服三号  早10:00~晚8:00",
                    desc: "聪明 服务态度好 ",
                    info: "累计服务上千次"
                },
                {
                    alt: "",
                    src: Service3,
                    title: "更多精彩 微信关注【流客科技】",
                    desc: "万网之流，来者皆客 ",
                    info: ""
                },
            ]
        }
    }
    render() {
        return (
            <div className={Style.bottominfo}>
                {
                    this.state.serviceInfo.map((item, index) => {
                        return (
                            <ServiceDocker
                                src={item.src}
                                title={item.title}
                                desc={item.desc}
                                num={item.info} />
                        )
                    })
                }
            </div>
        )
    }
}
