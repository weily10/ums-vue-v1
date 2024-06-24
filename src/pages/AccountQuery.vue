<script setup>

</script>

<template>
    <div>
        <div class="d-flex gap-1 align-items-center">
            <div class="">
                <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                    <i class="bi bi-arrow-left"></i></button>
                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 mt-1" style=" top: 100%;right: -50%;">
                    返回
                </span>
            </div>
            <h2>
                查尋會員資料
            </h2>
        </div>
        <div class="bg-grey p-3">
            <div class=" d-flex gap-3 align-items-start">


                <div class="btn-group button-checkbox d-flex  w-50 align-items-center" role="group"
                    id="account-query-status">
                    <input type="radio" class="btn-check" name="search-method" id="account-query-account" autocomplete="off"
                        value="account-query-account" checked>
                    <label class="btn text-nowrap" for="account-query-account">帳號 </label>
                    <input type="radio" class="btn-check" name="search-method" id="account-query-email" autocomplete="off"
                        value="account-query-email">
                    <label class="btn " for="account-query-email"> E-mail 信箱
                    </label>
                    <input type="radio" class="btn-check" name="search-method" id="account-query-celphone"
                        autocomplete="off" value="account-query-celphone">
                    <label class="btn " for="account-query-celphone"> 手機號碼
                    </label>
                    <span class="text-danger ms-2"> *</span>

                </div>
                <form name="member-search-form" class="d-flex gap-3 flex-fill align-items-start justify-content-end">
                    <div class="col flex-fill">
                        <div class="input-group ">
                            <input type="text" class="form-control " placeholder="請輸入【完整】之帳號" id="acc-query-input"
                                name="accQueryInput">
                        </div>
                        <div id="accQueryerrorPlace">

                        </div>
                    </div>

                    <div class="">
                        <button class="btn primary text-body-light  " type="submit" style="width: 80px;">
                            查詢
                        </button>
                    </div>
                </form>
            </div>
            <div class="text-warning mt-3">
                提醒 : E-mail 與手機號碼查詢，只能查詢到狀態為「正常」的會員帳號，且無法進行模糊搜尋。若要查詢狀態為「停權」或「刪除」的會員，請使用帳號查詢！
            </div>
            <hr>
            <div id="acc-query-result">
                <table></table>
                <div class="no-data text-center">
                    <p> 輸入的查詢條件，沒有對應的帳號。</p>
                </div>
            </div>


        </div>
    </div>
</template>