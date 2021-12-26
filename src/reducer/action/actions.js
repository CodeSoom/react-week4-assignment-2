import toActionObject from './toActionObject';
import ActionType from './ActionType';

export function updateName(name) {
  return toActionObject(ActionType.UPDATE_NAME, {
    name,
  });
}
