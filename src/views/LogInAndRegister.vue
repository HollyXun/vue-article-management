<template>
  <form>
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

<script>
import { defineComponent, reactive } from 'vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'LogInAndRegister',
  setup () {
    const emailRef = reactive({
      value: '',
      error: false,
      message: ''
    })
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
      validateEmail
    }
  }
})
</script>

<style scoped>

</style>
