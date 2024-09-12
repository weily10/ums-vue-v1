<script setup>

const props = defineProps({
    id: String,

})


</script>
    
    
<template>
    <div class="modal fade" :id="id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h3> 確認通知</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body fs-6 fw-medium pb-2">
                    確定刪除該筆資料?
                </div>
                <div class="modal-footer border-0">
                    <button type="button" class="btn" @click="$emit('confirmClose')">取消</button>
                    <button type="button" class="btn primary " @click="$emit('confirmClose')">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>