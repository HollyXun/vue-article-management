<template>
  <form>
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input v-model="emailValue" :rules="emailRules"/>
      {{ emailValue }}
    </div>
    <div class="mb-3">
      <label class="form-label" for="exampleInputEmail1">邮箱地址</label>
      <input id="exampleInputEmail1" v-model="emailRef.value" aria-describedby="emailHelp" class="form-control"
             type="email"
             @blur="validateEmail">
      <div v-if="emailRef.error" id="emailHelp"
           class="form-text">{{ emailRef.message }}
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="exampleInputPassword1">密码</label>
      <input id="exampleInputPassword1" class="form-control" type="password">
    </div>
    <div class="mb-3 form-check">
      <input id="exampleCheck1" class="form-check-input" type="checkbox">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button class="btn btn-primary" type="submit">提交</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'LogInAndRegister',
  components: {
    ValidateInput
  },
  setup () {
    const emailValue = ref('Best')
    const emailRef = reactive({
      value: '',
      error: false,
      message: ''
    })
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
      emailRules,
      emailValue
    }
  }
})
</script>

<style scoped>

</style>
