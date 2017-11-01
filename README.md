#___PosDemo___

> A Vue.js project

图标使用的是在线引入的方式, 由iconfont引入的天猫的图标
地址: http://at.alicdn.com/t/font_458244_rbl1kpjd9v841jor.css
使用方法: class="icon iconfont icon-XXXX"
  
使用 Element UI —— 一套基于 Vue 2.0 的桌面端组件库
API: http://element-cn.eleme.io/#/zh-CN
element和bootstrap一样 也有栅格系统
  
在使用tabs的时候, 发现第一个tab会被吃掉一个padding-left 迷??
.el-tabs__nav-scroll 只能给这个盒子上个补丁
  
Element-ui tabs嵌套table的使用
  `<el-row>`
    `<el-col :span="7" class="pos-order" ref="orderList" id="order-list">`
      `<el-tabs>`
        `<el-tab-pane label="点餐">`
          `<el-table border style="width=100%" :data="tableData">`
            `<el-table-column prop="goodsName" label="商品名称">`
  
##添加了挂单页面
使用了添加对象属性的方式  
  `this.tableData.count = this.totalCount`
  `this.tableData.index = this.orderIndex`
  `this.postData.push(this.tableData)`
这样每项postData[i]里都会有互不影响的count和index属性提供遍历  
但是好像太占内存了 ???  
可以加个 orderIndex > 阈值 则重置回1来控制??