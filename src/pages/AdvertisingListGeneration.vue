<script setup>
import router from '../router';
</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left  "></i></button>
            <h2 class="mb-0"> 關鍵字名單生成
            </h2>
        </div>


        <div class="bg-grey mt-3  p-3">
            <div class="mb-2 d-flex flex-column">
                <div class="d-flex align-items-end gap-2 flex-wrap border-bottom pb-3">
                    <div class="col">
                        <label class="font-b4-me"> 依主題名稱 </label>
                        <div class="input-group mt-1" id="list-generation-theme-name">
                            <input type="number" min="0" class="form-control" id="list-generation-item-code"
                                placeholder="委刊項代號">
                        </div>
                    </div>
                    <div class="col">
                        <label class="font-b4-me"> 依標籤名稱 </label>
                        <div class="input-group mt-1" id="list-generation-tag-name">
                            <input type="number" min="0" class="form-control" id="list-generation-item-code"
                                placeholder="委刊項代號">
                        </div>
                    </div>
                    <div class="col">
                        <label class="font-b4-me"> 依編號查詢 </label>
                        <div class="input-group mt-1" id="list-generation-code">
                            <input type="number" min="0" class="form-control" id="list-generation-item-code"
                                placeholder="委刊項代號">
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
                <h3> 智慧廣告主題清單
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">
                                項次
                            </th>
                            <th scope="col" class="text-start align-text-top">編號
                            </th>
                            <th scope="col" class="text-start align-text-center">主題名稱
                            </th>
                            <th scope="col" class="text-start align-text-top">標籤名稱
                            </th>
                            <th scope="col" class="text-center align-text-top">載具
                            </th>
                            <th scope="col" class="text-center align-text-top"> 曝光數 (Desktop / Mobile)
                            </th>
                            <th scope="col" class="text-start align-text-top"> 桌機名單狀態
                            </th>
                            <th scope="col" class="text-center align-text-top"> 手機名單
                            </th>
                            <th scope="col" class="text-center align-text-top"> 手機名單狀態
                            </th>
                            <th scope="col" class="text-center align-text-top"> 操作
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-start">1.</td>
                            <td class="text-start">5155
                            </td>
                            <td class=""> 台北市商辦市場租金高 TEST </td>
                            <td>台北市商辦市場租金高 </td>
                            <td class="text-center">
                                N/A
                            </td>
                            <td class="text-center">
                                0 / 0
                            </td>
                            <td class="text-start">

                            </td>
                            <td class="text-center">
                                未執行
                            </td>
                            <td class="text-center">

                            </td>

                            <td class="text-center">
                                <div class="">
                                    <button class="btn txt-info text-light" style="width: 110px;">產生桌機名單</button>
                                </div>
                                <div class="mt-2">
                                    <button class="btn secondary" style="width: 110px;">產生手機名單</button>
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
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">建立</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>