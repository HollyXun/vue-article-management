<template>
  <form>
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input v-model="emailValue" :rules="emailRules" type="text" placeholder="请输入邮箱地址"/>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input v-model="passwordValue" :rules="passwordRules" type="password" placeholder="请输入密码"/>
    </div>
    <div class="mb-3 form-check">
      <input id="exampleCheck1" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button class="btn btn-primary" type="submit">提交</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'

export default defineComponent({
  name: 'LogInAndRegister',
  components: {
    ValidateInput
  },
  setup () {
    const emailValue = ref('')
    const passwordValue = ref('')
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱不允许为空'
      },
      {
        type: 'email',
        message: '请输入正确的邮箱格式'
      }
    ]
    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空'
      }
    ]
    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules
    }
  }
})
</script>

<style scoped>

</style>
