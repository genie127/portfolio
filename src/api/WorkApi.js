import axios from 'axios'

// const WorkApi = axios. create({
// 	url : BASE_URL,
//     headers: {
//         accept: 'application/json', // response데이터를 json객체로 달라고 서버에게 요청
//      },
// })

export const getWorks =async()=>{
    const response = await axios.get('/data/work.json')
    return response.data
        
}