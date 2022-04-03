// detect device type
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
console.log(isMobile);

// set scroll at beginning of page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// team containers and individual team items
const teamContainerList = document.getElementsByClassName("team_container");
const teamItems = document.getElementsByClassName("team_item_linkedin_hover");
const teamImges = document.getElementsByClassName("team_item_img");

window.addEventListener("resize", function () {
  // fix picture sizes and black box sizes on resize
  resizePictures();
  updateBlackBoxes();
});

/**
 *
 * Resizes all pictures to match the window size.
 *
 */
function resizePictures () {
  for (teamContainer of teamContainerList) {
    teamContainer.style.width = `${window.innerWidth}px`;
    teamContainer.style.height = `${window.innerHeight}px`;
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
updateBlackBoxes();

// --- Sidescrolling pages ---

const mainPage = document.getElementById("mainPage");
const mainDefaultY = mainPage.getBoundingClientRect().y;
const mainDefaultX = mainPage.getBoundingClientRect().x;
const teamNameDiv = document.getElementById("teamDescription");
//
const secondaryPage = document.getElementById("secondaryPage");
let mult = document.getElementsByClassName("team_container").length;
const defaultSecondaryPageTranslateCords = [window.innerWidth, (mult-1)*window.innerHeight, 0];
setTranslateCords(secondaryPage, defaultSecondaryPageTranslateCords)
//
const separator = document.getElementsByClassName("about_separator")[0];
const defaultSeparatorPageTranslateCords = [window.innerWidth, (mult-1)*window.innerHeight, 0];

var reachEnd = false;
var prevDeltaY = 0;
window.addEventListener("wheel", function (e) {
    // true if reached end
    reachEnd = (window.innerHeight + window.scrollY > document.body.offsetHeight);
    if (reachEnd) {
      // set default secondary page coordinates

      // disable vertical scroll when sidescrolling starts
      disableScrolling();

      // sidescrolling speed
      let speed = 7;
      // sidescrolling direction
      if (e.deltaY - prevDeltaY < 0) {
        speed = -speed;
      }
      sidescrollMain(speed);

      // stop sidescrolling
      if (mainPage.getBoundingClientRect().x > mainDefaultX) {
        reachEnd = false;
        // move pages back to their default positions
        setTranslateCords(mainPage);
        setTranslateCords(teamNameDiv);
        setTranslateCords(secondaryPage, defaultSecondaryPageTranslateCords);
        // scroll a little bit upwards to escape reachEnd
        window.scrollTo(scrollX, scrollY + 20);
        // enable scrolling
        enableScrolling();
      }
    }
});

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
 * Sidescrolls from the main page to the secondary page.
 *
 * @param {number} speed the speed of the sidescroll
 *
 */
function sidescrollMain (speed = 1) {
  incrementTranslateCords(mainPage, [speed, 0, 0]);
  incrementTranslateCords(teamNameDiv, [speed, 0, 0]);
  incrementTranslateCords(secondaryPage, [speed, 0, 0]);
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

    let [x, y, z] = getCoords(node.style.transform);
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
function getCoords (str) {
  return str.match(/([\d-]+)px/g);
}
