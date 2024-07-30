<script setup>
import { ref } from 'vue'

const checkboxes1 = ref([])
const checkboxes = ref([])

const checkboxes3 = ref([
    {
        label: "會員到站概覽(日) GA3",
        id: "usr-insight-item1"
    },
    {
        label: " 會員到站概覽(月) GA3",
        id: "usr-insight-item2"
    },
    {
        label: "會員到站概覽(周) GA3",
        id: "usr-insight-item3"
    },
    {
        label: "用戶到站",
        id: "usr-insight-item4"
    },

])

const checkboxes4 = ref([
    {
        label: "會員到站概覽(日) GA3",
        id: "usr-insight-item1"
    },
    {
        label: " 會員到站概覽(月) GA3",
        id: "usr-insight-item2"
    },
    {
        label: "會員到站概覽(周) GA3",
        id: "usr-insight-item3"
    },
    {
        label: "用戶到站",
        id: "usr-insight-item4"
    },

])

const checkboxes5 = ref([{
    label: "全部",
    id: "all"
},
{
    label: "聯合新聞網(2)",
    id: "udnnews"
},
{
    label: "願景工作室(6)",
    id: "visualstudio"
},
{
    label: "教育事業部(9)",
    id: "educationaldep"
},
{
    label: "融媒體策展中心（美容展）(10)",
    id: "beauty-exhibition"
},
{
    label: "行動發展部(26)",
    id: "action-dev-dep "
},
{
    label: "娛樂生活事業部(31)	",
    id: "department-entertainment "
},
{
    label: "聯合報(32)",
    id: "department-exhibition "
},
{
    label: "融媒體橘世代(34)",
    id: "item-2 "
},
{
    label: "融媒體橘世代(34)",
    id: "item-2 "
},
{
    label: "融媒體橘世代(34)",
    id: "item-3 "
},
{
    label: "融媒體橘世代(34)",
    id: "item-4 "
},
{
    label: " 數據發展部(999)",
    id: "item-5"
},
{
    label: " 數據發展部(999)",
    id: "item-6"
}

])

checkboxes1.value = [
    {
        label: "會員即時概覽(2)",
        id: "udn-item1"
    },
    {
        label: "會員註冊與開通",
        id: "udn-item2"
    },
    {
        label: "會員趨勢概覽",
        id: "udn-item3"
    },
    {
        label: " 會員單月概覽",
        id: "udn-item4"
    }
]

checkboxes.value = [
    {
        label: " 智慧檢索編號",
        id: "usr-insight-item1"
    },
    {
        label: "分析清單 GA3",
        id: "usr-insight-item2"
    },
    {
        label: "名單路徑",
        id: "usr-insight-item3"
    },
    {
        label: " 主題洞察分析",
        id: "usr-insight-item4"
    },
    {
        label: " 特定名單分析",
        id: "usr-insight-item5"
    }
]
</script>

<template>
    <div>
        <div class="d-flex gap-1">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button">
                    <i class="bi bi-arrow-left fs-6 py-1 " @click="goback()"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2 class="mb-0">
                使用者詳細資料
            </h2>
        </div>
        <form action="" name="accIssuanceForm" id="accIssuanceForm">
            <div class="mb-2 d-flex flex-column  bg-grey p-3">

                <div class="d-flex align-items-end gap-2 flex-wrap border-bottom  mt-2 border-bottom">
                    <h3>
                        新增標籤
                    </h3>
                </div>
                <div class="mt-2">
                    <div class="row row-cols-2">
                        <div class="col">
                            <label for="input-theme-name" class="font-b4-me">登入帳號 (員工編號) <span
                                    class="text-danger">*</span></label>
                            <div class="input-1">
                                <input name="accInsuThemeName" id="theme-name" type="text" class="form-control "
                                    placeholder="員工編號">
                            </div>
                        </div>
                        <div class="col">
                            <label for="input-days-within-article" class="font-b4-me">姓名 <span class="text-danger">*</span>
                            </label>
                            <div class="input-1">
                                <input type="text" class="form-control" name="accInsuName" id="acc-detail-name"
                                    placeholder="姓名">
                            </div>
                        </div>
                        <div class="col mt-3">
                            <label for="input-days-within-article" class="font-b4-me">分機 <span class="text-danger"> *</span>
                            </label>
                            <div class="input-1">
                                <input type="text" class="form-control" name="accInsuposition" id="acc-detail-position"
                                    placeholder="分機 ">
                            </div>
                        </div>
                        <div class="col mt-3">
                            <label for="input-days-within-article" class="font-b4-me">E-mail <span class="text-danger">
                                    *</span></label>
                            <div class="input-1">
                                <input type="text" class="form-control" id="acc-detail-email" name="accInsuemail"
                                    placeholder="E-mail">
                            </div>
                        </div>
                        <div class="col mt-3">
                            <label for="input-status-group" class="font-b4-me">部門</label>
                            <select id="dc_dp_0" class="form-select" type="select" name="dc_dp_0">
                                <option value="*" selected>不限</option>
                                <option value="2">聯合新聞網(2)</option>
                                <option value="6">願景工作室(6)</option>
                                <option value="8">健康事業部(8)</option>
                                <option value="9">教育事業部(9)</option>
                                <option value="10">融媒體策展中心（美容展）(10)</option>
                                <option value="11">聯合報發行展業部(11)</option>
                                <option value="14">udn售票網(14)</option>
                                <option value="20">有行旅(20)</option>
                                <option value="22">uDesign有設計(22)</option>
                                <option value="23">經濟日報(23)</option>
                                <option value="25">經濟日報專業展(25)</option>
                                <option value="26">行動發展部(26)</option>
                                <option value="31">娛樂生活事業部(31)</option>
                                <option value="32">聯合報(32)</option>
                                <option value="34">融媒體橘世代(34)</option>
                                <option value="999">數據發展部(999)</option>
                            </select>
                        </div>
                        <div class="col flex-fill mt-4 p-3 w-100 border-top">
                            <label for="input-theme-name" class="font-b4-me fw-semibold">CAS會員中心數據權限<span
                                    class="text-danger">
                                    *</span> <span id="errorTxt" class="error ps-2"></span></label>

                            <div class="input-1 d-flex gap-3  p-2 mt-1 flex-wrap form-group" id="cas-member-inputs">

                            </div>
                        </div>
                        <div class="col flex-fill mt-3 w-100 border-top pt-3">
                            <label for="permission-settings" class="font-b4-me fw-semibold">功能權限設定 <span
                                    class="text-danger">
                                    *</span><span id="errorTxt2" class="error ps-2"></span></label>
                            <div class="  p-2 mt-1" id="permission-settings">
                                <div class="border-bottom pb-3" id="data-center-1">
                                    <div class="d-flex flex-fill pb-2 ">
                                        <div class="d-flex">
                                            <input id="select-all-data-center"
                                                class="form-check-input mt-0 align-self-center me-2" type="checkbox"
                                                value="select-all-data-center"
                                                aria-label="Checkbox for following text input" name="fncPermissionSettings">
                                            <label class="form-check-label " for="select-all-data-center">
                                                (全選)資料中心
                                            </label>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            UDN 會員中心
                                        </div>
                                        <div class="">
                                            <div id="udnmember-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes3" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            用戶洞察分析
                                        </div>
                                        <div class="">
                                            <div id="usr-insight-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            用戶趨勢分析
                                        </div>
                                        <div class="">
                                            <div id="usr-trend-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            平台綜合分析
                                        </div>
                                        <div class="">
                                            <div id="platform-fusion-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes4" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            內容推薦成效
                                        </div>
                                        <div class="">
                                            <div id="content-recommend-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes1" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            廣告素材分析
                                        </div>
                                        <div class="">
                                            <div id="creative-analysis-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes1" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-bottom pb-3 pt-2" id="data-center-2">
                                    <div class="d-flex pb-2">
                                        <input id="select-all-data-center-2"
                                            class="form-check-input mt-0 align-self-center me-2" type="checkbox"
                                            value="select-all-data-center-2" aria-label="Checkbox for following text input">
                                        <label class="form-check-label " for="select-all-data-center-2">
                                            (全選)資料中心
                                        </label>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="fw-semibold text-label pe-3" style="width:15vh">
                                            智慧廣告
                                        </div>
                                        <div id="smart-advertising-list" class="d-flex gap-3 flex-wrap ps-2">
                                            <template v-for="(element, index) in checkboxes1" :key="index">
                                                <div class="d-flex">

                                                    <input id="dailynews"
                                                        class="form-check-input mt-0 align-self-center me-2" type="checkbox"
                                                        value="" aria-label="Checkbox for following text input"
                                                        name="fncPermissionSettings">
                                                    <label class="form-check-label " for="dailynews">
                                                        {{ element.label }}
                                                    </label>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                                <div class="col flex-fill w-100">
                                    <div class="border-bottom pb-3 pt-2" id="data-center-3">
                                        <div class="d-flex pb-2">
                                            <input id="select-all-data-center-3"
                                                class="form-check-input mt-0 align-self-center me-2" type="checkbox"
                                                value="select-all-data-center-3"
                                                aria-label="Checkbox for following text input">
                                            <label class="form-check-label " for="select-all-data-center-3">
                                                (全選)行銷中心
                                            </label>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <div class="fw-semibold text-label pe-3" style="width:15vh">
                                                簡訊行銷
                                            </div>
                                            <div class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes1" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <div class="fw-semibold text-label pe-3" style="width:15vh">
                                                電子報行銷
                                            </div>
                                            <div id="enewsletter-marketing-list" class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes1" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <div class="fw-semibold text-label pe-3" style="width:15vh">
                                                APP行銷
                                            </div>
                                            <div class="d-flex gap-3 flex-wrap ps-2">
                                                <template v-for="(element, index) in checkboxes1" :key="index">
                                                    <div class="d-flex">

                                                        <input id="dailynews"
                                                            class="form-check-input mt-0 align-self-center me-2"
                                                            type="checkbox" value=""
                                                            aria-label="Checkbox for following text input"
                                                            name="fncPermissionSettings">
                                                        <label class="form-check-label " for="dailynews">
                                                            {{ element.label }}
                                                        </label>
                                                    </div>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-bottom pb-3 pt-2" id="data-center-6">
                                        <div class="d-flex pb-2">
                                            <input id="select-all-data-center-6"
                                                class="form-check-input mt-0 align-self-center me-2" type="checkbox"
                                                value="select-all-data-center-6"
                                                aria-label="Checkbox for following text input">
                                            <label class="form-check-label " for="select-all-data-center-6">
                                                (全選)管理者權限
                                            </label>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <div class="fw-semibold text-label pe-3" style="width:15vh">
                                                權限管理
                                            </div>
                                            <div id="role-manage-list" class="d-flex gap-3 flex-wrap ps-2">

                                            </div>
                                        </div>
                                        <div class="d-flex mt-2">
                                            <div class="fw-semibold text-label pe-3" style="width:15vh">
                                                雲端資料庫管理
                                            </div>
                                            <div id="cloud-database-management" class="d-flex gap-3 flex-wrap ps-2">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-2 gap-2">
                <button class="btn secondary text-body-light">
                    返回
                </button>
                <button type="submit" class="btn primary text-body-light">存檔</button>
            </div>
        </form>

        <div class="modal" id="confirm-save-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <h3> 確認通知</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body fs-6 fw-medium pb-2">
                        確定要儲存對此帳號作的變更 ?
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                        <button type="button" class="btn primary " @click="confirmSave()">確定</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="position-fixed top-0 start-50 p-3 d-flex justify-content-center" style="z-index: 11">
            <div id="acc-issuance-toast" class="toast hide bg-white border-0" role="alert" aria-live="assertive"
                aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body d-flex justify-content-between">
                        <div class="rounded-circle txt-success me-1 text-light px-auto d-flex justify-content-center align-items-center"
                            style="width: 18px; height: 18px;">
                            <i class="icon-done "></i>
                        </div>
                        <div>
                            存檔成功!
                        </div>
                    </div>
                    <button type="button" class="btn-close  me-2 m-auto" data-bs-dismiss="toast"
                        aria-label="Close"></button>
                </div>
            </div>
        </div>


    </div>
</template>