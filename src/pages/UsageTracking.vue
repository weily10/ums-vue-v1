<script setup>
import router from '../router'
</script>
<template>
    <div>
        <div class="d-flex gap-1 align-items-center">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                    <i class="bi bi-arrow-left"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2 class="mb-0">
                Usage Tracking

            </h2>
        </div>
        <div class="pb-2 mt-3  bg-grey  p-3 ">
            <div class="d-flex align-items-end gap-3 justify-content-start border-bottom   pb-3">
                <div>
                    <label for="datefiltergroup" class="font-b4-me">查尋類型</label>
                    <select class="form-select" type="select" value="" id="" style="width: 300px;">
                        <option value="ddd-data-pipeline" selected>即時帳號使用情況追蹤 (30天內)</option>
                    </select>
                </div>
                <div>
                    <label for="datefiltergroup" class="font-b4-me">查詢帳號</label>
                    <input type="text" class="form-control " placeholder="查詢帳號" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>
                <div>
                    <label for="datefiltergroup" class="font-b4-me">電子報發送日期</label>
                    <div class="d-flex align-items-center gap-1">
                        <div class="col flex-fill">
                            <div class="input-group mt-1"><input type="text" class="form-control border-end-0"
                                    placeholder="開始日期" aria-label="Username" aria-describedby="basic-addon1"
                                    id="eletter-sent-start-date-btn"><span class="input-group-text bg-white rounded-end"><i
                                        class="icon-calendar"></i></span></div>
                        </div>
                        <div> ~ </div>
                        <div class="col flex-fill">
                            <div class="input-group mt-1"><input type="text" class="form-control border-end-0"
                                    placeholder="結束日期" aria-label="Username" aria-describedby="basic-addon1"
                                    id="eletter-sent-end-date-btn"><span class="input-group-text bg-white rounded-end"><i
                                        class="icon-calendar"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn primary" style="width: 80px;">
                        查詢
                    </button>
                </div>
            </div>
          
        </div>
     
    </div>
</template>