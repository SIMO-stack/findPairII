import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger].filter((x) => !!x);
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(rootReducer);
