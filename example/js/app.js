var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template"
});

var app = new Vue({
    el: "#app",
    data: {
         modalVisible: false
    },
    methods: {
        showModal: function() {
            console.log('open');
            this.modalVisible = true;
        }
    }
});