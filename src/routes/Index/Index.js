import React from '../../../node_modules/react'
import style from './Index.less'

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<div className={style.titleSty}>万网之流，来者皆客</div>
				<div className={style.infoSty}>专注手机靓号、互联网卡、内部套餐卡、物联卡、无限流量卡的办理，物联网设备的供应商</div>
			</div>
		)
	}
}
