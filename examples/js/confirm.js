/* --------------------------------------------------------
	VueJS - Modal Component (with example)
	Version: 	0.0.2
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        closeModal: function(action = null) {
            this.data.visible = false;
            console.log("Modal action = " + action);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
         modalVisible: false,
         modalConfig: {
             visible: false,
             // type: notify || confirm
             type: "confirm",
             // display data
             title: "Confirmation",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",
             // optional - for confirm modal type
             cancelText: "Cancel"
         }
    },
    methods: {
        openModal: function() {
            this.modalConfig.visible = true;
        }
    }
});