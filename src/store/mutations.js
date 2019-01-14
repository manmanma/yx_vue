import {
  RECEIVE_HOME_DATA,
  RECEIVE_TOPIC_DATA,
  RECEIVE_CATE_DATA,
  RECEIVE_HOME_BANNER,
  RECEIVE_HOME_TAG,
  RECEIVE_HOME_NEW_ITEM,
  RECEIVE_HOME_POP_ITEM,
  SET_CURRENT_INDEX,
  RECEIVE_CATE_DETAIL,
  RECEIVE_USER_INFO

} from "./mutation-type"

export default {


  [RECEIVE_HOME_BANNER] (state, {homeBanner}) {
    state.homeBanner = homeBanner
  },
  [RECEIVE_HOME_TAG] (state, {homeTagList}) {
    state.homeTagList = homeTagList
  },
  [RECEIVE_HOME_NEW_ITEM] (state, {newItemList}) {
    state.newItemList = newItemList
  },
  [RECEIVE_HOME_POP_ITEM] (state, {popularItemList}) {
    state.popularItemList = popularItemList
  },
  [RECEIVE_HOME_DATA] (state, {homedata}) {
    state.homedata = homedata
  },
  [RECEIVE_TOPIC_DATA] (state, {topicdata}) {
    state.topicdata = topicdata
  },
  [RECEIVE_CATE_DATA] (state, {catedata}) {
    state.catedata = catedata
  },
  [SET_CURRENT_INDEX] (state, {index}) {
    state.cateCurrentIndex = index
  },
  [RECEIVE_CATE_DETAIL] (state) {
    state.cateDetail = state.catedata[state.cateCurrentIndex]
  },
  [RECEIVE_USER_INFO] (state, {userinfo}) {
    state.userinfo = userinfo
  },
}
