/* eslint-disable import/prefer-default-export */

import { RECEIVE_POSTS, REQUEST_POSTS } from '../constants/postsConstants';

export const receivePosts = (page, posts) => ({
  type: RECEIVE_POSTS,
  page: page,
  posts: posts,
});

export const requestPosts = (page) => ({
  type: REQUEST_POSTS,
  page: page
});


export const fetchPosts = (page) => {
  return (dispatch) => {
    dispatch(requestPosts(page));
    fetch(`/posts?page=${page}`)
      .then((response) => response.json())
      .then((posts) => dispatch(receivePosts(page, posts)));
  };
};
