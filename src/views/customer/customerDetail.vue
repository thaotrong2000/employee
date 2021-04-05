<template>
  <div class="dialog" v-show="hidden">
    <div id="dialog"></div>
    <div id="dialog-content">
      <div class="dialog-title">
        <button id="close" @click="clickClose()">Close</button>
        <label for="">id</label>
        <input type="text" v-model="select.CustomerCode" />
        <label for="">Ten</label>
        <input type="text" v-model="select.FullName" />
        <label for="">Ngay sinh</label>
        <input type="text" v-model="select.DateOfBirth" />
        <label for="">Email</label>
        <input type="text" v-model="select.Email" />
        <label for="">SDT</label>
        <input type="text" v-model="select.PhoneNumber" />
        <label for="">CustomerGroupId</label>
        <input type="text" v-model="select.CustomerGroupId" />

        <button v-show="buttonDelete" @click="deleteCus()">Delete</button>
        <button type="submit" @click="addClickCustomer()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../../node_modules/axios";

export default {
  props: {
    hidden: { type: Boolean, default: false },
    select: { type: Object, default: null },
    statusForm: { type: String },
    buttonDelete: { type: Boolean, default: false },
  },
  methods: {
    clickClose() {
      this.$emit("hideDialog");
      console.log(this.statusForm);
    },
    addClickCustomer() {
      if (this.statusForm == "add") {
        axios
          .post("http://api.manhnv.net/api/customers", this.select)
          .then((res) => {
            console.log(res.data);
            this.$emit("hideDialog");
          })
          .catch((res) => {
            console.log(res.data);
          });

        this.$emit("load");
      } else {
        axios
          .put(
            "http://api.manhnv.net/api/customers/" + this.select.CustomerId,
            this.select
          )
          .then((res) => {
            console.log(res);
            alert("Doi toi lam chuc nang EDIT");
            this.$emit("hideDialog");
          })
          .catch((res) => {
            console.log(res);
          });
      }
    },
    deleteCus() {
      axios
        .delete("http://api.manhnv.net/api/customers/"+this.select.CustomerId)
        .then(res=>{
          console.log(res); 
          alert("ban da xoa du lieu thanh cong"); 
        })
        .catch(res=>{
          console.log(res);
        });
    },
  },
};
</script>
<style>
#dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.4;
}
#dialog-content {
  position: fixed;
  width: 600px;
  height: 400px;
  left: calc(50% - 300px);
  top: calc(50% - 200px);
  background-color: white;
}

.dialog-title {
  width: 100%;
  height: 40px;
  background-color: #ccc;
}

.dialog-title label,
input,
button {
  display: flex;
  margin-left: 50px;
}
</style>
