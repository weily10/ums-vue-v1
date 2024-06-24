<script setup>

</script>
<template>
    <div class="">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="leaveSMSpage()">
                <i class="icon-arrowback fs-6 py-1"></i></button>
            <h2> APP推播基本設定
            </h2>
        </div>

        <form action="" name="addappconfig" id="addappconfig">
            <div class="bg-grey mt-3 filter p-3">
                <div class="mt-2">
                    <div class="row">
                        <div class="col">
                            <label for="" class="font-b4-me"> APP_ID </label>
                            <select class="form-select " type="select" value="" id="appids-select"
                                onchange="appidsSelect(this)">
                                <option value="20231101">經濟日報 APP </option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <label for="input-theme-name" class="font-b4-me">任務名稱 <span class="text-danger">* </span>
                            </label>
                            <div class="" id="sms-task-group">
                                <input id="input-sms-task" name="inputsmstask" type="text" class="form-control"
                                    placeholder="任務名稱">

                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-1">
                        <div class="col">
                            <div class="font-b4-me mb-1">發送時間 <div
                                    class="position-relative text-label ms-2 hover-label d-inline-block align-self-center"
                                    style="width:20px">
                                    <i class="icon-qa"></i>
                                    <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 ">
                                        請大於當前時間1小時以上!
                                    </span>
                                </div>
                            </div>
                            <div class="btn-group button-checkbox d-flex w-50" role="group" id="app-config-sms-sent-time">
                                <input type="radio" class="btn-check" name="app-config-time-options"
                                    id="app-config-immediately" autocomplete="off" value="app-config-immediately" checked>
                                <label class="btn text-nowrap" for="app-config-immediately">立即發送 </label>
                                <input type="radio" class="btn-check" name="app-config-time-options"
                                    id="app-config-schedule" autocomplete="off" value="schedule">
                                <label class="btn " for="app-config-schedule">預約時間
                                </label>

                            </div>

                            <div id="app-config-schedule-time-content" class="hide-div">
                                <div class="pt-3 w-50">
                                    <div class="position-relative">
                                        <input type="text" id="app-config-sms-datepicker"
                                            class="timedatepicker-form rounded border-1 p-2 w-100" placeholder="選擇日期與時間"
                                            style="padding-right: 4rem !important;" />
                                        <span class="position-absolute z-2 d-block top-0  pt-2" style="right: 2%;"> <i
                                                class="icon-calendar font-support"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class=" mt-3 d-flex justify-content-between">
                        <div class=" pe-0 w-50">
                            <div class="font-b4-me mb-1">發送名單 </div>
                            <div class="btn-group button-checkbox w-100" role="group" id="app-config-list">
                                <input type="radio" class="btn-check" name="app-config-list-options"
                                    id="app-config-filter-number" autocomplete="off" checked>
                                <label class="btn " for="app-config-filter-number">篩選名單編號 </label>
                                <input type="radio" class="btn-check" name="app-config-list-options"
                                    id="app-config-self-upload" autocomplete="off">
                                <label class="btn " for="app-config-self-upload">自行上傳
                                </label>
                            </div>
                        </div>
                        <div class="d-flex align-self-center pt-4 ">
                            <input id="app-config-needauth" class="form-check-input align-self-center me-2" type="checkbox"
                                value="" aria-label="Checkbox for following text input">
                            <label class="form-check-label " for="app-config-needauth">
                                限定手機需完成認證
                            </label>
                            <div class="position-relative  ms-2 hover-label d-inline-block align-self-center"
                                style="width:20px">
                                <i class="icon-qa"></i>
                                <span class="custom-tooltip-2 rounded p-1 position-absolute z-3 "
                                    style="top: 25px !important; right: 16px !important;">
                                    名單內的會員手機，需為 UDN 會員且完成手機認證。!
                                </span>
                            </div>
                        </div>

                    </div>
                    <div id="filter-list-number-area" class="row mt-3 ">
                        <div class="col">
                            <label for="input-theme-name" class="font-b4-me">名單編號 <span class="text-danger">*</span></label>
                            <div class="d-flex justify-content-between mt-1" id="list-number-group">
                                <div class="d-flex gap-3 w-50">
                                    <div class="w-100">
                                        <input id="list-number-input" name="listNumberInput" type="text"
                                            class="form-control" placeholder="任務名稱">
                                    </div>
                                    <div style="width:90px">
                                        <button class="btn primary w-100" type="button">建立</button>
                                    </div>
                                </div>
                                <div style="width:130px">
                                    <button class="btn txt-info w-100 text-light" type="button">建立標籤名單</button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <div class="col">
                                預計發送對象共計： 1 名會員
                            </div>
                        </div>
                    </div>



                    <div id="app-config-upload-area" class="hide-div">
                        <div class="d-flex gap-5 mt-3 w-100">
                            <div class="mb-3 position-relative ">
                                <input type="file" name="file" id="file" class="inputfile">
                                <label for="file">
                                    <i class="icon-upload pe-3"></i>
                                    <span>選擇檔案</span>
                                    <span class="file-input-box-1 position-absolute border">檔案名稱</span>
                                </label>
                            </div>
                            <div style="margin-left: 130px;" class="col-2">
                                <button class="btn primary w-75" type="submit">建立</button>
                            </div>
                        </div>
                        <div class="text-warning font-support">

                            * 檔案內容須為會員帳號/手機，無須標記欄位名稱，僅接受 csv (UTF-8) 格式。
                            <br>
                            * csv 請勿使用 excel 進行編輯存檔，以免格式、編碼被破壞導致系統無法判別。
                            <br>
                            <div class="mt-1">
                                <a href="" class="btn secondary">格式參考範本(下載)</a>
                            </div>
                        </div>
                        <div class="mt-3 w-50">
                            <div class="font-b4-me mb-1">名單格式 </div>
                            <div class="btn-group button-checkbox w-100" role="group" id="list-format-group">
                                <input type="radio" class="btn-check" name="app-config-formats" id="app-config-member-acc"
                                    autocomplete="off" checked>
                                <label class="btn " for="app-config-member-acc">會員帳號 </label>
                                <input type="radio" class="btn-check" name="app-config-formats" id="app-config-format-phone"
                                    autocomplete="off">
                                <label class="btn " for="app-config-format-phone">手機號碼 ( 格式：0930123456 )
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row  mt-3">
                        <div class="col">
                            <label for="sms-textarea" class="font-b4-me">推播訊息 <span class="text-danger">*</span>
                            </label>
                            <textarea class="form-control mt-1" placeholder="" id="sms-textarea"
                                name="smsTextarea"></textarea>
                            <span class="font-support" style="font-size: 12px;">
                                目前共輸入 : 0 字元
                            </span>
                            <ul class="font-support mt-2" style="font-size: 12px;">
                                <li>簡訊計價方式 ：70 字元為一個計價單元 (0.8元)。英數、符號、空格算 1 字元，中文、全形則以 2 字元計算。</li>
                                <li> 簡訊內若含 URL 連結，請在 URL 前、後增加空格，以方便使用者點擊。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-top py-3 d-flex flex-column gap-2">
                    <h4>
                        APP應用程式設定
                    </h4>
                    <div>
                        <label for="app-config-push-id" class="font-b4-me">Push ID <span class="text-danger">*</span>
                        </label>
                        <input id="app-config-push-id" name="appConfigPushId" class="form-control" placeholder="">

                    </div>
                    <div>
                        <label for="ext1" class="font-b4-me">ext1 </label>
                        <div class="d-flex gap-2  mt-1" id="list-number-group">
                            <input id="ext1" type="text" class="form-control validate-form  " placeholder="">

                        </div>
                    </div>
                    <div>
                        <label for="ext2" class="font-b4-me">ext2 </label>
                        <div class="d-flex gap-2  mt-1" id="list-number-group">
                            <input id="ext2 " type="text" class="form-control validate-form  " placeholder="">

                        </div>
                    </div>
                    <div>
                        <label for="dynamiclink" class="font-b4-me">DynamicLink<span class="text-danger">* </span> </label>
                        <div class="mt-1 w-100">
                            <input id="dynamiclink" name="dynamiclink" type="text" class="form-control validate-form  "
                                placeholder="請使用約定好支援 Dynamic Link 的 Web 網址。">

                        </div>
                    </div>
                </div>
                <div class="border-top pt-3">
                    <h4>
                        APP推播測試
                    </h4>
                    <div class="row mt-3 mb-3">
                        <div class="col">
                            <label for="input-phone-number" class="font-b4-me">測試推播名單<span class="text-danger">* </span>
                            </label>
                            <div class="d-flex gap-2  mt-1" id="list-number-group">
                                <div class="w-100">
                                    <input id="input-phone-number" name="inputPhoneMumber" type="text"
                                        class="form-control validate-form flex-grow-1"
                                        placeholder="可輸入會員帳號 ( 自行區分大小寫 ) 或 EMAIL，系統會自動比對出【有效】會員。請使用逗號分隔 ( 最多 100 組 ) 測試發送名單。"
                                        required>
                                </div>
                                <div style="width:146px" class="flex-shrink-1">
                                    <button class="btn primary w-100">測試</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <!-- Delete Modal -->

                <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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
                                <button type="button" class="btn" data-bs-dismiss="modal">取消</button>
                                <button type="button" class="btn primary ">確定</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="d-flex flex-wrap mt-2">
                <button class="btn m-1 me-auto bg-light" onclick="leaveSMSpage()" style="width: 85px"
                    type="button">離開</button>
                <button class="btn secondary m-1 " onclick="saveSMS()" style="width: 85px" type="button">儲存</button>
                <button class="btn primary  m-1 " style="width: 85px" type="submit">發送</button>
            </div>
        </form>

    </div>
</template>