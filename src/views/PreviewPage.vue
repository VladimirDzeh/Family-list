<template>
  <div class="info">
    <div class="info__user info-block">
      <h2 class="info-block__title">Персональные данные</h2>
      <p class="info-block__data">
        {{ setSavedUser.name }}, {{ setSavedUser.age }} лет
      </p>
    </div>
    <div class="info__children info-block" v-if="setSavedСhildren.length">
      <h2 class="info-block__title">Дети</h2>
      <ul class="info-block__list">
        <li
          class="info-block__data info-block__data_gray"
          v-for="child in setSavedСhildren"
          :key="child.id"
        >
          {{ child.name }}, {{ child.age }} лет
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PreviewPage",

  computed: mapGetters(["setSavedСhildren", "setSavedUser"]),
};
</script>

<style></style>
