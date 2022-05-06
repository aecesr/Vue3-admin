<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <!-- <div id="chart-one" ref="chart" style="height: 500px; width: 500px"></div> -->
</template>

<script>
// // import Echarts from 'echarts' // 引入Echarts插件
// const Echarts = require('echarts')
// // 按需引入对应的模块
// // require('echarts/lib/chart/bar')

// export default {
//   data() {
//     return {
//       chart: null
//     }
//   },
//   // 挂在Echarts实例的dom节点
//   mounted() {
//     // 调用方法绘制图表
//     this.initChart()
//     // 自适应窗口大小
//     window.addEventListener('resize', () => {
//       this.chart.resize()
//     })
//   },
//   methods: {
//     initChart() {
//       // 初始化Echarts实例
//       // 使用id的方式绑定容器时使用
//       console.log(Echarts)
//       // this.chart = Echarts.init(document.getElementById('chart-one'))
//       console.log(this.chart)
//       // 使用ref绑定图表放置的容器时使用
//       this.chart = Echarts.init(this.$refs.chart)
//       // 绘制图表
//       const option = {
//         xAxis: {
//           type: 'category',
//           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//         },
//         yAxis: {
//           type: 'value'
//         },
//         series: [
//           {
//             data: [150, 230, 224, 218, 135, 147, 200],
//             type: 'line'
//           }
//         ]
//       }
//       this.chart.setOption(option)
//     }
//   }
// }
</script>

<style></style>
