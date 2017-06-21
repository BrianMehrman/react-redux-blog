/* eslint-disable import/prefer-default-export */

import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  RECEIVE_POST,
  REQUEST_POST,
  SELECT_POST,
  DESELECT_POST
} from '../constants/postsConstants';

export const receivePosts = (page, posts) => ({
  type: RECEIVE_POSTS,
  page: page,
  posts,
});

export const requestPosts = (page) => ({
  type: REQUEST_POSTS,
  page
});

export const requestPost = (id) => ({
  type: REQUEST_POST,
  post_id: id
});

export const receivePost = (post) => ({
 type: RECEIVE_POST,
 post
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

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(requestPost(id));
    fetch(`/posts/${id}`)
      .then((response) => response.json())
      .then((post) => dispatch(receivePost(post)));
  };
};
