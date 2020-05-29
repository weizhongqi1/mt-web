<template>
    <div class="m-istyle">
        <dl @mouseover="over">
            <dt >有格调</dt>
            <dd :class="{active: kind == 'all'}" data-type="all">全部</dd>
            <dd :class="{active: kind == 'food'}" data-type="food">约会聚餐</dd>
            <dd :class="{active: kind == 'spa'}" data-type="spa">丽人SPA</dd>
            <dd :class="{active: kind == 'movie'}" data-type="movie">电影演出</dd>
            <dd :class="{active: kind == 'travel'}" data-type="travel">品质出游</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item, index) in resultData[kind]" :key="index">
              <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img :src="item.image" class="image">
                <div class="cbody">
                  <div class="title" :title="item.title">{{item.title}}</div>
                  <div class="sub-title" :title="item.sub_title">{{item.subTitle}}</div>
                  <div class="price-info" >
                    <span class="current-price-wrapper">
                      <span class="price-symbol numfont">¥</span>
                      <span class="current-price numfont">{{item.price}}</span>
                    </span>
                    <span class="sold bottom-right-info">{{item.address}}</span>
                    <!-- <span class="old-price">门市价¥{{item}}</span>
                    <span class="sold bottom-right-info">{{item.address}}</span> -->
                  </div>
                </div>
              </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultData: {}
    }
  },
  created() {
  api.getResultProducts().then(res  => {
    this.resultData = res.data.data;
  })
  },
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/artistic.scss';
</style>
