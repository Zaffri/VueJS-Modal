/* --------------------------------------------------------
	VueJS - Modal Component
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
            if(this.data.confirmCallback != undefined) this.confirmCallback(action);
        },
        confirmCallback: function(action) {
            this.data.confirmCallback(action);
        }
    }
});
