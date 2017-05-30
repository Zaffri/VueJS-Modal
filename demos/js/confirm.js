/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.4
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

            // For confirm modal type
            cancelText: "Cancel",
            callbackData: {}
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
        },
        modalCallback: function(action) {
            console.log('Action: ' + action);
            console.log('Data: ' + JSON.stringify(this.modalConfig.callbackData));
        }
    }
});