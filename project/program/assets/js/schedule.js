document.body.style.overflowY = "scroll";


let media_sm = window.matchMedia("(max-width: 700px)");
//div-right detail container add aling-items:flex-end
let rtexts = document.getElementsByClassName("detail-text");
for (let i=1; i<rtexts.length; i+=2){
    if(rtexts[i].parentElement.parentElement.classList.contains('div-right'))
    rtexts[i].setAttribute('style', 'align-content: flex-end;')
}

let maxWidth = window.innerWidth / 5;
let maxH2FontSize = 1.5;
let maxH4FontSize = 1.33;
let maxpFontSize = 1.1;



let imgs = document.getElementsByClassName("event-img");
let texts = document.getElementsByClassName("detail-text");
let time_slots = document.getElementsByClassName("time-slot");
let length = imgs.length;
let mult = 0.5;
let op_mult = 1;
function update_rows(){
    let threshold = 0.4  * window.innerHeight;
    if(media_sm.matches){
        threshold = 0.2  * window.innerHeight;
    }
    for(let i=0; i<length; i++){
        // console.log(threshold)
        let img = imgs[i];
        let text = texts[i];
        let time_slot = time_slots[i];
        let pos = text.getBoundingClientRect();
        let distance = Math.abs(pos.top - threshold);
        let max = window.innerHeight;
        let dist_perc = (1 - (distance/max)*mult);
        let opacity = (1 - (distance/max)*op_mult);
        img.style.width = `${maxWidth * dist_perc}px`;
        text.style.fontSize = `${maxpFontSize * dist_perc}em`;
        text.children[0].style.fontSize = `${maxH2FontSize * dist_perc}em`;
        text.children[1].style.fontSize = `${maxH4FontSize * dist_perc}em`;
        // console.log(text)
        text.style.opacity = opacity;
        // console.log(time_slot.children[0]);
        time_slot.children[0].style.opacity = opacity;
        console.log(threshold)
        console.log(distance)
        console.log(opacity)
    }
}
update_rows();
window.addEventListener('scroll',update_rows);



//media screen
function phone_mode(media_query){
    if(media_query.matches){
        //delete flex-end in right-texts
        for (let i=1; i<rtexts.length; i+=2){
            if(rtexts[i].parentElement.parentElement.classList.contains('div-right'))
            rtexts[i].setAttribute('style', 'align-content: flex-start;')
        }
        let right_texts = document.getElementsByClassName("div-right");
        let left_texts = document.getElementsByClassName("text-left");
        //let lines = document.getElementsByClassName("detail-line");
        let text_containers = document.getElementsByClassName("detail-container");
        let borders = document.getElementsByClassName("table-cell-border");
        let time_slots = document.getElementsByClassName("time-slot");
        for(let i=0; i<text_containers.length; i++){
            // text_containers[i].setAttribute('style', 'text-aling:left');
            right_texts[i].setAttribute('style', 'text-aling:left');
            borders[i].setAttribute('style', 'padding:0.3em');
            time_slots[i].setAttribute('style', 'padding:0.3em');
        }
        for(let i=0; i<right_texts.length; i+=2){
            right_texts[i].style.display = 'none';
            if(right_texts[i+1]) right_texts[i+1].removeAttribute('text-align');
            if(left_texts[i+1]) left_texts[i+1].style.display = 'none';
            //lines[i].style.display = 'none';
            //if(lines[i+1]) lines[i+1].style.display = 'none';
        }
        let rows = document.getElementsByClassName("table-row");
        let cells = document.getElementsByClassName("table-cell-full");
        for(let i=0; i<cells.length; i++){
            cells[i].style.width = "100%";
            if(i % 2){
                if(rows[i]){rows[i].insertBefore(rows[i].children[1], rows[i].children[0]);}
            }
        }
        let table = document.getElementsByClassName("table-main")[0];
        table.style.marginLeft = "0.5em";
    }
}


phone_mode(media_sm);
media_sm.addEventListener(phone_mode)
