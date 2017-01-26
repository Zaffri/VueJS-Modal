# VueJS Modal Component

Simple modal component.

### Modal Features

* Two different modal states; Confirm or Notify types.
* Passes back options args back to parent vue instance, so that you can handle confirm modal.
* CSS transparency to dim screen when modal is shown.

### How to use

### Step 1.
Include the modal src in your project;
* Add the modal markup (src/modal-markup.html) into your projects HTML file.
* Include the modal styles (src/css/style.css) to your project.
* Add the modal component JavaScript(src/modal.js)  to your project.

### Step 2.
Add the modal component node to your vue instance's template.

```
<zaffri-modal v-if="modalVisible" v-bind:data="zaffriModal" v-on:hide_modal_emit="hideModal"></zaffri-modal>
```
* zaffriModal - this will be the data (modal setup) based from your main vue instance.
* hideModal - is the event that the child calls after closing the modal.

### Step 3.
Next you have to set up options in your vue instance to get the modal working.

* Add "modalVisible" and "zaffriModal" properties to your vue instance. 
* "modalVisible" is a boolean that we are using to conditionally render the modal. And "zaffriModal" is a property containing an object of options for our modal. 

```
data: {
         modalVisible: false,
         zaffriModal: {
             type: "confirm",
             title: "Notification",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",
             cancelText: "Cancel" // for confirm modal type only
         }
    }
    
```
Set the value of your modal options up however you like.

### Step 4.
The last step is to set up methods in your vue instance to control the behaviour of the modal.

```
methods: {
        showModal: function() {
            this.modalVisible = true;
        },
        hideModal: function(action) {
            this.modalVisible = false;
            console.log("Modal action = " + action);
        }
    }
```

* The "showModal" is being used to set our "modalVisible" boolean to true (will open up modal).
* The "hideModal" is being called by the event emitted from the child, to hide our modal.
* Inside "hideModal" you can handle your confirm modals by checking the value of the action arguement. True = the user has confirmed. False = the used has cancelled.

####### Note:- check the example for more details.

