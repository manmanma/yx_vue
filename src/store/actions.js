import {
  RECEIVE_HOME_BANNER,
  RECEIVE_HOME_TAG,
  RECEIVE_HOME_NEW_ITEM,
  RECEIVE_HOME_POP_ITEM,
  RECEIVE_HOME_DATA,
  RECEIVE_TOPIC_DATA,
  RECEIVE_CATE_DATA,
  RECEIVE_CATE_DETAIL,
  SET_CURRENT_INDEX,
  RECEIVE_USER_INFO
} from './mutation-type'
import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'
import {reqUserInfo} from "../api/index";
export default {

  async getHomeBanner ({commit, state}, callBack) {
    const result = await reqHomeData()
    if(result.code===0) {
      commit(RECEIVE_HOME_BANNER, {homeBanner: result.data.focusList})
      callBack && callBack()
    }
  },
  async getHomeTagList ({commit, state}, callBack) {
    const result = await reqHomeData()
    if(result.code===0) {
      commit(RECEIVE_HOME_TAG, {homeTagList: result.data.tagList})
      callBack && callBack()
    }
  },
  async getHomeNewItem ({commit, state}, callBack) {
    const result = await reqHomeData()
    if(result.code===0) {
      commit(RECEIVE_HOME_NEW_ITEM, {newItemList: result.data.newItemNewUserList})
      callBack && callBack()
    }
  },
  async getHomePopItem ({commit, state}, callBack) {
    const result = await reqHomeData()
    console.log(result)
    if(result.code===0) {
      commit(RECEIVE_HOME_POP_ITEM, {popularItemList: result.data.popularItemList})
      callBack && callBack()
    }
  },
  async getHomeData ({commit, state}, callBack) {
    const result = await reqHomeData()
    if(result.code===0) {
      commit(RECEIVE_HOME_DATA, {homedata: result.data})
      callBack && callBack()
    }
  },
  async getTopicData ({commit, state}, callBack) {
    const result = await reqTopicData()
    if(result.code===0) {
      commit(RECEIVE_TOPIC_DATA, {topicdata: result.data})
      callBack && callBack()
    }
  },
  async getCateData ({commit, state}, callBack) {
    const result = await reqNavData()
    if(result.code===0) {
      commit(RECEIVE_CATE_DATA, {catedata: result.data})
      callBack && callBack()
    }
  },
  setCurrentIndex({commit},index){
    commit(SET_CURRENT_INDEX, {index})
  },
  getCateDetail({commit},callBack){
    commit(RECEIVE_CATE_DETAIL)
    callBack && callBack()
  },
  //保存用户信息
  saveUserInfo ({commit},userInfo, callBack) {
    commit(RECEIVE_USER_INFO,{userInfo})
    callBack && callBack()
  },
  //异步获取用户信息
  async getUserInfo ({commit},callBack) {
    const result = await reqUserInfo()
    if(result.code===0){
      const {userInfo} = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
      callBack && callBack()
    }
  }
}
