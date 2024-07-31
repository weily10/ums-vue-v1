<script setup>
import router from '../router'
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
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="text-start align-text-top">項次
                                </th>
                                <th scope="col" class="text-start align-text-top" style="width: 120px;">任務編號
                                </th>
                                <th scope="col" class="text-start align-text-top">名稱
                                </th>
                                <th scope="col" class="text-start align-text-top">類型
                                </th>
                                <th scope="col" class="text-center align-text-top">建立日期
                                </th>
                                <th scope="col" class="text-start align-text-top">建檔人
                                </th>
                                <th scope="col" class="align-text-top">操作
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-start">1</td>
                                <td class="text-start">213
                                </td>
                                <td class=""> 碳費困境</td>
                                <td>智慧檢索編號 ( 5112 )</td>
                                <td class="text-center">
                                    2023/10/12 16:15:23
                                </td>
                                <td class="text-start">
                                    許哲豪
                                </td>
                                <td class="text-center">
                                    <div class="d-flex justify-content-center gap-1 align-items-center">
                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle  " @click="router.push({name:'ListAnalysisView'})">
                                                <i class="bi bi-eye"></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                檢視
                                            </span>
                                        </div>

                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle  ">
                                                <i class="bi bi-file-earmark-excel "></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                下載Excel
                                            </span>
                                        </div>

                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class=" btn rounded-circle ">
                                                <i class="bi bi-file-earmark-ppt "></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                下載PPT
                                            </span>
                                        </div>


                                        <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                            <button class="btn rounded-circle">
                                                <i class="bi bi-trash "></i></button>
                                            <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1"
                                                style=" top: 100%;right: -50%;">
                                                刪除
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
                                <button type="button" class="pagination-btn btn fs-5 p-0"><i
                                        class="icon-right"></i></button>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>