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
    EyeTwoTone,
} from "@ant-design/icons";
import style from "./Header.less";
import { routerRedux } from "dva/router";

const { SubMenu } = Menu;
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
                <SubMenu icon={<EyeTwoTone />} title="内部套餐">
                    <Menu.Item>
                        <a
                            href="https://gantanhao.vip/91haoka_platform/#/minishop?share_id=305587&shop_name=%25E6%25B5%2581%25E5%25AE%25A2%25E7%25A7%2591%25E6%258A%2580"
                            tag="流客科技内部套餐卡"
                        >
                            内部套餐卡
                        </a>
                    </Menu.Item>
                    <Menu.Item key="/Internet">
                        <a
                            href="https://gantanhao.vip/91haoka_platform/#/minishop?share_id=377889&shop_name=%25E6%25B5%2581%25E5%25AE%25A2%25E7%25A7%2591%25E6%258A%2580%25E6%2597%2597%25E8%2588%25B0%25E5%25BA%2597"
                            target="_blank"
                            rel="noreferrer"
                        >
                            互联网卡免费邮
                        </a>
                    </Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="/Express" icon={<ProjectTwoTone />}>
                    物流查询
                </Menu.Item>
                <SubMenu icon={<ShopTwoTone />} title="优惠券">
                    <Menu.Item key="setting:1">
                        <a href="http://www.dongjiaquan.cn/" target="_blank">
                            京东优惠券
                        </a>
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                        <a href="http://www.bjquanvip.cn/" target="_blank">
                            淘宝优惠券
                        </a>
                    </Menu.Item>
                </SubMenu> */}
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
