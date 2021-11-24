export default {
    namespace: "number",

    state: {
        officialInfos: [
            {
                url: "https://kashichang.cn/su/q2iaA",
                title: "在线选号",
                description: "海量免费靓号等你来选",
            },
            {
                url: "http://qqdawangka.cn/",
                title: "实时王卡靓号扫描",
                description: "实时扫描全国王卡靓号",
            },
            {
                url: "http://qqdawangka.cn/46/W4Y7d",
                title: "王卡订单信息查询",
                description: "下单领取之后查询王卡信息",
            },
        ],
        agentInfos: [
            {
                url: "https://kashichang.cn/agent/login.html",
                title: "代理登陆",
                description: "代理后台登陆地址",
            },
        ],
        shopInfos: [
            {
                url: "http://qqdawangka.cn/46",
                title: "本地王卡精选",
                description: "大王卡本地精选号码，全是靓号",
            },
            {
                url: "https://kashichang.cn/su/FnIRJb",
                title: "全国大王卡",
                description: "大王卡本地精选号码，全是靓号",
            },
            {
                url: "https://kashichang.cn/su/bqy6Rf",
                title: "安徽合肥精选",
                description: "安徽合肥精选",
            },
            {
                url: "https://kashichang.cn/su/ZjYbEv",
                title: "全国腾讯大王卡",
                description: "全国腾讯大王卡",
            },
            {
                url: "https://kashichang.cn/su/mQbqYv",
                title: "全国虚拟运营商卡",
                description: "全国虚拟运营商卡",
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
