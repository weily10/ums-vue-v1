<script setup>
 
</script>
<template>
    <div>
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="bi bi-arrow-left  "></i></button>
            <h2 class="mb-0">APP推播基本資訊</h2>
        </div>
        <div class="bg-grey filter p-3 mt-3">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="">
                            <label class="font-support">
                                編號
                            </label>

                            <div class="font-b4-he">
                                976
                            </div>
                        </div>
                        <div class="col">
                            <label class="font-support">
                                APP_ID
                            </label>
                            <div class="font-b4-he">
                                經濟日報 APP
                            </div>
                        </div>
                        <div class="col">
                            <label class="font-support">任務名稱
                            </label>
                            <div class="font-b4-he">
                                testtemptest
                            </div>
                        </div>
                        <div class="col">
                            <label class="font-support mb-1">發送時間
                            </label>
                            <div class="font-b4-he">
                                2023/12/14 13:29
                            </div>
                        </div>
                        <div class="col">
                            <label class="font-support mb-1">發送名單 </label>
                            <ul class="font-b4-he ">
                                <li>發送名單類型 : 【 自行上傳 】</li>
                                <li>名單格式 : 【 會員帳號 】</li>
                                <li> 不限定手機需完成認證</li>
                                <li>預計發送對象共計：1 名會員</li>
                            </ul>
                        </div>
                        <div class="d-flex flex-column w-50">
                            <label class="font-support align-text-top">簡訊訊息
                            </label>
                            <textarea id="app-marketing-txtarea" style="overflow:hidden;resize: none !important;" disabled
                                rows="4" cols="50" class="px-2 mt-1">55555555888
                    </textarea>
                        </div>
                        <div class="border-top pt-4">
                            <h4>APP應用程式設定</h4>
                            <ul class="font-b4-he ">
                                <li>Push ID : 【 7665544 】</li>
                                <li>ext1 ：【 未填寫 】</li>
                                <li>ext2 ：【未填寫 】</li>
                                <li>DynamicLink：【未填寫 】</li>
                            </ul>
                        </div>

                    </div>
                    <hr>
                    <div class="mt-3 d-flex justify-content-end gap-3">
                        <button class="btn primary me-auto">離開</button>
                        <button class="btn bg-danger text-white" data-bs-toggle="modal"
                            data-bs-target="#app-marketing-review-display-reject-modal">退件</button>
                        <button class="btn primary" data-bs-toggle="modal"
                            data-bs-target="#app-marketing-review-display-display-approve-modal">核可</button>
                    </div>
                </div>

            </div>
        </div>


        <div class="modal" id="app-marketing-review-display-display-approve-modal" data-bs-backdrop="static"
            data-bs-toggle="modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要 "核可" 此檔任務 ? ?
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary ">確定</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="app-marketing-review-display-reject-modal" data-bs-toggle="modal" data-bs-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要 "退件" 此檔任務 ?
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary" onclick="appRejectConfirm()">確定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>