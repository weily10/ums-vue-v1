<script setup>
 
</script>
<template>
  <div>
    <div class="d-flex justify-content-between align-items-end">
        <div class="d-flex  gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="icon-arrowback fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 電子報設定</h2>
        </div>

    </div>
    <div class="bg-grey mt-3  p-3">
        <div class="d-flex justify-content-between gap-2">
            <div class="flex-fill">
                <label for="" class="font-b4-me">專案單位</label>
                <select class="form-select " type="select" value="" id="material-analysis-project-unit" onchange="">
                    <option value="聯合新聞網">聯合新聞網</option>

                </select>
            </div>
            <div class="flex-fill">
                <label for="" class="font-b4-me">互動儀表板</label>
                <select class="form-select " type="select" value="" id="material-analysis-interactive-dashboard"
                    onchange="">
                    <option value="廣告素材分析圖表">廣告素材分析圖表</option>

                </select>
            </div>
            <div class="flex-fill">
                <label for="" class="font-b4-me">指標選單</label>
                <select class="form-select " type="select" value="" id="material-analysis-indicator-menu" onchange="">
                    <option value="">標籤</option>

                    <option value="">物件</option>

                    <option value="">色彩</option>

                </select>
            </div>
        </div>
        <ul class="mt-3">
            <li class="text-danger">Google 登入功能於 2023 年升級，將不再支援登入按鈕的自動登入功能，使用者需自行點擊登入按鈕並選擇欲登入之帳戶。</li>
            <li>Google Data Studio 需使用報系 gmail 帳號權限方可登入瀏覽，基於安全性考量請先登入您的報系 gmail 帳號 ( udngroup.com.tw ) 進行權限驗證；
                如發現無權限使用營運儀表板時， 請聯繫右列窗口授權：聯合報新聞部薛亦涵組長/分機6381 、經濟日報數位服務部陳俍任總監/分機5551。
            </li>
            <li>
                為使 Google Data Studio 與權限驗證能正確運行，請使用 Chrome 瀏覽器且勿以無痕視窗瀏覽。
            </li>
        </ul>

    </div>
    <div class="d-flex justify-content-end mt-3">
        <button class="btn primary text-light" onclick="google()">使用 Google 帳戶登入 </button>
    </div>

</div>
</template>