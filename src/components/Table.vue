<script setup>
defineProps({
    tableData: Array,
    item: Array,
    headers:Array
})

</script>

<template>
    <div id="analysis-list-table" class="mt-3">
        <h3> 電子報明細
        </h3>
        <div class="table-responsive">

            <table class="table table-striped">
                <thead>
                    <tr class="">
                        <template v-for="(item, index) in headers" :key="'header' + index">
                            <th class="text-start align-text-top" >
                                {{ item }}
                            </th>
                        </template>
                    </tr>
                </thead>
                <tbody id="smart-ad-keyword-detail-tbody">
                    <template v-for="(item, index) in tableData" :key="index">
                        <tr>
                            <td>
                                {{ item.no }}
                            </td>
                            <td>
                                {{ item.no2 }}
                            </td>

                            <td>
                                {{ item.themeTag }}
                            </td>
                            <td>
                                {{ item.analysis }}
                            </td>
                            <td>
                                {{ item.actionanalysis }}
                            </td>

                            <td>
                                {{ item.desktopmobile }}
                            </td>
                            <td>
                                {{ item.list }}
                            </td>

                            <td>
                                {{ item.phonelist }}
                            </td>
                            <td>
                                {{ item.phonestatus }}
                            </td>
                            <td>
                                {{ item.creatorname }}
                            </td>
                            <td>
                                {{ item.createdate }}
                            </td>
                            <td>
                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="gotoCopyPage(item)">
                                        <i class="bi bi-copy fs-6"
                                            style="padding-right: 2px; padding-left: 2px;"></i></button>
                                    <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        複製
                                    </span>
                                </div>
                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="viewAnalysisReport(item)">
                                        <i class="bi bi-graph-up fs-6"></i></button>
                                    <span class="custom-tooltip-2 rounded  position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        檢視分析報告
                                    </span>
                                </div>
                                <div class="list-icon position-relative d-inline-block fw-semibold  hover-label">
                                    <button class="iconbtn btn rounded-circle btn-sm" type="button"
                                        @click="showConfirmModal(item)">
                                        <i class="bi bi-trash fs-6"></i></button>
                                    <span class="custom-tooltip-2 rounded position-absolute z-3 mt-1"
                                        style=" top: 100%;right: -50%;">
                                        刪除
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between">
            <div class="font-support align-text-top">
                共 <span id="">{{ tableData.length }}</span> 筆資料
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