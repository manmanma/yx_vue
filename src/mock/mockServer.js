import Mock from 'mockjs'
import DataHome from './datahome.json'
import DataTopic from './datatopic.json'
import DataNav from './datanav.json'
Mock.mock('/homedata', {
  code: 0,
  data: DataHome
})
Mock.mock('/topicdata', {
  code: 0,
  data: DataTopic
})
Mock.mock('/navdata', {
  code: 0,
  data: DataNav.categoryL1List
})
