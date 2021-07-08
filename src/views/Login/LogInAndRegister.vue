<template>
  <form>
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input :rules="emailRules" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
             v-model="emailRef.value"
             @blur="validateEmail">
      <div id="emailHelp" class="form-text"
           v-if="emailRef.error">{{ emailRef.message }}
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ValidateInput, { RulesProp } from '../../components/ValidateInput'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'LogInAndRegister',
  components: {
    ValidateInput
  },
  setup () {
    const emailRef = reactive({
      value: '',
      error: false,
      message: ''
    })
    const emailRules:RulesProp = [
      { type: 'required', message: '电子邮箱不允许为空' },
      { type: 'email', message: '请输入正确的邮箱格式' }
    ]
    const validateEmail = () => {
      emailRef.error = false
      emailRef.message = ''
      if (!emailRef.value.trim()) {
        emailRef.error = true
        emailRef.message = '邮箱不允许为空'
        return
      }
      if (!emailReg.test(emailRef.value)) {
        console.log(emailReg.test(emailRef.value))
        emailRef.error = true
        emailRef.message = '邮箱格式错误'
      }
    }
    return {
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>

<style scoped>

</style>
