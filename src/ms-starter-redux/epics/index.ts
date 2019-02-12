import { Observable } from 'rxjs';
import { delay, filter, mapTo } from 'rxjs/operators';

import {
  countIncrement,
  INCREMENT_ENTHUSIASM,
  EnthusiasmAction
} from '../actions';

export const enthusiasmEpic = (action$: Observable<EnthusiasmAction>) =>
  action$.pipe(
    filter(v => v.type === INCREMENT_ENTHUSIASM),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo(countIncrement())
  );
