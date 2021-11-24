import { Form, Modal } from "antd";
import style from "./OrderFrom.less";
import imgURL from "../../assets/Service/3.jpg";

export default function OrderFrom(props) {
    const [form] = Form.useForm();
    return (
        <div>
            <Modal
                className={style.frompos}
                visible={props.showModal}
                title="流客科技无限流量订单填写"
                footer={null}
                onCancel={props.callBackCancel}
                onOk={() => {
                    form.validateFields()
                        .then((value) => {
                            console.log(form.getFieldValue());
                            form.resetFields();
                            props.callBackOK(value);
                        })
                        .catch((info) => {
                            console.log("Error info", info);
                        });
                }}
            >
                {/* <Form layout="vertical" form={form}>
                    <Form.Item  
                        name="username" 
                        label="收件人姓名"
                        rules={[{ required: true ,message:"收件人姓名不能为空"}]}>
                        <Input
                                autoComplete="off"
                                autoFocus={true}
                                placeholder="请输入收件人姓名"
                        />
                    </Form.Item>
                    <Form.Item 
                        name="number"
                        label="手机号"
                        rules={
                            [{required : true, message : "请输入手机号",type:"number"}]
                        }>
                        <Input
                                autoComplete="off"
                                autoFocus={true}
                                placeholder="请输入手机号"
                        />
                    </Form.Item>

                    <Form.Item 
                        label="请选择省市县" 
                        name="address1" 
                        rules={
                            [{required:true,message:"请选择地址"}]
                        } >
                        <Cascader options={options} placeholder="请选择省市县" />
                    </Form.Item>
                    <Form.Item 
                        label="详细地址" 
                        name="address2"
                        rules={
                            [{required:true,message:"详细地址请务必输入"}]
                        } >
                        <TextArea placeholder="请输入详细地址"/>
                    </Form.Item>
                </Form> */}

                <img
                    src={imgURL}
                    style={{ width: "100%", height: "100%" }}
                ></img>
            </Modal>
        </div>
    );
}
