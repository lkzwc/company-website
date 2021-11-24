import Mock from 'mockjs'
import { baseUrl } from '../src/utils/config'

let data =  Mock.mock({
    info:"收到了"
})


module.exports={
    [`GET ${baseUrl}/find`](req,res){
     res.status(200).json(data);
    }
}
