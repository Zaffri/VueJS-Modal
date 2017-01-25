var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data']
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
        }
    }
});