/**
 * Created by Dan on 2016-12-02.
 */
import { SET_PROPERTY, LOG_LAST_ACTION, SET_SIGNATURE } from './actions';

export function setProperty (propertyName, propertyValue) {
  return { type: SET_PROPERTY, propertyName, propertyValue };
}

export function logLastAction (action) {

  return { type: LOG_LAST_ACTION, action };
}

export function setSignature () {
  return { type: SET_SIGNATURE };
}
