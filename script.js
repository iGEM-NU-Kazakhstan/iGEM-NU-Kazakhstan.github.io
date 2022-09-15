images = {
    "12" : "football",
    "11" : "stars"
}

//json to store with popus is opened
opened_popups = {}

const container = document.getElementById('container');

const popups = document.getElementsByClassName('popup');

//function to take id of img, and show its popup div
function open_popup(img_id){

    //getting id of div to open; image's popup div's class - 'image(id)-popup'
    let popup_div = document.getElementById(`image${img_id}-popup`);
    popup_div.style.visibility = "visible";

    //blur container
    container.classList.add('blur');

    //document that is has been opened
    opened_popups[`${img_id}`] = "opened";
};

function close_popup(img_id){
    let popup_div = document.getElementById(`image${img_id}-popup`);
    popup_div.style.visibility = "hidden";

    container.classList.remove('blur');

    delete opened_popups[`${img_id}`];
}

//function to hide popups when clicking outside - checks in opened_popups json which is opened and call close_popup on it
function hide_all_popups(){
    for (const img_id in opened_popups){
        if (opened_popups[`${img_id}`] == "opened" && getComputedStyle(container).pointerEvents == "none"){
            console.log(getComputedStyle(container).pointerEvents);
            close_popup(img_id);
        }
    }
}


//function to take img id, email, and send to telegram bot
const bot = new Bot("5347650968:AAF1ZtgAw7aCe9QDkZo2YcPly3ZGUyRGDr0", 412269436);

function sendBot(img_id) {
    email = document.getElementById(`email_for_image${img_id}`).value;
    price = document.getElementById(`price_image${img_id}`).value;

    msg_text = `A new offer for an image:
        image: ${images[img_id]};
        email: ${email};
        price: ${price}`

    bot.sendMessage(msg_text)
    .then(res => {
        console.log(res);
    })
}

//to get chatID
/* bot.getUpdates()
.then(res=>{
    console.log(res.result)
})
 */
