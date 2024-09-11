<script setup>

</script>
<template>
    <div>
        <div class="d-flex gap-1 align-items-center">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" @click="goback()">
                    <i class="bi bi-arrow-left"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2 class="mb-0">
                DataPipeline Status

            </h2>
        </div>
        <div class="pb-2 mt-3  bg-grey  p-3 ">
            <div class="d-flex align-items-end gap-3 justify-content-start border-bottom   pb-3">
                <div>
                    <label for="datefiltergroup" class="font-b4-me">管線類型</label>
                    <select class="form-select" type="select" value="" id="" style="width: 300px;">
                        <option value="ddd-data-pipeline" selected>訂閱服務</option>
                    </select>
                </div>
                <div>
                    <button class="btn primary" style="width: 80px;">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>