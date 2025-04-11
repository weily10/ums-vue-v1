<script setup>
import router from '../router'
import Table from '../components/Table.vue'
import { ref, onMounted } from 'vue';

const headers = ref([])
const content = ref([])



onMounted(() => {
    headers.value = [
        '項次',
        '任務編號',
        '名稱',
        '類型',
        '建立日期',
        '建檔人',
        '操作'
    ]

    content.value = [{
        item: '1',
        number: '213',
        item3: '碳費困境',
        item4: '智慧檢索編號 ( 5112 )',
        item5: '2023/10/12 16:15:23',
        item6: '許哲豪 '
    }]
})




</script>
<template >
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 分析清單 </h2>
        </div>

        <div class="bg-grey mt-3 filter p-3">
            <div>
                <div class="mb-2 d-flex flex-column border-bottom pb-3">
                    <div class="d-flex align-items-center gap-2 justify-content-between">
                        <div>
                            <label for="datefiltergroup" class="font-b4-me">建立日期</label>
                            <div class=" d-flex align-items-center gap-1 " id="datefiltergroup">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        aria-label="Username" aria-describedby="basic-addon1"
                                        id="list-analysis-create-start-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                                <div>
                                    ~
                                </div>
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="結束日期"
                                        aria-label="Username" aria-describedby="basic-addon1"
                                        id="list-analysis-create-end-date">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div>
                                <label for="input-group" class="font-b4-me">名單名稱</label>
                                <div class="input-group" style="width: 250px;" id="list-analysis-input-group">
                                    <span class="input-group-text border-end-0 bg-white icon-search"
                                        id="basic-addon2"></span>
                                    <input type="text" class="form-control border-start-0 " id="list-analysis-search-word"
                                        placeholder="查詢名單名稱">
                                </div>

                            </div>
                            <div class="ps-2 pt-4 d-flex gap-1">
                                <button class="btn primary" type="button" style="width: 100px;" @click="">
                                    查詢
                                </button>
                                <button class="btn secondary" type="button" style="width: 100px;" @click="">
                                    清空條件
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mt-3">
                    <Table :headers="headers" :tableData="content">
                        <template v-slot:header="{ item }">
                            <div v-if="item === '操作'" class="text-end ">{{ item }}</div>
                        </template>

                        <template v-slot:content="{ value, index2 }">
                            <div v-if="index2 === 'item6'">{{ value }}</div>
                        </template>

                        <template v-slot:actions>
                            <div class="dropstart position-static text-end ">
                                <button type="button" class="bg-transparent fs-6 custom-dropdown dropdown-toggle "
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-container="body">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                                <ul class="dropdown-menu border-0 shadow-sm ">
                                    <button class=" btn w-100 d-flex gap-3 rounded-0 "
                                        @click="router.push({ name: 'ListAnalysisView' })">
                                        <i class="bi bi-eye"></i>
                                        <div>
                                            檢視
                                        </div>
                                    </button>
                                    <button class=" btn w-100 d-flex gap-3 rounded-0">
                                        <i class="bi bi-file-earmark-excel "></i>
                                        下載Excel</button>

                                    <div class=" ">
                                        <button class=" btn w-100 d-flex gap-3 rounded-0">
                                            <i class="bi bi-file-earmark-ppt "></i> 下載PPT</button>
                                    </div>
                                    <div class=" ">
                                        <button class="btn w-100 d-flex gap-3 rounded-0">
                                            <i class="bi bi-trash "></i> 刪除</button>
                                    </div>
                                </ul>
                            </div>
                        </template>

                    </Table>

                </div>
            </div>
        </div>
    </div>
</template>