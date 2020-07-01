import './index.css';
import * as serviceWorker from './serviceWorker';

import {state, funcs} from "./state";
import {rerenderUI} from "./render";

rerenderUI(state, funcs)

serviceWorker.unregister();
