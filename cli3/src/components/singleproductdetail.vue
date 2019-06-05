<template>
  <div>
    <div class="header sticky-top container">
      <router-view></router-view>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-flex flex-column detail-side">
            <ul class="nav flex-column event-spectial mb-3">
              <li class="nav-item">
                <a class="nav-link active" href="#">本周新品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">工作室特別企劃</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">自我風格系列</a>
              </li>
            </ul>

            <ul class="nav flex-column mt-3 event-discount">
              <li class="nav-item">
                <a class="nav-link active" href="#">限時折扣</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">夏日新品．限時單件折100</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">無縫BRAT．限時2件680元</a>
              </li>
            </ul>

            <ul class="nav flex-column mt-3 normal">
              <li class="nav-item text-danger">
                <span class="nav-link">優惠組合</span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，一件799元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，一件599元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">初夏精選，任二件799元</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">我只是增加的LI</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 mt-2">
            <div class="container">
              <div class="row">
                <a
                  class="col-md-6"
                  href="#"
                  v-for="(item,index) in product"
                  :key="index"
                  style="height: 450px; width:100%; background-size: cover; background-position: center"
                  :style="{backgroundImage:`url(${item.imageUrl})`}"
                  v-if="item.title"
                ></a>
                <div class="col-md-6" v-for="item in product" :key="item.id" v-if="item.title">
                  <div class="row product-title">
                    <div class="col-md-8 product-title-area mr-auto">
                      <div class="mb-2 text-success" style="font-size:25px;">
                        {{item.title}}
                        <span v-if="current">- {{current}}</span>
                      </div>
                      <div class="mt-2">商品編號:{{item.id}}</div>
                    </div>

                    <div class="col-md-4 text-right product-price-area">
                      <del class="h5 font-weight-bold">{{item.price}}</del>
                      <div class="text-center text-danger font-weight-bold mr-5">NT$</div>
                      <div class="h2 font-weight-bold text-danger text-right">{{item.price}}</div>
                    </div>
                  </div>
                  <div class="product-line mt-2"></div>
                  <div class="product-size-area mt-3 d-flex justify-content-between">
                    <button class="btn btn-outline-success" @click="size = 'S' ">S</button>
                    <button class="btn btn-outline-success" @click="size = 'M' ">M</button>
                    <button class="btn btn-outline-success" @click="size = 'L' ">L</button>
                    <button class="btn btn-outline-success" @click="size = 'XL' ">XL</button>
                    <button class="btn btn-outline-success" @click="size = 'XXL' ">XXL</button>
                  </div>
                  <div class="product-line my-4"></div>
                  <div class="addcart">
                    <label class="mr-3">數量</label>

                    <a class @click="counter -= 1">
                      <i class="fas fa-minus"></i>
                    </a>
                    <input type="text" v-model="counter">
                    <a class @click="counter += 1">
                      <i class="fas fa-plus"></i>
                    </a>

                    <button
                      class="btn btn-success ml-3"
                      @click="addtocart(item.id,item.count)"
                    >加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      cartproduct: {},
      isLoading: false,
      counter: 1,
      productid: "",
      product: {},
      current: "",
      size: "",
      getcartproduct: {},
      status: {
        loadItem: {}
      }
    };
  },
  methods: {
    getorder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/product/${vm.productid}`;

      this.$http.get(api).then(response => {
        vm.product = response.data;
        console.log(response);
      });
    },
    addtocart(id, qty = 1, size) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      console.log(api);
      const cart = {
        //傳送資料到購物車時 傳產品ID 及數量 就好 不然使用者可以更改價錢
        product_id: id,
        qty: vm.counter,
        size: vm.size
      };
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadItem = "";
        this.cartproduct = Object.assign({},this.product)

        vm.getcart();
      });
    },
    getcart() {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;

      this.$http.get(api).then(response => {
        //vm.getcartproduct = response.data.data;
        console.log(vm.getcartproduct);
        //vm.hideTable = response.data.data.total;
        //console.log(vm.hideTable);
      });
    }
  },
  watch: {
    counter(value) {
      if (value < 1) {
        this.counter = 1; //單獨監控counter的值 如果小於1的話修改為1
      }
    }
  },
  created() {
    this.productid = this.$route.params.productid;
    console.log(this.productid);
    this.getorder();
  }
};
</script>
<style>
</style>
