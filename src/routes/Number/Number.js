import React from "react";
import SmallCard from "../../components/SmallCard/SmallCard";
import { Divider } from "antd";
import Style from "./Number.less";
import { FlagTwoTone } from "@ant-design/icons";
import { connect } from "dva";

@connect(({ number }) => ({ number }))
export default class Number extends React.Component {
    render() {
        return (
            <div className={Style.layoutInfo}>
                <Divider orientation="left">
                    <div className={Style.heaerborder}>
                        <FlagTwoTone />
                        <span className={Style.header}>官方出品</span>
                    </div>
                </Divider>
                <div className={Style.content}>
                    {this.props.number.officialInfos.map((item, index) => {
                        return (
                            <SmallCard
                                url={item.url}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
                <Divider orientation="left">
                    <div className={Style.heaerborder}>
                        <FlagTwoTone />
                        <span className={Style.header}>代理专区</span>
                    </div>
                </Divider>
                <div className={Style.content}>
                    {this.props.number.agentInfos.map((item, index) => {
                        return (
                            <SmallCard
                                url={item.url}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
                <Divider orientation="left">
                    <div className={Style.heaerborder}>
                        <FlagTwoTone />
                        <span className={Style.header}>靓号专区</span>
                    </div>
                </Divider>
                <div className={Style.content}>
                    {this.props.number.shopInfos.map((item, index) => {
                        return (
                            <SmallCard
                                url={item.url}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
