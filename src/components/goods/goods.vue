<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" class="menu-item"><span>{{item.name}}</span></li>
        </ul>
      </div>
      <div class="foods-wrapper" v-CustomScrollbar>
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="description">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shop-cart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
    </div>

</template>

<script type="text/ecmascript-6">
import shopCart from '../shopcart/shopcart.vue';

const ERR_OK = 0;

export default{
  props: {
    seller: {
    }
  },
  components: {
    shopCart
  },
  data () {
    return {
      goods: {}
    };
  },
  created () {
    this.axios.get('/api/goods').then((response) => {
      if (response.data.errno === ERR_OK) {
        this.goods = response.data.data;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
</script>

<style>
.goods{
  display: flex;
  position: absolute;
  top:180px;
  width:100%;
  bottom: 46px;
  overflow: hidden;
}
  .menu-wrapper{
    flex:0 0 80px;
    overflow: scroll;
  }
.menu-wrapper ul{
  padding: 0 8px;
  background: #f3f5f7;
}
  .menu-item{
    height: 54px;
    border-bottom: 1px solid #d2d3d6;
    text-align: center;
    display: table;
    line-height: 14px;
    font-size: 12px;
    width: 56px;
  }
.menu-item span{
  display: table-cell;
  vertical-align: middle;
}
  .foods-wrapper{
    flex:1;
    overflow: scroll;
  }
.foods-wrapper .title{
    font-size: 12px;
    color: rgb(147,153,159);
    padding-left: 14px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    background: #f3f5f7;
    margin: 0;
    width: 100%;
  }
/*每一个food-item是一个flex布局*/
.food-item{
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #ececec;
}
.food-item:last-child{
  margin-bottom: 0;
}
.icon{
  flex:0 0 57;
  margin-right: 10px;
}
.content{
   flex:1
  }
.content .name{
  margin: 2px 0 8px 0;
  line-height:14px;
  font-size: 14px;
  color: rgb(7,17,27);
}
.content .description{
  margin-bottom:8px;
  font-size: 10px;
  line-height: 10px;
  color: rgba(147,153,159);
}
.extra{
  line-height:10px;
  font-size: 10px;
}
.extra .count{
  margin-right:12px;
}
  .price{
    font-weight:700;
    line-height:24px;
  }
  .now{
    margin-right:8px;
    font-size: 14px;
    color: rgb(240,20,20);
  }
  .old{
    text-decoration: line-through;
    font-size: 10px;
    color:rgb(147,153,159);
  }

</style>
