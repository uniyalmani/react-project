import { UPDATE_POSTS } from './actionTypes';
import {APIurls} from '../helpers/url'

export function fetchPosts() {
  return (dispatch) => {
    const url = APIurls.fetchPosts;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}