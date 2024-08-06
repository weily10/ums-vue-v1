<script setup>
import router from '../router';
</script>

<template>
    <form class="" name="smartSearchNumber">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left"></i></button>
            <h2 class="mb-0"> 智慧檢索編號
            </h2>
        </div>
        <div class="bg-grey p-3 mt-3">
            <div class="font-b4-me">
                請輸入客製化名稱
            </div>
            <div class="mt-1">
                <input name="customNameInput" type="text" class="form-control  " id="custom-name-input"
                    placeholder="請勿包含特殊符號">
            </div>
            <div class="font-b4-me mt-3">
                請輸入智慧檢索編號
            </div>
            <div class="mt-1">
                <input name="smartSearchNumberInput" type="text" class="form-control  " id="smart-search-number-input"
                    placeholder="">
            </div>
        </div>

        <div class="d-flex justify-content-end mt-2 gap-3 mt-3">
            <button type="submit" class="btn primary ">建立</button>
        </div>
    </form>
</template>