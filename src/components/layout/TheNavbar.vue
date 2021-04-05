<template>
    <div class="menu-navbar">
        <div class="logo-box">
            <button class="sidebar"></button>
            <div class="sidebar-logo"></div>
        </div>
        <div class="side-bar">
            <div class="sidebar-option">
                <div class="sidebar-icon sidebar-dashboard"></div>
                <div class="sidebar-text">Tổng quan</div>
            </div>
            <div class="sidebar-option">
                <div class="sidebar-icon sidebar-report"></div>
                <div class="sidebar-text">Báo cáo</div>
            </div>
            <router-link class="sidebar-option" to='/customer'>
                <div class="sidebar-icon sidebar-listcustomer"></div>
                <div class="sidebar-text">Danh mục khách hàng</div>
            </router-link>
            <router-link class="sidebar-option" to='/employee'>
                <div class="sidebar-icon sidebar-listcustomer"></div>
                <div class="sidebar-text">Danh mục nhân viên</div>
            </router-link>
            <router-link class="sidebar-option" to='/report'>
                <div class="sidebar-icon sidebar-system"></div>
                <div class="sidebar-text">Hệ thống</div>
            </router-link>

        </div>
    </div>
</template>

<style scoped>
    
/*Tạo phần Menuubar chung */
.menu-navbar {
    width: 200px;
    height: 100vh;
    background-color: #ffffff;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
}

/*Tạo logo Cukcuk of Misa*/

.logo-box {
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    box-sizing: border-box;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    
}

    .logo-box .sidebar {
        width: 24px;
        height: 24px;
        background-image: url("../../assets/img/toggle.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: none;
        outline: none;
        cursor: pointer; 
    }

    .logo-box .sidebar-logo {
        width: 120px;
        height: 30px;
        background-image: url("../../assets/img/cukcuk-logo.png");
        background-repeat: no-repeat;
        background-size: contain;
        margin-left: 5px;
    }

/*Tạo sidebar lựa chọn */



.sidebar-option{
    box-sizing: border-box ;
    width: 100%; 
    height: 50px;
    background-color: #ffffff;
    display: flex; 
    align-items: center; 
    padding: 0px 20px;
    cursor: pointer;    
    text-decoration: none;
    color: black;

}

.sidebar-option:hover{
    background-color: #ccc;
}


    .sidebar-option .sidebar-icon {
        width: 20px; 
        height: 20px; 
        background-repeat: no-repeat; 
        background-size: contain; 
        background-position: center;
        margin-right: 8px;

    }

    .sidebar-option .sidebar-dashboard {
        background-image: url("../../assets/icon/dashboard.png");
    }
    .sidebar-option .sidebar-report {
        background-image: url("../../assets/icon/report.png");
    }

    .sidebar-option .sidebar-buyitems {
        background-image: url("../../assets/icon/dashboard.png");
    }

    .sidebar-option .sidebar-listcustomer {
        background-image: url("../../assets/icon/dic-employee.png");
    }
    .sidebar-option .sidebar-system {
        background-image: url("../../assets/icon/setting.png");
    }



/*Tạo ẩn sidebar */

.addMenuBar{
    display: none;
}

body{
    margin: 0px;
    padding: 0px; 
    box-sizing: border-box;
}

</style>