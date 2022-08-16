import {takeLatest, put, call} from "redux-saga/effects";

import {GET_POSTS, GET_POST_DETAILS} from "./actionTypes";

import {
    getPostsSuccess,
    getPostsFail,
    getPostDetailsSuccess,
    getPostDetailsFail,
} from "./actions";
import axios from "axios";

const urlPosts = 'http://127.0.0.1:8000/api/v1/posts/'

async function getPosts() {
    const res = await axios.get(urlPosts);
    return res.data
}

async function getPostDetails(id) {
    const res = await axios.get(urlPosts + `${id}/`);
    return res.data
}

function* onGetPosts() {
    try {
        const response = yield call(getPosts);
        yield put(getPostsSuccess(response));
    } catch (error) {
        yield put(getPostsFail(error.response));
    }
}

function* onGetPostDetails({payload: id}) {
    try {
        const response = yield call(getPostDetails, id);
        yield put(getPostDetailsSuccess(response));
    } catch (error) {
        yield put(getPostDetailsFail(error.response));
    }
}

function* CartSaga() {
    yield takeLatest(GET_POSTS, onGetPosts);
    yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default CartSaga;