import React from "react";
import SmallCard from "../../components/SmallCard/SmallCard";
import { Divider } from "antd";
import Style from "./MobilePlan.less";
import { FlagTwoTone } from "@ant-design/icons";
import { connect } from "dva";

@connect(({ mobilePlan }) => ({ mobilePlan }))
export default class MobilePlan extends React.Component {
    render() {
        return (
            <div className={Style.layoutInfo}>
                <Divider orientation="left">
                    <div className={Style.heaerborder}>
                        <FlagTwoTone />
                        <span className={Style.header}>免费靓号</span>
                    </div>
                </Divider>
                <div className={Style.content}>
                    {this.props.mobilePlan.officialInfos.map((item, index) => {
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
                    {this.props?.mobilePlan?.shopInfos.map((item, index) => {
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
