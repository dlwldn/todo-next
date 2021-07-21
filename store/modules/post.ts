import { IPost, IPostObject } from "../../typings/db";

const GET_POST_ACTION_REQUEST = 'post/GET_POST_ACTION_REQUEST' as const;
const GET_POST_ACTION_SUCCESS = 'post/GET_POST_ACTION_SUCCESS' as const;
const GET_POST_ACTION_FAILURE = 'post/GET_POST_ACTION_FAILURE' as const;
const GET_POST_DETAIL_ACTION_REQUEST = 'post/GET_POST_DETAIL_REQUEST' as const;
const GET_POST_DETAIL_ACTION_SUCCESS = 'post/GET_POST_DETAIL_ACTION_SUCCESS' as const;
const GET_POST_DETAIL_ACTION_FAILURE = 'post/GET_POST_DETAIL_ACTION_FAILURE' as const;
const POST_WRITE_ACTION_REQUEST = 'post/POST_WRITE_ACTION_REQUEST' as const;
const POST_WRITE_ACTION_SUCCESS = 'post/POST_WRITE_ACTION_SUCCESS' as const;
const POST_WRITE_ACTION_FAILURE = 'post/POST_WRITE_ACTION_FAILURE' as const;
const POST_DELETE_ACTION_REQUEST = 'post/POST_DELETE_ACTION_REQUEST' as const;
const POST_DELETE_ACTION_SUCCESS = 'post/POST_DELETE_ACTION_SUCCESS' as const;
const POST_DELETE_ACTION_FAILURE = 'post/POST_DELETE_ACTION_FAILURE' as const;

const GET_POST_SCROLL_ACTION_INIT = 'post/GET_POST_SCROLL_ACTION_INIT' as const;
const GET_POST_SCROLL_ACTION_REQUEST = 'post/GET_POST_SCROLL_ACTION_REQUEST' as const;
const GET_POST_SCROLL_ACTION_SUCCESS = 'post/GET_POST_SCROLL_ACTION_SUCCESS' as const;
const GET_POST_SCROLL_ACTION_FAILURE = 'post/GET_POST_SCROLL_ACTION_FAILURE' as const;


export const getPostActionRequest = () => ({
  type: GET_POST_ACTION_REQUEST
})

export const getPostActionSuccess = (post: object) => ({
  type: GET_POST_ACTION_SUCCESS,
  payload: post
})

export const getPostActionFailure = (error: object) => ({
  type: GET_POST_ACTION_FAILURE,
  payload: error
})

export const getPostDetailActionRequest = () => ({
  type: GET_POST_DETAIL_ACTION_REQUEST
})

export const getPostDetailActionSuccess= (detailPost: IPostObject) => ({
  type: GET_POST_DETAIL_ACTION_SUCCESS,
  payload: detailPost
})

export const getPostDetailActionFailure = (error: object) => ({
  type: GET_POST_DETAIL_ACTION_FAILURE,
  payload: error
})

export const postWriteActionRequest = () => ({
  type: POST_WRITE_ACTION_REQUEST
})

export const postWriteActionSuccess = () => ({
  type: POST_WRITE_ACTION_SUCCESS
})

export const postWriteActionFailure = (error: object) => ({
  type: POST_WRITE_ACTION_FAILURE,
  payload: error
})

export const postDeleteActionRequest = () => ({
  type: POST_DELETE_ACTION_REQUEST
})

export const postDeleteActionSuccess = () => ({
  type: POST_DELETE_ACTION_SUCCESS
})

export const postDeleteActionFailure = (error: object) => ({
  type: POST_DELETE_ACTION_FAILURE,
  payload: error
})

export const getPostScollActionInit = () => ({
  type: GET_POST_SCROLL_ACTION_INIT,
})

export const getPostScrollActionRequest = () => ({
  type: GET_POST_SCROLL_ACTION_REQUEST
})

export const getPostScrollActionSuccess = (post: Array<IPostObject>) => ({
  type: GET_POST_SCROLL_ACTION_SUCCESS,
  payload: post
})

export const getPostScrollActionFailure = (error: object) => ({
  type: GET_POST_SCROLL_ACTION_FAILURE,
  payload: error
})

const initialState = {
  post: {
    items: [],
    numberOfItems: 0,
    numberOfPages: 0,
    page: null
  },
  detailPost: {
    content: "",
    createdAt: "",
    done: false,
    id: "",
  },

  loading: false,
  error: null,
  currPage: 1,
  scrollLoading: false,
  scrollError: null
}

interface PostState {
  post: IPost;
  detailPost: IPostObject;
  loading: boolean;
  error: null | object;
  
  currPage: number;
  scrollLoading: boolean;
  scrollError: null | object;
}

export type PostAction = 
  | ReturnType<typeof getPostActionRequest>
  | ReturnType<typeof getPostActionSuccess>
  | ReturnType<typeof getPostActionFailure>
  | ReturnType<typeof getPostDetailActionRequest>
  | ReturnType<typeof getPostDetailActionSuccess>
  | ReturnType<typeof getPostDetailActionFailure>
  | ReturnType<typeof postWriteActionRequest>
  | ReturnType<typeof postWriteActionSuccess>
  | ReturnType<typeof postWriteActionFailure>
  | ReturnType<typeof postDeleteActionRequest>
  | ReturnType<typeof postDeleteActionSuccess>
  | ReturnType<typeof postDeleteActionFailure>
  | ReturnType<typeof getPostScollActionInit>
  | ReturnType<typeof getPostScrollActionRequest>
  | ReturnType<typeof getPostScrollActionSuccess>
  | ReturnType<typeof getPostScrollActionFailure>

const reducer = (state: PostState = initialState, action: PostAction): PostState => {
  switch(action.type) {
    case GET_POST_ACTION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case GET_POST_ACTION_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload
        },
        loading: false
      }

    case GET_POST_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_POST_DETAIL_ACTION_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case GET_POST_DETAIL_ACTION_SUCCESS:
      return {
        ...state,
        detailPost: {
          ...state.detailPost,
          ...action.payload
        },
        loading: false
      }

    case GET_POST_DETAIL_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case POST_WRITE_ACTION_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case POST_WRITE_ACTION_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case POST_WRITE_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    
    case POST_DELETE_ACTION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case POST_DELETE_ACTION_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case POST_DELETE_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_POST_SCROLL_ACTION_INIT:
      return {
        ...state,
        currPage: initialState.currPage
      }
  
    case GET_POST_SCROLL_ACTION_REQUEST:
      return {
        ...state,
        scrollLoading: true
      }

    case GET_POST_SCROLL_ACTION_SUCCESS:
      return {
        ...state,
        currPage: state.currPage + 1,
        post: {
          ...state.post,
          items: [
            ...state.post.items,
            ...action.payload
          ]
        },
        scrollLoading: false
      }

    case GET_POST_SCROLL_ACTION_FAILURE:
      return {
        ...state,
        scrollLoading: true,
        error: action.payload
      }


    default:
      return state;
  }
}

export default reducer;