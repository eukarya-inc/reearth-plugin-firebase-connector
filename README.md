# Firebase connector plugin

<img width="1383" src="https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/firebaseConnectorTopImg.png">

## About this plugin

-  This plugin allows you to create marker including infobox with photo. The data is uploaded to Google cloud server. You can download marker data to Re:Earth when you start this plugin. Also you can share uploaded data with other user.
　
## Installation and Settings

### Step 1  Create Google Firebase project
This plugin utlize Google Firebase cloud system to store data so you need to set up "Firebase project" first.

- Open [firebase link](https://console.firebase.google.com) and login using your google accouunt then Welcome page is shown. 
To create firebase project, click "Create a project" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img2.png)

- Entre your project name and checek the check box then click "Continue" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img3.png)

- You can use Google Analytics but it's your choice. In this document, Google Analitics is off then click "Create project" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img4.png)

- Then click "Continue" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img5.png)

- Click "</>" button to create App.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img6.png)

- Enter you App name and click "Register app" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img7.png)

- Copy the parametes to Plugin's right side menu then click "Continue to console" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img8.png)

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img1.png)

 Note:  "Measurement Id" is optional. When you enable "Google Analytics", you will get one.

### Step 2  Create Firestore database
Create Firestore database where your data is stored.

- Select "Firestore database" in left menu panel.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img9.png)

- Then click "Create database" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img10.png)

- Select "Start in production mode" then click "Next" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img11.png)

- Select "Cloud Firestore location" then click "Enable" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img12.png)

- Enable "read, write" in "Rules" tab then click "Publish" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img13.png)

### Step 3  Create Storage
Create "Storage" where your image file is stored. 

- Select "Storage" in left menu then click "Get started" button. 

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img14.png)

- Select "Start in production mode" then click "Next" button. 

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img15.png)

- Confirm the message and click "Done" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img16.png)

- Enable "read, write" in "Rules" tab then click "Publish" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img17.png)

The setting up is completed at this point. Now you should be able to use Firebase connector plugin.

## Operation

### Sending

- Click "Add marker on map" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img20.png)

- Click the map where you want to place marker, then edit "title" and "note" input. Also, you can upload image file(s). Then click "Send" button.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img21.png)

- Your data is stored in Firestore database.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img22.png)

### Viewing

- When you click the marker, you can see the infomation.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img23.png)


### Editing

- Click the "Edit" icon. 

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img24.png)

- After editing data then click "Update" button to updata database.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img25.png)

### Deleting

- Click the "Delete" icon. The data will be removed from database.

   ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/img26.png)

## Test condition
  - OS:Mac OS Montery 12.6.5
  - Browser：Google Chrome 117.0.5938.132

## IMPORTANT NOTIFICATION
-  Above procesure assume Google firebase spark plan so you'll be applied some usage limitation. Please refer [here](https://firebase.google.com/pricing) for farther information.

     ![](https://github.com/eukarya-inc/reearth-plugin-firebase-connector/blob/main/src/imgUsage.png)
