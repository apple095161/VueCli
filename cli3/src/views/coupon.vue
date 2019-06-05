<template>
  <div>
    <button class="btn btn-outline-primary" @click="addcoupon">新增優惠券</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addcoupon() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/coupon`;
      const vm = this;
      const timestamp = Math.floor(Date.now() / 1000);
      const coupon = {
        title: "超級特惠價格",
        is_enabled: 1,
        percent: Number(50),
        //due_date: timestamp,
        code: "testCode"
      };
      //vm.isLoading = true;
      console.log(api);
      this.$http.post(api, { data: coupon }).then(response => {
        console.log(response);
        //vm.products = response.data.products;
        //vm.pagination = response.data.pagination;
        //vm.isLoading = false;
      });
    }
  }
};
</script>
