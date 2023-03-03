const caption =
    "You usually read at about 300 words per minute. However, by removing the need to move your eyes you can easily read much faster. For example, right now you are reading at 400 words per minute. Which kinda amazing. Now you are up to 500 words per minutes. Which just goes to show that your mind can achieve far more than you think. Anyway I just thought that I would mention it. Enjoy the rest of your day. Thanks for your visit.";

const arrCaption = caption.split(" ");

console.log(arrCaption[arrCaption.length + 1]);

function myFunction() {
    let lengthArr = 82;
    let count = 0;
    let check;

    if (arrCaption[count]) {
        setInterval(() => {
            document.getElementById("text").innerText = arrCaption[count];

            // count;
            check = arrCaption[count];
            console.log(count);
        }, 120);
    } else {
        console.log("else");
        clearInterval();
    }
}

// buat array menggunakan kalimat yang ingin ditampilkan.
//
