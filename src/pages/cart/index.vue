<!--
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 16:04:29
 * @Author       : 
 * @Description  : 
-->
<template>
  <view class="content">
    <view class="title">使用pinia</view>
    <h2>手机号:{{ phoneHidden }}</h2>
    <h3>token:{{ token }}</h3>
    <h3>userId:{{ userId }}</h3>
    <button @click="handleClickChangePhone">改变电话号码</button>
    <button @click="login">登录设置用户信息</button>
  </view>
</template>

<script lang="ts" setup>
  import { defineComponent, toRefs, computed, reactive } from 'vue'
  import userStore from '@/store/modules/user'
  import { User } from '@/store/modules/user/type'
  const store = reactive(userStore())
  const { phoneHidden, token } = toRefs(store)
  const handleClickChangePhone = () => {
    store.phone = '15139333999'
  }
  const user: User = {
    name: 'mx',
    age: 18,
    id: 123
  }

  const login = () => {
    store.setUserInfo(user)
  }

  const userId = computed(() => {
    return store.userInfo.id
  })
</script>

<style lang="scss" scoped>
  @import url('./index.scss');
  .title {
    color: blue;
    text-align: center;
    color: red;
    font-size: 55dddd;
  }
</style>
