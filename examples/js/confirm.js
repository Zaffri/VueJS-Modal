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
         modalConfig: {
             visible: false,
             // type: notify || confirm
             type: "confirm",
             // display data
             title: "Confirmation",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",
             // optional - for confirm modal type
             cancelText: "Cancel",
             confirmCallback: function(action) {
                 console.log("ACTION = " + action);
             }
         }
    },
    methods: {
        openModal: function() {
            this.modalConfig.visible = true;
        }
    }
});