<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from '../router/index.js'
import { ref, onMounted, computed } from 'vue'
import ConfirmModal from '../components/ConfirmModal.vue'
import api from '../api/axios.js'

let deleteModal = ref(false)
let id = 'deleteModal'
let controller
const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const error = ref('')
const totalPages = ref(0)
const _id = ref(null)
const detailData = ref([])

const items = ref([
    {
        no: '1',
        no2: '4124',
        themename: 'wayneTest',
        themeTag: '美妝_綜合美妝	',
        analysis: '執行完成',
        actionanalysis: '未執行',
        zaiju: 'Desktop',
        desktopmobile: 0,
        list: ' N/ A',
        status: 'N / A	',
        phonelist: 'N / A',
        phonestatus: ' N / A	',
        creatorname: '周冠廷',
        createdate: ' 2023 / 10 / 20 11:04: 34'
    }
])

async function getData() {
    const { data } = await api.get('/api/ads-data')

    items.value = data
    console.log('data', items.value);
}

async function load(p = 1) {
    controller?.abort()
    controller = new AbortController()
    loading.value = true
    try {
        const { data } = await api.get('/api/ads-data', {
            params: { page: p, pageSize: pageSize.value },
            signal: controller.signal
        })
        console.log(data);

        items.value = data
        detailData.value = data.data
        page.value = data.page
        totalPages.value = data.totalPages

    } catch (err) {
        error.value = err.response?.data?.message || err.message
    } finally {
        loading.value = false
    }
}

const visiblePages = computed(() => {
    const range = 2
    const start = Math.max(1, page.value - range)
    const end = Math.min(totalPages.value, page.value + range)
    return Array.from({ length: Math.max(end - start + 1, 0) }, (_, i) => start + i)
})


function toSmartAdKeywordAdvAddPage() {
    router.push({ name: "SmartAdThemeAdvertisingAdd" })
}


function viewAnalysisReport() {
    router.push({ name: "SmartAnalysisReport" })
}

onMounted(() => {
    load(1)
    deleteModal.value = new Modal(document.getElementById(id))
})

function showConfirmModal1(item) {


    _id.value = item._id
    console.log('item', _id);
    deleteModal.value.show()
}

function closeModal() {
    deleteModal.value.hide()
}

async function confirmDelete() {

    await api.put(`/api/ads-data/${_id.value}/delete`).then(res => {
         load(page.value)

    })
    deleteModal.value.hide()
}





</script>

<template>
    <div class="">
        <div class="d-flex justify-content-between gap-1">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left  fs-6 py-1 "></i></button>
                <h2 class="mb-0"> 主題標籤廣告</h2>
            </div>
            <button class="btn secondary text-light" @click="toSmartAdKeywordAdvAddPage()">新增 <i
                    class="bi bi-plus"></i></button>
        </div>

        <div class="bg-grey mt-3 filter p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2  flex-wrap border-bottom pb-3">

                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me">主題名稱</label>
                        <div class="input-group" id="smart-ad-theme-group" style="min-width: 350px;">
                            <span class="input-group-text border-end-0 bg-white bi bi-search"
                                id="newsletter-search-basic-addon"></span>
                            <input type="text" class="form-control border-start-0 " id="smart-ad-theme-name"
                                placeholder="主題名稱(模糊查詢)">
                        </div>
                    </div>
                    <div>
                        <label class="font-b4-me">可投遞曝光數</label>
                        <div class=" d-flex align-items-center gap-1 ">
                            <div class="col">
                                <input type="number" class="form-control " placeholder="最小值" aria-label="Username"
                                    aria-describedby="basic-addon1" id="smart-ad-theme-deliverable-impressions-min">

                            </div>
                            <div>
                                ~
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" placeholder="最大值" aria-label="Username"
                                    aria-describedby="basic-addon1" id="smart-ad-theme-deliverable-impressions-max">
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me"> 編號查詢 </label>
                        <div class="input-group" id="smart-ad-theme-number-search" style="min-width: 350px;">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id=""></span>
                            <input type="text" class="form-control border-start-0 " id="smart-ad-theme-theme-theme"
                                placeholder="編號查詢">
                        </div>
                    </div>
                    <div class=" pt-4 d-flex gap-2 ms-auto">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>

            <div id="smart-ad-theme-list-table-wrapper" class="mt-3">
                <h3> 電子報明細
                </h3>
                <div class="table-responsive-xxl">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">項次
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">編號
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">主題名稱
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">主題標籤
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 80px;">媒合分析
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 80px;">行為分析</th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">載具</th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 100px;"> 可投遞曝光數
                                    (Desktop
                                    / Mobile)
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">桌機名單
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">桌機名單狀態
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">手機名單
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 80px;">手機名單狀態
                                </th>
                                <th scope="col" class="text-start align-text-top" style="min-width: 60px;">建檔人
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">建檔日期
                                </th>
                                <th scope="col" class="text-center align-text-top" style="min-width: 60px;">功能
                                </th>
                            </tr>
                        </thead>
                        <tbody id="smart-ad-theme-detail-tbody">
                            <template v-for="(item, index) in detailData" :key="index">
                                <tr>
                                    <td>
                                        {{ item.itemNo }}
                                    </td>
                                    <td>
                                        {{ item.code }}
                                    </td>
                                    <td>
                                        {{ item.topicName }}
                                    </td>
                                    <td>
                                        {{ item.topicTag }}
                                    </td>
                                    <td>
                                        {{ item.matchingAnalysis }}
                                    </td>
                                    <td>
                                        {{ item.behaviorAnalysis }}
                                    </td>
                                    <td>
                                        {{ item.zaiju }}
                                    </td>
                                    <td>
                                        {{ item.deliverableImpressions?.desktop }}/{{
                                            item.deliverableImpressions?.desktop }}
                                    </td>
                                    <td>
                                        {{ item.desktopList }}
                                    </td>
                                    <td>
                                        {{ item.desktopListStatus }}
                                    </td>
                                    <td>
                                        {{ item.mobileList }}
                                    </td>
                                    <td>
                                        {{ item.mobileListStatus }}
                                    </td>
                                    <td>
                                        {{ item.createdBy }}
                                    </td>
                                    <td>
                                        {{ item.createdAt }}
                                    </td>
                                    <td class="">
                                        <div class="btn-group dropstart">
                                            <button type="button"
                                                class="bg-transparent fs-6 custom-dropdown dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul class="dropdown-menu border-0 shadow-sm">
                                                <div>
                                                    <button class=" btn  w-100 d-flex gap-3 rounded-0"
                                                        @click="router.push({ name: 'MarketingConfigView' })">
                                                        <i class="bi bi-eye-fill"></i> 檢視</button>
                                                </div>
                                                <div>
                                                    <button class=" btn  w-100 d-flex gap-3 rounded-0" type="button"
                                                        @click="router.push({ name: 'SmartAdThemeAdvertisingAdd' })">
                                                        <i class="bi bi-copy"></i>複製</button>


                                                </div>
                                                <div>
                                                    <button class=" btn  w-100 d-flex gap-3 rounded-0" type="button"
                                                        @click="viewAnalysisReport()">
                                                        <i class="bi bi-graph-up  "></i>檢視分析報告</button>

                                                </div>
                                                <div>
                                                    <button class="btn  w-100 d-flex gap-3 rounded-0" type="button"
                                                        @click="showConfirmModal1(item)">
                                                        <i class="bi bi-trash  "></i>刪除</button>

                                                </div>
                                            </ul>
                                        </div>

                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="font-support align-text-top">
                        共 <span id="">{{ items.length }}</span> 筆資料
                    </div>
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-end">
                            <li class="page-item" :class="{ disabled: page === 1 }">
                                <a class="page-link" href="#" @click.prevent="load(page - 1)" tabindex="-1">Previous</a>
                            </li>
                            <li v-if="visiblePages[0] > 1" class="page-item">
                                <a class="page-link" href="#" @click.prevent="load(1)">1</a>
                            </li>
                            <li v-if="visiblePages[0] > 2" class="page-item disabled">
                                <span class="page-link">…</span>
                            </li>
                            <li class="page-item" v-for="p in visiblePages" :key="p"><a class="page-link" href="#"
                                    @click.prevent="load(p)">{{ p }}</a></li>
                            <li v-if="visiblePages[visiblePages.length - 1] < totalPages - 1"
                                class="page-item disabled">
                                <span class="page-link">…</span>
                            </li>


                            <li v-if="visiblePages[visiblePages.length - 1] < totalPages" class="page-item">
                                <a class="page-link" href="#" @click.prevent="load(totalPages)">{{ totalPages }}</a>
                            </li>


                            <li class="page-item" :class="{ disabled: page === totalPages }">
                                <a class="page-link" href="#" @click.prevent="load(page + 1)">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <ConfirmModal :id="id" @confirmClose="closeModal" @confirmDelete="confirmDelete" :message="'確定刪除該筆資料?'">
        </ConfirmModal>

    </div>
</template>