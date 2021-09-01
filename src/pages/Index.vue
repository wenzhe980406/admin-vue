<template>
  <div id="home">
    <div class="block">
      <h2>启动成功</h2>
      <div>
        <p>当前环境：{{ env }}（{{envName}}）</p>
        <p>你可以查看项目的README.md文件获取项目说明，或在线<a href="http://cg.lazy-monkey.com/template/group/9/latest" target="_blank">查看项目详细描述</a></p>
        <p>感谢您使用<a href="http://cg.lazy-monkey.com" target="_blank">懒猴子CG</a></p>
      </div>
    </div>
    <hr />
    <div class="block">
      <h2>Vuex Test</h2>
      <div>
        <p>{{ rootStateContent }}</p>
        <p>{{ sampleStateContent }}</p>
      </div>
    </div>
    <hr />
    <div class="block">
      <h2>I18n Test</h2>
      <select v-model="$i18n.locale">
        <option value="en">English</option>
        <option value="zh">简体中文</option>
      </select>
      {{ $t('welcome') }}
    </div>
    <hr />
    <div class="block">
      <h2>Echarts示例</h2>
      <div id="echarts"></div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { getHomeData } from '@/assets/service/IndexService'

export default {
  name: 'Index',
  data () {
    return {
      env: process.env.NODE_ENV,
      envName: process.env.ENV_NAME,
    }
  },
  methods: {
    // 初始化示例echarts
    __initEcharts () {
      const echarts = require('echarts')
      const myChart = echarts.init(document.getElementById('echarts'))
      myChart.setOption({
        title: {
          text: '本周气温趋势图',
          textStyle: {
            color: '#4d4d4d',
            fontSize: 14,
            fontWeight: 400
          },
          bottom: 10,
          left: 'center'
        },
        color: ['pink'],
        xAxis: {
          data: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
          name: '星期'
        },
        yAxis: {
          type: 'value',
          name: '温度',
          axisLabel: {
            formatter: '{value}℃'
          }
        },
        series: [{
          type: 'bar',
          data: [15, 25, 33, 20, 13, 5, 22],
          itemStyle: {
            barBorderRadius: [24, 24, 0, 0]
          },
          barWidth: 20
        }],
        grid: {
          top: '10%'
        }
      })
    }
  },
  computed: {
    ...mapState(['rootStateContent']),
    ...mapState('sample', ['sampleStateContent'])
  },
  mounted () {
    // 初始化示例echarts
    this.__initEcharts()
  }
}
</script>

<style scoped lang="less">
@import "../assets/style/index";
</style>

