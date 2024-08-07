<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, watchEffect, computed } from 'vue';

const customRef = ref(null);

const props = defineProps({
    option: Object
})

const option = computed(() => (props.option));

let drawChart
function initChart() {
    if (!customRef.value) return;

   if (drawChart != null && drawChart != "" && drawChart != undefined) {
        drawChart.dispose()
    }
    drawChart = echarts.init(customRef.value);

    console.log('drawChart', drawChart);
    drawChart.setOption(option.value);

    window.addEventListener('resize', () => {
        drawChart.resize();
    });
}

onMounted(() => {
    initChart();
});

watchEffect(() => {
    initChart();
});
</script>

<template>
    <div ref="customRef" class="chart-container"></div>
</template>

<style scoped>
.chart-container {
    width: 100%;
    height: 400px;
}

@media screen and (max-width: 768px) {
    .chart-container {
        height: 300px;
    }
}

@media screen and (max-width: 480px) {
    .chart-container {
        height: 200px;
    }
}
</style>