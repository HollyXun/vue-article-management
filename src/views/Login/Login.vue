<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input v-model="emailValue" :rules="emailRules" type="text" placeholder="请输入邮箱地址"/>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input v-model="passwordValue" :rules="passwordRules" type="password" placeholder="请输入密码"/>
    </div>
    <!--
    <div class="mb-3 form-check">
      <input id="exampleCheck1" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    -->
    <template #submit>
      <button type="submit" class="btn btn-danger">Submit</button>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

export default defineComponent({
  name: 'LogInAndRegister',
  components: {
    ValidateInput,
    ValidateForm
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
    const onFormSubmit = (result: boolean) => {
      console.log(result)
    }
    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>

<style scoped>

</style>
