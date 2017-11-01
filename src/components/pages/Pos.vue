<template>
  <div class="pos">
    <el-row>
      <!-- span占栏数 -->
      <el-col :span="7" class="pos-order" ref="orderList" id="order-list">
        <el-tabs>
          <!-- 点餐的 tabs页 -->
          <el-tab-pane label="点餐">
            <el-table border style="width=100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="单价" width="70"></el-table-column>
              <!-- fixed="right" 固定在右侧 -->
              <el-table-column label="操作" width="100" fixed="right">
                <!-- 2.5版本以后 scope已经改成slot-scope -->
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="deleteGoodsItem(scope.row)">删除</el-button>
                  <!-- 小坑 因为有scope 模板作用域 传入参数注意 -->
                  <!-- scope.row 传入当前行 -->
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">
              <small>数量:</small>{{totalCount}}
              <small>金额:</small>{{totalMoney}}元
            </div>
            <div class="btn-zone">
              <el-button type="warning" @click="postOrder">挂单</el-button>
              <el-button type="danger" @click="deleteAllGoods">删除</el-button>
              <el-button type="success" @click="checkOut">结账</el-button>
            </div>
          </el-tab-pane>
          <!-- 挂单的 tabs 页 -->
          <el-tab-pane label="挂单">
            <div>
              <ul>
                <li v-for="item in postData">
                  <el-table border style="width=100%" :data="item">
                    <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                    <el-table-column prop="count" label="数量" width="80" fixed="right"></el-table-column>
                  </el-table>
                  <div class="total">
                    <small>数量:</small>{{item.count}}
                    <small>单号:</small>{{item.index}}
                  </div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <!-- 外卖的 tabs页 -->
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="popular-goods">
          <div class="title">热门商品</div>
          <div class="popular-goods-list">
            <ul>
              <li v-for="item in popularGoods" @click="addOrderList(item)">
                <span>{{item.goodsName}}</span>
                <span class="per-price">{{item.price}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cook-list">
                  <li v-for="item in type0Goods" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cook-list">
                  <li v-for="item in type1Goods" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮品">
              <div>
                <ul class="cook-list">
                  <li v-for="item in type2Goods" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cook-list">
                  <li v-for="item in type3Goods" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
  import {getPopularData, getTypeGoods} from '../../api/pos'

  const ERR_OK = 200

  export default {
    name: 'Pos',
    data() {
      return {
        tableData: [],
        popularGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalCount: 0,
        totalMoney: 0,
        postData: [],
        orderIndex: 1
      }
    },
    created() {
      this._getPopularData()
      this._getTypeGoods()
    },
    mounted() {
      this._getHeight()
    },
    methods: {
      _getHeight() {
        let orderHeight = document.body.clientHeight
        // console.log(orderHeight)
        // console.log(this.$root.$refs.orderList)
        // 输出的不是 refs引用:[object HTMLDivElement]
        // this.$root.$refs.orderList.style.height = orderHeight + 'px'
        document.getElementById('order-list').style.height = orderHeight + 'px'
      },
      _getPopularData() {
        getPopularData().then((res) => {
          if (res.status === ERR_OK) {
            this.popularGoods = res.data
            // console.log(this.popularGoods)
          } else {
            return console.log('获取数据错误')
          }
        })
      },
      _getTypeGoods() {
        getTypeGoods().then((res) => {
          if (res.status === ERR_OK) {
            // this.type0Goods = res.data[0]
            // this.type1Goods = res.data[1]
            // this.type2Goods = res.data[2]
            // this.type3Goods = res.data[3]
            // 来个骚骚的 ES6解构赋值
            [this.type0Goods, this.type1Goods, this.type2Goods, this.type3Goods] = res.data
            // console.log(res.data.length)
            // console.log(this.type3Goods[0].goodsName)
            // ==== 全部 typeGoods 一起上版本
            // 用了模板字符串 console.log 试了是有用的
            // 只是 eslint 有 eval() 的禁令 用不了
            // for (let i = 0; i < res.data.length; i++) {
            //   let arr = eval('this.type{i}Goods')
            //   console.log(arr)
            //   for (let j = 0; j < arr.length; j++) {
            //     if (arr[j].goodsName.length > 5) {
            //       arr[j].goodsName = arr[j].goodsName.substring(0, 5) + '..'
            //     }
            //   }
            // }
            // ==== 单个 typeGoods 版本 ====
            // for (let i = 0; i < this.type3Goods.length; i++) {
            //   // console.log(this)
            //   if (this.type3Goods[i].goodsName.length > 5) {
            //     this.type3Goods[i].goodsName = this.type3Goods[i].goodsName.substring(0, 5) + '..'
            //   }
            // }
            // 上面这段 报错:
            // Cannot read property 'goodsName' of undefined at eval
            // 搞好了 报错原因 i<=this.arr.length 多遍历了一次 有个就没值了
            // this.type3Goods[0].goodsName = this.type3Goods[0].goodsName.substring(0, 5) + '..'
            // 不行就选择改字体吧
          } else {
            return console.log('获取数据错误')
          }
        })
      },
      addOrderList(item) {
        // 每次添加都需要清零的
        this.totalCount = 0
        this.totalMoney = 0

        // 判断商品是否已在订单列表中
        // console.log(this.tableData)
        let isHave = false
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].goodsId === item.goodsId) {
            isHave = true
          }
        }
        // 根据标志位执行逻辑 存在 则数量++ 不存在 则添加
        if (isHave) {
          // 如果在 tableData 中已经存在该元素 则数量++
          let arr = this.tableData.filter((el) => el.goodsId === item.goodsId
          )
          arr[0].count++
        } else {
          let newGoods = {
            goodsId: item.goodsId,
            goodsName: item.goodsName,
            price: item.price,
            count: 1
          }
          this.tableData.push(newGoods)
        }
        // 汇总计算
        this.getTotal()
      },
      deleteGoodsItem(item) {
        this.tableData = this.tableData.filter((el) => el.goodsId !== item.goodsId
        )
        this.getTotal()
      },
      // 提取汇总方法
      getTotal() {
        this.totalCount = 0
        this.totalMoney = 0
        if (this.tableData) {
          this.tableData.forEach((el) => {
            this.totalCount += el.count
            this.totalMoney = this.totalMoney + (el.price * el.count)
          })
        }
      },
      deleteAllGoods() {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
      },
      // 单纯的提交订单 没有后台 .....
      checkOut() {
        if (this.totalCount === 0) {
          this.$message({
            message: 'plz order sth before commit',
            type: 'warning'
          })
        } else {
        // 应该会封装一个 axios.post().then().catch()
          this.tableData = []
          this.totalCount = 0
          this.totalMoney = 0
          // element-ui 的方法
          this.$message({
            message: '订单提交成功 OvO',
            type: 'success'
          })
        }
      },
      postOrder() {
        if (this.totalCount === 0) {
          this.$message({
            message: 'plz order sth before postOrder',
            type: 'warning'
          })
        } else {
        // 应该会封装一个 axios.post().then().catch()
          this.tableData.count = this.totalCount
          this.tableData.index = this.orderIndex
          this.postData.push(this.tableData)
          this.orderIndex++
          console.log(this.postData)
          this.tableData = []
          this.totalCount = 0
          this.totalMoney = 0
          // element-ui 的方法
          this.$message({
            message: '挂单成功 OvO',
            type: 'success'
          })
        }
      }
    }
  }
</script>

<style>
  .pos{
    height: 100%
  }
  .pos-order{
    flex: 1;
    height: 100%;
    border-right: 1px solid #C0CCDA;
    background-color: #F9FAFC;
  }
  /*不知道为什么第一个标签缺失了padding-left*/
  .pos-order .el-tabs__nav-scroll{
    padding-left: 20px;
  }
  .btn-zone{
    margin-top: 10px;
    display: flex;
  }
  .btn-zone button{
    flex: 1;
  }
  .popular-goods .title{
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
  }
  .popular-goods .popular-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    display: block;
    cursor: pointer;
  }
  .per-price{
    color: #58B7FF
  }
  .goods-type{
    clear: both;
  }
  /*同款padding-left*/
  .goods-type .el-tabs__nav-scroll{
    padding-left: 20px;
  }
  .goods-type .el-tabs__content{
    padding: 10px 20px 20px 20px;
  }
  .cook-list li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    display: block;
    cursor: pointer;
  }
  .cook-list li span{
    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 16px;
    padding-left: 10px;
    color:brown;
  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
  .total{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3DCE6;
    text-align: center;
  }
</style>