var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        hideModal: function() {
            // emit event to parent
            this.$emit('hide_modal_emit', "argument test");
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
         modalVisible: false,
         zaffriModal: {
             // notify | confirm
             type: "notify",
             // display data
             title: "Notification",
             messageBody: "This is just some example body text.",
             confirmText: "Ok, close"
         }
    },
    methods: {
        showModal: function() {
            this.modalVisible = true;
        },
        hideModal: function(arg) {
            // argument will contain event data for handling
            this.modalVisible = false;
        }
    }
});