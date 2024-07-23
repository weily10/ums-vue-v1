<script>
 
</script>

<template>
    <form class="" name="insightAnalysisListForm">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" onclick="goback()">
                <i class="icon-arrowback fs-6 py-1 "></i></button>
            <h2 class="mb-0"> 名單上傳 </h2>
        </div>
        <div class=" bg-grey filter p-3 mt-3">

            <div>
                <label for="form-name" class="form-label font-b4-me">請選擇提供名單類型 </label>
            </div>
            <div class="btn-group button-checkbox d-flex z-0 " role="group" id="insight-analysis-list-upload-radio"
                style="max-width: 80vh;">
                <input type="radio" class="btn-check" name="insight-analysis-types" id="insight-analysis-acno"
                    autocomplete="off" value="acno" checked>
                <label class="btn text-nowrap" for="insight-analysis-acno">Acno </label>
                <input type="radio" class="btn-check" name="insight-analysis-types" id="insight-analysis-clientid"
                    autocomplete="off" value="schedule">
                <label class="btn " for="insight-analysis-clientid"> Clientid
                </label>

            </div>

            <div class="mt-2">
                <label class="font-b4-me mt-3" for="insight-analysis-list-custom-name">
                    請輸入客製化名稱 <span class="text-danger">*</span>
                </label>
                <input name="insightAnalysisListCustomName" id="insight-analysis-list-custom-name" class="form-control mt-1"
                    placeholder="*請勿包含特殊符號">
            </div>
            <div class="mt-2">
                <label class="font-b4-me mt-3" for="list-upload-path">
                    請輸入名單路徑 <span class="text-danger">*</span>
                </label>
                <input name="insightAnalysisListPath" id="insight-analysis-list-path" class="form-control mt-1"
                    placeholder="*ex: ddd-data-pipeline.acno_id_summary.clientid_365_days">
            </div>
            <div class="mt-2">
                <label class="font-b4-me mt-3" for="insightAnalysisListInput">
                    請輸入欄位名稱 <span class="text-danger">*</span>
                </label>
                <input name="insightAnalysisListInput" id="insightAnalysisListInput" class="form-control mt-1"
                    placeholder="ex: acno">
            </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
            <input type="submit" class="btn primary" value="建立" onclick="goCreateAnalysis();">
        </div>
    </form>
</template>