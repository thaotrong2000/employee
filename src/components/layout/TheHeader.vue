<template>
    <div class="header">
        <div class="header-name">
            <div class="header-title">Nhà hàng Biển Đông</div>
            <div class="header-icon"></div>
        </div>
        <div class="header-information">
            <div class="header-imgperson"></div>
            <div class="header-nameperson">Nguyễn Văn Mạnh</div>
            <div class="header-iconsystem"></div>
        </div>

    </div>
</template>

<style scoped>
    .header {
    position: absolute;
    top: 0px;
    left: 200px;
    right: 0px;
    height: 60px;
    background-color: #ffffff;
    padding: 0px 10px 0px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
}

    .header .header-name {
        height: 30px;
    }

.header-name .header-title {
    height: 30px;
    line-height: 30px;
}

.header .header-information {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-information .header-imgperson {
    height: 30px;
    width: 30px;
    background-image: url("../../assets/icon/avatar-default.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-right: 10px;
}

.header-information .header-iconsystem {
    height: 30px;
    width: 30px;
    background-image: url('../../assets/icon/option.png');
    background-size: 18px;
    background-repeat: no-repeat;
    background-position: center;
    
}


/*Tạo nội dung để thay đổi Header*/

.addHeader{
    left: 0px
}
</style>