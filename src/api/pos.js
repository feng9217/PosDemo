import axios from 'axios'

export function getPopularData() {
  const url = 'http://jspang.com/DemoApi/oftenGoods.php'
  return axios.get(url)
              .then((res) => {
                // console.log(res)
                return Promise.resolve(res)
              })
              .catch((error) => {
                console.log(error)
              })
}

export function getTypeGoods() {
  const url = 'http://jspang.com/DemoApi/typeGoods.php'
  return axios.get(url)
              .then((res) => {
                // console.log(res)
                return Promise.resolve(res)
              })
              .catch((error) => {
                console.log(error)
              })
}