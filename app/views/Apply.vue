<template lang="jade">
#apply(transition="apply")
  #apply-topbar
    topbar(title="申请建立我的博物馆", :left-link="{ name: 'today' }")
  #apply-form.am-container.am-margin-top
    p 请填写博物馆的相关信息：
    .am-form-group
      input.am-form-field.am-radius(v-model="title", placeholder="博物馆名称")
    .am-form-group
      textarea.am-form-field.am-radius(v-model="description", rows="4", placeholder="请简要描述您的博物馆")
    p.am-margin-top 请留下您倾向的联系方式：
      small.am-fr (至少一项)
    .am-form-group
      input.am-form-field.am-radius(v-model="weixin", placeholder="微信号")
    .am-form-group
      input.am-form-field.am-radius(v-model="weibo", placeholder="微博昵称")
    .am-form-group
      input.am-form-field.am-radius(v-model="mobile", placeholder="手机号")
    .am-form-group
      input.am-form-field.am-radius(v-model="email", placeholder="邮箱")
    button.am-btn.am-btn-block.am-btn-lg(@click="submit") 立即申请
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      description: '',
      weixin: '',
      weibo: '',
      mobile: '',
      email: ''
    };
  },
  route: {
    activate: function(transition) {
      this.$root.configJweixin({
        share_content: {
          title: '申请博物馆 - 物境未觉',
          desc: '物境未觉，与您一起发现时光里的珍物，共建游历初心的物件文化，感受万物欢喜，体会万物动情！',
          link: window.location.href,
          imgUrl: 'http://hiwu.ren/logo-black-1024.png'
        }
      });

      transition.next();
    }
  },
  methods: {
    submit: function() {
      var self = this;

      if (
        (self.title === '') || (self.description === '') ||
        (self.weixin === '' && self.weibo === '' && self.mobile === '' && self.email === '')
      ) {
        return self.$root.popup('请填写完整信息');
      }

      self.$http.post(self.$root.apiUrl + '/Hiwu/mail?group=apply', {
        subject: '博物展申请',
        content: [
          '标题：' + self.title,
          '描述：' + self.description,
          '微信：' + self.weixin,
          '微博：' + self.weibo,
          '手机：' + self.mobile,
          '邮件：' + self.email
        ].join('\n')
      }, function (data, status, request) {
        if (status === 200) {
          self.$root.popup('申请提交成功');
          self.$route.router.go({ name: 'today' });
        } else {
          self.$root.popup('申请提交失败，请稍候再试');
        }
      });
    }
  },
  components: {
    topbar: require('../components/Topbar.vue')
  }
}
</script>

<style lang="scss">
@import '../variables.scss';
@import '../transitions.scss';

#apply {
  button { background-color: $primary; }
}

.apply-transition { @extend .v-transition; position: absolute; background-image: url('../assets/background.jpg'); }
.apply-leave { z-index: 2; transform-origin: 0% 0%; animation: fallOut 1s both ease-in; }
</style>
