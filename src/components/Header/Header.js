import React from "react";
import { Menu } from "antd";
import { connect } from "dva";
import {
    HomeTwoTone,
    CreditCardTwoTone,
    HddTwoTone,
    CrownTwoTone,
    PlaySquareTwoTone,
    MessageTwoTone,
    FlagTwoTone,
} from "@ant-design/icons";
import style from "./Header.less";
import { routerRedux } from "dva/router";

class Header extends React.Component {
    onMenuClick = (e) => {
        this.props.dispatch(routerRedux.push({ pathname: e.key }));
    };
    render() {
        return (
            <Menu
                onClick={this.onMenuClick}
                mode="horizontal"
                className={style.menu}
            >
                <Menu.Item key="/Index" icon={<HomeTwoTone />}>
                    首页
                </Menu.Item>
                <Menu.Item key="/Card" icon={<CreditCardTwoTone />}>
                    无限流量卡
                </Menu.Item>
                <Menu.Item key="/Device" icon={<HddTwoTone />}>
                    云路由
                </Menu.Item>
                <Menu.Item key="/Number" icon={<CrownTwoTone />}>
                    手机靓号
                </Menu.Item>
                <Menu.Item key="/MobilePlan" icon={<FlagTwoTone />}>
                    绝版套餐
                </Menu.Item>
                <Menu.Item key="tv" icon={<PlaySquareTwoTone />}>
                    <a
                        href="https://www.xn--ubto2gb7pn73b.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        流客影院
                    </a>
                </Menu.Item>
                <Menu.Item key="/QA" icon={<MessageTwoTone />}>
                    联系我们
                </Menu.Item>
            </Menu>
        );
    }
}

export default connect()(Header);
