<script setup>
defineProps({
    tableData: Array,
    headers: Array
})

</script>

<template>
    <div id="analysis-list-table" class="mt-3">
        <h3> 電子報明細
        </h3>
        <div class="table-responsive">

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="(item, index) in headers" :key="'header' + index">
                            <slot name="header" :item="item">{{ item }}</slot>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <slot name="body"  >
                            <td v-for="(value, index2) in item" :key="'cell' + index2">
                                <slot name="content" :item="item" :value="value" :index2="index2">{{ value }}</slot>
                            </td>
                            <td>
                                <slot name="actions" :item="item" :index="index"> </slot>
                            </td>
                        </slot>



                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between">
            <div class="font-support align-text-top">
                共 <span id="">{{ tableData ? tableData.length : 0 }}</span> 筆資料
            </div>
            <div class="d-flex justify-content-center align-items-center">

                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-left"></i></button>

                </div>
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="pagination-btn btn">1</button>

                </div>
                <div class="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="pagination-btn btn fs-5 p-0"><i class="icon-right"></i></button>

                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<style scoped>
th {
    min-width: 120px;
}
</style>