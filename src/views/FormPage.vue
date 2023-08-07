<template>
  <form class="form" @click.prevent>
    <div class="form__user info-form">
      <h2 class="info-form__title">Персональные данные</h2>
      <MyInput
        class="info-form__item"
        :inputType="'text'"
        :labelName="'Имя'"
        v-model="setUser.name"
      ></MyInput>
      <MyInput
        class="info-form__item"
        :inputType="'number'"
        :labelName="'Возраст'"
        v-model="setUser.age"
      ></MyInput>
    </div>
    <MyBtn class="form__btn-add" v-if="setLimit !== 0" @click-btn="addChild">
      <img src="@/assets/icons/plus.svg" alt="plus" width="24" height="24" />
      Добавить ребенка
    </MyBtn>
    <div class="form__children info-form" v-if="setPreliminaryСhildren.length">
      <h2 class="info-form__title">Дети (макс. 5)</h2>
      <ul class="info-form__list">
        <li
          class="info-form__item list__item"
          v-for="item in setPreliminaryСhildren"
          :key="item.id"
        >
          <MyInput
            :inputType="'text'"
            :labelName="'Имя'"
            v-model="item.name"
          ></MyInput>
          <MyInput
            :inputType="'number'"
            :labelName="'Возраст'"
            v-model="item.age"
          ></MyInput>
          <MyBtn class="info-form__btn-delete" @click-btn="removeChild(item)"
            >Удалить</MyBtn
          >
        </li>
      </ul>
      <MyBtn class="info-form__btn-save" @click-btn="saveKids">Сохранить</MyBtn>
    </div>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyBtn from "@/components/UI/MyBtn.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "FormPage",

  components: {
    MyBtn,
    MyInput,
  },

  computed: mapGetters(["setUser", "setLimit", "setPreliminaryСhildren"]),

  methods: mapMutations(["addChild", "removeChild", "saveKids"]),
};
</script>

<style></style>
