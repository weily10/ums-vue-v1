<script setup>
import router from '../router';

</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0"> 寄件者設定</h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">
            <div class="border-bottom pb-3">
                <label>
                    電子報核可狀態
                </label>
                <div class="btn-group button-checkbox d-flex mt-1 w-25" role="group" id="sender-status">
                    <input type="radio" class="btn-check" name="share-types" id="sender-status-any" autocomplete="off"
                        value="sender-status-any" checked>
                    <label class="btn text-nowrap" for="sender-status-any">不限 </label>
                    <input type="radio" class="btn-check" name="share-types" id="sender-status-hidden" autocomplete="off"
                        value="sender-status-hidden">
                    <label class="btn " for="sender-status-hidden"> 隱藏
                    </label>
                    <input type="radio" class="btn-check" name="share-types" id="sender-status-display" autocomplete="off"
                        value="sender-status-display">
                    <label class="btn " for="sender-status-display"> 顯示
                    </label>
                </div>
            </div>

            <div id="" class="mt-3">
                <h3> 寄件者明細
                </h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start align-text-top">項次
                            </th>
                            <th scope="col" class="text-start align-text-top">電子報類型
                            </th>
                            <th scope="col" class="text-start align-text-top">寄件者名稱
                            </th>
                            <th scope="col" class="text-start align-text-top">寄件者 Email
                            </th>
                            <th scope="col" class="text-center align-text-top">狀態
                            </th>
                            <th scope="col" class="text-center align-text-top">處理
                            </th>
                        </tr>
                    </thead>
                    <tbody id="sender-detail-tbody">
                        <tr>
                            <td class="text-start">1</td>
                            <td class="text-start">udn買東西EDM </td>
                            <td class="text-start"> 😊❤👌</td>
                            <td class="text-start">nick2353@gmail.com.gsdgsd</td>
                            <td class="text-center"><span class="badge txt-info">顯示</span></td>
                            <td class="text-center"><button class="btn primary" data-bs-toggle="modal"
                                    data-bs-target="#sender-config-modal">編輯</button></td>
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
                    <div>

                    </div>
                </div>
            </div>
        </div>


        <!-- edit-modal -->

        <div class="modal fade" id="sender-config-modal" tabindex="-1" aria-labelledby="resultModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <form action="" name="marketing-sender-config" id="marketing-sender-config">
                        <div class="modal-header border-0 pb-0">
                            <h3> 寄件者設定資料 </h3>
                        </div>
                        <div class="modal-body">
                            <div class=" bg-grey filter p-3">
                                <div class="font-b4-me">
                                    電子報類型 <span class="text-danger">*</span>
                                </div>
                                <div class="mt-1">
                                    <input type="text" name="newsletterType" class="form-control validate-form" id=""
                                        placeholder="請勿包含特殊符號">
                                </div>
                                <div class="font-b4-me mt-3">
                                    EDM 寄件者名稱 <span class="text-danger">*</span>
                                </div>
                                <div class="mt-1">
                                    <input type="text" name="EDMSendername" class="form-control  " id="" placeholder="">
                                </div>
                                <div class="font-b4-me mt-3">
                                    EDM 寄件者 Email <span class="text-danger">*</span>
                                </div>
                                <div class="mt-1">
                                    <input type="text" name="EDMSenderEmail" class="form-control  " id="" placeholder="">
                                </div>
                                <div class="font-b4-me mt-3">
                                    狀態
                                    <div class="mt-1">
                                        <div class="btn-group button-checkbox d-flex w-50" role="group"
                                            id="sender-data-status-group">
                                            <input type="radio" class="btn-check" name="sender-data-status-options"
                                                id="sender-data-status-hidden" autocomplete="off"
                                                value="sender-data-status-hidden" checked>
                                            <label class="btn text-nowrap" for="sender-data-status-hidden">隱藏 </label>
                                            <input type="radio" class="btn-check" name="sender-data-status-options"
                                                id="sender-data-status-display" autocomplete="off"
                                                value="sender-data-status-display">
                                            <label class="btn " for="sender-data-status-display">顯示
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer border-0">
                                <button type="button" class="btn " data-bs-dismiss="modal">取消</button>
                                <button type="submit" class="btn primary ">確認存檔</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>