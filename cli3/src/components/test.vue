<template>
  <div>
    <div class="header sticky-top container">
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
            <a class="btn btn-sm btn-cart" data-toggle="dropdown">
              <i class="fas fa-cart-arrow-down fa-2x"></i>
              <span class="badge badge-pill badge-danger">15</span>
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
                    <tr>
                      <td class="align-middle">流行服飾</td>
                      <td class="align-middle">灰</td>
                      <td class="align-middle">L</td>
                      <td class="align-middle">1</td>
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
          <div class="col-md-9 mt-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
