<template>
  <div id="app"
       class="type"
       :style="{background:'url('+bgUrl+')'}">
    <Row class="bg"
         :style="{background:'url('+bgUrl+')'}">
      <Col :xs="16"
           offset="4">
      <Card style="margin: 100px auto;max-width: 600px;padding-top: 20px;text-align: left">
        <div v-if="token">
          <Steps :current="2"
                 size="small"
                 style="padding-left: 70px;padding-bottom: 10px;text-align: left">
            <Step title="基本信息"></Step>
            <Step title="邮箱激活"></Step>
            <Step title="信息登记"></Step>
          </Steps>
          <Form ref="formCustom"
                :model="formCustom"
                :rules="ruleCustom"
                :label-width="110">
            <Form-item label="类型"
                       prop="typeId">
              <Radio-group v-model="formCustom.typeId">
                <Radio label="2">个人</Radio>
              </Radio-group>
            </Form-item>
            <!-- <small class="help"
                   style="text-align:center">需要填写真是姓名</small> -->
            <Form-item label="姓名"
                       prop="userName">
              <Input v-model="formCustom.userName"
                     placeholder="请输入"></Input>
            </Form-item>
            <!-- <small class="help">标示即为公司英文简称</small> -->
            <Form-item label="电话号码"
                       prop="phone">
              <Input v-model="formCustom.phone"
                     placeholder="请输入"></Input>
            </Form-item>
            <!-- <small class="help">请输入15位营业执照号或18位的统一社会信用代码</small> -->
            <Form-item label="邮箱地址"
                       prop="email">
              <Input v-model="formCustom.email"
                     placeholder="请输入"></Input>
            </Form-item>
            <small class="help">密码要至少包括6－20个数字、字母</small>
            <Form-item label="登录密码"
                       prop="password">
              <Input v-model="formCustom.password"
                     placeholder="请输入"></Input>
            </Form-item>

            <Form-item label="确认密码"
                       prop="ensurePassword">
              <Input v-model="formCustom.ensurePassword"
                     placeholder="请输入"></Input>
            </Form-item>
            <!-- <Form-item label="管理员手机号"
                       prop="phone">
              <Input v-model="formCustom.phone"
                     placeholder="请输入"></Input>
            </Form-item> -->
            <Form-item>
              <Button type="primary"
                      @click="handleSubmit('formCustom')"
                      long
                      :loading="loading">提交
              </Button>
            </Form-item>
          </Form>
        </div>
        <div v-if="!token">
          <Steps :current="1"
                 status="error"
                 size="small"
                 style="padding-left: 70px;padding-bottom: 10px">
            <Step title="基本信息"></Step>
            <Step title="邮箱激活"></Step>
            <Step title="信息登记"></Step>
          </Steps>
          <h3 style="color:#ed3f14;text-align: center">
            <p>链接过期或失效<a href="register.html"> 重新发送邮件</a></p>
          </h3>

        </div>
        <small style="display: block;text-align: center;line-height: 30px;"><img :src="require('@/assets/images/logo.jpg')"
               height="30"
               alt=""
               style="vertical-align: top"><span>Copyright by Artiely ,All rights reserved</span>
        </small>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import { GetQueryString } from '@/components/common/util.js'
import bgUrl from '@/assets/images/bg_register.jpg'
export default {
  name: 'type',
  data () {
    const validateCompanyId = (rule, value, callback) => {
      if (value.toString().length !== 15 && value.toString().length !== 18) {
        callback(new Error('请输入正确的营业执照注册号'))
      } else {
        callback()
      }
    }
    const ensurePass = (rule, value, callback) => {
      if (value.toString() !== this.password) {
        callback(new Error('两次输入密码不一样'))
      } else {
        callback()
      }
    }
    return {
      token: true,
      loading: false,
      bgUrl: bgUrl,
      formCustom: {
        typeId: 2,
        userName: '',
        email: '',
        password: '',
        ensurePassword: '',
        // mark: '',
        // companyId: '',
        // userName: '',
        // idCard: '',
        // sex: '1',
        phone: ''
      },
      ruleCustom: {
        userName: [
          {required: true, message: '姓名不能为空', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          // {message: '标示只支持字母', trigger: 'blur', pattern: /^[A-Za-z]$/}
          {message: '手机号格式不正确', len: 11, trigger: 'blur', pattern: /^[1][3,4,5,7,8][0-9]{9}$/}
        ],
        email: [
          {required: true, message: '邮箱不能为空不能为空', trigger: 'blur'},
          {validator: validateCompanyId, trigger: 'blur'}
        ],
        password: [
          {required: true, message: '登录密码不能为空', trigger: 'blur'},
          {message: '密码格式不对', trigger: 'blur', pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/ }
        ],
        ensurePassword: [
          {required: true, message: '确认密码不能为空', trigger: 'blur'},
          {validator: ensurePass, trigger: 'blur'}
        ]
        // idCard: [
        //   {required: true, message: '身份证号不能为空', trigger: 'blur'},
        //   {
        //     message: '身份证号格式不正确',
        //     trigger: 'blur',
        //     pattern: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/
        //   }
        // ]
        // phone: [
        //   {required: true, message: '手机号不能为空', trigger: 'blur'},
        //   {message: '手机号格式不正确', len: 11, trigger: 'blur', pattern: /^[1][3,4,5,7,8][0-9]{9}$/}
        // ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.loading = true
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            account_type: this.formCustom.typeId,
            company_name: this.formCustom.company,
            business_license_number: this.formCustom.companyId,
            personName: this.formCustom.userName,
            personSex: this.formCustom.idCard.substring(16, 1) % 2 ? '1' : '0',
            idCard: this.formCustom.idCard,
            telephone: this.formCustom.phone,
            promotionTableName: GetQueryString('promotionTableName') || '',
            promotionTableId: GetQueryString('promotionTableId') || '',
            email: GetQueryString('e') || ''
          }
          this.$api.postUserInfo(data).then(res => {
            this.loading = false
            if (res.code === 0) {
              this.$Message.success('提交成功!')
              let url = window.location.href
              if (window.location.search === '') {
                url = window.location.href
              } else {
                url = url.split(window.location.search)[0]
              }
              url = url.replace('type.html', 'login.html')
              window.location.href = url
            } else {
              alert(JSON.stringify(res))
            }
          }).catch(err => {
            this.loading = false
            console.error('哎哟~！', err)
          })
        } else {
          this.loading = false
          this.$Message.error('表单验证失败!')
        }
      })
    },
    checkToken () {
      let data = {
        token: GetQueryString('token') || '',
        e: GetQueryString('e') || '',
        p: GetQueryString('p') || ''
      }
      this.$api.checkToken(data).then(res => {
        if (res.code === 0) {
          if (res.state === '1') {
            this.token = true
          } else {
            this.token = false
          }
        }
      })
    },
    save () {

    }
  },
  created () {
    this.checkToken()
  }
}
</script>

<style lang="less" scoped>
@import './register-form.less';
</style>
