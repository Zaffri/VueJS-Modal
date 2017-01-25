var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        hideModal: function(action = null) {
            // emit event to parent
            this.$emit('hide_modal_emit', action);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
         modalVisible: false,
         zaffriModal: {
             // notify || confirm
             type: "confirm",
             // display data
             title: "Notification",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",
             // optional - for confirm modal type
             cancelText: "Cancel"
         }
    },
    methods: {
        showModal: function() {
            this.modalVisible = true;
        },
        hideModal: function(action) {
            // argument will contain event data for handling
            this.modalVisible = false;
            console.log("Modal action = " + action);
        }
    }
});