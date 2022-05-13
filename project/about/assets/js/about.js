// detect device type
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
console.log(isMobile);
// change important elements classes to mobile only
if (isMobile) {

  // show footer
  document.getElementById("footer").style.display = "block";

  // change main page flex-flow to column
  document.getElementById("main").style.flexFlow = "column";

  // change team_containers to mobile only
  let teamContainerList = document.getElementsByClassName("team_container");
  while (teamContainerList.length) {
    teamContainerList[0].classList.add("team_container_mobile");
    teamContainerList[0].classList.remove("team_container");
  }

  // hide fixed team description element
  document.getElementById("teamDescription").style.display = "none";

  // change team member elements class
  let teamMembers = document.getElementsByClassName("team_item");
  // every time we change the class value of an element it exits the array
  // so we have to do this while loop to change all elements' classes
  while (teamMembers.length) {
    teamMembers[0].classList.value = "team_item_mobile";
  }

  // show linked in icons
  let linkedInIcons = document.getElementsByClassName("team_item_linkedin_icon");
  for (icon of linkedInIcons) {
    icon.style.display = "block";
  }

  // change side pages to mobile side pages
  let sidePages = document.getElementsByClassName("sidePage");
  while (sidePages.length) {
    sidePages[0].classList.value = "sidePage_mobile";
  }

}
else {
  // hide individual team descriptions
  let teamDescriptions = document.getElementsByClassName("team_description_mobile");
  for (teamDesc of teamDescriptions) {
      teamDesc.style.display = "none";
  }
}

// set scroll at beginning of page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// team containers and individual team items
var teamContainerList = (isMobile) ? document.getElementsByClassName("team_container_mobile") : document.getElementsByClassName("team_container");
const teamItems = document.getElementsByClassName("team_item_linkedin_hover");
const teamImges = document.getElementsByClassName("team_item_img");

// window.addEventListener("resize", function () {
//   location.reload();
//   // fix picture sizes and black box sizes on resize
//   // if (!isMobile) {
//   //   resizePictures();
//   // }
//   // updateBlackBoxes();
// });

/**
 *
 * Resizes all pictures to match the window size.
 *
 */
function resizePictures () {
  for (teamContainer of teamContainerList) {
    if (isMobile) {
      teamContainer.style.width = "99%";
    }
    else {
      teamContainer.style.width = `${window.innerWidth}px`;
    }
    if (!isMobile) {
      teamContainer.style.height = `${window.innerHeight}px`;
    }
  }
}

/**
 *
 * Resizes every individual black box to match the window size.
 *
 */
function updateBlackBoxes () {

  for (let i=0;i<teamItems.length; i++) {
    // individual team items
    let teamItem = teamItems[i];
    // get image style to get its width and height
    let style = window.getComputedStyle(teamImges[i]);
    let height = style.height; height = parseInt(height.slice(0, height.length - 2));
    let width = style.width; width = parseInt(width.slice(0, width.length - 2));
    // get the image's hypotenuse and angle
    let hyp = Math.sqrt(height*height + width*width);
    let angle = 90 - (Math.asin(width/hyp) * (180/Math.PI));

    // set width equal to the hypotenuse plus a little more for safety
    teamItem.style.width = `${hyp+100}px`;
    // increase height to cover the whole image
    teamItem.style.height = `${height+100}px`;
    // change point of reference to top left
    teamItem.style.transformOrigin = "top left";
    // move black box to the middle of image rectangle
    teamItem.style.transform = `translate3d(-1em, ${height}px, 0px)`;
    // rotate image
    teamItem.style.transform += `rotate(-${angle}deg)`;

    // if you have a question about the math feel free to ask me

  }
}

resizePictures();
// updateBlackBoxes();

// --- Change Team Names ---
if (!isMobile) {
  const teamName = document.getElementById("teamName");
<<<<<<< HEAD
  var teamNames = ["IT", "EXPERIENCE", "GRAPHICS", "FUNDRAISING", "MEDIA", "SPEAKERS", "VENUE-PRODUCTION", "THE TEDxNTUA"];
=======
  var teamNames = ["GRAPHICS", "EXPERIENCE", "IT", "FUNDRAISING", "MEDIA", "SPEAKERS", "VENUE-PRODUCTION", "THE TEDx NTUA 2022"];
>>>>>>> f64c4629e81c9f0378b95336d1c4baaeada2f5f6

  // map each word to Y coordinates
  // each word is mapped to range equal to the team container's height
  let containerHeight = parseInt(window.getComputedStyle(teamContainerList[0]).height.slice(0, -2));
  let range = containerHeight;
  let offset = -0.33 * containerHeight;
  var teamName_map = mapTeamNames(range, offset);
}
/**
 *
 * Returns an array of numbers representing the limits for
 * a single team name.
 *
 * @param {number} range range that each team name gets
 * @param {number} offset offset to start the first mapping from
 */
function mapTeamNames (range, offset = 0) {

  let t_range = range + offset;
  let map = [];
  // t_range += range;
  for (let i=0;i<teamNames.length;i++) {
    map.push(t_range);
    t_range += range;
  }

  return map;
}

//update team name
window.onscroll = updateTeamName;

/**
 *
 * Updates the team name inside the team description div
 * based on the current Y coordinate.
 *
 * @param {number} cordY
 */
var prev_index = 0; // global variable to keep track last team name
function updateTeamName () {
  if (window.location.href.match(/about/)) {
    let cordY = scrollY;
    if(navigator.userAgent.indexOf("Firefox") != -1 ){
      let first_text = document.getElementById('secondaryPage');
      let height_first_text= first_text.getBoundingClientRect().y;
      // console.log(cordY)
      // console.log(first_text.getBoundingClientRect())
      let foo = document.getElementById('footer');
      let height_foo= foo.getBoundingClientRect().y;
      // console.log( height_last_text)
      console.log(foo.getBoundingClientRect())
      
      let tmd = document.getElementById("teamDescription")
      // console.log('o')
      // console.log(tmd.getBoundingClientRect())
      if(tmd.getBoundingClientRect().y < height_first_text){
        if(tmd.classList.contains("td-blur")){
          tmd.classList.remove("td-blur")
        }
        if(tmd.classList.contains("td-hidden")){
          tmd.classList.remove("td-hidden")
        }
      }
      if(tmd.getBoundingClientRect().y >= height_first_text){
        if(!tmd.classList.contains("td-blur")){
          tmd.classList.add("td-blur")
        }
        if(tmd.classList.contains("td-hidden")){
          tmd.classList.remove("td-hidden")
        }
      }
      // if(height_foo <= (window.innerHeight - foo.getBoundingClientRect().height +1)){
      //   if(tmd.classList.contains("td-blur")){
      //     tmd.classList.remove("td-blur")
      //   }
      // }
      if(height_foo <= (window.innerHeight - foo.getBoundingClientRect().height +1)){
        if(!tmd.classList.contains("td-hidden")){
          tmd.classList.add("td-hidden")
        }
      }
    }
    // find in what part y belongs
    var index; // index of word mapped to current Y coordinate
    if(cordY <= teamName_map[0]){
      index = 0; // return first word in list if Ycord < 0
    }
    if(cordY >= teamName_map[teamName_map.length-1]) index = teamName_map.length-1;
    else {
      for( let i=1;i<teamName_map.length;i++ ) {
        if(cordY <= teamName_map[i] && cordY > teamName_map[i-1]){
          index = i;
          break;
        }
      }
    }


    // add animation to text changing
    // animate word transition
    if(index != prev_index){
      let a = teamName;

      a.classList.remove("visible_up");
      a.classList.remove("visible_down");

      // move both words upwards when exiting/entering
      var direction = "up";
      // move both words downwards when exiting/entering
      if (index < prev_index) direction = "down";

      a.classList.add(`invisible_${direction}`);

      // make new word appear once old one dissapears
      a.onanimationend = () => {
        a.classList.remove("invisible_up");
        a.classList.remove("invisible_down");

        a.classList.add(`visible_${direction}`);
        // change innerText to new word
        a.innerText = teamNames[index];
        prev_index = index;
      };
    }
  }
}

// if (!isMobile) {
//   // event listener to update team name map on resize
//   window.addEventListener("resize", function () {
//     // update container list
//     teamContainerList = document.getElementsByClassName("team_container");
//
//     // get new range
//     let containerHeight = parseInt(window.getComputedStyle(teamContainerList[0]).height.slice(0, -2));
//     let range = containerHeight;
//     let offset = -0.33 * containerHeight;
//     teamName_map = mapTeamNames(range, offset);
//   });

  // initialise with the first team name
//   teamName.innerHTML = teamNames[0];
// }

// --- Sidescrolling pages ---
//
// if (!isMobile) {
//   // main page
//   const mainPage = document.getElementById("mainPage");
//   const mainDefaultX = mainPage.getBoundingClientRect().x;
//   const teamNameDiv = document.getElementById("teamDescription");
//
//   let mult = teamContainerList.length; // number of containers
//   containerHeight = parseInt(window.getComputedStyle(teamContainerList[0]).height.slice(0, -2));
//
//   // side pages
//   const sidePageList = document.getElementsByClassName("sidePage");
//   for (let i=0; i < sidePageList.length; i++) {
//     setTranslateCords(sidePageList[i], [window.innerWidth * (i+1), ((mult-1) * containerHeight), 0]);
//   }
//
//   // add event listeners for scrolling to glass texts
//   const glassTexts = document.getElementsByClassName("glassText");
//   var mouseover = false;
//   var scrolledDown = false;
//   var scrolledUp = true;
//   for (glassText of glassTexts) {
//     // check for overflow
//     if (glassText.scrollHeight > glassText.clientHeight) {
//       // there is overflow
//       glassText.onmouseover = function () {
//         mouseover = true;
//       };
//       glassText.onmouseout = function () {
//         mouseover = false;
//       };
//       glassText.onscroll = function (e) {
//         let elem = e.currentTarget;
//         if (elem.scrollHeight - elem.scrollTop <= parseIntFromPixel(window.getComputedStyle(elem).height)) {
//           scrolledDown = true;
//         }
//         else {
//           scrolledDown = false;
//         }
//         if (elem.scrollTop == 0) {
//           scrolledUp = true;
//         }
//         else {
//           scrolledUp = false;
//         }
//       };
//     }
//   }
//
//   const speed = 15; // sidescrolling speed
//   var reachEnd = false;
//   var prevDeltaY = 0;
//   window.onwheel = updatePage;
//
//   function updatePage (e) {
//       for (glassText of glassTexts) {
//         let center = glassText.getBoundingClientRect().x + glassText.getBoundingClientRect().width/2;
//         let leftLimit = window.innerWidth/2 - window.innerWidth*0.2;
//         let rightLimit = window.innerWidth/2 + window.innerWidth*0.2;
//         console.log("center:" + center);
//         console.log("leftLimit:" + leftLimit);
//         console.log("rightLimit:" + rightLimit);
//         if ( center >= leftLimit && center <= rightLimit) {
//           glassText.style.overflowY = "scroll";
//         }
//         else {
//           glassText.style.overflowY = "hidden";
//         }
//       }
//       // check that the user is not scrolling inside a div
//       // true when we reach the page's vertical end
//       reachEnd = scrollY >= ((mult - 1) * containerHeight);
//       if ((!mouseover || (mouseover && (scrolledDown || scrolledUp))) && reachEnd) {
//         // scroll back to default height
//         scrollTo(scrollX, ((mult - 1) * containerHeight));
//
//         // disable vertical scroll when sidescrolling starts
//         disableScrolling();
//
//         // check for reaching horizontal end
//         let [x, y, z] = getCords(sidePageList[sidePageList.length-1].style.transform);
//         x = parseInt(x);
//         let reachHorizontalEnd = (x <= window.innerWidth/8);
//         let direction = (e.deltaY - prevDeltaY < 0); // true for left
//         if ((!direction && !reachHorizontalEnd) || direction) {
//           // sidescrolling direction
//           if (direction) {
//             sidescrollPage(-speed);
//           }
//           else {
//             sidescrollPage(speed);
//           }
//         }
//
//         // animate footer accordingly
//         // animateFooter(reachHorizontalEnd);
//
//         // stop sidescrolling
//         if (mainPage.getBoundingClientRect().x > mainDefaultX) {
//           reachEnd = false;
//           // move pages back to their default positions
//           setTranslateCords(mainPage);
//           setTranslateCords(teamNameDiv);
//           for (let i=0; i < sidePageList.length; i++) {
//             setTranslateCords(sidePageList[i], [window.innerWidth * (i+1), ((mult-1) * containerHeight), 0]);
//           }
//           // scroll a little bit upwards to escape reachEnd
//           window.scrollTo({
//             left: scrollX,
//             top: scrollY - 50,
//             behavior: "smooth"
//           });
//           // enable scrolling
//           enableScrolling();
//         }
//       }
//   };

/**
 *
 * Disables vertical scrolling.
 *
 */
function disableScrolling () {
  if (!document.body.classList.contains("noscroll")) {
    document.body.classList.toggle("noscroll");
  }
}

/**
 *
 * Enables vertical scrolling.
 *
 */
function enableScrolling () {
  if (document.body.classList.contains("noscroll")) {
    document.body.classList.toggle("noscroll");
  }
}

/**
 *
 * Hides the footer
 *
 */
// function hideFooter () {
//   document.getElementById("footer").style.display = "none";
// }

// --- Footer Animations ---

// const footer = document.getElementById("footer");
// var footerHeight = footer.getBoundingClientRect().height;
// var isanimated = false;
//
// // event listener to handle footer animations
// footer.addEventListener("animationend", function (event) {
//   isanimated = false;
//   footer.classList.toggle(event.animationName);
//   if (event.animationName == "footer_up") {
//     setTranslateCords(footer, [0, -(1.7 * footerHeight), 0]);
//   }
//   else if (event.animationName == "footer_down") {
//     setTranslateCords(footer, [0, 0, 0]);
//   }
// });

// /**
//  *
//  * Animates footer
//  *
//  * @param {bool} reachHorizontalEnd True if the horizontal end has been reached
//  */
// function animateFooter (reachHorizontalEnd) {

//   // show footer once reaching the horizontal end if it
//   // is not already shown
//   let [footer_x, footer_y, footer_z] = ['0px', '0px', '0px'];
//   if (footer.style.transform) {
//     [footer_x, footer_y, footer_z] = getCords(footer.style.transform);
//   }
//   else {
//     setTranslateCords(footer, [0, 0, 0]);
//   }
//   let isHidden = (footer_x == '0px' && footer_y == '0px' && footer_z == '0px');

//   if (isHidden && !isanimated && reachHorizontalEnd) {
//     // animate footer
//     isanimated = true;
//     footer.classList.toggle("footer_up");
//   }
//   // hide footer once leaving the horizontal end if it
//   // is already shown
//   else if (!isHidden && !isanimated && !reachHorizontalEnd) {
//     // animate footer
//     isanimated = true;
//     footer.classList.toggle("footer_down");
//   }
// }

/**
 *
 * Sidescrolls from the main page to the secondary page.
 *
 * @param {number} speed the speed of the sidescroll
 *
 */
function sidescrollPage (speed = 1) {
  incrementTranslateCords(mainPage, [speed, 0, 0]);
  incrementTranslateCords(teamNameDiv, [speed, 0, 0]);
  for (let i=0; i < sidePageList.length; i++) {
    incrementTranslateCords(sidePageList[i], [speed, 0, 0]);
  }
}


/**
 *
 * Increment the value of the coordinates in a node's
 * translate3d.
 *
 * @param {Node} node node to increment coordinates of
 * @param {number} x_cord amount to increment the x coordinate
 * @param {number} y_cord amount to increment the y coordinate
 * @param {number} z_cord amount to increment the z coordinate
 *
 */
function incrementTranslateCords (node, [x_cord, y_cord, z_cord] = [0, 0, 0]) {

  if (node.style.transform) {

    let [x, y, z] = getCords(node.style.transform);
    x = parseInt(x) - x_cord;
    y = parseInt(y) - y_cord;
    z = parseInt(z) - z_cord;

    node.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  else {
    node.style.transform = `translate3d(${-x_cord}px, ${-y_cord}px, ${-z_cord}px)`;
  }

}

/**
 *
 * Sets the value of the coordinate in a node's
 * translate3d.
 *
 * @param {Node} node node to set coordinates of
 * @param {number} x_cord amount to set the x coordinate
 * @param {number} y_cord amount to set the y coordinate
 * @param {number} z_cord amount to set the z coordinate
 *
 */
function setTranslateCords (node, [x_cord, y_cord, z_cord] = [0, 0, 0]) {
  node.style.transform = `translate3d(${x_cord}px, ${y_cord}px, ${z_cord}px)`;
}

/**
 *
 * Returns an array with all the values of the three coordinates
 * from a translate3d string.
 *
 * @param {string} str the translate3d string to get coordinates from
 *
 */
function getCords (str) {
  return str.match(/([\d-]+)px/g);
}

/**
 *
 * Returns an integer of the pixels in the string.
 *
 * @param {string} str pixel number in string e.g. '410.12px'
 *
 */
function parseIntFromPixel (str) {
  return parseInt(str.match(/[\d.]*/)[0]);
}

// }
