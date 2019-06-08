<template>
  <div>
    <div class="header-inner d-flex align-items-center py-4">
      <div class="logo">
        <router-link href="#" to="/show" class="login">
          <span>Happy Shopping</span>
        </router-link>
      </div>

      <nav class="member-area ml-auto mr-3">
        <ul class="signin">
          <router-link to="/login" class="mr-3">
            <span data-hover="登入">signin</span>
          </router-link>
        </ul>
      </nav>

      <div class="cart">
        <div class="dropdown ml-auto">
          <a
            class="btn btn-sm btn-cart"
            data-toggle="dropdown"
            @click.prevent="updatecart(cartproduct)"
          >
            <i class="fas fa-cart-arrow-down fa-2x"></i>
            <span class="badge badge-pill badge-danger">{{arraylangth.length}}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="py-4 px-3">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>商品名稱</th>
                    <th width="50">顏色</th>
                    <th width="50">尺寸</th>
                    <th width="50">數量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in getcartproduct.carts" :key="item.title">
                    <td class="align-middle">{{item.product.title}}</td>
                    <td class="align-middle">灰</td>
                    <td class="align-middle">{{item.size}}</td>
                    <td class="align-middle">{{item.qty}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="btn-style d-flex d-inline justify-content-end">
                <button class="btn btn-primary">直接結帳</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartproduct: {},
      getcartproduct: {},
      arraylangth: []
    };
  },
  props: {
    items: {
      type: Object
    }
  },
  methods: {
    getcart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.getcartproduct = response.data.data;
        vm.arraylangth = response.data.data.carts;
        //vm.hideTable = response.data.data.total;
        console.log(vm.getcartproduct);

        vm.isLoading = false;
      });
    },
    updatecart(cartproduct) {
      this.$emit("update", cartproduct);
    }
  },

  created() {
    this.getcart();
  },

  updated() {
    //console.log("資料更新了");
  }
};
</script>
