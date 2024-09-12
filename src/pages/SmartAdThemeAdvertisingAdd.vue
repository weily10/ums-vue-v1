<script setup>
import { ref } from 'vue'
import router from '../router'
const badges = ref([])
const smallTheme = ref('')
const bigTheme = ref('')

function addThemeBadge() {
    const newItem = { bigtheme: bigTheme.value, smallTheme: smallTheme.value }
    if (bigTheme.value && smallTheme.value) {
        badges.value.push(newItem)
    }

}

</script>
<template>
    <form name="theme-advertising-add-form">
        <div class="d-flex align-items-center gap-1">
            <button class="btn rounded-circle btn-sm" type="button" @click="router.go(-1)">
                <i class="bi bi-arrow-left "></i></button>
            <h2 class="mb-0">新增主題標籤</h2>
        </div>
        <div class="bg-grey p-3 mt-3">
            <div class="d-flex gap-3 align-items-end">
                <div class="w-25">
                    <label for="ad-add-big-theme">大主題</label>
                    <select class="form-select form-select" type="select" id="ad-add-big-theme" v-model="bigTheme">
                        <option value="政府與企業" selected>政府與企業</option>
                        <option value="精品">精品</option>
                        <option value="健康照護">健康照護</option>
                    </select>
                </div>
                <div class="w-25">
                    <label for="ad-add-big-theme">小主題</label>
                    <select class="form-select form-select" type="select" value="and" id="ad-add-small-theme"
                        v-model="smallTheme">
                        <option value="物流服務" selected>物流服務</option>
                        <option value="企業宣傳">企業宣傳</option>
                        <option value="專業服務">專業服務</option>
                    </select>
                </div>

            </div>

            <div id="badgeAreaId" class="badges-area mt-3 d-flex gap-3 align-items-start">
                <template v-for="(item, index) in badges" :key="index">
                    <div class="badge primary d-flex align-items-center" style="width: fit-content;">
                        <div>{{ item.bigtheme }} - {{ item.smallTheme }}</div>
                        <button class="badge-delete-btn rounded-circle btn-sm bg-transparent ps-1 pe-0  is-first-class"
                            type="button">
                            <i class="icon-cancel text-white fs-6"></i></button>
                    </div>

                </template>

                <button class="sub-context border bg-grey p-3  d-flex align-items-center font-support "
                    style="height:33px; width: fit-content;border-radius: 2rem;" type="button" @click="addThemeBadge()"
                    :disabled="badges.length >= 3">
                    新增 <i class="bi bi-plus"></i>
                </button>
                <div class="font-support limit-message align-self-center text-warning" v-show="badges.length >= 3">
                    限定三組主題 !
                </div>
                <div class="font-support no-badge-message align-self-center text-danger" v-show="badges.length <= 0">
                    須有至少一筆 !
                </div>

            </div>
            <hr>

            <div class="col flex-fill">
                <div class="font-b4-me">主題名稱 <span class="text-danger"> *</span>
                </div>
                <div class="input-group mt-1">
                    <input type="text" class="form-control " placeholder="主題名稱" aria-label="Username" name="adAddThemeName"
                        aria-describedby="basic-addon1" id="ad-add-theme-name">
                </div>
                <div id="adAddThemeNamePlace">

                </div>
            </div>
            <div class="form-check mt-3 d-flex align-items-center">
                <input id="ad-add-desktop" name="addDesktop" class="form-check-input  me-2 required-one-of-two"
                    type="checkbox" value="" aria-label="Checkbox for following text input">
                <label class="form-check-label d-flex gap-2 align-items-center " for="ad-add-desktop">
                    Desktop
                    <div>
                        <input type="number" class="form-control" min="1" value="1">
                    </div> 天 <div><input type="number" class="form-control" value="1"> </div>曝光量
                </label>
            </div>
            <div class="form-check mt-3 d-flex align-items-center">
                <input id="ad-add-mobile" name="addMobile" class="form-check-input me-2 required-one-of-two" type="checkbox"
                    value="1" aria-label="Checkbox for following text input">
                <label class="form-check-label d-flex gap-2 align-items-center " for="ad-add-desktop">
                    Mobile
                    <div>
                        <input type="number" class="form-control" value="1">
                    </div> 天 <div><input type="number" class="form-control" value="1"> </div>曝光量
                </label>
            </div>
            <div id="errorCheckbox">

            </div>
            <div class="d-flex gap-3">
                <div class="col flex-fill mt-3">
                    <div class="font-b4-me">限幾日內上架的文章 <span class="text-danger"> *</span>

                    </div>
                    <div class="input-group mt-1">
                        <input type="number" class="form-control " placeholder="限幾日內上架的文章" id="ad-add-article-days"
                            name="adAddArticleDays">
                    </div>
                    <div id="erroradAddArticleDays">
                    </div>
                </div>
                <div class="col flex-fill mt-3">
                    <div class="font-b4-me">用戶需於幾日內瀏覽相關文章 <span class="text-danger"> *</span>

                    </div>
                    <div class="input-group mt-1">
                        <input type="number" class="form-control " placeholder="限幾日內上架的文章" id="ad-add-browse-article-days"
                            name="adAddBrowseArticleDays">
                    </div>
                    <div id="erroradAddBrowseArticleDays">
                    </div>
                </div>

                <div class="col flex-fill mt-3">
                    <div class="font-b4-me">限瀏覽篇數達幾篇以上 <span class="text-danger"> *</span>

                    </div>
                    <div class="input-group mt-1">
                        <input type="number" class="form-control " placeholder="限幾日內上架的文章" id="ad-add-limit-no-article"
                            name="adAddLimitNoArticle">
                    </div>
                    <div id="errorAdAddLimitNoArticle">
                    </div>
                </div>

            </div>
        </div>
        <div class="d-flex justify-content-end gap-3 mt-3">
            <div>
                <button class="btn txt-info text-light" type="submit" @click="">
                    智能推薦關鍵字
                </button>
            </div>
            <div>
                <button class="btn secondary" type="submit" @click="">
                    自訂推薦關鍵字
                </button>
            </div>

        </div>
        <div class="bg-grey mt-3 p-3">
            <h3> 主題標籤 - 自訂標籤
            </h3>
            <table class="table table-striped ">
                <thead>
                    <tr>
                        <th class="text-start">
                            主題 (全選)
                        </th>
                        <th class="text-start">
                            推薦標籤
                        </th>
                    </tr>
                </thead>
                <tbody id="adThemeTable">

                </tbody>
            </table>
        </div>
    </form>
</template>


<style scoped>
.badge {
    padding: 9px;
    background-color: #da8d00 !important
}
</style>