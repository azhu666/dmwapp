/**
 * Created by user on 2018/8/14.
 */
import axios from 'axios'

export default function(url,obj){
  return new Promise(function(relove,reject){
    axios.post(url,obj)
      .then((rel)=>{
        relove(rel.data);
      },(err)=>{
        reject(err);
      })
  })
}
