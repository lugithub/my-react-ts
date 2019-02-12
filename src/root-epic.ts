import { combineEpics } from 'redux-observable';

import { enthusiasmEpic } from './ms-starter-redux/epics';

export const rootEpic = combineEpics(enthusiasmEpic);
