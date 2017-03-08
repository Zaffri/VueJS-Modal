/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.3
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var app = new Vue({
    el: "#app",
    data: {
         modalConfig: {
             // Modal visibility
             visible: false,

             // type: notify || confirm
             type: "confirm",

             // display data
             title: "Confirmation",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",

             // optional - for confirm modal type
             cancelText: "Cancel",
             callbackData: {},
             confirmCallback: function(action, data) {

                 // Handle action & callback data
                 console.log("ACTION: " + action);
                 console.log("DATA: " + JSON.stringify(data));
             }
         }
    },
    methods: {
        openModal: function(id, text) {
            // Set callback data
            this.modalConfig.callbackData = {
                id: id,
                text: text
            };
            // Show modal
            this.modalConfig.visible = true;
        }
    }
});