<script setup>

</script>
<template>
   <div class="">
    <div class="d-flex align-items-center gap-1">
        <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
            <i class="bi bi-arrow-left" ></i></button>
        <h2 class="mb-0"> 名單上傳 </h2>
    </div>
    <div class=" bg-grey filter p-3 mt-3">

        <div>
            <label for="form-name" class="form-label font-b4-me">上傳名單類型</label>
        </div>
        <div class="btn-group button-checkbox d-flex z-0 " role="group" id="list-upload-radio" style="max-width: 80vh;">
            <input type="radio" class="btn-check" name="upload-types" id="acno" autocomplete="off" value="acno" checked>
            <label class="btn text-nowrap" for="acno">Acno </label>
            <input type="radio" class="btn-check" name="upload-types" id="clientid" autocomplete="off" value="schedule">
            <label class="btn " for="clientid"> Clientid
            </label>

        </div>

        <div class="mt-2">
            <label class="font-b4-me mt-3" for="list-upload-custom-name">
                客製化名稱
            </label>
            <input id="list-upload-custom-name" class="form-control mt-1" placeholder="請勿包含特殊符號">

        </div>
        <div class="mt-3">
            <div class="font-b4-me">
                上傳擋案
            </div>
            <div class="d-flex gap-5 mt-1 w-100">
                <div class="mb-3 position-relative ">
                    <input type="file" name="file" id="file" class="inputfile">
                    <label for="file">
                        <i class="bi bi-upload pe-3"></i>
                        <span>選擇檔案</span>
                        <span class="file-input-box-1 position-absolute border">檔案名稱</span>
                    </label>
                </div>

            </div>
            <div class="text-warning font-support">
                * 檔案內容須為會員帳號/手機，無須標記欄位名稱，僅接受 csv (UTF-8) 格式。
                <br>
                * csv 請勿使用 excel 進行編輯存檔，以免格式、編碼被破壞導致系統無法判別。
                <br>
            </div>
        </div>
    </div>
    <div class="mt-3 d-flex  gap-3">
        <button class="btn secondary text-body-light">
            下載範例 (Acno)
        </button>
        <button class="btn secondary text-body-light">
            下載範例 (Clientid)
        </button>
        <button class="btn primary text-body-light ms-auto">
            建立
        </button>
    </div>
</div>
</template>



<style scoped>
.file-input-box-1{
    padding-top: 6px;
    border-radius: 0 4px 4px 0;
    width: 160px;
    height: 40px;
    top:-0.5px;
    left:160px;
    background-color:white;
    color: #D8D8D8 ;
    font-style: italic;
}
.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
}

.inputfile+label {
    width: 160px;
    height: 40px;
    border-radius: 4px 0 0 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 6px 3px;
    background-color: #005FC3;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

}


.inputfile:focus+label,
.inputfile+label:hover {
    background-color: #0086FF
}

.inputfile+label {
    cursor: pointer;
}

.dropdown1+button {
    line-height: 1.5 !important;
    color: brown !important;
    padding: 0;
}
</style>