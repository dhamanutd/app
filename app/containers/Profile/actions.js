import { AsyncStorage } from 'react-native';

import { DevSummitAxios } from '../../helpers';
import {
  UPDATE_SINGLE_FIELD,
  UPDATE_IS_PROFILE_UPDATED
} from './constants';


/*
 * Update the input fields
 * @param {field: name of the field}
 * @param {value: value to be set}
 */
export function updateFields(field, value) {
  return {
    type: UPDATE_SINGLE_FIELD,
    field,
    value
  };
}

export function updateIsProfileUpdated(status) {
  return {
    type: UPDATE_IS_PROFILE_UPDATED,
    status
  };
}

export function changeProfile() {
  return (dispatch, getState) => {
    const { fields } = getState().get('profile').toJS();
    const { username, firstName, lastName, profilePic } = fields;

    AsyncStorage.getItem('access_token', (err, result) => {
      DevSummitAxios.patch('/auth/me/changesetting', {
        first_name: firstName,
        last_name: lastName
      }, {
        headers: {
          Authorization: result
        }
      }).then((response) => {
        if (response && response.data && response.data.meta.success) {
          dispatch(updateIsProfileUpdated(true));
        }
      });
    });
  }
}