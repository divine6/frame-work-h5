<template>
    <label><input v-model="currentValue" class="my-radio" type="radio"/>免费</label>
</template>

<script>
import TwoWay from '@/resources/mixins/two-way'
export default {
  mixins: [TwoWay]
}
</script>
<style scoped lang="less">
@green:#00b578;
.my-radio {
    width: 20px;
    height: 20px;
    appearance: none;
    position: relative;
    outline: none;
}
.my-radio:before {
    content: "";
    width: 15px;
    height: 15px;
    border: 1px solid @green;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}
.my-radio:checked:before {
    content: "";
    width: 15px;
    height: 15px;
    border: 1px solid @green;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
}
.my-radio:checked:after {
    content: "";
    width: 9px;
    height: 9px;
    text-align: center;
    background: @green;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 5px;
    left: 4px;
}
.my-radio:checked + label {
    color: #edd19d;
}
</style>
