import * as http from './http';

const $http=http;

export default{
  install(Vue){
    Vue.prototype.$http=http;
  }
}
