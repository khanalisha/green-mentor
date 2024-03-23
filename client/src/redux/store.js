import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as taskReducer } from "./appProduct/reducer";
import { reducer as authReducer } from "./authuser/reducer";

const rootReducer = combineReducers({
  taskReducer,
  authReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
