import React from 'react'
import { Card, Button } from 'antd';
import style from './ImgDocker.less'
const { Meta } = Card;


export default function ImgDocker(props) {
    return (
        <Card
            style={{ width: 300, margin: 10 }}
            cover={
                <img
                    alt={props.alt}
                    src={props.src}
                />
            }
        >
            <Meta
                title={props.title}
                description={props.desc}
            /><br></br>
            <div className={style.bottominfo}>
                <h3 style={{ color: 'red' }}>已出售{props.num}</h3>
                <Button type="primary" onClick={props.pur} style={{ marginLeft: '30px' }}>点击购买</Button>
            </div>
        </Card>
    )
}