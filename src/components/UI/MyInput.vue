<template>
  <div class="input">
    <input
      class="input__item"
      required
      :type="inputType"
      :value="value"
      @input="updateInput($event.target.value)"
    />
    <label class="input__label">{{ labelName }}</label>
  </div>
</template>

<script>
export default {
  name: "MyInput",

  props: {
    inputType: {
      type: String,
      default: "text",
    },
    labelName: {
      type: String,
    },
    value: [String, Number],
  },

  methods: {
    updateInput(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
