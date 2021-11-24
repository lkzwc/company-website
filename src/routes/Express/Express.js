import React, { Component } from 'react'
import {Input,notification} from 'antd'
import { connect } from 'dva';
import { NotificationTwoTone } from '@ant-design/icons';

const { Search } = Input;
class Express extends Component {
    constructor(props){
        super(props)
        this.state = {
            expressInfo:''
        }
    }
    searchInfo=(value)=>{
        new Promise((resolve,reject)=>{
            this.props.dispatch({
                type:'express/find',
                payload:{
                    resolve,
                    reject,
                    value:value
                }
            })
        }).then((res)=>{
            console.log("查完了")
        }).catch((error)=>{
            console.log("出错了",error)
        })

        notification.open({
            message: '快递查询成功',
            description:
              value,
            icon: <NotificationTwoTone style={{ color: '#108ee9' }} />,
          });
    }
    render() {
        return (
            <div style={{width:'500px'} }>
                <Search type="text" size="large"  placeholder="请输入您的姓名或者手机号" enterButton="开始查询" onSearch={this.searchInfo}/>
            </div>
        )
    }
}
//链接model
const mapStateToProps=(state)=>{
    return({
        expressInfo : state.express.expressInfo
    })
}
export default connect(mapStateToProps)(Express);
