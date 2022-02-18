import dva from "dva";
import "./index.less";

let createHistory = require("history").createBrowserHistory;
// 1. Initialize
const app = dva({ history: createHistory() });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/example").default);
app.model(require("./models/Number").default);
app.model(require("./models/mobilePlan").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
