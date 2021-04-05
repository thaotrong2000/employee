<template>
  <div id="content-customer">
    <div class="navbar-customer">
      <button id="btn-add-customer" @click="addClick()">Thêm khách hàng</button>
    </div>
    <div class="content-table">
      <table id="table">
        <tr>
          <th>Mã khách hàng</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Nhóm khách hàng</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số tiền nợ</th>
          <th>Mã thẻ thành viên</th>
        </tr>
        <tr
          v-for="khachhang in customer"
          :key="khachhang.CustomerId"
          @dblclick="trdblclick(khachhang.CustomerId)"
          
        >
          <td>{{ khachhang.CustomerId }}</td>
          <td>{{ khachhang.FullName }}</td>
          <td>{{ khachhang.GenderName }}</td>
          <td>{{ khachhang.DateOfBirth }}</td>
          <td>{{ khachhang.CustomerGroupName }}</td>
          <td>{{ khachhang.PhoneNumber }}</td>
          <td>{{ khachhang.Email }}</td>
          <td>{{ khachhang.Address }}</td>
          <td>{{ khachhang.DebitAmount }}</td>
          <td>{{ khachhang.MemberCardCode }}</td>
        </tr>
      </table>

      <customerDetail
        v-bind:hidden="isShow"
        @hideDialog="hideDialog()"
        :select="customerSelected"
        :statusForm="statusForm"
        @load="loadData()"
        :buttonDelete="buttonDelete"
      />
    </div>

    <!-- Tao Dialog -->
  </div>
</template>

<style>
@import "../../style/content.css";
.navbar-customer {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.navbar-customer #btn-add-customer {
  display: inline-block;
  padding: 0px 10px;
  height: 30px;
  margin-right: 10px;
}

.content-table {
  width: 100%;
  height: calc(100vh - 110px);
  background-color: #ccc;
  overflow: auto;
}

.content-table #table {
  width: 100%;
}

#table tr {
  height: 40px;
}

#table th,
td {
  text-align: left;
}

#table th {
  position: sticky;
  top: 0;
  background-color: #ccc;
}
</style>

<script>
import axios from "axios";
import customerDetail from "./customerDetail";

export default {
  created() {
    axios
      .get("http://api.manhnv.net/api/customers")
      .then((res) => {
        console.log(res);
        this.customer = res.data;
      })
      .catch();
  },
  data() {
    return {
      customer: [],
      isShow: false,
      customerSelected: {},
      statusForm: "add",
      checkButtonDelete: false,
      buttonDelete: false
    };
  },
  components: {
    customerDetail,
  },
  methods: {
    addClick: function() {
      this.isShow = true;
      this.statusForm = "add";
      this.customerSelected = {};
      this.buttonDelete = false;
    },
    hideDialog() {
      this.isShow = false;
    },
    trdblclick(CustomerId) {
      (this.statusForm = "edit"),
        (this.isShow = true),
        this.buttonDelete = true,
        axios
          .get("http://api.manhnv.net/api/customers/" + CustomerId)
          .then((res) => {
            this.customerSelected = res.data;
            console.log(this.customerSelected);
          })
          .catch((res) => {
            console.log(res.data);
          });
    },
    deleteCustomer() {
      var cf = confirm("Ban co muon xoa khong");
      if (cf == true) {
        alert("ok, Hay chon 1 phan tu muon xoa");
        this.checkButtonDelete = true;
      } else {
        alert("Cam on ban");
      }
    },
    loadData() {
      axios
      .get("http://api.manhnv.net/api/customers")
      .then((res) => {
        this.customer = res.data;
      })
      .catch();
    },
  },
};
</script>
