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
Add the modal component node to your vue instance's template.

```
<zaffri-modal v-bind:data="modalConfig"></zaffri-modal>
```
* modalConfig - will be the configuration for the modal.

### Step 3.
Next you have to set up options in your vue instance to get the modal working.

* Add "modalVisible" and "zaffriModal" properties to your vue instance. 
* "modalVisible" is a boolean that we are using to conditionally render the modal. And "zaffriModal" is a property containing an object of options for our modal. 

```
var app = new Vue({
    el: "#app",
    data: {
         modalConfig: {
             visible: false,
             type: "confirm",
             title: "Confirmation",
             messageBody: "This is just some example body text.",
             confirmText: "Confirm",
             cancelText: "Cancel"
             callbackData: ...
             confirmCallback: function() {...}
         }
    }
});

###### See "Configuration Properties" below for more details.
```

### Step 4.
The last step is to set up an event handler to initiate (show) your modal.

```
methods: {
    openModal: function() {
        this.modalConfig.visible = true;
    }
}
```

* modalConfig.visible is binded to the component, setting it to true will open up your modal.

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

#### confirmCallback
###### Optional: only set for confirm modals.
The callback is the function that is called when a confirmation modal is closed (cancelled or conofirmed).
