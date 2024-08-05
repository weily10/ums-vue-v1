<script setup>
import router from '../router';

</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left  "></i></button>
            <h2 class="mb-0"> 目標對象</h2>
        </div>


        <div class="bg-grey mt-3  p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3">
                    <div class="col">
                        <label>
                            目標對象狀態
                        </label>
                        <div class="btn-group button-checkbox d-flex mt-1" role="group" id="adv-management-status">
                            <input type="radio" class="btn-check" name="target-status" id="adv-management-status-any"
                                autocomplete="off" value="adv-management-status-any" checked>
                            <label class="btn text-nowrap" for="adv-management-status-any">不限 </label>
                            <input type="radio" class="btn-check" name="target-status" id="adv-management-status-valid"
                                autocomplete="off" value="adv-management-status-valid">
                            <label class="btn " for="adv-management-status-valid"> 有效
                            </label>
                            <input type="radio" class="btn-check" name="target-status" id="adv-management-status-invalid"
                                autocomplete="off" value="adv-management-status-invalid">
                            <label class="btn " for="adv-management-status-invalid"> 無效
                            </label>
                        </div>
                    </div>

                    <div>
                        <label class="font-b4-me">目標對象大小</label>
                        <div class=" d-flex align-items-center gap-1 ">
                            <div class="col">
                                <input type="number" class="form-control " placeholder="最小值" aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="adv-management-gam-volume-query-deliverable-impressions-min">

                            </div>
                            <div>
                                ~
                            </div>
                            <div class="col">
                                <input type="number" class="form-control" placeholder="最大值" aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    id="adv-management-gam-volume-query-deliverable-impressions-max">

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me">目標對象代號</label>
                        <div class="input-group" id="adv-management-gam-volume-query-keyword-theme-group">
                            <span class="input-group-text border-end-0 bg-white icon-search"
                                id="newsletter-search-basic-addon"></span>
                            <input type="text" class="form-control border-start-0 "
                                id="adv-management-gam-volume-query-number-theme" placeholder="目標對象代號">
                        </div>
                    </div>
                    <div class="col">
                        <label for="newsletter-search-input-group" class=" font-b4-me"> 編號查詢 </label>
                        <div class="input-group" id="adv-management-gam-volume-query-number-search">
                            <span class="input-group-text border-end-0 bg-white icon-search" id=""></span>
                            <input type="text" class="form-control border-start-0 "
                                id="adv-management-gam-volume-query-keyword-theme" placeholder="編號查詢">
                        </div>
                    </div>
                    <div class=" pt-4 d-flex gap-2 ms-auto">
                        <button class="btn primary" type="button" @click="">
                            查詢
                        </button>
                    </div>
                </div>
            </div>

            <div id="analysis-list-table" class="mt-3">
                <h3> 目標對象列表
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">目標對象名稱
                            </th>
                            <th scope="col" class="text-start align-text-top">目標對象代號
                            </th>
                            <th scope="col" class="text-start align-text-center">大小總計(異動量)
                            </th>
                            <th scope="col" class="text-start align-text-top">行動網站大小(異動量)
                            </th>
                            <th scope="col" class="text-center align-text-top">Adid大小
                            </th>
                            <th scope="col" class="text-start align-text-top"> Idfa大小
                            </th>
                            <th scope="col" class="text-start align-text-top">Ppid大小
                            </th>
                            <th scope="col" class="text-start align-text-top">狀態
                            </th>
                            <th scope="col" class="text-start align-text-top">註記
                            </th>
                            <th scope="col" class="text-start align-text-top">瀏覽量
                            </th>
                            <th scope="col" class="text-center align-text-top">回訪率
                            </th>
                            <th scope="col" class="text-center align-text-top">成員效期
                            </th>
                            <th scope="col" class="text-center align-text-top">最新更新時間
                            </th>
                            <th scope="col" class="text-center align-text-top">功能
                            </th>
                        </tr>
                    </thead>
                    <tbody id="adv-management-gam-volume-query-keyword-detail-tbody">
                         <tr>
                            <td class="text-start">ddd_交通代步_休旅車_desktop</td>
                            <td class="text-start">520060523
                            </td>
                            <td class=""> 897,712(976) </td>
                            <td>25,000(1,000) </td>
                            <td class="text-center">
                                0
                            </td>
                            <td class="text-start">
                                0
                            </td>
                            <td class="text-start">
                                0
                            </td>
                            <td class="text-start">
                                有效
                            </td>
                            <td class="text-start">

                            </td>
                            <td class="text-start">
                                10
                            </td>
                            <td class="text-start">
                                1
                            </td>
                            <td class="text-start">
                                21
                            </td>
                            <td class="text-start">
                                2022/01/03
                            </td>
                            <td class="text-center">
                                <div class="d-flex justify-content-center gap-1 align-items-center">
                                    <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                        <button class=" btn rounded-circle btn-sm " data-bs-toggle="modal"
                                            data-bs-target="#gam-history-modal">
                                            <i class="bi bi-arrow-repeat"></i></button>
                                        <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                            style=" top: 100%;right: -50%;">
                                            更新歷程
                                        </span>
                                    </div>
                                </div>
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
                            <button type="button" class="pagination-btn btn"> 第一頁</button>
                        </div>
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
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="pagination-btn btn"> 最後一頁</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>


        <!-- smart-search-number-modal -->

        <div class="modal fade" id="gam-history-modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 目標對象更新歷程</h3>
                    </div>
                    <div class="modal-body">
                        <div id="analysis-list-table" class="mt-3">
                            <h4> 智慧廣告主題清單
                            </h4>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-start align-text-top">
                                            目標對象名稱
                                        </th>
                                        <th scope="col" class="text-start align-text-top">目標對象代號
                                        </th>
                                         <th scope="col" class="text-end align-text-top">大小總計
                                        </th>
                                        <th scope="col" class="text-center align-text-top">行動網站大小
                                        </th>
                                        <th scope="col" class="text-end align-text-top">Adid大小
                                        </th>
                                        <th scope="col" class="text-end align-text-top"> Idfa大小
                                        </th>
                                        <th scope="col" class="text-end align-text-top"> Ppid大小
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 狀態
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 註記
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 瀏覽量
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 回訪率
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 成員效期
                                        </th>
                                        <th scope="col" class="text-center align-text-top"> 更新時間
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-start">ddd_交通代步_休旅車_desktop</td>
                                        <td class="text-start">520060523
                                        </td>
                                        <td class=""> 897,712 </td>
                                        <td>25,000</td>
                                        <td class="text-end">
                                            0
                                        </td>
                                        <td class="text-end">
                                            0
                                        </td>
                                        <td class="text-end">0
                                        </td>
                                        <td class="text-center">
                                            有效
                                        </td>
                                        <td class="text-center">

                                        </td>
                                        <td class="text-center">
                                            10
                                        </td>
                                        <td class="text-center">1
                                        </td>

                                        <td class="text-center">
                                            21
                                        </td>
                                        <td class="text-center">
                                            2022/01/03

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
                                        <button type="button" class="pagination-btn btn"> 第一頁</button>
                                    </div>
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
                                    <div class="btn-group me-2" role="group" aria-label="Second group">
                                        <button type="button" class="pagination-btn btn"> 最後一頁</button>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn primary" data-bs-dismiss="modal">離開</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>