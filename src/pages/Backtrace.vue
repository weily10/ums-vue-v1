<script setup>
import customChart from '../components/Chart.vue'
import { ref, onMounted } from 'vue'

onMounted(() => {

})

const stackedline = ref({
    title: {
        text: 'data.title',
        subtext: '',
        left: 'center',
    },
    legend: {
        show: true,
        top: 'bottom'
    },
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
    },

    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: "首次數據(2023-11-16)",
            type: 'line',
            stack: 'Total',
            data: [0, 3800, 3900, 3890, 1083, 2140, 5170, 10165, 7124, 7597, 8000, 9000, 10000, 7023, 6230],
        },
        {
            name: "追蹤數據(2023-11-16)",
            type: 'line',
            stack: 'Total',
            data: [0, 11234, 35344, 3321, 12345, 324, 5533, 333, 111, 6767, 2344, 4355, 3344, 2323, 323],
        },
    ]
})

const option = ref({
    title: {
        text: '性別分布  (資料區間14天)',
        subtext: '性別分布  (資料區間14天)',
        left: 'center',
        top: '1%'
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
    legend: {
        bottom: '10%',
        left: 'center'
    },
    series: [
        {
            top: '1%',
            name: '合計',
            type: 'pie',
            radius: ['42%', '52%'],
            avoidLabelOverlap: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 10,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                name: "未填寫",
                value: 8120
            },
            {
                name: "男",
                value: 3392
            },
            {
                name: "女",
                value: 1101
            }
            ],
        }
    ]
})


const barchart = ref({
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
})



const linechart = ref({
    title: {
        text: "造訪熱點",
        left: 'center',
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'category',
        data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14']
    },
    yAxis: {
        type: 'value',

    },
    series: [
        {
            top: '62%',
            data: [2742, 1487, 1008, 883, 1083, 2140, 5170, 10165, 7124, 7597, 8000, 9000, 10000, 7023, 6230],
            type: 'line'
        }
    ]
})


const items = ref([
    {
        accno: '00556834	',
        name: '藍*仁',
        email: '***************@noauth',
        auth: 'N',
        phone: '092345678',
        phonestatus: 'N',
        accstatus: '已啟用',
        sex: '男',
        age: '42',
        profession: '製造/供應商',
        date: '2017年08月08日',
        marketing: 'Y',
        subs: 'Y'

    }
])

function generateAccData() {
    option.value = {
        title: {
            text: '性別分布  (資料區間14天)',
            subtext: '性別分布  (資料區間14天)',
            left: 'center',
            top: '1%'
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
        legend: {
            bottom: '10%',
            left: 'center'
        },
        series: [
            {
                top: '1%',
                name: '合計',
                type: 'pie',
                radius: ['42%', '52%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [{
                    name: "未填寫",
                    value: 8120
                },
                {
                    name: "男",
                    value: 3392
                },
                {
                    name: "女",
                    value: 1101
                }
                ],
            }
        ]
    }
}

function generateReadingData() {
    barchart.value = {
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
                ['2023年11月27日', 212, 313, 122],
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
    }

    stackedline.value = {
        title: {
            text: 'AAA',
            subtext: '',
            left: 'center',
        },
        legend: {
            show: true,
            top: 'bottom'
        },
        tooltip: {
            show: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'],
        },

        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: "首次數據(2023-11-16)",
                type: 'line',
                stack: 'Total',
                data: [0, 3800, 3900, 3890, 1083, 2140, 5170, 10165, 7124, 7597, 8000, 9000, 10000, 7023, 6230],
            },
            {
                name: "追蹤數據(2023-11-16)",
                type: 'line',
                stack: 'Total',
                data: [0, 11234, 35344, 3321, 12345, 324, 5533, 333, 111, 6767, 2344, 4355, 3344, 2323, 323],
            },
        ]
    }
}

function generateSubsPieChart() {
    option.value = {
        title: {
            text: '性別分布',
            subtext: '性別分布  (資料區間14天)',
            left: 'center',
            top: '1%'
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
        legend: {
            bottom: '10%',
            left: 'center'
        },
        series: [
            {
                top: '1%',
                name: '合計',
                type: 'pie',
                radius: ['42%', '52%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 10,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [{
                    name: "未填寫",
                    value: 8120
                },
                {
                    name: "男",
                    value: 3392
                },
                {
                    name: "女",
                    value: 1101
                }
                ],
            }
        ]
    }


    barchart.value = {
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
    }


}




</script>

<template>
    <div>
        <div class="d-flex gap-1">
            <div class="position-relative">
                <button class="btn rounded-circle btn-sm" type="button">
                    <i class="bi bi-arrow-left" @click="goback()"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                名單追蹤回溯
            </h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">

            <div class="select-wrap filter-location-wrap">
                <div class="d-flex flex-column gap-2">
                    <div class="d-flex gap-3 border-bottom pb-2">
                        <ul id="" class="d-flex nav gap-2 fw-semibold" role="tablist">
                            <li class="nav-item" role="presentation">

                                <a class="tab-button-1 active rounded-1" data-bs-toggle="pill" data-bs-target="#memberdata"
                                    type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                                    @click="generateAccData()">
                                    <span>會員數據</span>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="tab-button-1 rounded-1" aria-selected="false" data-bs-target="#subsdata"
                                    aria-controls="subsdata" data-bs-toggle="pill" role="tab"
                                    @click="generateSubsPieChart()">
                                    <span>訂戶數據</span>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="tab-button-1 rounded-1" aria-selected="false" data-bs-target="#readingdata"
                                    data-bs-toggle="pill" role="tab" @click="generateReadingData()">
                                    <span>閱讀行為</span>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="tab-button-1 rounded-1" aria-selected="false" data-bs-target="#favoritedata"
                                    @click="loadFavData()" data-bs-toggle="pill" role="tab">
                                    <span>收藏行為</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="tab-content">

                <div class="mt-2 d-flex justify-content-between">
                    <div>
                        <h3 class="">潛在訂戶</h3>
                        <h4>首次數據(2023-10-24)</h4>
                    </div>
                    <div id="radio-reading-space" class="mt-2 invisible custom-option-select">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <input type="radio" class="btn-check" name="options" id="reading-all" autocomplete="off"
                                checked>
                            <label class="btn " for="reading-all">All</label>
                            <input type="radio" class="btn-check" name="options" id="reading-app" autocomplete="off">
                            <label class="btn " for="reading-app">App</label>
                            <input type="radio" class="btn-check" name="options" id="reading-web" autocomplete="off">
                            <label class="btn " for="reading-web">Web</label>
                        </div>
                    </div>
                </div>
                <!-- 會員數據 -->
                <div class="tab-pane fade show active mt-3" id="memberdata" role="tabpanel" tabindex="0">
                    <div class="d-flex flex-wrap column-gap-3 ">
                        <div class="flex-fill shadow-sm p-3 bg-white" style="width: 25%;min-width: 250px">
                            <div id="member-piechart-1" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>

                        <div class="flex-fill shadow-sm p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-3" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                        <div class="flex-fill shadow-sm p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-2" class="pie-charts" style="width:100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap column-gap-3 mt-3">
                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 40%;">
                            <div id="member-piechart-7" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-4" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-5" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>

                    </div>
                    <div class="d-flex flex-wrap column-gap-3 mt-3">
                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-6" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>

                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 25%;">
                            <div id="member-piechart-9" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                        <div class="shadow-sm flex-fill p-3 bg-white" style="width: 40%;">
                            <div id="member-piechart-8" class="pie-charts" style="width: 100%; height: 350px;">
                                <custom-chart :option="option"></custom-chart>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col">
                            <div class="linechart card shadow-sm mb-3  border-0">
                                <div id="memberdata-linechart" class="card-body " style="min-width:75vh; height: 386px;">
                                    <custom-chart :option="linechart"></custom-chart>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap column-gap-3 ">
                        <div class="card shadow-sm mb-3 border-0 flex-fill" style="width:560px">
                            <div id="memberdata-barchart-1" class="barchart card-body pt-0 px-2 pb-0  "
                                style="width: 100%; min-width:350px;height: 386px;">
                                <custom-chart :option="barchart"></custom-chart>
                            </div>

                        </div>
                        <div class="card shadow-sm mb-3 border-0 flex-fill" style="width:560px">
                            <div id="memberdata-barchart-2" class="barchart card-body pt-0 px-2 pb-0  "
                                style="width: 100%; min-width:350px; height: 386px;">
                                <custom-chart :option="barchart"></custom-chart>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 card border-0 shadow-sm">
                        <div class="d-flex justify-content-between align-items-bottom ">
                            <div class="d-flex gap-1">
                                <h3 class="col-4 ">會員資訊</h3>
                                <div class="col-9">
                                    <select class="form-select form-select-sm" type="select" value="" id="member-select-5">
                                        <option selected>初始數據(2023-10-24)</option>
                                    </select>
                                </div>

                            </div>
                            <div class="">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-start">會員帳號
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col" class="text-start">姓名 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button></th>
                                    <th scope="col" class="text-start">信箱 <button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button></th>
                                    <th scope="col" class="text-center">信箱驗證<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button> </th>
                                    <th scope="col" class="text-center">手機驗證<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button> </th>
                                    <th scope="col" class="text-start">手機<button
                                            class="bg-transparent rounded-circle p-0 text-white"><i class="icon-sequence"
                                                @click=""></i></button> </th>

                                    <th scope="col">會員狀態<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">性別<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">年齡<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">職業<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">註冊日期<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">可跨部行銷<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">訂閱部門電子報<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                </tr>
                            </thead>
                            <tbody id="member-data-table">
                                <template v-for="(item, index) in items" :key="index">
                                    <tr>
                                        <td class="text-start">{{ item.accno }}</td>
                                        <td>{{ item.name }} </td>
                                        <td>{{ item.email }} </td>
                                        <td class="text-center">{{ item.phonestatus }}</td>
                                        <td class="text-center">{{ item.auth }} </td>
                                        <td>{{ item.phone }} </td>
                                        <td class="text-center">{{ item.accstatus }} </td>
                                        <td class="text-center">{{ item.sex }} </td>
                                        <td class="text-center">{{ item.age }} </td>
                                        <td class="text-start">{{ item.profession }} </td>
                                        <td class="text-center">{{ item.date }} </td>
                                        <td class="text-center">{{ item.marketing }} </td>
                                        <td class="text-center">{{ item.subs }} </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- 訂戶數據 -->
                <div class="tab-pane fade mt-3" id="subsdata" role="tabpanel" tabindex="0">
                    <div id="subsdata-piechart" class="row">
                        <template v-for="(item, index) in 4" :key="index">
                            <div class="col-xl-6 col lg-5 px-2">
                                <div class="subsdata-piechart card shadow-sm mb-3 border-0">
                                    <div class="card-body  ">
                                        <custom-chart :option="option"></custom-chart>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div class="mt-2">
                        <h3 class="col-4 "> 訂單方案</h3>

                        <div class="card shadow-sm border-0">
                            <div class="card-body">
                                <custom-chart :option="barchart"></custom-chart>
                            </div>
                            <div class="d-flex gap-3 justify-content-center mt-3">

                                <div class="btn-group button-checkbox d-flex " role="group" id="plans-choice-options"
                                    data-bs-toggle="buttons">
                                    <input type="radio" class="btn-check" name="share-types" id="plan1" autocomplete="off"
                                        value="plan1" checked>
                                    <label class="btn" for="plan1"> 1</label>
                                    <input type="radio" class="btn-check" name="share-types" id="plan2" autocomplete="off"
                                        value="schedule">
                                    <label class="btn" for="plan2"> 2
                                    </label>
                                    <input type="radio" class="btn-check" name="share-types" id="plan3" autocomplete="off"
                                        value="schedule">
                                    <label class="btn" for="plan3"> 3
                                    </label>
                                    <input type="radio" class="btn-check" name="share-types" id="plan4" autocomplete="off"
                                        value="schedule">
                                    <label class="btn" for="plan4"> 4
                                    </label>

                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- 訂戶資訊 -->
                    <div class="mt-3">
                        <div class="d-flex justify-content-between align-items-bottom">
                            <div class="d-flex gap-1">
                                <h3 class="col-4 ">訂戶資訊</h3>
                                <div class="col-9">
                                    <select class="form-select form-select-sm" type="select" value="" id="member-select-5">
                                        <option selected>初始數據(2023-10-24)</option>
                                    </select>
                                </div>

                            </div>
                            <div class="">
                                <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                        class="lh-1 ifont icon-openMenu p-0"></i></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                    </li>
                                    <li>
                                    <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">會員帳號
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col">姓名 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">信箱 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">手機<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">註冊日期<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">訂戶到日期<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">網站最後造房日<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">App最後造訪日<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>

                                </tr>
                            </thead>
                            <tbody id="subs-data-table">

                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 歷史訂單資訊 -->
                    <div class="mt-2">
                        <div class="">
                            <h3 class="">歷史訂單資訊</h3>
                        </div>
                        <div class="d-flex justify-content-between align-items-bottom mt-2">
                            <div class="d-flex  align-items-center">
                                <div>
                                    <div class="input-group" style="width: 250px;" id="input-group">
                                        <span class="input-group-text border-end-0 bg-white icon-search"
                                            id="basic-addon2"></span>
                                        <input type="text" class="form-control border-start-0 " id="searchWord"
                                            placeholder="請輸入欲搜尋的帳號">
                                    </div>

                                </div>
                                <div class="ps-2">
                                    <button class="btn primary" type="button" style="width: 100px;" @click="">
                                        查詢
                                    </button>
                                </div>
                            </div>
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                </li>
                            </ul>
                        </div>

                        <table class="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">會員帳號
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col">姓名 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">方案名稱 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">產品名稱<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">訂單來源<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">訂購日期<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">訂單狀態<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>

                                </tr>
                            </thead>
                            <tbody id="history-data-table">

                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- 閱讀行為 -->
                <div class="tab-pane fade mt-3 " id="readingdata" role="tabpanel" tabindex="0">
                    <div class="mb-3 d-flex flex-wrap gap-3">
                        <div class="card shadow-sm  border-0 flex-fill" style="width:600px">

                            <div id="readingdata-barchart" class="card-body">
                                <custom-chart :option="barchart"> </custom-chart>
                            </div>
                        </div>
                        <div class="hoverDiv  flex-grow-1 card shadow-sm px-0 pb-0 pt-0 border-0" style="width:600px">
                            <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-savefile"></i></span></button>
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-csv"></i></span></button>
                            </div>
                            <div id="readingdata-barchart-1" class=" card-body  ">
                                <custom-chart :option="barchart"> </custom-chart>
                            </div>
                        </div>
                    </div>
                    <div class="hoverDiv">
                        <div class="card shadow-sm mb-3   border-0  "  >
                            <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-savefile"></i></span></button>
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-csv"></i></span></button>
                            </div>
                            <div id="readingdata-linechart" class=" card-body " >
                                <custom-chart :option="stackedline"> </custom-chart>
                            </div>

                        </div>
                    </div>
                    <div class="mb-3 d-flex flex-wrap gap-3">
                        <div class="hoverDiv flex-shrink-1 linechart card shadow-sm mb-3 px-0 pb-0 pt-0 border-0 ">
                            <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-savefile"></i></span></button>
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-csv"></i></span></button>
                            </div>
                            <div id="readingdata-piechart" class=" card-body pt-0 px-2 pb-0 m-auto"
                                style="width: 45vh; height:386px;"></div>
                        </div>
                        <div class="hoverDiv flex-grow-1  card shadow-sm mb-3 px-0 pb-0 pt-0 border-0 ">
                            <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-savefile"></i></span></button>
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-csv"></i></span></button>
                            </div>
                            <div id="readingdata-barbrushchart" class="card-body pt-0 m-auto "
                                style="width: 85vh; height: 450px;"></div>
                        </div>
                    </div>
                    <!-- 文章類別瀏覽量排行 -->
                    <div class="mt-2">
                        <div class="d-flex justify-content-between align-items-bottom mt-2">
                            <div class="">
                                <h3 class="">文章類別瀏覽量排行</h3>
                            </div>
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                </li>
                            </ul>
                        </div>

                        <table class="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">文章
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col">文章類別 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">文章類型 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">分享數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">瀏覽會員數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">完讀數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">瀏覽數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">完讀率<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                </tr>
                            </thead>
                            <tbody id="history-data-table">

                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <!-- 文章瀏覽量排行 -->
                    <div class="mt-2">
                        <div class="d-flex justify-content-between align-items-bottom mt-2">
                            <div class="">
                                <h3 class="">文章瀏覽量排行</h3>
                            </div>
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                </li>
                            </ul>
                        </div>

                        <table class="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">文章
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col">文章類別 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">文章類型 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">分享數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">瀏覽會員數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                    <th scope="col">文章完讀率<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>
                                </tr>
                            </thead>
                            <tbody id="ranking-article-category-data-table">

                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <!-- 會員文章瀏覽量排行 -->
                    <div class="mt-2">
                        <div class="d-flex justify-content-between align-items-bottom mt-2">
                            <div class="">
                                <h3 class="">會員文章瀏覽量排行</h3>
                            </div>
                            <button class="lh-1 bg-transparent text-secondary p-0 m-0 " data-bs-toggle="dropdown"><i
                                    class="lh-1 ifont icon-openMenu p-0"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Redefine</button></li>
                                </li>
                                <li>
                                <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                </li>
                            </ul>
                        </div>

                        <table class="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th scope="col">分享數
                                        <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button>
                                    </th>
                                    <th scope="col">分享數 <button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col"> 完讀數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button></th>
                                    <th scope="col">瀏覽數<button class="bg-transparent rounded-circle p-0 text-white"><i
                                                class="icon-sequence" @click=""></i></button> </th>

                                </tr>
                            </thead>
                            <tbody id="history-data-table">

                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <div class="font-support align-text-top">
                                共 <span id="">3</span> 筆資料
                            </div>
                            <div class="d-flex justify-content-center align-items-center">

                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-left"></i></button>

                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="pagination-btn btn">1</button>
                                    <button type="button" class="pagination-btn btn">2</button>
                                    <button type="button" class="pagination-btn btn">3</button>
                                    <button type="button" class="pagination-btn btn">4</button>
                                    <button type="button" class="pagination-btn btn">...</button>
                                    <button type="button" class="pagination-btn btn">999</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                            class="icon-right"></i></button>

                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade mt-3" role="tabpanel" tabindex="0" id="favoritedata">
                    <div class="hoverDiv">
                        <div class="card shadow-sm mb-3 px-0 pb-0 pt-0 border-0 ">
                            <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-savefile"></i></span></button>
                                <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                            class="fs-4 icon-csv"></i></span></button>
                            </div>
                            <div id="favoritedata-barchart" class="barchart card-body pt-0 px-2 pb-0 mx-auto"></div>

                        </div>
                    </div>
                    <div class="d-flex flex-wrap column-gap-3 ">
                        <div class="hoverDiv flex-fill">
                            <div class="card shadow-sm mb-3 px-0  pt-0 border-0 ">
                                <div class="hide d-flex gap-2 justify-content-end px-3 pt-2 pb-2">
                                    <div class="col-4 me-auto mt-1">
                                        <select class="form-select form-select-sm" type="select" value="" id="">
                                            <option selected>收藏文章</option>
                                            <option value="1">搜索關鍵字</option>
                                            <option value="2">追蹤標籤</option>
                                            <option value="3">前往留言</option>
                                            <option value="3">分享</option>
                                        </select>
                                    </div>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-savefile"></i></span></button>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-csv"></i></span></button>

                                </div>

                                <div id="favoritedata-sex-piechart" class="barchart card-body pt-0 px-2 pb-0 mx-auto"
                                    style="width:45vh;height: 386px"></div>

                            </div>
                        </div>
                        <div class="hoverDiv flex-fill">
                            <div class="card shadow-sm mb-3 px-0  pt-0 border-0 ">
                                <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                    <div class="col-4 me-auto mt-1">
                                        <select class="form-select form-select-sm" type="select" value="" id="">
                                            <option selected>收藏文章</option>
                                            <option value="1">搜索關鍵字</option>
                                            <option value="2">追蹤標籤</option>
                                            <option value="3">前往留言</option>
                                            <option value="3">分享</option>
                                        </select>
                                    </div>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-savefile"></i></span></button>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-csv"></i></span></button>

                                </div>

                                <div id="favoritedata-age-piechart" class="barchart card-body pt-0 px-2 pb-0 mx-auto "
                                    style="width:45vh;height: 386px"></div>

                            </div>
                        </div>
                        <div class="hoverDiv flex-fill">
                            <div class="card shadow-sm mb-3 px-0  pt-0 border-0 ">
                                <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                    <div class="col-4 me-auto mt-1">
                                        <select class="form-select form-select-sm" type="select" value="" id="">
                                            <option selected>收藏文章</option>
                                            <option value="1">搜索關鍵字</option>
                                            <option value="2">追蹤標籤</option>
                                            <option value="3">前往留言</option>
                                            <option value="3">分享</option>
                                        </select>
                                    </div>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-savefile"></i></span></button>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-csv"></i></span></button>

                                </div>

                                <div id="favoritedata-devicesdata-piechart"
                                    class="barchart card-body pt-0 px-2 pb-0 mx-auto " style="width:45vh;height: 386px">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap column-gap-3 ">
                        <div class="hoverDiv flex-fill">
                            <div class="card shadow-sm mb-3 px-0  pt-0 border-0 ">
                                <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                    <div class="col-3 me-auto mt-1">
                                        <select class="form-select form-select-sm" type="select" value="" id="">
                                            <option selected>收藏文章</option>
                                            <option value="1">搜索關鍵字</option>
                                            <option value="2">追蹤標籤</option>
                                            <option value="3">前往留言</option>
                                            <option value="3">分享</option>
                                        </select>
                                    </div>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-savefile"></i></span></button>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-csv"></i></span></button>

                                </div>

                                <div id="favoritedata-cities-piechart" class="barchart card-body pt-0 px-2 pb-0 mx-auto "
                                    style="width:45vh;height: 386px">
                                </div>

                            </div>
                        </div>
                        <div class="hoverDiv flex-fill">
                            <div class="card shadow-sm mb-3 px-0 pt-0 border-0 ">
                                <div class="hide d-flex gap-2 justify-content-end px-3 pt-2">
                                    <div class="col-3 me-auto mt-1">
                                        <select class="form-select form-select-sm" type="select" value="" id="">
                                            <option selected>收藏文章</option>
                                            <option value="1">搜索關鍵字</option>
                                            <option value="2">追蹤標籤</option>
                                            <option value="3">前往留言</option>
                                            <option value="3">分享</option>
                                        </select>
                                    </div>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-savefile"></i></span></button>
                                    <button class="rounded-circle p-0"><span class="btnspanclass"><i
                                                class="fs-4 icon-csv"></i></span></button>
                                </div>
                                <div id="favoritedata-countries-piechart" class="card-body pt-0 px-2 pb-0 mx-auto"
                                    style="width:45vh;height: 386px">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h3> 排行 (資料區間14天)</h3>
                        <div class="d-flex gap-3 flex-wrap">

                            <div class="shadow-sm p-3 flex-fill bg-white" style="width:45dvh">
                                <div class="d-flex justify-content-between ">
                                    <h4>收藏文章排行</h4>
                                    <div class="d-flex">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                            </li>
                                            </li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>文章</th>
                                                <th>收藏
                                                    <button class="bg-transparent rounded-circle p-0 text-white">
                                                        <i class="icon-sequence" @click=""></i>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="shadow-sm  p-3  flex-fill" style="width:45dvh">
                                <div class="d-flex justify-content-between ">
                                    <h4>關鍵字搜索排行</h4>
                                    <div class="d-flex">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                            </li>
                                            </li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>關鍵字 <button class="bg-transparent rounded-circle p-0 text-white">
                                                        <i class="icon-sequence" @click=""></i>
                                                    </button></th>
                                                <th>
                                                    搜索次數
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="shadow-sm p-3 flex-fill bg-white" style="width:45dvh">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h4>標籤追蹤排行</h4>
                                    <div class="d-flex align-items-end">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                            </li>
                                            </li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>標籤</th>
                                                <th>追中次數
                                                    <button class="bg-transparent rounded-circle p-0 text-white">
                                                        <i class="icon-sequence" @click=""></i>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="shadow-sm p-3   flex-fill" style="width:45dvh">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h4>收藏文章類別排行</h4>
                                    <div class="d-flex align-items-end">
                                        <button class="lh-1 bg-transparent text-secondary p-0 m-0 "
                                            data-bs-toggle="dropdown"><i class="lh-1 ifont icon-openMenu p-0"></i></button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" type="button" @click="">Export</button></li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Redefine</button>
                                            </li>
                                            </li>
                                            <li>
                                            <li><button class="dropdown-item" type="button" @click="">Explore</button></li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th>文章類別</th>
                                                <th>收藏次數
                                                    <button class="bg-transparent rounded-circle p-0 text-white">
                                                        <i class="icon-sequence" @click=""></i>
                                                    </button>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
#plan1-barchart {
    min-width: 350px;
}
</style>