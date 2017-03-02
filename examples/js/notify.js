/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.2
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var app = new Vue({
    el: "#app",
    data: {
         modalVisible: false,
         modalConfig: {
             visible: false,
             // type: notify || confirm
             type: "notify",
             // display data
             title: "Notification",
             messageBody: "This is just some example body text.",
             confirmText: "Okay"
         }
    },
    methods: {
        openModal: function() {
            this.modalConfig.visible = true;
        }
    }
});