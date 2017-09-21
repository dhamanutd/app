import { fromJS } from 'immutable';

import {
  UPDATE_FIELD,
  UPDATE_BOOTH_PHOTO,
  UPDATE_IS_BOOTH_PHOTO_UPDATED
} from './constants';

const initialState = fromJS({
  fields: {
    photoPic: 'https://museum.wales/media/40374/thumb_480/empty-profile-grey.jpg'
  },
  boothPhoto: 'https://museum.wales/media/40374/thumb_480/empty-profile-grey.jpg',
  isBoothPhotoUpdated: false
});

function boothInfoReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOOTH_PHOTO:
      return state.set('boothPhoto', action.value);
    case UPDATE_FIELD:
      return state.setIn([ 'fields', action.fields ], action.value);
    case UPDATE_IS_BOOTH_PHOTO_UPDATED:
      return state.set('isBoothPhotoUpdated', action.status);
    default:
      return state;
  }
}

export default boothInfoReducer;