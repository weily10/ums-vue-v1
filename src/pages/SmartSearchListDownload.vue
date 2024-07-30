<script setup>

</script>
<template  >
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                <i class="bi bi-arrow-left fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 智慧檢索 ( Curate X ) </h2>
        </div>
        <div class=" bg-grey filter p-3 mt-3">
            <h3>
                會員名單下載
            </h3>

            <form class="mt-2" name="smartSearchDownloadForm">
                <label class="font-b4-me mt-3 mb-1" for="smart-search-list-smart-number">
                    智慧檢索編號
                </label>
                <div class="d-flex justify-content-between gap-2 align-items-start ">
                    <div class="w-100">
                        <input id="smart-search-list-smart-number" name="smartSearchListNumber" class="form-control"
                            placeholder="請勿包含特殊符號">
                    </div>
                    <div>
                        <button type="submit" class="btn primary text-body-light  " style="width: 80px;">下載</button>
                    </div>
                </div>
            </form>
            <p class="text-warning">* 僅支援 2024 年 1 月 8 日後所建立的智慧檢索編號。</p>

        </div>

    </div>
</template>