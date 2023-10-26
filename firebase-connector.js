reearth.ui.show(
`
<style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  :root {
    --color-background-0: #161616;
    --radius-null: 4px,
      --spacing-smallest: 4px,
      --color-primary-main: #0F62FE
  }

  html,
  body {
    margin: 0;
    height: auto;
    overflow: hidden;
    width: 312px;
    max-width: 312px;
  }

  #wrapper {
    display: block;
    gap: 20px;
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 555px;
    border-radius: 4px;
  }

  /* width */
  /* ::-webkit-scrollbar {
    width: 1px;
  } */

  /* Track */
  ::-webkit-scrollbar-track {
    background: #28272f;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 555px;
  }

  .section .extendedh,
  .extendedh {
    width: 44px;
    cursor: pointer;
  }

  .section .extendedv,
  .extendedv {
    height: 44px;
  }

  #wrapper {
    box-sizing: border-box;
  }

  .extendedh body,
  .extendedh #wrapper {
    width: 44px;
    border-radius: 4px;
  }

  .extendedv body,
  .extendedv #wrapper {
    max-height: 517px;
    height: 44px;
  }

  .height-44 {
    height: 44px;
    width: 44px;
    border-radius: 4px;
  }

  div#main-one {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
    max-width: 312px;
    display: flex;
    color: white;
    flex-direction: row;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #171618;
  }

  p,
  h3,
  span,
  label {
    color: #bfbfbf;
  }

  #title {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    height: 30px;
    background: #161616;
    border-radius: 4px 4px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
  }

  p.title-p {
    margin-top: 12px;
    margin-left: 6px;
  }

  span#logo {
    position: relative;
    top: 2px;
    margin-right: 9px;
  }

  #close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
    left: 124px;
    top: 0px;
    color: #595959;
  }

  #close::after,
  #close::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }

  #close::after {
    transform: rotate(-45deg);
  }

  #closed-logo {
    display: none;
    overflow: hidden;
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-top: 11px;
    margin-left: 12px;
    background: #181618;
    padding: 5px;
    border-radius: 5px;
  }

  /* implement yor custom plugin css here */
  #main-list {
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    align-self: stretch;

    border-radius: var(--radius-null, 0px);
    background: var(--color-background-0, #161616);

    margin-bottom: 12px;
    height: 320px;
    max-height: 320px;
  }

  #main-list-wrapper {
    display: flex;
    height: 276px;
    padding: var(--radius-null, 0px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-small, 8px);
    align-self: stretch;
  }

  .main-list-title {
    color: var(--color-content-main, #E0E0E0);

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  .main-list-list {
    height: 248px;
    max-height: 248px;
    display: flex;
    padding: var(--radius-null, 0px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--radius-null, 0px);
    flex: 1 0 0;
    align-self: stretch;
    border-radius: var(--radius-small, 4px);
    border: 1px solid var(--color-outline-weak, #4D5358);

    overflow: hidden;
    scroll-behavior: auto;
    overflow-y: scroll;
  }

  .main-list-list::-webkit-scrollbar {
    display: none;
  }

  .btn {
    display: flex;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-small, 8px);
    flex: 1 0 0;

    border-radius: var(--radius-small, 4px);
    border: 1px solid var(--color-secondary-main, #4D5358);
    background: var(--color-background-1, #262626);

    /* button */
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    color: var(--color-content-main, #E0E0E0);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* EN/Footnote/description */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #0F62FE;
    color: #FFFFFF;
  }

  #add-marker-btn {
    display: flex;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: var(--radius-small, 4px);
    background: var(--color-primary-main, #0F62FE);
    color: #FFFFFF;

    cursor: pointer;

    /* button */
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }

  #main-detail {
    display: flex;
    padding: 4px 16px 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;

    border-radius: var(--radius-null, 0px);
    background: var(--color-background-0, #161616);
  }

  #main-detail-title {
    display: flex;
    padding: var(--spacing-smallest, 4px) 0px var(--spacing-smallest, 4px) var(--radius-null, 0px);
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: var(--color-primary-main, #0F62FE);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* EN/Footnote/description */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  #send-btn {
    display: flex;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: var(--radius-small, 4px);
    border: 1px solid var(--color-content-weaker, #525252);
    background: var(--color-background-1, #262626);
  }

  #update-btn {
    display: flex;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: var(--radius-small, 4px);
    border: none;
    background: var(--color-primary-main, #0F62FE);

    /* button */
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

    color: var(--color-content-with-background, #FFF);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* EN/Footnote/description */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  #update-btn:hover {
    cursor: pointer;
  }


  .disabled {
    background-color: #161616;
    color: var(--color-content-weaker, #525252);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* EN/Footnote/description */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  .fileData {
    max-height: 20px;
  }

  .label-holder {
    color: var(--color-content-main, #E0E0E0);

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }



  #detail-textarea {
    display: flex;
    height: 108px;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    background-color: var(--color-background-0, #161616);
    color: var(--color-content-main, #E0E0E0);

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */

  }

  .detail-btn {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 8px;
  }

  #detail-name,
  #image-detail-wrapper {
    display: flex;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: var(--radius-small, 4px);
    border: 1px solid var(--color-outline-weak, #4D5358);
    background: var(--color-background-1, #262626);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: var(--color-background-0, #161616);
    color: #E0E0E0;

    overflow: hidden;
    color: var(--color-content-main, #E0E0E0);
    text-overflow: ellipsis;

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */

    max-width: 280px;
    scroll-behavior: auto;
    overflow-x: auto;
    max-height: 28px;
  }

  #lat-lng-wrapper {
    display: flex;
    max-width: 280px;
    scroll-behavior: auto;
    overflow-x: auto;
    background: var(--color-background-1, #262626);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: var(--color-background-0, #161616);
    color: #E0E0E0;
    align-self: stretch;
    align-items: center;
    gap: 10px;
  }

  #detail-lat,
  #detail-lng {
    align-self: stretch;
    padding: var(--spacing-smallest, 4px) var(--spacing-small, 8px);

    border-radius: var(--radius-small, 4px);
    border: 1px solid var(--color-outline-weak, #4D5358);
    background: var(--color-background-1, #262626);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: var(--color-background-0, #161616);
    max-width: 117px;

    overflow: hidden;
    color: var(--color-content-main, #E0E0E0);
    text-overflow: ellipsis;

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  .detail-elm {
    background-color: var(--color-background-0, #161616);
    color: #E0E0E0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-small, 8px);
    align-self: stretch;
  }

  #back-to-list {
    color: var(--color-primary-main, #0F62FE);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;

    /* EN/Footnote/description */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  #main-detail-title:hover {
    cursor: pointer;
  }

  .marker-point {
    display: flex;
    max-width: 252px;
    width: 252px;
    padding: var(--spacing-smallest, 4px) var(--spacing-normal, 12px);
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius-null, 0px);
    color: var(--color-content-main, #E0E0E0);

    /* EN/Property/regular */
    font-family: Noto Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    /* 166.667% */
  }

  .marker-point:hover {
    border-radius: var(--radius-null, 0px);
    border: 1px solid var(--color-outline-weak, #4D5358);
    background: var(--color-background-2, #393939);
  }

  .picked {
    background-color: #0F62FE;
    color: #FFFFFF;
  }

  .picked:hover {
    background-color: #0F62FE;
    color: #FFFFFF;
  }

  .official {
    position: relative;
  }

  .official::before {
    content: "";
    position: absolute;
    top: 1px;
    right: 1px;
    width: 2px;
    text-align: center;
    /* transform: rotate(45deg); */
    /* background: #0F62FE; */
    padding: 2px;
    /* color: #0F62FE; */
    font-size: 8px;
    font-weight: 600;
    height: 6px;
  }

  .control-elm {
    display: flex;
    padding: var(--radius-null, 0px);
    align-items: flex-start;
    gap: var(--spacing-small, 8px);
    border-radius: var(--radius-null, 0px);
  }

  #edit-image,
  #detail-image {
    display: flex;
    flex-direction: row;
    gap: 8px;
    max-height: 24px;
    white-space: nowrap;
  }

  .latlng {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }

  .span-container {
    width: 50%;
  }

  /* end implement yor custom plugin css here */
</style>

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<div class="height-44" id="wrapper">
  <h3 id="title">
    <span id="logo">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.692 5.433 9.317 1.058a.625.625 0 0 0-.442-.183h-7.5a1.25 1.25 0 0 0-1.25 1.25v13.75a1.25 1.25 0 0 0 1.25 1.25h11.25a1.25 1.25 0 0 0 1.25-1.25v-10a.624.624 0 0 0-.183-.442ZM9.5 3.009l2.241 2.241H9.5V3.009Zm3.125 12.866H1.375V2.125H8.25v3.75a.625.625 0 0 0 .625.625h3.75v9.375ZM9.317 9.808a.625.625 0 0 1-.884.884l-.808-.808v3.491a.625.625 0 1 1-1.25 0V9.884l-.808.808a.624.624 0 1 1-.884-.884l1.875-1.875a.625.625 0 0 1 .884 0l1.875 1.875Z"
          fill="#BFBFBF" />
      </svg>
    </span>
    <p class="title-p">Firebase Connector</p>
    <span id="close" data-stt="0"></span>
  </h3>

  <div id="main">
    <div id="main-list">
      <div id="main-list-wrapper">
        <div id="main-list-title" class="main-list-title">
          List
        </div>

        <div id="main-list-list" class="main-list-list">

        </div>
      </div>

      <button id="add-marker-btn" class="btn active">
        Add marker on map
      </button>

    </div>
    <div id="main-detail" style="display: none;" related-id="">
      <div id="main-detail-title">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 9.75L3.75 6L7.5 2.25" stroke="#0F62FE" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span id="back-to-list"> Back to list</span>
      </div>
      <div class="detail-elm">
        <div class="label-holder">Name</div>
        <input id="detail-name" type="text" placeholder="Input Text">
      </div>

      <div class="detail-elm">
        <div class="label-holder latlng">
          <div class="span-container">
            <span>Latitude</span>
          </div>
          <div class="span-container">
            <span>Longitude</span>
          </div>
        </div>
        <div id="lat-lng-wrapper">
          <input id="detail-lat" type="text" placeholder="Latitude">
          <input id="detail-lng" type="text" placeholder="Longitude">
        </div>
      </div>

      <div class="detail-elm">
        <div class="label-holder">Note</div>
        <textarea name="detail-textarea" id="detail-textarea" placeholder="Write down your text"></textarea>
      </div>

      <div class="detail-elm">
        <div class="label-holder">Image</div>
        <div id="image-detail-wrapper">
          <div id="detail-image" type="text" placeholder="...">...

          </div>
          <div id="edit-image"></div>
        </div>

        <div class="detail-btn">
          <button id="screenshot-btn" class="btn"><svg width="13" height="12" viewBox="0 0 13 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 3H1.625M3.5 1.125V9h7.875" stroke="#E0E0E0" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M9.5 7.125V3H5.375M9.5 10.875V9" stroke="#E0E0E0" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <span>Screenshot</span> </button>
          <button id="upload-btn" class="btn">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.531 3.843 6.5 1.875l1.969 1.968M6.5 7.124V1.875m4.125 5.25V9.75a.375.375 0 0 1-.375.375h-7.5a.375.375 0 0 1-.375-.375V7.125"
                stroke="#E0E0E0" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Upload</span>
            <input type="file" style="display: none;">
          </button>
        </div>
      </div>

      <div class="detail-elm">
        <button id="send-btn" class="disabled">Send</button>
      </div>
      <div class="detail-elm" style="display: none;">
        <button id="update-btn">Update</button>
      </div>

      <div></div>
    </div>

    <input type="hidden" id="store-config" apikey="" authdomain="" projectid="" storagebucket="" messagingsenderid=""
      appid="" measurementid="">
    <input type="hidden" id="store-data" title="" lat="" lng="" propertyid="" text="" imgurl="">
    <input type="hidden" id="allow-add-marker" allow-add-marker="false" lat="" lng="" markerId="">
    <input type="hidden" id="edit-mode" edit-mode="false" inEditTab="false">
    <input type="hidden" id="marker-style" mstyle="image" point-color="#FFFFFF" point-size="10" image-url="undefined"
      image-size="1">
  </div>
</div>


<script type="module">
  import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
  import { getFirestore, doc, setDoc, collection, getDocs, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

  import { getStorage, ref, uploadString, getDownloadURL, uploadBytes, getMetadata } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-storage.js";

  //get firebase Configuration
  const configData = document.getElementById("store-config");
  const firebaseConfig = {
    apiKey: configData.getAttribute("apikey"),
    authDomain: configData.getAttribute("authdomain"),
    projectId: configData.getAttribute("projectid"),
    storageBucket: configData.getAttribute("storagebucket"),
    messagingSenderId: configData.getAttribute("messagingsenderid"),
    appId: configData.getAttribute("appid"),
    measurementId: configData.getAttribute("measurementid")
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  function showNotification(notification, color) {
    Toastify({
      text: notification,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, " + color + ", " + color + ")",
      },
    }).showToast();
  }

  //================================================================
  // Helper function to add picked class to selected marker section
  //================================================================
  // function setOpacity(elm,opacity) {
  //   //opaciy is 0, hide: is 1: show
  //   //set all span svg in control-elm class will be styled with opacity 0
  //   const controlElm = elm.querySelector(".control-elm");
  //   // console.log("controlElms: ", controlElm)

  //   // Loop through each element and set the opacity of its child <span> and <svg> elements to 0

  //   const spans = controlElm.getElementsByTagName('span');
  //   const svgs = controlElm.getElementsByTagName('svg');

  //   Array.from(spans).forEach(span => {
  //     span.style.opacity = opacity;
  //   });

  //   Array.from(svgs).forEach(svg => {
  //     svg.style.opacity = opacity;
  //   });
  // }

  function addPickedClass(markerElm) {

    if (markerElm) {
      const allMarkers = document.querySelectorAll(".marker-point");

      allMarkers.forEach((marker) => {
        if (marker !== markerElm) {
          marker.classList.remove("picked");
        }
      })

      // // // // console.log("add picked class to selected marker section")

      markerElm.classList.add("picked");

    } else {
      const allMarkers = document.querySelectorAll(".marker-point");

      allMarkers.forEach((marker) => {
        if (marker !== markerElm) {
          marker.classList.remove("picked");
        }
      })
    }

  }
  //================================================================

  const addMarkerBtn = document.getElementById("add-marker-btn");
  const allowAddMarkerElm = document.getElementById("allow-add-marker");
  const screenShotBtn = document.getElementById("screenshot-btn");
  const uploadBtn = document.getElementById("upload-btn");
  const sendBtn = document.getElementById("send-btn");
  const updateBtn = document.getElementById("update-btn");
  const fileInput = uploadBtn.querySelector("input[type=file]");
  const detailImage = document.getElementById("detail-image");
  const editImage = document.getElementById("edit-image");
  const editMode = document.getElementById("edit-mode");
  const backToList = document.getElementById("main-detail-title");

  const mainList = document.getElementById("main-list");
  const mainDetail = document.getElementById("main-detail");

  const markerStyle = document.getElementById("marker-style");

  let file;
  let files = [];

  //================================================================
  // Handle add marker from firestore database to marker list
  //================================================================
  function addNewMarkerFromFBToMarkerList(marker) {
    // // // // console.log("add from db to list: ", marker);
    const markerList = document.getElementById("main-list-list");

    const markerElm = document.createElement("div");
    markerElm.classList.add("marker-point");
    markerElm.classList.add("official");

    markerElm.id = marker.rid;

    const titleElm = document.createElement("div");
    titleElm.classList.add("marker-title");
    titleElm.textContent = marker.title || "Marker";

    const controlElm = document.createElement("div");
    controlElm.classList.add("control-elm");
    const editElm = document.createElement("span");

    const svgEditElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEditElm.setAttribute("width", "12");
    svgEditElm.setAttribute("height", "12");
    svgEditElm.setAttribute("viewBox", "0 0 12 12");
    svgEditElm.setAttribute("fill", "none");
    svgEditElm.style.opacity = "0";

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M4.5 10.126H2.25a.375.375 0 0 1-.375-.375V7.656a.375.375 0 0 1 .11-.265L7.61 1.766a.375.375 0 0 1 .53 0l2.095 2.095a.375.375 0 0 1 0 .53L4.5 10.126Z");
    path1.setAttribute("stroke", "#6F6F6F");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path1);

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M10.125 10.125H4.5L1.898 7.523");
    path2.setAttribute("stroke", "#6F6F6F");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path2);

    // Event listener for hover effect
    svgEditElm.addEventListener("mouseenter", () => {
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");
      svgEditElm.style.cursor = "pointer";
    })

    svgEditElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      }
      else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    })

    markerElm.addEventListener("mouseenter", () => {
      svgEditElm.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      } else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgEditElm.style.opacity = "1";
      } else {
        svgEditElm.style.opacity = "0";
      }
    });

    editElm.textContent = "";
    editElm.appendChild(svgEditElm);


    editElm.addEventListener("click", () => {
      //go to edit screen
      const mainList = document.getElementById("main-list");
      const mainDetail = document.getElementById("main-detail");
      //hide main marker list
      mainList.style.display = "none";

      //show detail marker
      mainDetail.style.display = "flex";

      //set edit attribute true
      editMode.setAttribute("edit-mode", "true");

    })

    const deleteElm = document.createElement("span");
    const svgNS = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(svgNS, "svg");
    svgElem.setAttribute("width", "12");
    svgElem.setAttribute("height", "12");
    svgElem.setAttribute("viewBox", "0 0 12 12");
    svgElem.setAttribute("fill", "none");
    // Initially hide the SVG by setting its opacity to 0
    svgElem.style.opacity = "0";

    const path12 = document.createElementNS(svgNS, "path");
    path12.setAttribute("d", "M10.125 2.625L1.875 2.62501");
    path12.setAttribute("stroke", "#6F6F6F");
    path12.setAttribute("stroke-linecap", "round");
    path12.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path12);

    const path22 = document.createElementNS(svgNS, "path");
    path22.setAttribute("d", "M4.875 4.875V7.875");
    path22.setAttribute("stroke", "#6F6F6F");
    path22.setAttribute("stroke-linecap", "round");
    path22.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path22);

    const path32 = document.createElementNS(svgNS, "path");
    path32.setAttribute("d", "M7.125 4.875V7.875");
    path32.setAttribute("stroke", "#6F6F6F");
    path32.setAttribute("stroke-linecap", "round");
    path32.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path32);

    const path42 = document.createElementNS(svgNS, "path");
    path42.setAttribute("d", "M9.375 2.625V9.75C9.375 9.84946 9.33549 9.94484 9.26517 10.0152C9.19484 10.0855 9.09946 10.125 9 10.125H3C2.90054 10.125 2.80516 10.0855 2.73484 10.0152C2.66451 9.94484 2.625 9.84946 2.625 9.75V2.625");
    path42.setAttribute("stroke", "#6F6F6F");
    path42.setAttribute("stroke-linecap", "round");
    path42.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path42);

    const path52 = document.createElementNS(svgNS, "path");
    path52.setAttribute("d", "M7.875 2.625V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125H4.875C4.67609 1.125 4.48532 1.20402 4.34467 1.34467C4.20402 1.48532 4.125 1.67609 4.125 1.875V2.625");
    path52.setAttribute("stroke", "#6F6F6F");
    path52.setAttribute("stroke-linecap", "round");
    path52.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path52);

    // Event listener for hover effect
    svgElem.addEventListener("mouseenter", () => {
      svgElem.style.cursor = "pointer";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");
    })

    svgElem.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    })



    markerElm.addEventListener("mouseenter", () => {
      svgElem.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgElem.style.opacity = "1";
      } else {
        svgElem.style.opacity = "0";
      }
    });

    deleteElm.appendChild(svgElem);

    deleteElm.addEventListener("click", () => {
      //delete selected marker
      markerList.removeChild(markerElm);

      //remove that marker on re-earth
      // // // // console.log("delete official marker!", markerElm.id);
      deleteMarker(markerElm.id);
    })

    controlElm.appendChild(editElm);
    controlElm.appendChild(deleteElm);

    markerElm.appendChild(titleElm);
    markerElm.appendChild(controlElm);


    markerElm.addEventListener("click", async (e) => {
      e.stopPropagation();

      //update db
      const dbAfterUpdate = await getDocs(collection(db, "reports"));
      dbAfterUpdate.forEach((doc) => {
        // // // // console.log("after update", doc.id, " => ", doc.data());
        // // // // console.log("zo update here!")
        if (doc.id === markerElm.id) {
          addGetMarkerDataToDetailSection(doc);

          // // // console.log("edit here 1075")

          // // // console.log(doc.id, doc.data());
          //select the marker layer

          const markerInReearth2 = reearth.layers.findAll(
            layer => layer.type === "marker" && layer.title === "Report Marker" && layer.isVisible === true && layer.infobox && layer.infobox.blocks[0].property.default.text === doc.data().note && layer.property.default.location.lat === doc.data().lat && layer.property.default.location.lng === doc.data().lng && layer.infobox.property.default.title == doc.data().title && layer.infobox.property.default.propertyId == doc.data().id
          );

          // // // console.log("markerInReearth.id 2: ", markerInReearth2);

          for (let i = 0; i < markerInReearth2.length; i++) {
            const imageUrls = markerInReearth2[i].infobox.blocks.filter(item => item.extensionId === 'imageblock')
              .map(item => item.property.default.image);

            // // // console.log(imageUrls, compareArrays(imageUrls, doc.data().url))

            if (compareArrays(imageUrls, doc.data().url) === true) {
              reearth.layers.select(markerInReearth2[i].id);
            } else {
              reearth.layers.hide(markerInReearth2[i].id);
            }
          }
        }
      })

      // // // console.log("edit x- 1064")


      addPickedClass(markerElm);



      // // // console.log("it here 2")

      const allSvgElms = $(".control-elm span svg").toArray();

      // // // // console.log(allSvgElms)

      allSvgElms.forEach(function (svgElement) {
        // Do something with each SVG element
        svgElement.style.opacity = "0";
      });

      svgElem.style.opacity = "1";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");

      svgEditElm.style.opacity = "1";
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");


    })

    markerList.appendChild(markerElm);
  }
  //================================================================

  //================================================================
  // Handle reset to default state
  //================================================================
  function resetToDefaultState() {
    file = null;
    files = [];
    allowAddMarkerElm.setAttribute("allow-add-marker", "false");
    editImage.innerHTML = "";
  }
  //================================================================

  //================================================================
  // Handle add get marker data to detail section
  //================================================================
  function addGetMarkerDataToDetailSection(marker) {
    // // // // console.log("OFFICIAL from FB: ", marker.id, marker.data());

    const detailName = document.getElementById("detail-name");
    detailName.innerHTML = "";
    detailName.classList.add("marker-title");
    detailName.textContent = marker.data().title || "Marker";
    detailName.value = marker.data().title;

    const mainDetailSection = document.getElementById("main-detail");
    mainDetailSection.setAttribute("related-id", marker.id);

    // // // // console.log(marker.rid, doc.id, doc.data());
    const storeData = document.getElementById("store-data");
    // // // console.log("IT WILL SET HERE");
    storeData.setAttribute("title", marker.data().title);
    storeData.setAttribute("lat", marker.data().lat);
    storeData.setAttribute("lng", marker.data().lng);
    storeData.setAttribute("propertyid", marker.id);
    storeData.setAttribute("text", marker.data().note);
    storeData.setAttribute("imgurl", marker.data().url);

    const detailLat = document.getElementById("detail-lat");
    detailLat.innerHTML = "";
    detailLat.textContent = marker.data().lat;
    detailLat.value = marker.data().lat;
    detailLat.disabled = false;
    detailLat.style.backgroundColor = "#161616";

    const detailLng = document.getElementById("detail-lng");
    detailLng.innerHTML = "";
    detailLng.textContent = marker.data().lng;
    detailLng.value = marker.data().lng;
    detailLng.disabled = false;
    detailLng.style.backgroundColor = "#161616";

    const detailTextarea = document.getElementById("detail-textarea");
    detailTextarea.innerHTML = "";
    detailTextarea.textContent = marker.data().note;
    detailTextarea.value = marker.data().note;
    const detailImage = document.getElementById("detail-image");
    detailImage.innerHTML = "";
    if (marker.data().url.length > 0) {
      detailImage.innerHTML = "";
      marker.data().url.map((url, idx) => {
        const urlDiv = document.createElement("div");
        urlDiv.style.border = "1px solid #4D5358";
        urlDiv.style.borderRadius = "4px";
        urlDiv.setAttribute("urlImg", url);
        urlDiv.textContent = "Image " + (idx + 1);
        urlDiv.style.backgroundColor = "#393939";

        // Create and append the remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", removeImage);
        urlDiv.appendChild(removeButton);

        detailImage.appendChild(urlDiv);
      })
    } else {
      detailImage.textContent = "Image";
    }

    if (marker.id && marker.data()) {
      updateBtn.parentElement.style.display = "flex";
      sendBtn.parentElement.style.display = "none";
    } else {
      updateBtn.parentElement.style.display = "none";
      sendBtn.parentElement.style.display = "flex";
    }

  }

  function removeImage(e) {
    const element = e.target.parentElement;
    element.remove();
  }
  //================================================================



  //================================================================
  // Handle add marker events 
  //================================================================
  addMarkerBtn.addEventListener("click", () => {
    // // // // console.log("add marker btn clicked");
    mainList.classList.remove('active');
    mainDetail.classList.add('active');

    showNotification("Please click on the map to add marker", "#00B68D");

    if (mainDetail.classList.contains('active')) {
      // Perform your action here when in tab2
      allowAddMarkerElm.setAttribute("allow-add-marker", "true");
    }

    //hide main marker list
    mainList.style.display = "none";

    //show detailed marker
    mainDetail.style.display = "flex";

    //reset marker detail
    addPickedClass(null);
    reearth.layers.select(null);
    // // // console.log("it here 3")

    const marker = {
      data: function () {
        return {
          title: "Marker 1",
          lat: "",
          lng: "",
          note: "",
          url: "",
        }
      }
    }
    enableButton(sendBtn);
    addGetMarkerDataToDetailSection(marker);


    //when add new marker, edit mode
  });
  //================================================================


  //================================================================
  // Handle back to list click 
  //================================================================
  backToList.addEventListener("click", () => {
    //hide detailed marker
    mainDetail.style.display = "none";

    //show main marker list
    mainList.style.display = "flex";

    mainDetail.classList.remove('active');
    mainList.classList.add('active');

    allowAddMarkerElm.setAttribute("allow-add-marker", "false");

  });
  //================================================================


  //================================================================
  // Handle screenshot button functionality
  //================================================================
  screenShotBtn.addEventListener("click", () => {
    let isRequestingMap = false;
    if (!isRequestingMap) {
      const fileName = "capture.png";
      const link = document.createElement("a");
      link.download = fileName;
      link.href = reearth.scene.captureScreen();
      link.click();
      link.remove();
      isRequestingMap = true;
    }
  });

  //================================================================


  //================================================================
  // Handle Upload button functionality
  //================================================================
  uploadBtn.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function (e) {
    // Access the selected file using 'fileInput.files[0]'
    const file = fileInput.files[0];

    const allowedExtensions = ['svg', 'png', 'jpg', 'jpeg', 'avif', 'webp', 'gif'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      addFile(file);
    } else {
      showNotification("Please select a valid image file (SVG, PNG, AVIF, WEBP, GIF or JPG/JPEG)", "#FF3C53");
    }

    fileInput.value = null; // Reset the file input field to allow selecting the same file again
  });


  function addFile(file) {
    const fileExists = files.some((existingFile) =>
      existingFile.name === file.name && existingFile.size === file.size && existingFile.type === file.type
    );

    if (!fileExists) {
      files.push(file);

      let imageData = document.createElement("span");
      imageData.className = "filedata";
      imageData.style.display = "block";
      imageData.innerHTML = file.name;
      imageData.style.border = "1px solid #4D5358";
      imageData.style.borderRadius = "4px";
      imageData.style.backgroundColor = "#393939";

      // Create and append the remove button
      let removeButton = document.createElement("button");
      removeButton.textContent = "x";
      removeButton.className = "remove-btn";
      removeButton.addEventListener("click", removeFile);
      imageData.appendChild(removeButton);

      editImage.appendChild(imageData);

      // // // // console.log("files: ", files)
    }
  }

  function removeFile(event) {
    const fileElement = event.target.parentElement;
    const fileIndex = Array.from(fileElement.parentNode.children).indexOf(fileElement);

    files.splice(fileIndex, 1); // Remove the file from the array

    fileElement.remove(); // Remove the corresponding file element from the DOM

    // // // // console.log("files: ", files)
  }


  //================================================================


  //================================================================
  // Handle get data from firebase database & create initial marker
  //================================================================
  const dbData = await getDocs(collection(db, "reports"));
  dbData.forEach((doc) => {
    // // // // console.log(doc.id, " => ", doc.data());



    let newId;
    if (doc.data().lat && doc.data().lng) {
      if (Array.isArray(doc.data().url) && doc.data().url.length > 0) {
        let imageValue;

        if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
          imageValue = undefined;
        } else {
          imageValue = doc.data().imageUrl;
        }

        newId = reearth.layers.add({
          extensionId: "marker",
          isVisible: true,
          title: "Report Marker",
          property: {
            default: {
              // image: doc.data().url,
              clampToGround: true,
              location: {
                lat: doc.data().lat,
                lng: doc.data().lng
              },
              style: doc.data().mstyle,
              image: imageValue,
              imageSize: parseFloat(doc.data().imageSize) ?? 1,
              pointColor: doc.data().pointColor ?? "#FFFFFF",
              pointSize: doc.data().pointSize ?? 10,
              label: true,
            },
          },
          infobox: {
            blocks: [
              {
                extensionId: "textblock",
                pluginId: "reearth",
                property: {
                  default: {
                    text: doc.data().note || "",
                    markdown: true,
                  }
                },
                propertyId: doc.id,
              },
              ...doc.data().url.map((imageUrl) => ({
                extensionId: "imageblock",
                pluginId: "reearth",
                property: {
                  default: {
                    image: imageUrl || "",
                    imageSize: "contain"
                  }
                },
                propertyId: doc.id,
              })),

            ],
            property: {
              default: {
                title: doc.data().title,
                propertyId: doc.id,
              },
            },
          },
          type: "marker",
        });
      } else {
        let imageValue;

        if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
          imageValue = undefined;
        } else {
          imageValue = doc.data().imageUrl;
        }
        newId = reearth.layers.add({
          extensionId: "marker",
          isVisible: true,
          title: "Report Marker",
          property: {
            default: {
              // image: doc.data().url,
              clampToGround: true,
              location: {
                lat: doc.data().lat,
                lng: doc.data().lng
              },
              style: doc.data().mstyle,
              image: imageValue,
              imageSize: parseFloat(doc.data().imageSize) ?? 1,
              pointColor: doc.data().pointColor ?? "#FFFFFF",
              pointSize: doc.data().pointSize ?? 10,
              label: true,
            },
          },
          infobox: {
            blocks: [
              {
                extensionId: "textblock",
                pluginId: "reearth",
                property: {
                  default: {
                    text: doc.data().note || "",
                    markdown: true,
                  }
                },
                propertyId: doc.id,
              },
            ],
            property: {
              default: {
                title: doc.data().title,
                propertyId: doc.id,
              },
            },
          },
          type: "marker",
        });
      }
    }

    //add marker to list function
    addMarkerFromFBToMarkerList(doc, newId);
    // add marker layer on reearth
  })
  //================================================================

  //================================================================
  // Handle add marker from firestore database to marker list
  //================================================================
  function addMarkerFromFBToMarkerList(marker, newId) {
    // // // // console.log("add from db to list: ", marker);
    const markerList = document.getElementById("main-list-list");

    const markerElm = document.createElement("div");
    markerElm.classList.add("marker-point");
    markerElm.classList.add("official");

    markerElm.id = marker.id;

    const titleElm = document.createElement("div");
    titleElm.classList.add("marker-title");
    titleElm.textContent = marker.data().title || "Marker";

    const controlElm = document.createElement("div");
    controlElm.classList.add("control-elm");
    const editElm = document.createElement("span");

    const svgEditElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEditElm.setAttribute("width", "12");
    svgEditElm.setAttribute("height", "12");
    svgEditElm.setAttribute("viewBox", "0 0 12 12");
    svgEditElm.setAttribute("fill", "none");
    svgEditElm.style.opacity = "0";

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M4.5 10.126H2.25a.375.375 0 0 1-.375-.375V7.656a.375.375 0 0 1 .11-.265L7.61 1.766a.375.375 0 0 1 .53 0l2.095 2.095a.375.375 0 0 1 0 .53L4.5 10.126Z");
    path1.setAttribute("stroke", "#6F6F6F");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path1);

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M10.125 10.125H4.5L1.898 7.523");
    path2.setAttribute("stroke", "#6F6F6F");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path2);

    // Event listener for hover effect
    svgEditElm.addEventListener("mouseenter", () => {
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");
      svgEditElm.style.cursor = "pointer";
    })

    svgEditElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      }
      else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    })

    markerElm.addEventListener("mouseenter", () => {
      svgEditElm.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      } else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgEditElm.style.opacity = "1";
      } else {
        svgEditElm.style.opacity = "0";
      }
    });

    editElm.textContent = "";
    editElm.appendChild(svgEditElm);


    editElm.addEventListener("click", () => {
      //go to edit screen
      const mainList = document.getElementById("main-list");
      const mainDetail = document.getElementById("main-detail");
      //hide main marker list
      mainList.style.display = "none";

      //show detail marker
      mainDetail.style.display = "flex";

      //set edit attribute true
      editMode.setAttribute("edit-mode", "true");

    })

    const deleteElm = document.createElement("span");
    const svgNS = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(svgNS, "svg");
    svgElem.setAttribute("width", "12");
    svgElem.setAttribute("height", "12");
    svgElem.setAttribute("viewBox", "0 0 12 12");
    svgElem.setAttribute("fill", "none");
    // Initially hide the SVG by setting its opacity to 0
    svgElem.style.opacity = "0";

    const path12 = document.createElementNS(svgNS, "path");
    path12.setAttribute("d", "M10.125 2.625L1.875 2.62501");
    path12.setAttribute("stroke", "#6F6F6F");
    path12.setAttribute("stroke-linecap", "round");
    path12.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path12);

    const path22 = document.createElementNS(svgNS, "path");
    path22.setAttribute("d", "M4.875 4.875V7.875");
    path22.setAttribute("stroke", "#6F6F6F");
    path22.setAttribute("stroke-linecap", "round");
    path22.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path22);

    const path32 = document.createElementNS(svgNS, "path");
    path32.setAttribute("d", "M7.125 4.875V7.875");
    path32.setAttribute("stroke", "#6F6F6F");
    path32.setAttribute("stroke-linecap", "round");
    path32.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path32);

    const path42 = document.createElementNS(svgNS, "path");
    path42.setAttribute("d", "M9.375 2.625V9.75C9.375 9.84946 9.33549 9.94484 9.26517 10.0152C9.19484 10.0855 9.09946 10.125 9 10.125H3C2.90054 10.125 2.80516 10.0855 2.73484 10.0152C2.66451 9.94484 2.625 9.84946 2.625 9.75V2.625");
    path42.setAttribute("stroke", "#6F6F6F");
    path42.setAttribute("stroke-linecap", "round");
    path42.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path42);

    const path52 = document.createElementNS(svgNS, "path");
    path52.setAttribute("d", "M7.875 2.625V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125H4.875C4.67609 1.125 4.48532 1.20402 4.34467 1.34467C4.20402 1.48532 4.125 1.67609 4.125 1.875V2.625");
    path52.setAttribute("stroke", "#6F6F6F");
    path52.setAttribute("stroke-linecap", "round");
    path52.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path52);

    // Event listener for hover effect
    svgElem.addEventListener("mouseenter", () => {
      svgElem.style.cursor = "pointer";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");
    })

    svgElem.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    })



    markerElm.addEventListener("mouseenter", () => {
      svgElem.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgElem.style.opacity = "1";
      } else {
        svgElem.style.opacity = "0";
      }
    });

    deleteElm.appendChild(svgElem);

    deleteElm.addEventListener("click", () => {
      //delete selected marker
      markerList.removeChild(markerElm);

      //remove that marker on re-earth
      // // // // console.log("delete official marker!", markerElm.id);
      deleteMarker(markerElm.id);
    })

    controlElm.appendChild(editElm);
    controlElm.appendChild(deleteElm);

    markerElm.appendChild(titleElm);
    markerElm.appendChild(controlElm);


    markerElm.addEventListener("click", async (e) => {
      e.stopPropagation();

      // // // console.log("1675");

      // // // // console.log("new id", newId)
      reearth.layers.select(newId);
      // // // console.log("it here 4")

      //update db
      const dbAfterUpdate = await getDocs(collection(db, "reports"));
      dbAfterUpdate.forEach((doc) => {
        if (doc.id === marker.id) {
          // // // console.log("edit db after update");
          // // // console.log("after update", doc.id, " => ", doc.data());

          addGetMarkerDataToDetailSection(doc);

          // // // console.log("is doc id correct: ", doc.id, doc.data());

          const markerInReearth = reearth.layers.find(
            layer => layer.type === "marker" && layer.title === "Report Marker" && layer.infobox.property.default.propertyId === markerElm.id && layer.isVisible === true && layer.infobox.property.default.title === document.getElementById(markerElm.id).textContent && layer.infobox.blocks[0].property.default.text === doc.data().note && layer.infobox.property.default.title === doc.data().title
          );

          // // // console.log("markerInReearth.id HÂHHA: ", markerInReearth.id)
          reearth.layers.select(markerInReearth.id);
          // // // console.log("it here 5")
        }
      })


      addPickedClass(markerElm);



      const allSvgElms = $(".control-elm span svg").toArray();

      // // // // console.log(allSvgElms)

      allSvgElms.forEach(function (svgElement) {
        // Do something with each SVG element
        svgElement.style.opacity = "0";
      });

      svgElem.style.opacity = "1";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");

      svgEditElm.style.opacity = "1";
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");


    })

    markerList.appendChild(markerElm);
  }
  //================================================================



  //================================================================
  // Handle SEND button functionality // SEND data to firebase
  //================================================================
  sendBtn.addEventListener("click", () => {

    // // // // console.log("send button is clicked!");

    try {
      if (!app._options.apiKey || !app._options.authDomain || !app._options.projectId || !app._options.storageBucket || !app._options.messagingSenderId || !app._options.appId) {
        showNotification("Can't connect to firebase!", "#FF3C53")
      } else {

        const pickedMarker = document.querySelector(".picked");

        const lat = document.getElementById("detail-lat").value;
        const lng = document.getElementById("detail-lng").value;
        const detailName = document.getElementById("detail-name");
        const detailTextarea = document.getElementById("detail-textarea");

        const title = detailName.value;
        const note = detailTextarea.value;
        const currentDate = new Date();

        //get the marker type
        const mstyle = markerStyle.getAttribute("mstyle");
        const pointColor = markerStyle.getAttribute("point-color");
        const pointSize = parseFloat(markerStyle.getAttribute("point-size"));
        const imageSize = parseFloat(markerStyle.getAttribute("image-size"));
        const imageUrl = markerStyle.getAttribute("image-url");


        let marker;
        if (pickedMarker) {
          marker = {
            rid: pickedMarker.id,
            title: title,
            lat: lat,
            lng: lng,
            note: note,
            dateTime: currentDate.toString(),
            mstyle: mstyle,
            pointColor: pointColor,
            pointSize: pointSize,
            imageSize: imageSize,
            imageUrl: imageUrl,
          }
        } else {
          marker = {
            rid: "firebase" + uuidv4(),
            title: title,
            lat: lat,
            lng: lng,
            note: note,
            dateTime: currentDate.toString(),
            mstyle: mstyle,
            pointColor: pointColor,
            pointSize: pointSize,
            imageSize: imageSize,
            imageUrl: imageUrl
          }
        }


        if (!title || !note || !lat || !lng) {
          showNotification("Please fill in all the fields.", "#FF3C53");
        } else {
          sendBtn.textContent = "Sending";
          sendMarkerData(marker);
        }
      }
    } catch (e) {
      showNotification(e, "#FF3C53")
    }
  });

  async function sendMarkerData(marker) {
    // // // // console.log("send marker data success: ", marker);

    const storage = getStorage();
    const docRef = doc(db, "reports", uuidv4());

    const imageUploadURLs = [];
    for (const file of files) {
      const storageRef = ref(storage, uuidv4());
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      imageUploadURLs.push(downloadURL);
    }

    const data = {
      ...marker,
      url: imageUploadURLs,
    }

    // // // // console.log("send data: ", data);

    await setDoc(docRef, {
      ...marker,
      url: imageUploadURLs,
    });

    if (marker.rid.includes("firebase")) {
      //create a market in list
      // // // // console.log("create in list: ", marker);
      addNewMarkerFromFBToMarkerList(marker);

    } else {
      const successSendMarker = document.getElementById(marker.rid);
      successSendMarker.classList.remove("pending");
      successSendMarker.classList.add("official");
    }

    showNotification("Data has been sent successfully!", "#00B68D");
    sendBtn.parentElement.style.display = "none";
    updateBtn.parentElement.style.display = "flex";
    updateBtn.classList.remove("disabled");
    enableButton(updateBtn);


    sendBtn.textContent = "Send";
    resetToDefaultState();


    //firebase store update after successful send
    //TODO: check the new marker just send, then update the id in marker list, also add marker on reearth with infobox
    const dbAfterSuccessSend = await getDocs(collection(db, "reports"));
    dbAfterSuccessSend.forEach((doc) => {
      // // // // console.log("db after send : ", doc.id, " => ", doc.data());

      const newLat = parseFloat(marker.lat);
      const newLng = parseFloat(marker.lng);
      // // // // console.log("edit 10");

      if (parseFloat(doc.data().lat) === newLat && parseFloat(doc.data().lng) === newLng) {
        // document.getElementById(marker.rid).textContent = doc.data().title;
        document.getElementById(marker.rid).id = doc.id;
        const mainDetailSection = document.getElementById("main-detail");
        mainDetailSection.setAttribute("related-id", doc.id);

        // // // // console.log(marker.rid, doc.id, doc.data());
        // // // console.log("IT WILL SET AFTER SUCCESS SEND");
        const storeData = document.getElementById("store-data");
        storeData.setAttribute("title", doc.data().title);
        storeData.setAttribute("lat", doc.data().lat);
        storeData.setAttribute("lng", doc.data().lng);
        storeData.setAttribute("propertyid", doc.id);
        storeData.setAttribute("text", doc.data().note);
        storeData.setAttribute("imgurl", doc.data().url)


        if (doc.data().url.length > 0) {
          detailImage.innerHTML = "";
          doc.data().url.map((url, idx) => {
            const urlDiv = document.createElement("div");
            urlDiv.style.border = "1px solid #4D5358";
            urlDiv.style.borderRadius = "4px";
            urlDiv.setAttribute("urlImg", url);
            urlDiv.textContent = "Image " + (idx + 1);
            urlDiv.style.backgroundColor = "#393939"
            detailImage.appendChild(urlDiv);
          })
        } else {
          detailImage.textContent = "...";
        }

        //css new success marker
        const newElm = document.getElementById(doc.id);
        newElm.innerHTML = "";

        const titleElm = document.createElement("div");
        titleElm.textContent = doc.data().title || "Marker";
        titleElm.classList.add("marker-title");

        // newElm.appendChild(titleElm);

        const controlElm = document.createElement("div");
        controlElm.classList.add("control-elm");
        const editElm = document.createElement("span");

        const svgEditElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgEditElm.setAttribute("width", "12");
        svgEditElm.setAttribute("height", "12");
        svgEditElm.setAttribute("viewBox", "0 0 12 12");
        svgEditElm.setAttribute("fill", "none");
        svgEditElm.style.opacity = "1";

        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M4.5 10.126H2.25a.375.375 0 0 1-.375-.375V7.656a.375.375 0 0 1 .11-.265L7.61 1.766a.375.375 0 0 1 .53 0l2.095 2.095a.375.375 0 0 1 0 .53L4.5 10.126Z");
        path1.setAttribute("stroke", "#FFFFFF");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-linejoin", "round");
        svgEditElm.appendChild(path1);

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M10.125 10.125H4.5L1.898 7.523");
        path2.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke-linecap", "round");
        path2.setAttribute("stroke-linejoin", "round");
        svgEditElm.appendChild(path2);

        // Event listener for hover effect
        svgEditElm.addEventListener("mouseenter", () => {
          path1.setAttribute("stroke", "#FFFFFF");
          path2.setAttribute("stroke", "#FFFFFF");
          svgEditElm.style.cursor = "pointer";
        })

        svgEditElm.addEventListener("mouseleave", () => {
          if (newElm.classList.contains("picked")) {
            path1.setAttribute("stroke", "#FFFFFF");
            path2.setAttribute("stroke", "#FFFFFF");
          }
          else {
            path1.setAttribute("stroke", "#6F6F6F");
            path2.setAttribute("stroke", "#6F6F6F");
          }

        })

        newElm.addEventListener("mouseenter", () => {
          svgEditElm.style.opacity = "1";

          if (newElm.classList.contains("picked")) {
            path1.setAttribute("stroke", "#FFFFFF");
            path2.setAttribute("stroke", "#FFFFFF");
          } else {
            path1.setAttribute("stroke", "#6F6F6F");
            path2.setAttribute("stroke", "#6F6F6F");
          }

        });

        newElm.addEventListener("mouseleave", () => {
          if (newElm.classList.contains("picked")) {
            svgEditElm.style.opacity = "1";
          } else {
            svgEditElm.style.opacity = "0";
          }
        });

        editElm.textContent = "";
        editElm.appendChild(svgEditElm);


        editElm.addEventListener("click", async () => {
          //go to edit screen
          const mainList = document.getElementById("main-list");
          const mainDetail = document.getElementById("main-detail");
          //hide main marker list
          mainList.style.display = "none";

          //show detail marker
          mainDetail.style.display = "flex";
          // // // // console.log("GO 1597", doc.id);
          // addGetMarkerDataToDetailSection(doc);
          //UPDATE AFTER SEND SUCCESS

          // // // // console.log("edit 2");

        })

        const deleteElm = document.createElement("span");
        const svgNS = "http://www.w3.org/2000/svg";
        const svgElem = document.createElementNS(svgNS, "svg");
        svgElem.setAttribute("width", "12");
        svgElem.setAttribute("height", "12");
        svgElem.setAttribute("viewBox", "0 0 12 12");
        svgElem.setAttribute("fill", "none");
        // Initially hide the SVG by setting its opacity to 0
        svgElem.style.opacity = "1";

        const path12 = document.createElementNS(svgNS, "path");
        path12.setAttribute("d", "M10.125 2.625L1.875 2.62501");
        path12.setAttribute("stroke", "#FFFFFF");
        path12.setAttribute("stroke-linecap", "round");
        path12.setAttribute("stroke-linejoin", "round");
        svgElem.appendChild(path12);

        const path22 = document.createElementNS(svgNS, "path");
        path22.setAttribute("d", "M4.875 4.875V7.875");
        path22.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke-linecap", "round");
        path22.setAttribute("stroke-linejoin", "round");
        svgElem.appendChild(path22);

        const path32 = document.createElementNS(svgNS, "path");
        path32.setAttribute("d", "M7.125 4.875V7.875");
        path32.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke-linecap", "round");
        path32.setAttribute("stroke-linejoin", "round");
        svgElem.appendChild(path32);

        const path42 = document.createElementNS(svgNS, "path");
        path42.setAttribute("d", "M9.375 2.625V9.75C9.375 9.84946 9.33549 9.94484 9.26517 10.0152C9.19484 10.0855 9.09946 10.125 9 10.125H3C2.90054 10.125 2.80516 10.0855 2.73484 10.0152C2.66451 9.94484 2.625 9.84946 2.625 9.75V2.625");
        path42.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke-linecap", "round");
        path42.setAttribute("stroke-linejoin", "round");
        svgElem.appendChild(path42);

        const path52 = document.createElementNS(svgNS, "path");
        path52.setAttribute("d", "M7.875 2.625V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125H4.875C4.67609 1.125 4.48532 1.20402 4.34467 1.34467C4.20402 1.48532 4.125 1.67609 4.125 1.875V2.625");
        path52.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke-linecap", "round");
        path52.setAttribute("stroke-linejoin", "round");
        svgElem.appendChild(path52);

        // Event listener for hover effect
        svgElem.addEventListener("mouseenter", () => {
          svgElem.style.cursor = "pointer";

          path12.setAttribute("stroke", "#FFFFFF");
          path22.setAttribute("stroke", "#FFFFFF");
          path32.setAttribute("stroke", "#FFFFFF");
          path42.setAttribute("stroke", "#FFFFFF");
          path52.setAttribute("stroke", "#FFFFFF");
        })

        svgElem.addEventListener("mouseleave", () => {
          if (newElm.classList.contains("picked")) {
            path12.setAttribute("stroke", "#FFFFFF");
            path22.setAttribute("stroke", "#FFFFFF");
            path32.setAttribute("stroke", "#FFFFFF");
            path42.setAttribute("stroke", "#FFFFFF");
            path52.setAttribute("stroke", "#FFFFFF");
          } else {
            path12.setAttribute("stroke", "#6F6F6F");
            path22.setAttribute("stroke", "#6F6F6F");
            path32.setAttribute("stroke", "#6F6F6F");
            path42.setAttribute("stroke", "#6F6F6F");
            path52.setAttribute("stroke", "#6F6F6F");
          }

        })



        newElm.addEventListener("mouseenter", () => {
          svgElem.style.opacity = "1";

          if (newElm.classList.contains("picked")) {
            path12.setAttribute("stroke", "#FFFFFF");
            path22.setAttribute("stroke", "#FFFFFF");
            path32.setAttribute("stroke", "#FFFFFF");
            path42.setAttribute("stroke", "#FFFFFF");
            path52.setAttribute("stroke", "#FFFFFF");
          } else {
            path12.setAttribute("stroke", "#6F6F6F");
            path22.setAttribute("stroke", "#6F6F6F");
            path32.setAttribute("stroke", "#6F6F6F");
            path42.setAttribute("stroke", "#6F6F6F");
            path52.setAttribute("stroke", "#6F6F6F");
          }

        });

        newElm.addEventListener("mouseleave", () => {
          if (newElm.classList.contains("picked")) {
            svgElem.style.opacity = "1";
          } else {
            svgElem.style.opacity = "0";
          }
        });

        deleteElm.appendChild(svgElem);

        deleteElm.addEventListener("click", () => {
          //delete selected marker
          const markerList = document.getElementById("main-list-list");
          markerList.removeChild(newElm);

          //remove that marker on re-earth
          // // // // console.log("delete official marker!", newElm.id);
          deleteMarker(newElm.id);
        })

        controlElm.appendChild(editElm);
        controlElm.appendChild(deleteElm);

        newElm.appendChild(titleElm);
        newElm.appendChild(controlElm);

        let newId;
        if (Array.isArray(doc.data().url) && doc.data().url.length > 0) {

          let imageValue;

          if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
            imageValue = undefined;
          } else {
            imageValue = doc.data().imageUrl;
          }

          newId = reearth.layers.add({
            extensionId: "marker",
            isVisible: true,
            title: "Report Marker",
            property: {
              default: {
                // image: doc.data().url,
                clampToGround: true,
                location: {
                  lat: doc.data().lat,
                  lng: doc.data().lng
                },
                style: doc.data().mstyle,
                image: imageValue,
                imageSize: parseFloat(doc.data().imageSize) ?? 1,
                pointColor: doc.data().pointColor ?? "#FFFFFF",
                pointSize: doc.data().pointSize ?? 10,
                label: true
              },
            },
            infobox: {
              blocks: [
                {
                  extensionId: "textblock",
                  pluginId: "reearth",
                  property: {
                    default: {
                      text: doc.data().note || "",
                      markdown: true,
                    }
                  },
                  propertyId: doc.id,
                },
                ...doc.data().url.map((imageUrl) => ({
                  extensionId: "imageblock",
                  pluginId: "reearth",
                  property: {
                    default: {
                      image: imageUrl || "",
                      imageSize: "contain"
                    }
                  },
                  propertyId: doc.id,
                })),

              ],
              property: {
                default: {
                  title: doc.data().title,
                  propertyId: doc.id,
                },
              },
            },
            type: "marker",
          });
          // reearth.layers.select(newId);


        } else {
          let imageValue;

          if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
            imageValue = undefined;
          } else {
            imageValue = doc.data().imageUrl;
          }

          newId = reearth.layers.add({
            extensionId: "marker",
            isVisible: true,
            title: "Report Marker",
            property: {
              default: {
                // image: doc.data().url,
                clampToGround: true,
                location: {
                  lat: doc.data().lat,
                  lng: doc.data().lng
                },
                style: doc.data().mstyle,
                image: imageValue,
                imageSize: parseFloat(doc.data().imageSize) ?? 1,
                pointColor: doc.data().pointColor ?? "#FFFFFF",
                pointSize: doc.data().pointSize ?? 10,
                label: true,
              },
            },
            infobox: {
              blocks: [
                {
                  extensionId: "textblock",
                  pluginId: "reearth",
                  property: {
                    default: {
                      text: doc.data().note || "",
                      markdown: true,
                    }
                  },
                  propertyId: doc.id,
                },
              ],
              property: {
                default: {
                  title: doc.data().title,
                  propertyId: doc.id,
                },
              },
            },
            type: "marker",
          });
          reearth.layers.select(newId);
          // reearth.layers.select("");
          // // // console.log("it here 6")
        }

        newElm.addEventListener("click", async () => {
          //find the new marker layer then select it
          reearth.layers.select(newId);

          const dbAfterSuccessSend2 = await getDocs(collection(db, "reports"));
          dbAfterSuccessSend2.forEach((dc) => {
            if (dc.id === doc.id) {
              // // // console.log("dc 7: ", dc.id, dc.data());
              const markerInReearth2 = reearth.layers.findAll(
                layer => layer.type === "marker" && layer.title === "Report Marker" && layer.isVisible === true && layer.infobox && layer.infobox.property.default.title === dc.data().title && layer.infobox.blocks[0].property.default.text === dc.data().note
              );

              // // // console.log("markerInReearth.id 2: ", markerInReearth2);

              if (markerInReearth2) {
                for (let i = 0; i < markerInReearth2.length; i++) {
                  const imageUrls = markerInReearth2[i].infobox.blocks.filter(item => item.extensionId === 'imageblock')
                    .map(item => item.property.default.image);

                  // // // console.log(imageUrls, compareArrays(imageUrls, dc.data().url))

                  if (compareArrays(imageUrls, dc.data().url) === true) {
                    reearth.layers.select(markerInReearth2[i].id);
                    // // // console.log("go 1")
                    addGetMarkerDataToDetailSection(dc);
                  } else {
                    reearth.layers.hide(markerInReearth2[i].id);
                    // // // console.log("go 2")
                  }
                }
              } else {
                const markerInReearth3 = reearth.layers.findAll(
                  layer => layer.type === "marker" && layer.title === "Report Marker" && layer.isVisible === true)
                reearth.layers.select(markerInReearth3[markerInReearth3.length - 1].id);
                // // // console.log("go 3")
              }

            }
          });



          const allSvgElms = $(".control-elm span svg").toArray();

          // // // // console.log(allSvgElms)

          allSvgElms.forEach(function (svgElement) {
            // Do something with each SVG element
            svgElement.style.opacity = "0";
          });

          svgElem.style.opacity = "1";

          path12.setAttribute("stroke", "#FFFFFF");
          path22.setAttribute("stroke", "#FFFFFF");
          path32.setAttribute("stroke", "#FFFFFF");
          path42.setAttribute("stroke", "#FFFFFF");
          path52.setAttribute("stroke", "#FFFFFF");

          svgEditElm.style.opacity = "1";
          path1.setAttribute("stroke", "#FFFFFF");
          path2.setAttribute("stroke", "#FFFFFF");
        });



      }

      //hide the marker
      const markerIsNewSendId = reearth.layers.find(
        layer => layer.type === "marker" && layer.title === "Report Marker" && layer.property.default.location.lat === newLat && layer.property.default.location.lng === newLng
      );

      if (markerIsNewSendId) {
        reearth.layers.hide(markerIsNewSendId.id);
      }

    })

  }
  //================================================================


  //================================================================
  // Handle Delete button functionality
  //================================================================

  async function deleteMarker(markerId) {
    // // // // console.log("marker deleted", markerId);
    reearth.layers.select("");
    // // // console.log("it here 8")
    //delete marker from firebase db
    await deleteDoc(doc(db, "reports", markerId));
    showNotification("Delete successful!", "#00B68D");

    //hide marker on re-earth
    const markerIsDeleted = reearth.layers.findAll(
      layer => layer.type === "marker" && layer.title === "Report Marker" && layer.infobox?.property.default.propertyId === markerId
    );

    for (let i = 0; i < markerIsDeleted.length; i++) {
      reearth.layers.hide(markerIsDeleted[i].id);
    }


    reearth.layers.hide(markerId);
    reearth.layers.select("");
    // // // console.log("it here 9")
  }
  //================================================================


  //================================================================
  // Handle UPDATE button functionality
  //================================================================

  updateBtn.addEventListener("click", () => {
    const oldTitle = document.getElementById("detail-name").textContent;
    // // // // console.log("oldTitle: ", oldTitle);

    const oldNote = document.getElementById("detail-textarea").textContent;
    // // // // console.log("oldNote: ", oldNote)

    const newId = document.getElementById("main-detail").getAttribute("related-id");
    const newTitle = document.getElementById("detail-name").value;
    const newNote = document.getElementById("detail-textarea").value;
    const newLat = document.getElementById("detail-lat").value;
    const newLng = document.getElementById("detail-lng").value;

    const urlImgElms = detailImage.querySelectorAll("[urlimg]");
    const urlimgList = Array.from(urlImgElms).map(element => element.getAttribute('urlimg'));


    const marker = {
      id: newId,
      lat: newLat,
      lng: newLng,
      title: newTitle,
      note: newNote,
      urlList: urlimgList
    };

    if (!newTitle || !newNote || !newLat || !newLng) {
      showNotification("Please fill in all the fields.", "#FF3C53")
    } else {
      updateMarker(marker);
    }
  })

  async function updateMarker(marker) {
    // // // // console.log("updateMarker", marker);
    updateBtn.textContent = "Updating...";
    const storage = getStorage();
    const storageRef = ref(storage, marker.id);
    const newRef = doc(db, 'reports', marker.id);

    // // // // console.log(marker.urlList)
    let editUrls = [...marker.urlList]; //

    for (const file of files) {
      const storageRef = ref(storage, uuidv4());
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      editUrls.push(downloadURL);
    }

    // // // // console.log("editUrls: ", editUrls)

    const currentDate = new Date();
    await updateDoc(newRef, { title: marker.title, lat: marker.lat, lng: marker.lng, url: editUrls, note: marker.note, dateTime: currentDate.toString(), });

    showNotification("Update successful!", "#00B68D");
    updateBtn.textContent = "Update";
    resetToDefaultState();



    //get new data after update
    const dbAfterUpdate = await getDocs(collection(db, "reports"));
    dbAfterUpdate.forEach((doc) => {
      // // // // console.log("after update", doc.id, " => ", doc.data());

      if (doc.id === marker.id && !doc.id.includes("_")) {
        // // // // console.log("update marker", marker.id, doc.id, doc.data());
        const newEditElm = document.getElementById(doc.id);
        // // // // console.log("newEditElm: ", newEditElm);
        newEditElm.querySelector(".marker-title").textContent = doc.data().title;
        addGetMarkerDataToDetailSection(doc);

        //update the image wrapper too //abc

        // const markerInReearth2 = reearth.layers.findAll(
        //   layer => layer.type === "marker" && layer.title === "Report Marker" && layer.isVisible === true && layer.infobox && layer.infobox.blocks[0].property.default.text === doc.data().note && layer.property.default.location.lat === doc.data().lat && layer.property.default.location.lng === doc.data().lng && layer.infobox.property.default.title == doc.data().title && layer.infobox.property.default.propertyId == doc.id
        // );
        const markerIsEdit = reearth.layers.findAll(
          layer => layer.type === "marker" && layer.title === "Report Marker" && layer.infobox && layer.infobox.property.default.propertyId == doc.id
        );

        // // console.log("markerIsEdit 2: ", markerIsEdit);

        // for (let i = 0; i < markerInReearth2.length; i++) {
        //   const imageUrls = markerInReearth2[i].infobox.blocks.filter(item => item.extensionId === 'imageblock')
        //     .map(item => item.property.default.image);

        //   // // // console.log(imageUrls, compareArrays(imageUrls, marker.url))

        //   if (compareArrays(imageUrls, doc.data().url) === true) {
        //     reearth.layers.select(markerInReearth2[i].id);
        //   } else {
        //     reearth.layers.hide(markerInReearth2[i].id);
        //   }
        // }
        // const markerIsEditId = reearth.layers.find(
        //   layer => layer.type === "marker" && layer.title === "Report Marker" && layer.infobox?.property.default.propertyId === doc.id
        // );

        // // // // // console.log("markerIsEditId: ", markerIsEditId.id);
        for (let i = 0; i < markerIsEdit.length; i++) {
          reearth.layers.hide(markerIsEdit[i].id);
        }
        // reearth.layers.hide(markerIsEditId.id);

        if (doc.data().url.length > 0) {
          detailImage.innerHTML = "";
          doc.data().url.map((url, idx) => {
            const urlDiv = document.createElement("div");
            urlDiv.style.border = "1px solid #4D5358";
            urlDiv.style.borderRadius = "4px";
            urlDiv.setAttribute("urlImg", url);
            urlDiv.textContent = "Image " + (idx + 1);
            urlDiv.style.backgroundColor = "#393939";

            // Create and append the remove button
            let removeButton = document.createElement("button");
            removeButton.textContent = "x";
            removeButton.className = "remove-btn";
            removeButton.addEventListener("click", removeFile);
            urlDiv.appendChild(removeButton);

            detailImage.appendChild(urlDiv);
          })
        } else {
          detailImage.textContent = "...";
        }


        if (doc.data().lat && doc.data().lng) {
          if (Array.isArray(doc.data().url) && doc.data().url.length > 0) {
            let imageValue;

            if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
              imageValue = undefined;
            } else {
              imageValue = doc.data().imageUrl;
            }

            const updateId = reearth.layers.add({
              extensionId: "marker",
              isVisible: true,
              title: "Report Marker",
              property: {
                default: {
                  // image: doc.data().url,
                  clampToGround: true,
                  location: {
                    lat: doc.data().lat,
                    lng: doc.data().lng
                  },
                  style: doc.data().mstyle,
                  image: imageValue,
                  imageSize: parseFloat(doc.data().imageSize) ?? 1,
                  pointColor: doc.data().pointColor ?? "#FFFFFF",
                  pointSize: doc.data().pointSize ?? 10,
                  label: true
                },
              },
              infobox: {
                blocks: [
                  {
                    extensionId: "textblock",
                    pluginId: "reearth",
                    property: {
                      default: {
                        text: doc.data().note || "",
                        markdown: true,
                      }
                    },
                    propertyId: doc.id,
                  },
                  ...doc.data().url.map((imageUrl) => ({
                    extensionId: "imageblock",
                    pluginId: "reearth",
                    property: {
                      default: {
                        image: imageUrl || "",
                        imageSize: "contain"
                      }
                    },
                    propertyId: doc.id,
                  })),

                ],
                property: {
                  default: {
                    title: doc.data().title,
                    propertyId: doc.id,
                  },
                },
              },
              type: "marker",
            });

            reearth.layers.select(updateId);
            // // // console.log("it here 10")
          } else {
            let imageValue;

            if (doc.data().imageUrl === "undefined" || doc.data().imageUrl === "") {
              imageValue = undefined;
            } else {
              imageValue = doc.data().imageUrl;
            }

            const updateId = reearth.layers.add({
              extensionId: "marker",
              isVisible: true,
              title: "Report Marker",
              property: {
                default: {
                  // image: doc.data().url,
                  clampToGround: true,
                  location: {
                    lat: doc.data().lat,
                    lng: doc.data().lng
                  },
                  style: doc.data().mstyle,
                  image: imageValue,
                  imageSize: parseFloat(doc.data().imageSize) ?? 1,
                  pointColor: doc.data().pointColor ?? "#FFFFFF",
                  pointSize: doc.data().pointSize ?? 10,
                  label: true
                },
              },
              infobox: {
                blocks: [
                  {
                    extensionId: "textblock",
                    pluginId: "reearth",
                    property: {
                      default: {
                        text: doc.data().note || "",
                        markdown: true,
                      }
                    },
                    propertyId: doc.id,
                  },

                  {
                    extensionId: "imageblock",
                    pluginId: "reearth",
                    property: {
                      default: {
                        image: doc.data().url || "",
                        imageSize: "contain"
                      }
                    },
                    propertyId: doc.id,
                  },
                ],
                property: {
                  default: {
                    title: doc.data().title,
                    propertyId: doc.id,
                  },
                },
              },
              type: "marker",
            });
            reearth.layers.select(updateId);
            // // // console.log("it here 11")
          }

        }
      }
    })
    //================================================================
  }

  //================================================================


</script>

<script>

  let expanded = false;
  const OFFSET_HEIGHT = 555;

  let closeElm = document.getElementById("title");
  closeElm.addEventListener("click", handleCloseOpenPopup);
  let wapperElm = document.getElementById("wrapper");
  let heightWp = (wapperElm.offsetHeight = OFFSET_HEIGHT);




  function updateIframe() {
    wapperElm = document.getElementById("wrapper");
    heightWp = wapperElm.offsetHeight;
    expanded = false;
    parent.postMessage({ type: "resize", expanded, heightWp }, "*");
  }


  function handleCloseOpenPopup(e) {
    if (
      e.target.id == "title" ||
      e.target.classList.contains("title-p") ||
      (document.getElementById(e.target.id) !== null &&
        document.getElementById(e.target.id).parentNode.id == "title")
    ) {
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
      if (wapperElm !== null) {
        wapperElm.classList.remove("height-44");
      }
      if (expanded) {
        document.documentElement.classList.add("extendedh", "extendedv");
      } else {
        document.documentElement.classList.remove("extendedh", "extendedv");
      }
      expanded = !expanded;
    } else {
      if (
        e.target.tagName === "path" ||
        e.target.tagName === "svg" ||
        e.target.tagName === "g"
      ) {
        if (e.target.closest("#title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if (wapperElm !== null) {
            wapperElm.classList.remove("height-44");
          }
          if (expanded) {
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded;
        }
      }
    }
  }

  //================================================================
  // Helper function to add picked class to selected marker section
  //================================================================

  function setOpacity(elm, show) {
    //always show, but if true, change color stroke to white, otherwise bgcolor
    const color = show ? "#FFFFFF" : "#171618";
    //set all span svg in control-elm class will be styled with opacity 0
    const controlElm = elm.querySelector(".control-elm");
    // // console.log("controlElms: ", controlElm)

    // Loop through each element and set the opacity of its child <span> and <svg> elements to 0

    const spans = controlElm.getElementsByTagName('span');
    const svgs = controlElm.getElementsByTagName('svg');

    Array.from(spans).forEach(span => {
      span.style.opacity = 1;
    });

    Array.from(svgs).forEach(svg => {
      svg.style.opacity = 1;

      // Get the SVG elements using document.querySelector or document.getElementById
      const pathElements = svg.querySelectorAll('path');

      // Loop through each path element and change the stroke color
      pathElements.forEach(path => {
        path.setAttribute('stroke', color);
      });

    });
  }

  function addPickedClass(markerElm) {

    if (markerElm) {
      const allMarkers = document.querySelectorAll(".marker-point");

      allMarkers.forEach((marker) => {
        if (marker !== markerElm) {
          marker.classList.remove("picked");
          setOpacity(marker, false);
        }
      })

      // // // // console.log("add picked class to selected marker section")

      markerElm.classList.add("picked");
      setOpacity(markerElm, true);
    } else {
      const allMarkers = document.querySelectorAll(".marker-point");

      allMarkers.forEach((marker) => {
        if (marker !== markerElm) {
          marker.classList.remove("picked");
          setOpacity(marker, false);
        }
      })
    }

  }
  //================================================================

  //================================================================
  // Helper function to disable and enable button
  //================================================================
  function disableButton(btn) {
    btn.disabled = true;
    btn.style.backgroundColor = "#161616";
    btn.style.color = "#525252";
  }

  function enableButton(btn) {
    btn.disabled = false;
    btn.style.backgroundColor = "#0F62FE";
    btn.style.color = "#FFFFFF";
    btn.style.cursor = "pointer";
  }
  //================================================================


  //================================================================
  // Handle add get marker data to detail section
  //================================================================
  function addOMarkerDataToDetailSection(marker) {
    // // // // console.log("OFFICIAL from FB: ", marker.id, marker.data());

    const detailName = document.getElementById("detail-name");
    detailName.innerHTML = "";
    detailName.classList.add("marker-title");
    detailName.textContent = marker.title || "Marker";
    detailName.value = marker.title;

    const mainDetailSection = document.getElementById("main-detail");
    mainDetailSection.setAttribute("related-id", marker.id);

    const detailLat = document.getElementById("detail-lat");
    detailLat.innerHTML = "";
    detailLat.textContent = marker.lat;
    detailLat.value = marker.lat;
    detailLat.disabled = false;
    detailLat.style.backgroundColor = "#161616";

    const detailLng = document.getElementById("detail-lng");
    detailLng.innerHTML = "";
    detailLng.textContent = marker.lng;
    detailLng.value = marker.lng;
    detailLng.disabled = false;
    detailLng.style.backgroundColor = "#161616";

    const detailTextarea = document.getElementById("detail-textarea");
    detailTextarea.innerHTML = "";
    detailTextarea.textContent = marker.note;
    detailTextarea.value = marker.note;
    const detailImage = document.getElementById("detail-image");
    detailImage.innerHTML = "";
    if (marker.url.length > 0) {
      detailImage.innerHTML = "";
      marker.url.map((url, idx) => {
        const urlDiv = document.createElement("div");
        urlDiv.style.border = "1px solid #4D5358";
        urlDiv.style.borderRadius = "4px";
        urlDiv.setAttribute("urlImg", url);
        urlDiv.textContent = "Image " + (idx + 1);
        urlDiv.style.backgroundColor = "#393939";

        // Create and append the remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", removeImage);
        urlDiv.appendChild(removeButton);

        detailImage.appendChild(urlDiv);
      })
    } else {
      detailImage.textContent = "Image";
    }

    const updateBtn = document.getElementById("update-btn");
    const sendBtn = document.getElementById("send-btn");
    if (marker.id) {
      updateBtn.parentElement.style.display = "flex";
      sendBtn.parentElement.style.display = "none";
    } else {
      updateBtn.parentElement.style.display = "none";
      sendBtn.parentElement.style.display = "flex";
    }

  }

  function removeImage(e) {
    const element = e.target.parentElement;
    element.remove();
  }
  //================================================================

  function compareArrays(arr1, arr2) {
    // Step 1: Sort the arrays
    const sortedArr1 = arr1.sort();
    const sortedArr2 = arr2.sort();

    // Step 2: Convert the arrays to strings
    const stringifiedArr1 = JSON.stringify(sortedArr1);
    const stringifiedArr2 = JSON.stringify(sortedArr2);

    // Step 3: Compare the string representations of the arrays
    return stringifiedArr1 === stringifiedArr2;
  }


  //================================================================
  // Add marker to the pending marker list  
  //================================================================
  function addPendingMarkerToList(marker) {
    // // // // console.log("add marker to pending marker list", marker);
    const markerList = document.getElementById("main-list-list");
    const markerPendingPointList = document.querySelectorAll(".pending");
    const lengthMarkerLabel = markerPendingPointList.length + 1;

    const markerElm = document.createElement("div");
    markerElm.classList.add("marker-point");
    markerElm.classList.add("pending");

    const titleElm = document.createElement("div");
    titleElm.classList.add("marker-title");
    titleElm.textContent = "Marker " + lengthMarkerLabel;

    const controlElm = document.createElement("div");
    controlElm.classList.add("control-elm");
    const editElm = document.createElement("span");

    const svgEditElm = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEditElm.setAttribute("width", "12");
    svgEditElm.setAttribute("height", "12");
    svgEditElm.setAttribute("viewBox", "0 0 12 12");
    svgEditElm.setAttribute("fill", "none");
    svgEditElm.style.opacity = "0";

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M4.5 10.126H2.25a.375.375 0 0 1-.375-.375V7.656a.375.375 0 0 1 .11-.265L7.61 1.766a.375.375 0 0 1 .53 0l2.095 2.095a.375.375 0 0 1 0 .53L4.5 10.126Z");
    path1.setAttribute("stroke", "#6F6F6F");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path1);

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M10.125 10.125H4.5L1.898 7.523");
    path2.setAttribute("stroke", "#6F6F6F");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svgEditElm.appendChild(path2);
    svgEditElm.addEventListener("mouseenter", () => {
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");
      svgEditElm.style.cursor = "pointer";
    })
    svgEditElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      }
      else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    })

    markerElm.addEventListener("mouseenter", () => {
      svgEditElm.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path1.setAttribute("stroke", "#FFFFFF");
        path2.setAttribute("stroke", "#FFFFFF");
      } else {
        path1.setAttribute("stroke", "#6F6F6F");
        path2.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgEditElm.style.opacity = "1";
      } else {
        svgEditElm.style.opacity = "0";
      }
    });

    editElm.textContent = "";
    editElm.appendChild(svgEditElm);

    editElm.addEventListener("click", () => {
      //go to edit screen
      // // // // console.log("go to edit screen");
      const mainList = document.getElementById("main-list");
      const mainDetail = document.getElementById("main-detail");
      //hide main marker list
      mainList.style.display = "none";

      //show detail marker
      mainDetail.style.display = "flex";
      // // // // console.log("edit 3");

    })

    const deleteElm = document.createElement("span");
    const svgNS = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(svgNS, "svg");
    svgElem.setAttribute("width", "12");
    svgElem.setAttribute("height", "12");
    svgElem.setAttribute("viewBox", "0 0 12 12");
    svgElem.setAttribute("fill", "none");
    svgElem.style.opacity = "0";

    const path12 = document.createElementNS(svgNS, "path");
    path12.setAttribute("d", "M10.125 2.625L1.875 2.62501");
    path12.setAttribute("stroke", "#6F6F6F");
    path12.setAttribute("stroke-linecap", "round");
    path12.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path12);

    const path22 = document.createElementNS(svgNS, "path");
    path22.setAttribute("d", "M4.875 4.875V7.875");
    path22.setAttribute("stroke", "#6F6F6F");
    path22.setAttribute("stroke-linecap", "round");
    path22.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path22);

    const path32 = document.createElementNS(svgNS, "path");
    path32.setAttribute("d", "M7.125 4.875V7.875");
    path32.setAttribute("stroke", "#6F6F6F");
    path32.setAttribute("stroke-linecap", "round");
    path32.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path32);

    const path42 = document.createElementNS(svgNS, "path");
    path42.setAttribute("d", "M9.375 2.625V9.75C9.375 9.84946 9.33549 9.94484 9.26517 10.0152C9.19484 10.0855 9.09946 10.125 9 10.125H3C2.90054 10.125 2.80516 10.0855 2.73484 10.0152C2.66451 9.94484 2.625 9.84946 2.625 9.75V2.625");
    path42.setAttribute("stroke", "#6F6F6F");
    path42.setAttribute("stroke-linecap", "round");
    path42.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path42);

    const path52 = document.createElementNS(svgNS, "path");
    path52.setAttribute("d", "M7.875 2.625V1.875C7.875 1.67609 7.79598 1.48532 7.65533 1.34467C7.51468 1.20402 7.32391 1.125 7.125 1.125H4.875C4.67609 1.125 4.48532 1.20402 4.34467 1.34467C4.20402 1.48532 4.125 1.67609 4.125 1.875V2.625");
    path52.setAttribute("stroke", "#6F6F6F");
    path52.setAttribute("stroke-linecap", "round");
    path52.setAttribute("stroke-linejoin", "round");
    svgElem.appendChild(path52);

    // Event listener for hover effect
    svgElem.addEventListener("mouseenter", () => {
      svgElem.style.cursor = "pointer";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");
    })

    svgElem.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    })

    markerElm.addEventListener("mouseenter", () => {
      svgElem.style.opacity = "1";

      if (markerElm.classList.contains("picked")) {
        path12.setAttribute("stroke", "#FFFFFF");
        path22.setAttribute("stroke", "#FFFFFF");
        path32.setAttribute("stroke", "#FFFFFF");
        path42.setAttribute("stroke", "#FFFFFF");
        path52.setAttribute("stroke", "#FFFFFF");
      } else {
        path12.setAttribute("stroke", "#6F6F6F");
        path22.setAttribute("stroke", "#6F6F6F");
        path32.setAttribute("stroke", "#6F6F6F");
        path42.setAttribute("stroke", "#6F6F6F");
        path52.setAttribute("stroke", "#6F6F6F");
      }

    });

    markerElm.addEventListener("mouseleave", () => {
      if (markerElm.classList.contains("picked")) {
        svgElem.style.opacity = "1";
      } else {
        svgElem.style.opacity = "0";
      }
    });

    deleteElm.appendChild(svgElem);

    deleteElm.addEventListener("click", () => {
      //delete selected marker
      markerList.removeChild(markerElm);

      // // // // console.log("delete");

      //remove that marker on re-earth
      reearth.layers.hide(marker.id);
      reearth.layers.select("");
      // // // console.log("it here 12")
    })

    controlElm.appendChild(editElm);
    controlElm.appendChild(deleteElm);

    markerElm.appendChild(titleElm);
    markerElm.appendChild(controlElm);

    markerElm.id = marker.id;
    markerElm.setAttribute("lat", marker.lat);
    markerElm.setAttribute("lng", marker.lng);
    markerElm.setAttribute("title", "Marker " + lengthMarkerLabel);
    markerElm.setAttribute("note", "");
    markerElm.setAttribute("url", "");

    const newMarker = {
      ...marker,
      title: "Marker " + lengthMarkerLabel,
      note: "",
      url: [],
      placeholder: "Write down your text",
      isPending: true,
    }

    markerElm.addEventListener("click", (e) => {
      e.stopPropagation();
      // // // console.log("edit 4- 2802");

      //have to update the lastest report

      if (markerElm.classList.contains("pending")) {
        addMarkerDataToDetailSection(newMarker);
        reearth.layers.select(marker.id);
        // // // console.log("it here 13")
      } else {
        // // // console.log("marker is official");
        const storeData = document.getElementById("store-data");
        const marker = {
          id: storeData.getAttribute("propertyid"),
          title: storeData.getAttribute("title"),
          lat: storeData.getAttribute("lat"),
          lng: storeData.getAttribute("lng"),
          note: storeData.getAttribute("text"),
          url: storeData.getAttribute("imgurl").split(','),
        }

        // // // console.log("url: ", marker.url)

        // // // console.log("marker", marker);
        addOMarkerDataToDetailSection(marker)

        const markerInReearth2 = reearth.layers.findAll(
          layer => layer.type === "marker" && layer.title === "Report Marker" && layer.isVisible === true && layer.infobox && layer.infobox.blocks[0].property.default.text === marker.note && layer.property.default.location.lat === marker.lat && layer.property.default.location.lng === marker.lng && layer.infobox.property.default.title == marker.title && layer.infobox.property.default.propertyId == marker.id
        );

        // // // console.log("markerInReearth.id 2: ", markerInReearth2);

        for (let i = 0; i < markerInReearth2.length; i++) {
          const imageUrls = markerInReearth2[i].infobox.blocks.filter(item => item.extensionId === 'imageblock')
            .map(item => item.property.default.image);

          // // // console.log(imageUrls, compareArrays(imageUrls, marker.url))

          if (compareArrays(imageUrls, marker.url) === true) {
            reearth.layers.select(markerInReearth2[i].id);
          } else {
            reearth.layers.hide(markerInReearth2[i].id);
          }
        }


        // // // console.log("it here 14")
        // reearth.layers.select(markerInReearth2.id);
        //abc


      }
      addPickedClass(markerElm);


      const allSvgElms = $(".control-elm span svg").toArray();

      allSvgElms.forEach(function (svgElement) {
        // Do something with each SVG element
        svgElement.style.opacity = "0";
      });

      svgElem.style.opacity = "1";

      path12.setAttribute("stroke", "#FFFFFF");
      path22.setAttribute("stroke", "#FFFFFF");
      path32.setAttribute("stroke", "#FFFFFF");
      path42.setAttribute("stroke", "#FFFFFF");
      path52.setAttribute("stroke", "#FFFFFF");

      svgEditElm.style.opacity = "1";
      path1.setAttribute("stroke", "#FFFFFF");
      path2.setAttribute("stroke", "#FFFFFF");
    })



    markerList.appendChild(markerElm);
    addPickedClass(markerElm);
    addMarkerDataToDetailSection(newMarker);
  }
  //================================================================


  //Hanlde with UI elements
  //================================================================
  // Add marker data to the main detail section  
  //================================================================
  function addMarkerDataToDetailSection(marker, edit = "false") {
    // // // // console.log("PENDING: ", marker);
    const detailName = document.getElementById("detail-name");
    detailName.textContent = marker.title;
    detailName.classList.add("marker-title");
    detailName.value = marker.title;
    const mainDetailSection = document.getElementById("main-detail");
    mainDetailSection.setAttribute("related-id", marker.id);

    const detailLat = document.getElementById("detail-lat");
    detailLat.textContent = marker.lat;
    detailLat.value = marker.lat;
    if (edit !== "false") {
      detailLat.disabled = false;
      detailLat.style.backgroundColor = "#161616";

    } else {
      detailLat.disabled = true;
      detailLat.style.backgroundColor = "#393939";

    }
    const detailLng = document.getElementById("detail-lng");
    detailLng.textContent = marker.lng;
    detailLng.value = marker.lng;
    if (edit !== "false") {
      detailLng.disabled = false;
      detailLng.style.backgroundColor = "#161616";
    } else {
      detailLng.disabled = true;
      detailLng.style.backgroundColor = "#393939";
    }

    const detailTextarea = document.getElementById("detail-textarea");
    detailTextarea.textContent = marker.note;
    detailTextarea.value = marker.note;

    detailTextarea.placeholder = marker.placeholder;

    const detailImage = document.getElementById("detail-image");
    if (marker.url.length > 0) {
      detailImage.innerHTML = "";
      marker.url.map((url, idx) => {
        const urlDiv = document.createElement("div");
        urlDiv.style.border = "1px solid #4D5358";
        urlDiv.style.borderRadius = "4px";
        urlDiv.setAttribute("urlImage", url);
        urlDiv.textContent = "Image " + (idx + 1);
        urlDiv.style.backgroundColor = "#393939";

        // Create and append the remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", removeImage);
        urlDiv.appendChild(removeButton);

        detailImage.appendChild(urlDiv);
      })
    } else {
      detailImage.innerHTML = "Image";
      detailImage.placeholder = "Image";
    }

    const sendBtn = document.getElementById("send-btn");
    const updateBtn = document.getElementById("update-btn");


    // enableButton(deleteBtn);

    updateBtn.parentElement.style.display = "none";

    sendBtn.parentElement.style.display = "flex";

    if (detailName.textContent == "" && detailTextarea.textContent == "" && detailImage.textContent == "Image") {
      disableButton(sendBtn);
    } else {
      enableButton(sendBtn);
      sendBtn.classList.remove("disabled");
    }
  }
  //================================================================

  function removeImage(e) {
    const element = e.target.parentElement;
    element.remove();
  }

  //================================================================
  // Handle add get marker data to detail section
  //================================================================
  function addMarkerIsSendDataToDetailSection(marker) {
    // // // // console.log("OFFICIAL from FB: ", marker.id, marker.data());

    const sendBtn = document.getElementById("send-btn");
    const updateBtn = document.getElementById("update-btn");

    const detailName = document.getElementById("detail-name");
    detailName.innerHTML = "";
    detailName.classList.add("marker-title");
    detailName.textContent = marker.title || "Marker";
    detailName.value = marker.title;

    const mainDetailSection = document.getElementById("main-detail");
    mainDetailSection.setAttribute("related-id", marker.id);

    // // // // console.log(marker.rid, doc.id, doc.data());
    const storeData = document.getElementById("store-data");
    // // // console.log("IT WILL SET HERE");
    storeData.setAttribute("title", marker.title);
    storeData.setAttribute("lat", marker.lat);
    storeData.setAttribute("lng", marker.lng);
    storeData.setAttribute("propertyid", marker.id);
    storeData.setAttribute("text", marker.note);
    storeData.setAttribute("imgurl", marker.url);

    const detailLat = document.getElementById("detail-lat");
    detailLat.innerHTML = "";
    detailLat.textContent = marker.lat;
    detailLat.value = marker.lat;
    detailLat.disabled = false;
    detailLat.style.backgroundColor = "#161616";

    const detailLng = document.getElementById("detail-lng");
    detailLng.innerHTML = "";
    detailLng.textContent = marker.lng;
    detailLng.value = marker.lng;
    detailLng.disabled = false;
    detailLng.style.backgroundColor = "#161616";

    const detailTextarea = document.getElementById("detail-textarea");
    detailTextarea.innerHTML = "";
    detailTextarea.textContent = marker.note;
    detailTextarea.value = marker.note;
    const detailImage = document.getElementById("detail-image");
    detailImage.innerHTML = "";
    if (marker.url.length > 0) {
      detailImage.innerHTML = "";
      marker.url.map((url, idx) => {
        const urlDiv = document.createElement("div");
        urlDiv.style.border = "1px solid #4D5358";
        urlDiv.style.borderRadius = "4px";
        urlDiv.setAttribute("urlImg", url);
        urlDiv.textContent = "Image " + (idx + 1);
        urlDiv.style.backgroundColor = "#393939";

        // Create and append the remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", removeImage);
        urlDiv.appendChild(removeButton);

        detailImage.appendChild(urlDiv);
      })
    } else {
      detailImage.textContent = "Image";
    }

    if (marker.id && marker.note) {
      updateBtn.parentElement.style.display = "flex";
      sendBtn.parentElement.style.display = "none";
    } else {
      updateBtn.parentElement.style.display = "none";
      sendBtn.parentElement.style.display = "flex";
    }

  }

  function removeImage(e) {
    const element = e.target.parentElement;
    element.remove();
  }
  //================================================================



  //reset allow add marker false if reset browser
  document.getElementById("allow-add-marker").setAttribute("allow-add-marker", "false");
  //End handle with UI elements

  // -------------------Handle Javascript re-earth related-------------------------------- //
  var reearth, property;
  window.addEventListener("message", async (e) => {
    if (e.source !== parent) return;
    newProperty = e.data.property;
    reearth = e.source.reearth;

    const setAttributeValue = (id, attribute, value) => {
      document.getElementById(id).setAttribute(attribute, value);
    }

    //================================================================
    // Get location if layer selected, else get payload location
    //================================================================
    if (e.data.type === 'mousedata') {
      // // console.log("mouse clicked!", reearth.layers.selected);
      const allowAddMarkerElm = document.getElementById("allow-add-marker")
      const allowAddMarkerStt = allowAddMarkerElm.getAttribute("allow-add-marker");

      const mainList = document.getElementById("main-list");
      const mainDetail = document.getElementById("main-detail");

      //Case 1: Click on Layer
      if (reearth.layers.selected && reearth.layers.selected !== undefined) {
        //Case 1.1: Click on Report marker
        //--
        if (reearth.layers.selected.type === "marker" && reearth.layers.selected.title === "Report Marker") {
          if (reearth.layers.selected.infobox && reearth.layers.selected.infobox.property.default.propertyId) {
            //case 1.1.1: // if report marker is already send =>
            const id = reearth.layers.selected.infobox.property.default.propertyId;
            addPickedClass(document.getElementById(id));

            const blockNote = reearth.layers.selected.infobox.blocks.find(block => block.extensionId == "textblock");
            const blockUrls = reearth.layers.selected.infobox.blocks.filter(block => block.extensionId == "imageblock");
            const imageUrls = blockUrls.map(block => block.property.default.image);
            const title = reearth.layers.selected.infobox.property.default.title

            const lat = reearth.layers.selected.property.default.location.lat;
            const lng = reearth.layers.selected.property.default.location.lng;

            //get data by selected id
            const marker = {
              id: id,
              title: title,
              lat: lat,
              lng: lng,
              note: blockNote.property.default.text,
              url: imageUrls,
            }
            // // // // console.log("edit 6");

            //function to handle if the marker is send
            addMarkerIsSendDataToDetailSection(marker);
          } else {
            //case 1.1.2: // and if marker is not yet send
            // add picked class to the id
            // add detail tab
            const id = reearth.layers.selected.id;
            const title = document.getElementById(id).textContent;
            const lat = reearth.layers.selected.property.default.location.lat;
            const lng = reearth.layers.selected.property.default.location.lng;

            const marker = {
              id: id,
              title: title,
              lat: lat,
              lng: lng,
              note: "",
              url: [],
              placeholder: "Write down your text",
              isPending: true,
            }

            addPickedClass(document.getElementById(id));
            addMarkerDataToDetailSection(marker);
          }





        } else {
          //Case 1.2: Click on other layer
          addPickedClass(null);
          mainList.style.display = "flex";
          mainDetail.style.display = "none";
        }
      }





      //Case 2: Click on non-layer => Create new marker or not
      if (reearth.layers.selected == undefined || !reearth.layers.selected) {
        if (allowAddMarkerStt == "true") {
          // allow add marker
          setAttributeValue("allow-add-marker", "lat", e.data.payload.lat);
          setAttributeValue("allow-add-marker", "lng", e.data.payload.lng);

          const markerStyle = document.getElementById("marker-style");
          const markerType = markerStyle.getAttribute("mstyle");
          let markerImageUrl = markerStyle.getAttribute("image-url");
          markerImageUrl = (markerImageUrl == "undefined" || markerImageUrl == "") ? undefined : markerImageUrl
          const markerImageSize = parseFloat(markerStyle.getAttribute("image-size"));
          const markerPointColor = markerStyle.getAttribute("point-color");
          const markerPointSize = parseFloat(markerStyle.getAttribute("point-size"));

          const markerId = reearth.layers.add({
            extensionId: "marker",
            isVisible: true,
            title: "Report Marker",
            property: {
              default: {
                location: {
                  lat: e.data.payload.lat,
                  lng: e.data.payload.lng
                },
                style: markerType ?? "point",
                image: markerImageUrl ?? undefined,
                imageSize: markerImageSize ?? 1,
                pointColor: markerPointColor ?? "#FFFFFF",
                pointSize: markerPointSize ?? 10,
              },
            },
            type: "marker",
          });
          // // // console.log("it go here 1")
          reearth.layers.select(markerId);
          //set false after creat marker
          allowAddMarkerElm.setAttribute("allow-add-marker", "false");

          //render the detail tab follow by marker data
          setAttributeValue("allow-add-marker", "markerId", markerId);

          const detailLatElm = document.getElementById("detail-lat");
          const detailLngElm = document.getElementById("detail-lng");

          detailLatElm.textContent = e.data.payload.lat;
          detailLngElm.textContent = e.data.payload.lng;




          const marker = {
            id: markerId,
            lat: e.data.payload.lat,
            lng: e.data.payload.lng,
            style: markerType ?? "point",
            image: markerImageUrl ?? undefined,
            imageSize: markerImageSize ?? 1,
            pointColor: markerPointColor ?? "#FFFFFF",
            pointSize: markerPointSize ?? 10,
          }
          addPendingMarkerToList(marker);

        } else {
          //remove all picked class
          addPickedClass(null);
          //show list, hide detail
          mainList.style.display = "flex";
          mainDetail.style.display = "none";
        }
      }
    }

    //================================================================

    //================================================================
    // Handle reearth property change------------------------------
    //================================================================
    if (JSON.stringify(property) != JSON.stringify(newProperty)) {
      property = newProperty;

      //get and read file geojson
      const storeData = document.getElementById("store-config");

      //get and read file geojson
      const fbConfig = property?.fb_config;

      if (fbConfig) {
        const { api_key, auth_domain, project_id, storage_bucket, messagingSender_id, app_id, measurement_id } = fbConfig;

        if (api_key) {
          storeData.setAttribute("apikey", api_key);
        }

        if (auth_domain) {
          storeData.setAttribute("authdomain", auth_domain);
        }

        if (project_id) {
          storeData.setAttribute("projectid", project_id);
        }

        if (storage_bucket) {
          storeData.setAttribute("storagebucket", storage_bucket);
        }

        if (messagingSender_id) {
          storeData.setAttribute("messagingsenderid", messagingSender_id);
        }

        if (app_id) {
          storeData.setAttribute("appid", app_id);
        }

        if (measurement_id) {
          storeData.setAttribute("measurementid", measurement_id);
        }
      }


      if (e.data.property && e.data.property.hasOwnProperty("setting")) {
        settings = e.data.property.setting;

        if (settings.hasOwnProperty("markerType")) {
          // markStyle = settings.markerType == "icon" ? "image" : settings.markerType

          // // // console.log("settings.markerType: ", settings.markerType, settings.imageUrl, settings.imageScale, settings.pointColor, settings.pointSize);

          setAttributeValue("marker-style", "mstyle", settings.markerType)
          if (settings.markerType == "icon") {
            setAttributeValue("marker-style", "mstyle", "image")

            setAttributeValue("marker-style", "image-url", settings.imageUrl ?? "");
            setAttributeValue("marker-style", "image-size", settings.imageScale ?? 1);

          } else {
            setAttributeValue("marker-style", "mstyle", "point")

            setAttributeValue("marker-style", "point-color", settings.pointColor ?? "#FFFFFF");
            setAttributeValue("marker-style", "point-size", settings.pointSize ?? 10);
          }
        }
      }
    }

    //================================================================

  })


  // -------------------Close Handle Javascript re-earth related-------------------------------- //
</script>
`,
{ width: 44, height: 44 }
);

reearth.on("update", send);
send();
function send() {
reearth.ui.postMessage({
property: reearth.widget.property,
layers: reearth.layers.layers,
});
}
reearth.on("message", (msg) => {
if (msg.type === "resize") {
reearth.ui.resize?.(
msg.expanded ? 44 : 312,
msg.expanded ? 44 : msg.heightWp,
msg.expanded ? undefined : false
);
}
reearth.ui.postMessage({
property: reearth.widget.property,
});
});

reearth.on('click',(mousedata) => {
reearth.ui.postMessage({
type: "mousedata",
payload: mousedata
}, "*");
});