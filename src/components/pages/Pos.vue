<template>
  <div class="pos">
    <el-row>
      <!-- span占栏数 -->
      <el-col :span="7" class="pos-order" ref="orderList" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table border style="width=100%" :data="tableData">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="单价" width="70"></el-table-column>
              <!-- fixed="right" 固定在右侧 -->
              <el-table-column label="操作" width="100" fixed="right">
                <!-- 2.5版本以后 scope已经改成slot-scope -->
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="btn-zone">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="popular-goods">
          <div class="title">常用商品</div>
          <div class="popular-goods-list">
            <ul>
              <li v-for="item in popularGoods">
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
                  <li v-for="item in type0Goods">
                    <span class="foodImg">
                      <img :src="item.goodsImg" width="100%">
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">{{item.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              小食
            </el-tab-pane>
            <el-tab-pane label="饮品">
              饮品
            </el-tab-pane>
            <el-tab-pane label="套餐">
              套餐
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Pos',
    data() {
      return {
        tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count: 1
        }, {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count: 1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count: 1
        }, {
          goodsName: '甜筒',
          price: 8,
          count: 1
        }],
        popularGoods: [
          {
            goodsId: 1,
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsName: '可乐大杯',
            price: 10
          }, {
            goodsId: 8,
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsName: '香脆鸡柳',
            price: 17
          }
        ],
        type0Goods: [
          {
            goodsId: 1,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
            goodsName: '香辣鸡腿堡',
            price: 18
          }, {
            goodsId: 2,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
            goodsName: '田园鸡腿堡',
            price: 15
          }, {
            goodsId: 3,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
            goodsName: '和风汉堡',
            price: 15
          }, {
            goodsId: 4,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
            goodsName: '快乐全家桶',
            price: 80
          }, {
            goodsId: 5,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
            goodsName: '脆皮炸鸡腿',
            price: 10
          }, {
            goodsId: 6,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
            goodsName: '魔法鸡块',
            price: 20
          }, {
            goodsId: 7,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
            goodsName: '可乐大杯',
            price: 10
          }, {
            goods: 8,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
            goodsName: '雪顶咖啡',
            price: 18
          }, {
            goodsId: 9,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
            goodsName: '大块鸡米花',
            price: 15
          }, {
            goodsId: 20,
            goodsImg: 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
            goodsName: '香脆鸡柳',
            price: 17
          }
        ]
      }
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
  }
  .per-price{
    color: #58B7FF
  }
  .goods-type{
    clear: both;
  }
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
  }
  .cook-list li span{
    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;
  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
  }
</style>