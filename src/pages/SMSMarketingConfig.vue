<script setup>
import { ref } from 'vue'

const items = ref([])

items.value = [{
    sendDate: {
        text: '2023/10/26',
        align: 'text-center'
    },
    item: {
        text: '1',
        align: 'text-start'
    },
    eletterName: {
        text: '【跨部】1003 DDD跨部測試【編輯中】',
        align: 'text-start'
    },
    createdPerson: {
        text: '	2023/10/03 10:45:43(紀韋恩)- 經濟日報數位服務部',
        align: 'text-start'
    },
    estimateSendQtd: {
        text: 0,
        align: 'text-end'
    },
    listWholeFile: {
        text: '<span class="badge txt-success"> Y</span>',
        align: 'text-center'
    },
    materialUpload: {
        text: '<span class="badge txt-error"> N</span>',
        align: 'text-center'
    },
    actions: {
        text: '<div id="eletter-tablebtns-section-' + 1 + '"></div>',
        align: 'text-center'
    }
}
]

</script>
<template>
    <div class="d-flex justify-content-between align-items-end">
        <div class="d-flex  gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> 電子報設定</h2>
        </div>
        <div>

             <button class="btn secondary text-light" data-bs-toggle="modal" data-bs-target="#add-enews-modal">新增 <i
                    class="bi bi-plus"></i></button>
        </div>
    </div>
    <div class="bg-grey mt-3 filter p-3">
        <div class="mb-2 d-flex flex-column">
            <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3">
                <div>
                    <label for="datefiltergroup" class="font-b4-me">電子報發送日期</label>
                    <div class=" d-flex align-items-center gap-1 ">
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="開始日期"
                                    aria-label="Username" aria-describedby="basic-addon1" id="eletter-sent-start-date-btn">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>
                        <div>
                            ~
                        </div>
                        <div class="col flex-fill">
                            <div class="input-group mt-1">
                                <input type="text" class="form-control border-end-0" placeholder="結束日期"
                                    aria-label="Username" aria-describedby="basic-addon1" id="eletter-sent-end-date-btn">
                                <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <label for="marketing-config-select">電子報狀態</label>
                    <select class="form-select " type="select" value="" id="marketing-config-select">
                        <option selected>不限</option>
                        <option value="1">跨部</option>
                        <option value="2">代發</option>
                    </select>
                </div>
                <div class="col">
                    <label for="create-method-select">電子報建立方式</label>
                    <select class="form-select " type="select" value="" id="eletter-create-method-select">
                        <option value="any" selected>不限</option>
                        <option value="1">編輯中</option>
                        <option value="2">整檔中</option>
                        <option value="3">待審核</option>
                        <option value="4">退件</option>
                    </select>
                </div>
                <div class="col flex-fill">
                    <label for="input-group" class="font-b4-me">電子報名稱查詢</label>
                    <div class="input-group" id="marketing-search-input-group">
                        <span class="input-group-text border-end-0 bg-white bi bi-search" id="basic-addon3"></span>
                        <input type="text" class="form-control border-start-0 " name="" id="marketing-search-word"
                            placeholder="查詢名單名稱">
                    </div>
                </div>
                <div class=" pt-4 d-flex gap-2">
                    <button class="btn primary" type="button" @click="">
                        查詢
                    </button>

                </div>

            </div>
        </div>

        <div id="analysis-list-table" class="mt-3">
            <h3> 電子報明細
            </h3>
            <table class="table table-striped" id="marketing-config-table">
                <thead>
                    <tr>
                        <th scope="col" class="text-center align-text-top">預計發送日期
                        </th>
                        <th scope="col" class="text-start align-text-top">項次
                        </th>
                        <th scope="col" class="text-start align-text-top">電子報名稱
                        </th>
                        <th scope="col" class="text-start align-text-top">建檔日期 (人員 ) - 電子報來源
                        </th>
                        <th scope="col" class="text-end align-text-top">預計發送數量
                        </th>
                        <th scope="col" class="text-start align-text-top">名單整檔
                        </th>
                        <th scope="col" class="text-center align-text-top">素材上傳
                        </th>
                        <th scope="col" class="text-center align-text-top">作業操作
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <template v-for="(item, index) in items" :key="index">
                        <tr>
                            <td :class="item.sendDate.align">
                                {{ item.sendDate.text }}
                            </td>
                            <td>
                                {{ item.item.text }}
                            </td>
                            <td>
                                {{ item.eletterName.text }}
                            </td>
                            <td>
                                {{ item.createdPerson.text }}
                            </td>
                            <td>
                                {{ item.estimateSendQtd.text }}
                            </td>
                            <td>
                                <span class="badge txt-success"> Y</span>
                            </td>
                            <td>
                                <span class="badge txt-success"> Y</span>
                            </td>
                            <td>
                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm " onclick="goToEletterView()"
                                        style="padding-left:0.4rem ;padding-right:0.4rem">
                                        <i class="icon-view"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        檢視
                                    </span>
                                </div>

                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        style="padding-left:0.4rem ;padding-right:0.4rem"
                                        onclick="goToemailAnalysisReport()">
                                        <i class="icon-layout fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        電子報發送回應分析報表
                                    </span>
                                </div>

                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        style="padding-left:0.4rem ;padding-right:0.4rem" onclick="goToReviewPage()">
                                        <i class="icon-review fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        整檔/送審
                                    </span>
                                </div>

                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        style="padding-left:0.4rem ;padding-right:0.4rem" onclick="">
                                        <i class="icon-preview fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        預覽
                                    </span>
                                </div>

                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        style="padding-left:0.4rem ;padding-right:0.4rem" data-bs-toggle="modal"
                                        data-bs-target="#history-dialog">
                                        <i class="icon-timeline fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        歷程
                                    </span>
                                </div>

                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        data-bs-target="#marketing-config-edit-dialog" data-bs-toggle="modal"
                                        style="padding-left:0.4rem ;padding-right:0.4rem">
                                        <i class="icon-edit fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        編輯
                                    </span>
                                </div>


                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm py-0"
                                        style="padding-left:0.4rem ;padding-right:0.4rem"
                                        data-bs-target="#marketing-config-deleteModal" data-bs-toggle="modal"
                                        onclick="getMarketingConfigID(this)">
                                        <i class="icon-delete fs-5"></i></button>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        刪除
                                    </span>
                                </div>
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


    <!-- 輸入電子報設定資料 -->

    <div class="modal fade" id="add-enews-modal" tabindex="-1" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3> 請輸入電子報設定資料</h3>
                </div>
                <div class="modal-body">
                    <div class=" bg-grey filter p-3">

                        <div class="mt-3">
                            <div class="font-b4-me">
                                電子報名稱
                            </div>
                            <div class="mt-1">
                                <input type="text" class="form-control  " id="enews-name" placeholder="">
                            </div>
                        </div>

                        <div class="mt-3 d-flex gap-3">
                            <div style="width: 200px;">
                                <label for="" class="font-b4-me">發送日期</label>
                                <div class="col flex-fill">
                                    <div class="input-group mt-1">
                                        <input type="text" class="form-control border-end-0" placeholder="發送日期"
                                            id="enews-date">
                                        <span class="input-group-text bg-white rounded-end ">
                                            <i class="icon-calendar"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-fill" style="width: 200px;">
                                <label for="" class="font-b4-me">電子報類型</label>
                                <select class="form-select mt-1" type="select" value="" id="membership-monthly-data-month"
                                    @change="changeSelect(this)">
                                    <option value="20231101">會員</option>
                                </select>
                            </div>
                            <div class="flex-fill" style="width: 200px;">
                                <label for="" class="font-b4-me">電子報種類</label>
                                <select class="form-select mt-1" type="select" value="" id="membership-monthly-data-month"
                                    @change="changeSelect(this)">
                                    <option value="1231">經濟日報電子報</option>
                                </select>
                            </div>

                        </div>

                        <div class="mt-3 w-50">
                            <label for="" class="font-b4-me">排除七天內黑名單
                            </label>
                            <div class="btn-group button-checkbox d-flex mt-1" role="group">
                                <input type="radio" class="btn-check" name="marketing-config-modal-options" id="enews-yes"
                                    autocomplete="off" value="enews-yes" checked>
                                <label class="btn text-nowrap" for="enews-yes">是 </label>
                                <input type="radio" class="btn-check" name="marketing-config-modal-options" id="enews-no"
                                    autocomplete="off" value="enews-no">
                                <label class="btn " for="enews-no">否
                                </label>
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
    <!--history-modal-->
    <div class="modal fade" id="history-dialog" tabindex="-1" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3> wayneTest23231205</h3>
                </div>
                <div class="modal-body">
                    <div class=" bg-grey filter p-3">
                        <div class="border-bottom pb-3 d-flex gap-5">
                            <div class="font-b4-me">
                                操作者：<span class="font-b4-he">40040-1</span>
                            </div>
                            <div class="font-b4-me">
                                時間： <span class="font-b4-he">2023/12/05 10:58:04</span>
                            </div>
                            <div class="font-b4-me">
                                事件：<span class="font-b4-he">電子報新增完成</span>
                            </div>
                        </div>
                        <div class="border-bottom pb-3 d-flex gap-5 mt-3">
                            <div class="font-b4-me">
                                操作者：<span class="font-b4-he">40040-1</span>
                            </div>
                            <div class="font-b4-me">
                                時間： <span class="font-b4-he">2023/12/05 10:58:04</span>
                            </div>
                            <div class="font-b4-me">
                                事件：<span class="font-b4-he">電子報新增完成</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn " data-bs-dismiss="modal">取消</button>

                </div>
            </div>
        </div>
    </div>

    <!--edit modal-->
    <div class="modal fade" id="marketing-config-edit-dialog" tabindex="-1" aria-labelledby="resultModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form action="" name="marketingConfigEditModal" id="marketingConfigEditModal">
                    <div class="modal-header border-0 pb-0">
                        <h3> 請輸入電子報設定資料</h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3">
                            <div class="mb-3 d-flex justify-content-between">
                                <div>
                                    <div class="font-support">
                                        發送日期 <br>
                                        <span id="marketing-config-launch-date" class="font-b4-he">20240301</span>
                                    </div>
                                    <div class="font-support mt-3">
                                        電子報類型【目前設定】 <br> <span class="font-b4-he"> 會員 </span>
                                    </div>
                                    <div class="font-support mt-3">
                                        預估開信率 <br> <span class="font-b4-he"> 41.49%</span>
                                    </div>

                                </div>
                                <div>
                                    <div class="font-support">
                                        電子報來源 <br> <span class="font-b4-he"> 經濟日報</span>
                                    </div>
                                    <div class="font-support mt-3">
                                        是否收費 <br> <span class="font-b4-he"> 否</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-support">
                                        跨部 EDM 預約發送數量 <br>
                                        <span id="marketing-config-launch-date" class="font-b4-he">10</span>
                                    </div>
                                    <div class="font-support mt-3">
                                        預計金額 <br> <span class="font-b4-he"> 0 </span>
                                    </div>

                                </div>
                            </div>
                            <div class="border-top">
                                <div class="mt-2">
                                    <div>
                                        <label for="form-name" class="form-label font-b4-me">電子報名稱<span class="text-danger">
                                                * </span></label>
                                    </div>
                                    <div>
                                        <input type="text" class="form-control form-control-sm"
                                            name="marketingConfigEnewsName" placeholder="跨步非會員測試">

                                    </div>
                                    <div class="mt-3">
                                        <label class="mb-2">
                                            修改電子報類型
                                        </label>
                                        <div class="btn-group button-checkbox d-flex " role="group">
                                            <input type="radio" class="btn-check" name="eletter-types"
                                                id="marketing-config-member" autocomplete="off"
                                                value="marketing-config-member" checked>
                                            <label class="btn text-nowrap" for="marketing-config-member">會員 </label>
                                            <input type="radio" class="btn-check" name="eletter-types"
                                                id="marketing-config-other" autocomplete="off"
                                                value="marketing-config-other">
                                            <label class="btn " for="marketing-config-other"> 其他
                                            </label>

                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <label class="mb-2">
                                            排除七天內黑名單
                                        </label>
                                        <div class="btn-group button-checkbox d-flex " role="group" id="marketing-config">
                                            <input type="radio" class="btn-check" name="share-types"
                                                id="marketing-config-approved" autocomplete="off"
                                                value="marketing-config-approved" checked>
                                            <label class="btn text-nowrap" for="marketing-config-approved">是 </label>
                                            <input type="radio" class="btn-check" name="share-types"
                                                id="marketing-config-not-approved" autocomplete="off"
                                                value="marketing-config-not-approved">
                                            <label class="btn " for="marketing-config-not-approved"> 否
                                            </label>
                                        </div>
                                    </div>
                                    <div class="font-b4-me mt-3">
                                        必投 Email 名單(逗號分隔)
                                    </div>
                                    <div class="mt-2">
                                        <textarea class="form-control form-control-sm" placeholder=""
                                            id="marketing-config-email-list"></textarea>
                                        <div class="text-warning mt-1"> 必投名單將忽略會員狀態判斷，必定發送。若有多組 Email 請使用半形逗號(,)分隔，且勿空格。
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <div class="mt-1 text-danger me-auto">
                            請注意 :<br>
                            1. 若有修改電子報種類，請回到【電子報套版】重新上傳EDM，系統才能根據您的設定，產生完整的EDM內文。
                        </div>
                        <button type="submit" class="btn primary">儲存</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!--remove modal-->
    <div class="modal fade" id="marketing-config-deleteModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3> 刪除確認</h3>
                </div>
                <div class="modal-body fs-6 fw-medium pb-2">
                    確定要刪除<span id="marketing-remove-modal-enews-name">20240301_3</span>電子報?
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn" data-bs-dismiss="modal" @click="removeDeleteClass()">取消</button>
                    <button type="button" class="btn primary" @click="confirmDeleteEnews()">確定</button>
                </div>
            </div>
    </div>
</div></template>