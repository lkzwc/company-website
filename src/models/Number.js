export default {
    namespace: "number",

    state: {
        officialInfos: [
            {
                url: "https://sn.xuankaba.com/?key=x5bgrv",
                title: "免费靓号",
                description: "海量免费靓号等你来选",
            },
            {
                url: "http://d.tianlulh.com/u1615",
                title: "精选靓号",
                description: "1314520、1555522、豹子号",
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
