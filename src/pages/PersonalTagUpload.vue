<script setup>
import router from '../router/index'
</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left"></i></button>
            <h2> 上傳標籤
            </h2>
        </div>
        <div class="bg-grey mt-3 filter p-3">

            <div class="d-flex gap-3 flex-wrap">
                <div class="card border-0 shadow-sm flex-fill " style="min-width: 300px;">
                    <div class="d-flex justify-content-between gap-4">


                        <div class="flex-fill">
                            <label for="tagFileUpload" class="p-3 rounded empty-div" id="dropcontainer">
                                <div>
                                    <i class="icon-upload fs-3"></i>
                                </div>
                                <span class="mb-2">將文件拖到此區域或</span>
                                <input type="button" value="選擇檔案" class="inputFile2"
                                    @click="document.getElementById('tagFileUpload').click();" />
                                <input style="display:none;" type="file" name="tagFileUpload" id="tagFileUpload"
                                    onchange="displayFileName(this)" required multiple>
                                <span class="font-b4-he fw-semibold selectedFileName mt-3"></span>
                                <!-- <span  class="mt-2 selectedFileName fw-semibold"></span>  -->
                            </label>
                        </div>
                        <div class="gap-5 justify-content-between flex-fill ps-3">
                            <div class="fw-semibold">請確認以下條件 </div>
                            <div class="mt-3">
                                <div class="font-b4-me">
                                    上傳檔案名稱
                                </div>
                                <span class="mt-2 selectedFileName fw-semibold">file.cvs</span>
                            </div>
                            <div class="mt-3">
                                <div class="font-b4-me">
                                    上傳名單數量
                                </div>
                                <div id="upload-list-qtd" class="font-b4-he fw-semibold">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                        <button class="btn primary text-body-light " type="button" style="width: 80px;">
                            上傳
                        </button>
                    </div>
                </div>
                <div class="card border-0 shadow-sm   flex-fill" style="min-width: 300px;">
                    <label for="list-name-123">名單名稱</label>
                    <input type="text" class="form-control mt-1" id="list-name-123" placeholder="請輸入名單名稱">
                    <br>
                    <label for="list-comment-123">備註</label>
                    <textarea class="form-control mt-1" id="list-comment-123" style="height: 100%;"></textarea>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-3 gap-2">
            <button class="btn bg-danger text-white " @click="">修改 </button>
            <button class="btn secondary  " @click="">儲存 </button>
        </div>

    </div>
</template>