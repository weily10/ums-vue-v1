<script setup>
import { ref } from 'vue'
import router from '../router';

const data = ref({})

data.value = [{
    item: {
        text: '1',
        align: 'text-start'
    },
    enrollName: {
        text: '【代發】wayneTest23231205',
        align: 'text-start'
    },
    newsletterStatus: {
        text: '編輯中',
        align: 'text-center'
    },
    materialUpload: {
        text: 'N',
        align: 'text-center'
    },
    totalList: {
        text: '---',
        align: 'text-end'
    },
    date: {
        text: '2023/12/08',
        align: 'text-center'
    },
    dateTimeChange: {
        text: '2023/12/05 13:23:19	',
        align: 'text-center'
    }

}]



function goToDetail(){
    router.push({name:"MarketingSendingTestDetail"})
}

</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left  fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 電子報測試寄發</h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2  flex-wrap border-bottom pb-3">
                    <div class="">
                        <label for="newsletter-review-start-date-group" class="font-b4-me">電子報發送日期</label>
                        <div class=" d-flex align-items-center gap-1 ">

                            <div class="col flex-fill">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        aria-label="Username" aria-describedby="basic-addon1" id="test-start-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                            <div>
                                ~
                            </div>
                            <div class="col flex-fill">
                                <div class="input-group mt-1">
                                    <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                        aria-label="Username" aria-describedby="basic-addon1" id="test-end-date-btn">
                                    <span class="input-group-text bg-white rounded-end "> <i
                                            class="icon-calendar"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <label for="newsletter-search-input-group" class="font-b4-me">電子報名稱蒐尋</label>
                        <div class="input-group" id="newsletter-search-input-group">
                            <span class="input-group-text border-end-0 bg-white icon-search"
                                id="newsletter-search-basic-addon"></span>
                            <input type="text" class="form-control border-start-0 " id="newsletter-name-search"
                                placeholder="電子報名稱查詢	">
                        </div>
                    </div>
                    <div class=" pt-4 d-flex gap-2 ms-auto">
                        <button class="btn primary" type="button" onclick="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>

            <div id="analysis-list-table" class="mt-3">
                <h3> 電子報明細
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">項次
                            </th>
                            <th scope="col" class="text-start align-text-top">電子報名稱
                            </th>
                            <th scope="col" class="text-center align-text-center">電子報狀態
                            </th>
                            <th scope="col" class="text-center align-text-top">素材上傳
                            </th>
                            <th scope="col" class="text-end align-text-top">整檔名單總數
                            </th>
                            <th scope="col" class="text-center align-text-top"> 發行日期
                            </th>
                            <th scope="col" class="text-center align-text-top">異動日期時間
                            </th>
                            <th scope="col" class="text-center align-text-top">作業操作
                            </th>
                        </tr>
                    </thead>
                    <tbody id="newsletter-detail-tbody">
                        <template v-for="(item, index) in data" :key="index">
                            <tr>
                                <td :class="item.item.align">{{ item.item.text }}</td>
                                <td :class="item.enrollName.align">{{ item.enrollName.text }}</td>
                                <td :class="item.newsletterStatus.align "><span class="badge txt-info">{{ item.newsletterStatus.text }}</span></td>
                                <td :class="item.materialUpload.align"><span class="badge txt-error">{{ item.materialUpload.text }}</span></td>
                                <td :class="item.totalList.align">{{ item.totalList.text }}</td>
                                <td :class="item.dateTimeChange.align">{{ item.dateTimeChange.text }}</td>
                                <td :class="item.date.align">{{ item.date.text }}</td>
                                <td class="text-center">
                                    <button class="btn primary" @click="goToDetail(index)">詳細資料 </button>
                                </td>
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
                            <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

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
                            <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-right"></i></button>

                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>


        <!-- smart-search-number-modal -->

        <div class="modal fade" id="smart-search-modal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 智慧檢索編號</h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3">
                            <div class="font-b4-me">
                                請輸入客製化名稱
                            </div>
                            <div class="mt-1">
                                <input type="text" class="form-control  " id="custom-name-input" placeholder="請勿包含特殊符號">
                            </div>
                            <div class="font-b4-me mt-3">
                                請輸入智慧檢索編號
                            </div>
                            <div class="mt-1">
                                <input type="text" class="form-control  " id="smart-search-number-input" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn " data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">建立</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>