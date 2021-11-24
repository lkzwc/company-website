import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import { Switch, Route } from "dva/router";
import GBHeader from "../components/Header/Header";
import GBFoot from "../components/Footer/Foot";
import Card from "./CardIOT/CardIOT";
import Index from "./Index/Index";
import Device from "./Device/Device";
import Number from "./Number/Number";
import QA from "./QA/Qa";
import Declare from "./Declare/Declare";
import Express from "./Express/Express";

const { Header, Footer, Content } = Layout;

function IndexPage() {
    return (
        <div>
            <Layout>
                {/*页首 */}
                <Header>
                    <GBHeader />
                </Header>

                {/*内容区 */}
                <Layout>
                    <Content>
                        <Switch>
                            <Route path="/" exact component={Index}></Route>
                            <Route
                                path="/Index"
                                exact
                                component={Index}
                            ></Route>
                            <Route path="/Card" exact component={Card}></Route>
                            <Route
                                path="/Device"
                                exact
                                component={Device}
                            ></Route>
                            <Route path="/Number" component={Number}></Route>
                            <Route path="/Express" component={Express}></Route>
                            <Route path="/QA" component={QA}></Route>
                            <Route path="/Declare" component={Declare}></Route>
                        </Switch>
                    </Content>
                </Layout>

                {/*页尾 */}
                <Footer>
                    {" "}
                    <GBFoot />{" "}
                </Footer>
            </Layout>
        </div>
    );
}

export default connect()(IndexPage);
