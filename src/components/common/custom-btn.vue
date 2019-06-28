<template>
  <button
    :id="id"
    :class="['time-btn-default', { active: cellActive }]"
    :style="cellStyle"
    :disabled="cellDisabled"
    :value="val"
    @click="handleClick"
    @dblclick="handleDoubleClick">
    {{ val }}
  </button>
</template>

<style scoped>
.wrapper {
  display: inline-block;
}
.time-btn-default {
  display: inline-block;
  width: 38px;
  height: 24px;
  text-align: center;
  margin: 10px 12px 0 0;
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  font-size: 12px;
  color: #757575;
  border-radius: 3px;
  cursor: pointer;
  padding: 0;
}
.time-btn-default.active {
  background: #00BCD4;
  border-color: #00bcd4;
  color: #fff;
}
.time-btn-default:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #bdbdbd;
  border-color: #bdbdbd;
  color: #fff;
}
</style>
<script>
export default {
  name: 'CustomTimeBtn',
  props: {
    cellStyle: {
      type: Object,
      default: () => ({})
    },
    id: {
      type: String,
      default: ''
    },
    val: {
      type: String,
      default: ''
    },
    curVal: {
      type: String,
      default: ''
    },
    cellDisabled: {
      type: Boolean,
      default: false
    },
    clickCallback: {
      type: Function,
      default: () => {}
    },
    doubleClickCallback: {
      type: Function,
      default: function () {}
    }
  },
  computed: {
    cellActive: function () {
      if (this.val === this.curVal) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    handleClick () {
      if (this.clickCallback) {
        this.clickCallback(this.val)
      }
      this.$emit('cellClick', this.val, this.id)
    },
    handleDoubleClick () {
      if (this.doubleClickCallback) {
        this.doubleClickCallback(this.val)
      }
      this.$emit('cellDoubleClick', this.val, this.id)
    }
  }
}
</script>
