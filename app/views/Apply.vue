<template lang="jade">
#apply
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
  #apply-modal.am-modal.am-modal-no-btn(tabindex="-1")
    .am-modal-dialog
      .am-modal-hd {{ modalTitle }}
        a.am-close.am-close-spin(href="javascript: void(0)", data-am-modal-close="true") &times;
      .am-modal-bd
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
      email: '',
      modalTitle: ''
    };
  },
  ready: function() {
    $('#apply').height($(window).height());
  },
  methods: {
    submit: function() {
      var self = this;

      self.$http.put(self.$root.apiUrl + '/HiwuUsers/jianliao?channel=apply', {
        title: self.title,
        description: self.description,
        weixin: self.weixin,
        weibo: self.weibo,
        mobile: self.mobile,
        email: self.email
      }, function (data, status, request) {
        if (data.id && data.room) {
          self.modalTitle = '申请提交成功';
        } else {
          self.modalTitle = '请填写完整信息';
        }
        $('#apply-modal').modal({
          closeViaDimmer: 0
        });
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

#apply {
  button { background-color: $primary; }
}
</style>
