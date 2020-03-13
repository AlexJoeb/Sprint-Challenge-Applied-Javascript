/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = () => {
    const carousel = ele("div"),
        leftBtn = ele("div"),
        rightBtn = ele("div"),
        img1 = ele("img"),
        img2 = ele("img"),
        img3 = ele("img"),
        img4 = ele("img");

    ac(carousel, "carousel");
    ac(leftBtn, "left-button");
    ac(rightBtn, "right-button");
    ac(img1, "img-1");
    ac(img2, "img-2");
    ac(img3, "img-3");
    ac(img4, "img-4");

    img1.src = `./assets/carousel/mountains.jpeg`;
    img2.src = `./assets/carousel/computer.jpeg`;
    img3.src = `./assets/carousel/trees.jpeg`;
    img4.src = `./assets/carousel/turntable.jpeg`;

    img1.style.display = "block";

    leftBtn.style.position = "absolute";
    leftBtn.style.zIndex = "1000";

    rightBtn.style.position = "absolute";
    rightBtn.style.zIndex = "1000";

    append(carousel, leftBtn);
    append(carousel, img1);
    append(carousel, img2);
    append(carousel, img3);
    append(carousel, img4);
    append(carousel, rightBtn);

    // ! Fade In Out Carousel - No button interaction.
    // let i = 1;
    // setInterval(() => {
    //     // Do Stuff Here;
    //     if(i === 1){
    //       $(".img-4").fadeOut(1000);
    //       $(".img-1").delay(1000).fadeIn(1000);
    //     }else if(i === 2){
    //       $(".img-1").fadeOut(1000);
    //       $(".img-2").delay(1000).fadeIn(1000);
    //     }else if(i === 3){
    //       $(".img-2").fadeOut(1000);
    //       $(".img-3").delay(1000).fadeIn(1000);
    //     }else if(i === 4){
    //       $(".img-3").fadeOut(1000);
    //       $(".img-4").delay(1000).fadeIn(1000);
    //     } else {
    //       $(".img-1").delay(1000).fadeIn(1000);
    //       $(".img-2").fadeOut(1000);
    //       $(".img-3").fadeOut(1000);
    //       $(".img-4").fadeOut(1000);
    //     }
    //     ++i;
    //     if (i === 5) i = 1;
    // }, 5000);

    return carousel;
};

append("carousel-container", carousel());

let index = 1;

$(".left-button, .right-button").on("click", e => {
    const btn = event.target;
    if (btn.className.split(" ").includes("left-button")) {
        // * Left Button Click - Minus to index
        if (index === 1) index = 4;
        else index--;

        showImg(index);

        console.log("Clicked", index);
    } else {
        // * Right Button Click - Add to index
        if (index === 4) index = 1;
        else index++;

        showImg(index);
    }
});

const showImg = i => {
    $(".img-1").fadeOut(1000);
    $(".img-2").fadeOut(1000);
    $(".img-3").fadeOut(1000);
    $(".img-4").fadeOut(1000);
    if (i === 1) {
        $(".img-1")
            .delay(1000)
            .fadeIn(1000);
    } else if (i === 2) {
        $(".img-2")
            .delay(1000)
            .fadeIn(1000);
    } else if (i === 3) {
        $(".img-3")
            .delay(1000)
            .fadeIn(1000);
    } else if (i === 4) {
        $(".img-4")
            .delay(1000)
            .fadeIn(1000);
    } else {
        $(".img-1")
            .delay(1000)
            .fadeIn(1000);
    }
};
