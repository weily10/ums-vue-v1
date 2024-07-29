<script setup>
import router from '../router';
import { ref } from 'vue'

const items = ref([{
    no: '1',
    tagname: '潛在投資人 (清晨活躍)',
    comment: '閱讀時間長+清晨時段出沒+關心國際金融+35-45歲 (社會人士)+ 可以進行 EDM 行銷。',
    createDate: '2023-12-10 18:08:51',
    updateDate: '2023-12-10 18:08:51',
    listNumber: 32518,
    createAuthor: '王小明'
}])

function toMaintainAddPage() {
    router.push({ name: 'PersonalTagAdd' })
}


</script>

<template>
    <div class="personal-tag-page">
        <div class="d-flex justify-content-between align-items-end">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left"></i></button>
                <h2> 個人化標籤維護 </h2>
            </div>

            <button class="btn secondary text-light" @click="toMaintainAddPage()">新增 <i class="bi bi-plus"></i></button>
        </div>
        <div class="personal-tag-content" style="margin-top:1rem">
            <div class="d-flex align-items-center gap-2 border-bottom pb-3">
                <div class="d-flex align-items-center gap-1 ">
                    <div class="">
                        <div class="font-b4-me">建立日期
                        </div>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="建立日期" aria-label="Username"
                                aria-describedby="basic-addon1" id="maintain-create-date">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                    <div class="pt-4">
                        ~
                    </div>
                    <div class="">
                        <div class="font-b4-me">結束日期
                        </div>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="結束日期" aria-label="Username"
                                aria-describedby="basic-addon1" id="maintain-end-date">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-end ms-auto">
                    <div>
                        <label for="input-group" class="font-b4-me">名單名稱</label>
                        <div class="input-group  mt-1" id="maintain-input-group">
                            <span class="input-group-text border-end-0 bg-white bi bi-search" id=""></span>
                            <input type="text" class="form-control border-start-0 " id="maintain-searchWord"
                                placeholder="查詢名單名稱">
                        </div>

                    </div>
                    <div class="ps-2 pt-4">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>
            <table class="table table-striped mt-3 ">
                <thead>
                    <tr>
                        <th scope="col" style="width:60px;text-align: start;">編號
                        </th>
                        <th scope="col" style="text-align: start;">標籤名稱
                        </th>
                        <th scope="col" style="text-align: start;">備註說明
                        </th>
                        <th scope="col">建立日期
                        </th>
                        <th scope="col">更新日期
                        </th>
                        <th scope="col" style="width:110px;text-align: end;">名單數量
                        </th>
                        <th scope="col" class="text-center" style="width:80px">建立人員

                        </th>
                        <th scope="col">會員數據
                        </th>
                        <th scope="col" class="text-center">操作
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in items" :key="index">
                        <td>
                            {{ item.no }}
                        </td>
                        <td> {{ item.tagname }} </td>
                        <td> {{ item.comment }} </td>
                        <td> {{ item.createDate }} </td>
                        <td> {{ item.updateDate }} </td>
                        <td class="text-end"> {{ item.listNumber }} </td>
                        <td class="text-center"> {{ item.createAuthor }} </td>
                        <td >
                            <div class="d-flex justify-content-center flex-wrap  "
                                style="background-color: #f8f9fa;">
                                <button class="btn-secondary m-1" @click="goTobackTrace()">首次</button>
                                <button class="btn-secondary btn-sm m-1" @click="gotoMaintainComparePage()">比較</button>
                                <button class="btn-secondary btn-sm m-1" @click="updateItem()">更新</button>
                            </div>
                        </td>
                        <td class="custom-td">
                            <div class="btn-group dropstart bg-transparent">
                                <button type="button" class="bg-transparent fs-6  dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
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
                                            <i class="bi bi-share "></i>分享</button>
                                    </div>
                                    <div>
                                        <button class=" btn  w-100 d-flex gap-3 rounded-0" onclick="copyItem()">
                                            <i class="bi bi-copy "></i>複製</button>
                                    </div>

                                    <div>
                                        <button class=" btn w-100 d-flex gap-3 rounded-0" onclick="goToSmsPage()">
                                            <i class="bi bi-chat-left-text  "></i>簡訊</button>

                                    </div>
                                    <div>
                                        <button class=" btn  w-100 d-flex gap-3 rounded-0" onclick="goToaddAppMarketing()">
                                            <i class="bi bi-phone "></i> APP</button>
                                    </div>
                                    <div>
                                        <button class=" btn w-100 d-flex gap-3 rounded-0" data-bs-toggle="modal"
                                            data-bs-target="#edmModal">
                                            <i class="bi bi-envelope  "></i> EDM</button>

                                    </div>
                                    <div>
                                        <button class=" btn w-100 d-flex gap-3 rounded-0" type="button"
                                            data-bs-toggle="modal" onclick="showConfirmModal(this)"
                                            data-bs-target="#deleteModal">
                                            <i class="bi bi-trash"></i>刪除</button>

                                    </div>

                                </ul>
                            </div>
                        </td>
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

            <!-- Delete Modal -->

            <div class="modal fade" id="maintain-deleteModal" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header border-0 pb-0">
                            <h3> 確認通知</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body fs-6 fw-medium pb-2">
                            確定刪除該筆資料?
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn primary ">確定</button>
                        </div>
                    </div>
                </div>
            </div>



            <!-- Edit Modal -->
            <div class="modal fade" id="maintain-editModal" tabindex="-1" aria-labelledby="resultModalLabel"
                aria-hidden="true">
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
                                                id="maintain-custom-textarea"></textarea>
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
            <div class="modal fade" id="maintain-shareModal" tabindex="-1" aria-labelledby="resultModalLabel"
                aria-hidden="true">
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
                                <div class="btn-group button-checkbox d-flex " role="group" id="maintain-share-type-group">
                                    <input type="radio" class="btn-check" name="share-types" id="maintain-share-by-email"
                                        autocomplete="off" value="share-by-email" checked>
                                    <label class="btn text-nowrap" for="share-by-email">員工Email </label>
                                    <input type="radio" class="btn-check" name="share-types"
                                        id="maintain-share-by-employee-no" autocomplete="off" value="schedule">
                                    <label class="btn " for="share-by-employee-no"> 員工編號
                                    </label>

                                </div>
                                <div class="font-b4-me mt-3">
                                    員工Email或編號
                                </div>
                                <div class="mt-2">
                                    <textarea class="form-control form-control-sm" placeholder=""
                                        id="maintain-custom-textarea"></textarea>
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
            <div class="modal fade" id="maintain-edmModal" tabindex="-1" aria-labelledby="resultModalLabel"
                aria-hidden="true">
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
                                        <input type="text" class="form-control form-control-sm" id="maintain-edm-date-input"
                                            value="" placeholder="日期格式為 : yyyymmdd，共8位數字">

                                    </div>
                                    <div class="font-b4-me mt-1">
                                        項次
                                    </div>
                                    <div class="mt-1">
                                        <input type="text" class="form-control form-control-sm" id="maintain-edm-item-input"
                                            value="" placeholder="">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">

                            <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                <button type="button" class="btn secondary" data-bs-dismiss="modal">新增EDM</button>
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
        </div>
    </div>
</template>