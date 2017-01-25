var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        hideModal: function() {
            console.log('hide modal');
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
            console.log("from child: " + arg);
        }
    }
});