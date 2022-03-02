/** 双向绑定数据 自定义 v-model */
export default {
  model: {
    prop: 'modelValue',
    event: 'valueUpdate'
  },

  props: ['modelValue'],

  computed: {
    currentValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('valueUpdate', value)
      }
    }
  }
}
