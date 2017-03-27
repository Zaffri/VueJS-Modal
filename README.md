# VueJS Modal Component

Simple modal component. 

Readme Contents
* Modal Features
* How to use
* Configuration Properties

## Modal Features

* Two different modal states; Confirm or Notify types.
* Passes back options args back to parent vue instance, so that you can handle confirm modal.
* CSS transparency to dim screen when modal is shown.

## How to use

### Step 1.
Include the modal src in your project;
* Modal markup (src/modal-markup.html) into your projects HTML file.
* Modal styles (src/css/style.css) to your project.
* Modal JavaScript(src/modal.js) to your project.

### Step 2.
Add the desired type of modal component node to your vue instance's template.

Notify:
```
<zaffri-modal v-bind:data="modalConfig"></zaffri-modal>
```

Confirm:
```
<zaffri-modal v-bind:data="modalConfig" v-on:hide_modal_emit="modalCallback"></zaffri-modal>
```

* modalConfig - will be the configuration for the modal.
* modalCallback - is the name of the method in the parent that will handle your confirm action. 

### Step 3.
Next you have to set up options in your vue instance to get the modal working.

```
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

            // Only required for confirm modal
            cancelText: "Cancel",
            callbackData: {}
         }
    }
});

###### See "Configuration Properties" below for more details.
```

### Step 4.
The last step is to set up an event handler to initiate your modal, and remember to define your callback if you are using the confirm modal.

```
methods: {
    openModal: function(id) {
        // Passing data through
        this.modalConfig.callbackData = {
            id: id
        };
        // Init modal
        this.modalConfig.visible = true;
    },
    modalCallback: function(action) {
        // Handle action
    }
}
```

* modalConfig.visible is binded to the component, setting it to true will open up your modal.
* Accessing your parameters: this.modalConfig.callbackData is available inside your callback function (modalCallback).
* Action variable inside modalCallback is a boolean - true means the user accepted the modal action.

###### Note:- check the example for more details.

## Configuration Properties

#### visible
This is a boolean which determines if the modal is visible.

#### type
There are two types of modals currently; "confirm" and "notify".

#### title
Title is a string which will be displayed as the modal title.

#### messageBody
Message body is the string displayed on the modal as the main text.

#### confirmText
Confirm text is the string that is displayed on the modals confirm button.

#### cancelText
###### Optional: only set for confirm modals.
Cancel text is the string that is displayed on the modals cancel button.

#### callbackData
###### Optional: only set for confirm modals.
Callback data is data passed to the callback function - the second parameter.
