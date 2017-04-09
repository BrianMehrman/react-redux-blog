/* eslint-disable import/prefer-default-export */

import { RECEIVE_POSTS, REQUEST_POSTS, SELECT_POST, DESELECT_POST } from '../constants/postsConstants';

export const receivePosts = (page, posts) => ({
  type: RECEIVE_POSTS,
  page: page,
  posts,
});

export const requestPosts = (page) => ({
  type: REQUEST_POSTS,
  page
});

export const selectPost = (post) => ({
  type: SELECT_POST,
  post
});

export const deselectPost = () => ({
  type: DESELECT_POST,
});

export const fetchPosts = (page) => {
  return (dispatch) => {
    dispatch(requestPosts(page));
    fetch(`/posts?page=${page}`)
      .then((response) => response.json())
      .then((posts) => dispatch(receivePosts(page, posts)));
  };
};
