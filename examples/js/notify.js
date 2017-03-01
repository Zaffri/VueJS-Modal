/* --------------------------------------------------------
	VueJS - Modal Component (with example)
	Version: 	0.0.1
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