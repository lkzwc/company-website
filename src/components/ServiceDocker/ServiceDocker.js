import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;


export default function ServiceDocker(props) {
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
            <div >
                <h3 style={{ color: 'red' }}>{props.info}</h3>
            </div>
        </Card>
    )
}