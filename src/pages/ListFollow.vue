<script setup>
import { ref } from 'vue'
import router from '../router';

const array = ref([])

array.value = [{ item1: '1', item2: '2', item3: '2023/10/12 17:50:53', item4: '2023/10/12 17:50:53', item5: 46.753, item6: '大家不喜歡' }]


</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2> 追蹤清單</h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">
            <div class="d-flex align-items-center gap-2 border-bottom pb-3">
                <div class="d-flex align-items-center gap-1 ">
                    <div class="col flex-fill">
                        <div class="font-b4-me">建立日期
                        </div>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="建立日期" aria-label="Username"
                                aria-describedby="basic-addon1" id="createStartDateBtn">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                    <div class="pt-4">
                        ~
                    </div>
                    <div class="col flex-fill">
                        <div class="font-b4-me">結束日期
                        </div>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="結束日期" aria-label="Username"
                                aria-describedby="basic-addon1" id="createEndDate">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-end ms-auto">
                    <div>
                        <label for="input-group" class="font-b4-me">名單名稱</label>
                        <div class="input-group flex-fill mt-1" id="input-group">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon2"></span>
                            <input type="text" class="form-control border-start-0 " id="searchWord" placeholder="查詢名單名稱">
                        </div>

                    </div>
                    <div class="ps-2 pt-4">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>
            <div class="table-responsive-xxl">
                <table class="table table-striped mt-3 ">
                    <thead>
                        <tr>
                            <th scope="col">編號
                            </th>
                            <th scope="col">名單名稱
                            </th>
                            <th scope="col">建立日期
                            </th>
                            <th scope="col">最近更新日期
                            </th>
                            <th scope="col" class="text-end">名單數量
                            </th>
                            <th scope="col" class="text-center">名單數據

                            </th>
                            <th scope="col text-start">備註
                            </th>
                            <th scope="col" class="text-end">操作
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(item, index) in array" :key="index">
                            <tr>
                                <td>{{ item.item1 }}</td>
                                <td>{{ item.item2 }}
                                </td>
                                <td>{{ item.item3 }}</td>
                                <td>{{ item.item4 }}</td>
                                <td class="text-end">
                                    {{ item.item5 }}
                                </td>
                                <td class="list-data" id="list-data">

                                    <div class="d-flex justify-content-center flex-wrap">
                                        <button class="btn-secondary m-1" @click="router.push({name:'Backtrace'})">回溯</button>
                                        <button class="btn-secondary btn-sm m-1" @click="router.push({name:'Backtrace'})">比較</button>
                                        <button class="btn-secondary btn-sm m-1" data-bs-toggle="modal"
                                            data-bs-target="#confirmUpdateModal">更新</button>

                                    </div>
                                    <div class="d-none">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>

                                    </div>

                                </td>
                                <td class="text-start">
                                    {{ item.item6 }}
                                </td>
                                <td class="text-end custom-td">
                                    <div class="btn-group dropstart">
                                        <button type="button" class="bg-transparent fs-6 custom-dropdown dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu border-0 shadow-sm">
                                            <div>
                                                <button class="btn w-100 d-flex gap-3 rounded-0" data-bs-toggle="modal"
                                                    data-bs-target="#editModal">
                                                    <i class="bi bi-pencil "></i> 編輯</button>
                                            </div>
                                            <div>
                                                <button class=" btn  w-100 d-flex gap-3 rounded-0" data-bs-toggle="modal"
                                                    data-bs-target="#shareModal">
                                                    <i class="bi bi-share"></i>分享</button>
                                            </div>
                                            <div>
                                                <button class=" btn  w-100 d-flex gap-3 rounded-0" @click="copyItem()">
                                                    <i class="bi bi-clipboard"></i>複製</button>
                                            </div>
                                             <div>
                                                <button class=" btn w-100 d-flex gap-3 rounded-0" @click="router.push({name:'AppMarketingConfigAdd'})">
                                                    <i class="bi bi-chat-text-fill"></i>簡訊</button>

                                            </div>
                                            <div>
                                                <button class=" btn  w-100 d-flex gap-3 rounded-0"
                                                    @click="goToaddAppMarketing()">
                                                    <i class="bi bi-phone"></i> APP</button>
                                            </div>
                                            <div>
                                                <button class=" btn w-100 d-flex gap-3 rounded-0" data-bs-toggle="modal"
                                                    data-bs-target="#edmModal">
                                                    <i class="bi bi-envelope"></i> EDM</button>

                                            </div>
                                            <div>
                                                <button class=" btn w-100 d-flex gap-3 rounded-0" type="button"
                                                    data-bs-toggle="modal" @click="showConfirmModal(this)"
                                                    data-bs-target="#deleteModal">
                                                    <i class="bi bi-trash "></i>刪除</button>

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



            <!-- Edit Modal -->
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 儲存名單</h3>
                        </div>
                        <div class="modal-body">
                            <div class=" bg-grey filter p-3">


                                <div>
                                    <div class="fs-6 fw-medium pb-2">
                                        請確認以下篩選條件:
                                    </div>
                                    <ul class="font-b4-he">
                                        <li>
                                            篩選類型 : 會員
                                        </li>

                                        <li>
                                            性別 : 【 不限 】
                                        </li>
                                        <li>
                                            年齡 : <span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            職業 :<span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            活躍時間 :<span class="font-b4-he">【 不限 】</span>
                                        </li>
                                        <li>
                                            <span class="font-b4-he">排除有效訂戶</span>
                                        </li>
                                        <li>
                                            <span class="font-b4-he">未造訪 【 經濟日報 】 平台，天數超過【 1 】天以上的會員</span>
                                        </li>

                                    </ul>
                                </div>
                                <div class="border-top">
                                    <div class="mt-2">
                                        <div>
                                            <label for="form-name" class="form-label font-b4-me">名單名稱</label>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control form-control-sm" placeholder="名單名稱">

                                        </div>
                                        <div class="font-b4-me mt-1">
                                            備註
                                        </div>
                                        <div class="mt-2">
                                            <textarea class="form-control form-control-sm" placeholder=""
                                                id="custom-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn " data-bs-dismiss="modal">修改</button>
                            <button type="button" class="btn primary ">儲存</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Share Modal -->
            <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 請輸入分享名單</h3>
                        </div>
                        <div class="modal-body">
                            <div class=" bg-grey filter p-3">

                                <div>
                                    <label for="form-name" class="form-label font-b4-me">種類</label>
                                </div>
                                <div class="btn-group button-checkbox d-flex " role="group" id="share-type-group">
                                    <input type="radio" class="btn-check" name="share-types" id="share-by-email"
                                        autocomplete="off" value="share-by-email" checked>
                                    <label class="btn text-nowrap" for="share-by-email">員工Email </label>
                                    <input type="radio" class="btn-check" name="share-types" id="share-by-employee-no"
                                        autocomplete="off" value="schedule">
                                    <label class="btn " for="share-by-employee-no"> 員工編號
                                    </label>

                                </div>
                                <div class="font-b4-me mt-3">
                                    員工Email或編號
                                </div>
                                <div class="mt-2">
                                    <textarea id="email-or-empID" class="form-control form-control-sm"
                                        placeholder=""></textarea>
                                </div>
                                <span class="font-support">
                                    若有多組 員工Email或編號 請使用半形逗號(,)分隔，且勿空格。
                                </span>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn " data-bs-dismiss="modal">關閉</button>
                            <button type="button" class="btn primary ">儲存</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- edmModal -->
            <div class="modal fade" id="edmModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 輸入電子報日期與項次</h3>
                        </div>
                        <div class="modal-body">
                            <div class=" bg-grey filter p-3">
                                <h4 class="card-title">
                                </h4>

                                <div class="mt-2">
                                    <div>
                                        <label for="form-name" class="form-label font-b4-me">預計發送日期</label>
                                    </div>
                                    <div class="mt-1">
                                        <input type="text" class="form-control form-control-sm" id="edm-date-input" value=""
                                            placeholder="日期格式為 : yyyymmdd，共8位數字">

                                    </div>
                                    <div class="font-b4-me mt-1">
                                        項次
                                    </div>
                                    <div class="mt-1">
                                        <input type="text" class="form-control form-control-sm" id="edm-item-input" value=""
                                            placeholder="">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">

                            <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                <button type="button" class="btn secondary" data-bs-dismiss="modal"
                                    @click="addEdmPage()">新增EDM</button>
                                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                    style=" top:106%;right: -10%;">
                                    若尚未建立EDM，請選擇新增EDM前往建立
                                </span>
                            </div>
                            <button type="button" class="btn primary ">確認</button>
                        </div>
                    </div>
                </div>
            </div>


            <!-- updateModal -->
            <div class="modal fade" id="confirmUpdateModal" tabindex="-1" aria-labelledby="resultModalLabel"
                data-bs-backdrop="static" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 通知</h3>
                        </div>
                        <div class="modal-body fs-6 fw-medium pb-2">
                            名單追蹤數據更新中，完成後會Email告知，請耐心稍後。
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn primary " data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.dropstart>.dropdown-toggle::after {
    content: none !important;
    margin-left: 0 !important
}

.dropstart>.dropdown-toggle::before {
    content: none !important;
}
</style>