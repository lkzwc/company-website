export default {
    namespace: "number",

    state: {
        officialInfos: [
            {
                url: "https://sn.xuankaba.com/?key=x5bgrv",
                title: "在线选靓号",
                description: "海量免费靓号等你来选",
            },
            {
                url: "https://card.xuankaba.com/t/0.x5bgrv",
                title: "互联网卡免费申请",
                description: "下单领取之后查询王卡信息",
            },
        ],
        agentInfos: [
            {
                url: "https://mp.weixin.qq.com/s/-CfBWYaq-LBhxBA4igwPPA",
                title: "代理登陆",
                description: "代理",
            },
        ],
        shopInfos: [
            {
                url: "https://card.xuankaba.com/t/8.x5bgrv",
                title: "本地王卡精选",
                description: "大王卡本地精选号码，全是靓号",
            },
            {
                url: "https://card.xuankaba.com/t/17.x5bgrv",
                title: "全国米粉卡",
                description: "米粉卡本地精选号码，全是靓号",
            },
            {
                url: "https://card.xuankaba.com/t/20.x5bgrv",
                title: "钉钉宝卡精选",
                description: "钉钉宝卡精选",
            },
        ],
    },

    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
        },
    },

    effects: {
        *find({ payload: { value } }, { call, put }) {
            // eslint-disable-line
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
