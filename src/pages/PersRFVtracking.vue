<script setup>
import router from '../router/index.js'

function addRFV() {
    router.push({ name: 'PersRFVConfig' })
}


</script>

<template>
    <div class="personal-rfv-page">
        <div class="d-flex justify-content-between align-items-end">
            <div class="d-flex align-items-center gap-1">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
                <h2> 個人化標籤維護 </h2>
            </div>
            <div>
                <button class="btn secondary text-light" @click="addRFV">新增 <i class="icon-add"></i></button>
            </div>
        </div>
        <div class="personal-tag-content" style="margin-top:1rem">
            <div class="d-flex align-items-center gap-2 border-bottom pb-3">
                <div class="d-flex align-items-center gap-1 ">
                    <div class="">
                        <div class="font-b4-me">建立日期
                        </div>
                        <div class="input-group mt-1">
                            <input type="text" class="form-control border-end-0" placeholder="建立日期" aria-label="Username"
                                aria-describedby="basic-addon1" id="personal-rfv-create-date">
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
                                aria-describedby="basic-addon1" id="personal-rfv-end-date">
                            <span class="input-group-text bg-white rounded-end "> <i class="icon-calendar"></i></span>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-end ms-auto">
                    <div>
                        <label for="input-group" class="font-b4-me">名單名稱</label>
                        <div class="input-group  mt-1" id="personal-rfv-input-group">
                            <span class="input-group-text border-end-0 bg-white icon-search" id=""></span>
                            <input type="text" class="form-control border-start-0 " id="personal-rfv-searchWord"
                                placeholder="查詢名單名稱">
                        </div>

                    </div>
                    <div class="ps-2 pt-4">
                        <button class="btn primary" type="button" onclick="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn txt-info text-light " data-bs-target="#crossModal" data-bs-toggle="modal">交叉分析 </button>
            </div>
            <table class="table table-striped mt-3 ">
                <thead>
                    <tr>
                        <th scope="col" style="width:60px;text-align: start;">編號
                        </th>
                        <th scope="col" style="text-align: start;"> 名稱
                        </th>
                        <th scope="col" style="text-align: start;">備註
                        </th>
                        <th scope="col">建立日期
                        </th>
                        <th scope="col">更新日期
                        </th>
                        <th scope="col" style="width:110px;text-align: end;">用戶數量
                        </th>
                        <th scope="col" class="text-start" style="width:80px">建立人員

                        </th>
                        <th scope="col" class="text-center">用戶 RFV
                        </th>
                        <th scope="col" class="text-center">操作
                        </th>
                    </tr>
                </thead>
                <tbody id="personal-rfv-table-body">
                    <tr>
                        <td>
                            138
                        </td>
                        <td>
                            xxxx
                        </td>
                        <td>
                            xxxx
                        </td>
                        <td class="text-center">
                            2018/12/12
                        </td>
                        <td class="text-center">
                            2018/12/12
                        </td>
                        <td class="text-end">
                            12
                        </td>
                        <td class="text-start">
                            xxxx
                        </td>
                        <td class="text-center">
                            <div class="d-flex gap-2 justify-content-center">
                                <div class="d-flex justify-content-end">
                                    <button class="btn-secondary " data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside">分析</button>
                                    <div class="dropdown-menu dropdown-menu-end p-4 border-0 shadow-sm">
                                        <h4>2024 閱讀優秀</h4>
                                        <hr>
                                        <p>母體：01-03 月閱讀持續成長用戶 </p>
                                        <p>目標：持續追蹤至 06 月</p>
                                        <div class="readingList">
                                            <label class="d-flex">
                                                <input class="form-check-input me-1" type="checkbox" value=""
                                                    id="2024reading" checked>
                                                <span>2024/01/01 ~ 2024/01/31</span>
                                            </label>
                                            <label class="d-flex">
                                                <input class="form-check-input me-1" type="checkbox" value=""
                                                    id="2024reading2">
                                                <span>2024/02/01 ~ 2024/02/28</span>
                                            </label>
                                            <label class="d-flex">
                                                <input class="form-check-input me-1" type="checkbox" value=""
                                                    id="2024reading3">
                                                <span> 2024/03/01 ~ 2024/03/31 </span>

                                            </label>
                                            <label class="d-flex">
                                                <input class="form-check-input me-1" type="checkbox" value=""
                                                    id="2024reading4">
                                                <span>2024/04/01 ~ 2024/04/15 </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button class="btn-secondary " data-bs-toggle="dropdown">更新</button>
                                    <div class="dropdown-menu dropdown-menu-end p-4 border-0 shadow-sm">
                                        <h4>2024 流失用戶</h4>
                                        <hr>
                                        <p>母體：01-03 月閱讀持續成長用戶 </p>
                                        <p>目標：持續追蹤至 06 月</p>
                                        <p>已完成追蹤數據副本：</p>
                                        <ol>
                                            <li>2024/01/01 ~ 2024/01/31</li>
                                            <li>2024/02/01 ~ 2024/02/28</li>
                                            <li>2024/03/01 ~ 2024/03/31</li>
                                            <li>2024/04/01 ~ 2024/04/15</li>
                                        </ol>
                                        <p>
                                            更新 2024/01/01 ~ 2024/01/31 數據副本 ( 運算資源限制，更新數據副本一次最多 31 天。)
                                        </p>
                                        <div class="d-flex justify-content-end">
                                            <button class="btn-secondary " onclick="">更新</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center">
                            xxxx
                        </td>
                    </tr>

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
            </div>
        </div>
        <div class="modal fade" id="crossModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 交叉分析</h3>
                    </div>
                    <div class="modal-body">
                        <div class=" bg-grey filter p-3 over overflow-auto" style="height: 30rem;">
                            <h4 class="card-title">
                            </h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>分析</th>
                                        <th class="text-start">2024 閱讀優秀</th>
                                        <th class="text-start">追蹤數據副本</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>
                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>分析</th>
                                        <th class="text-start">2024 閱讀優秀</th>
                                        <th class="text-start">追蹤數據副本</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>
                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>分析</th>
                                        <th class="text-start">2024 閱讀優秀</th>
                                        <th class="text-start">追蹤數據副本</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center">

                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>
                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                                checked>

                                        </td>
                                        <td>
                                            目標：持續追蹤至 06 月

                                        </td>
                                        <td>
                                            2024/03/01 ~ 2024/03/31
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="d-flex justify-content-center mt-3 align-items-center">
                            <div class="font-support  me-3">
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
                    <div class="modal-footer border-0">
                        <button type="button" class="btn primary" onclick="crossConfirm()">確認</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>