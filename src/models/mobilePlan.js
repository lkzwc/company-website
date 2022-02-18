export default {
    namespace: "mobilePlan",

    state: {
        officialInfos: [
            {
                url: "https://gantanhao.vip/91haoka_platform/#/minishop?share_id=377889&shop_name=%25E6%25B5%2581%25E5%25AE%25A2%25E7%25A7%2591%25E6%258A%2580%25E6%2597%2597%25E8%2588%25B0%25E5%25BA%2597",
                title: "绝版套餐",
                description: "全世界最全的内部套餐卡",
            },
        ],
        shopInfos: [
            {
                url: "https://gantanhao.vip/91haoka_platform/#/minishop?share_id=377889&shop_name=%25E6%25B5%2581%25E5%25AE%25A2%25E7%25A7%2591%25E6%258A%2580%25E6%2597%2597%25E8%2588%25B0%25E5%25BA%2597",
                title: "绝版套餐",
                description: "全世界最全的内部套餐卡",
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
