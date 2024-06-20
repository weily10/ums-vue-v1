<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, watchEffect, computed } from 'vue';

const customRef = ref(null);

const option = computed(() => ({

    legend: {
        bottom: 0,
        left: 'center',

    },
    tooltip: {
        trigger: 'item',
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
        }
    },
    title: {
        text: '',
        subtext: '',
        left: 'center',
    },
    dataset: {
        source: [
            ['product', '瀏覽量', '文章瀏覽量', '互動事件量'],
            ['2023年11月27日', 103010, 75000, 230654],
            ['2023年11月28日', 810300, 730004, 230654],
            ['2023年11月29日', 23864, 65214, 42145],
            ['2023年11月30日', 633219, 74249, 421412],
        ],
    },
    xAxis: {
        type: 'category',

    },
    yAxis: {

    },

    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
}));

function initChart() {
    if (!customRef.value) return;

    const drawChart = echarts.init(customRef.value);
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
    <div ref="customRef" class="chart-container" style="width: 100%; height: 30dvh;"></div>
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