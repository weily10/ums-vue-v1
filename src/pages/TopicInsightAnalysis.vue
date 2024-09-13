<script setup>
import router from '../router'


</script>

<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left"></i></button>
            <h2 class="mb-0"> 主題預測名單
            </h2>
            <div class="ms-auto d-flex justify-content-end gap-2">
                <button class="btn secondary txt-info">
                    下載 Excel
                </button>
                <button class="btn secondary text-body-light">
                    下載 PPT
                </button>
            </div>
        </div>

        <div class=" bg-grey  p-3 mt-3">
            <div>
                <div>
                    <label for="topic-insight-analysisType" class="font-b4-me">主題名單</label>
                    <select class="form-select mt-1" type="select" value="" id="topic-insight-analysisType"
                        @change="onchangeSelect(this)">
                        <option value="">請選擇</option>
                        <option value="all_fashion_and_beauty_client_acno,全美妝">
                            全美妝
                        </option>

                    </select>
                </div>
                <div class="mt-3">
                    <label for="" class="font-b4-me">預測名單月份</label>
                    <select class="form-select mt-1" type="select" value="" id="analysisType"
                        @change="onchangeSelect(this)">
                        <option value="202208">2022 08月</option>
                        <option value="202206">2022 06月</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="mt-3 d-flex  gap-3">

            <button class="btn primary text-body-light ms-auto">
                查詢
            </button>
        </div>
    </div>
</template>