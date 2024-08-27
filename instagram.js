let storiyaan = document.getElementsByClassName("storiyan")[0];
let photopost = document.querySelector(".removescroll");
let foot = document.getElementsByClassName("fixed")[0];
let arr = [
    {
        dp: "sourabh.jpg",
        story: "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user"
    },
    {
        dp: "sachin.jpeg",
        story: "https://img.freepik.com/premium-photo/beautiful-multicolored-real-butterfly-flying-green-background_532963-5327.jpg"

    },
    {
        dp: "https://i.pinimg.com/736x/60/41/08/60410816940fa307f3dc39b914c809e4.jpg",
        story: "https://i.pinimg.com/736x/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"


    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgtyhJQ63vInZzXHpE9RDJJ3yyZxjZgSVwg&s",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOTosQl8ECHevVWgsl5vztCYYt3Be8cpWp_4TeZPz_TqRZozfWITbj0dIBCgsn7H73O8&usqp=CAU"

    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3046Gt1ViNSSKp6MCQom134YT-66tzAtKw&s",
        story: "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user"

    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhP-R1TX12mAbLotvOvb6inaL8cvet7rywA&s",
        story: "https://img.freepik.com/free-photo/view-boat-water_23-2150785252.jpg"


    },
    {
        dp: "https://pbs.twimg.com/profile_images/1571376568555180037/dVyo4uy7_400x400.jpg",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlst33n37g93m8liDygxtpqoPise6krFHX8g&s"


    },

    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgtyhJQ63vInZzXHpE9RDJJ3yyZxjZgSVwg&s",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOTosQl8ECHevVWgsl5vztCYYt3Be8cpWp_4TeZPz_TqRZozfWITbj0dIBCgsn7H73O8&usqp=CAU"

    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3046Gt1ViNSSKp6MCQom134YT-66tzAtKw&s",
        story: "https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user"

    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhP-R1TX12mAbLotvOvb6inaL8cvet7rywA&s",
        story: "https://img.freepik.com/free-photo/view-boat-water_23-2150785252.jpg"


    },
    {
        dp: "https://pbs.twimg.com/profile_images/1571376568555180037/dVyo4uy7_400x400.jpg",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlst33n37g93m8liDygxtpqoPise6krFHX8g&s"


    },


]

let adddata = "";
arr.forEach(function (value, index) {
    adddata += ` <div class="story">
 <img id="${index}" src="${value.dp}" alt="">

    </div>
`

}
)
storiyaan.innerHTML = adddata;

let storydisplay = document.getElementById("full-screen");
let post = document.querySelector("#post")
let stories = document.querySelectorAll(".story img");//isse hum img pr click krenge tabhi full-screen img show hogi naki storiyaan pr click krne pr 

stories.forEach(function (img, imgindex) {
    img.addEventListener("click", function (dets) {

        storydisplay.style.display = "block";
        storydisplay.style.backgroundImage = `url(${arr[imgindex].story})`;
        navbar.style.display = "none";
        photopost.style.display = "none";
        foot.style.display = "none";

        setTimeout(function () {
            storydisplay.style.display = "none";
            photopost.style.display = "block";
            navbar.style.display = "flex";
            foot.style.display = "block";


        }, 10000)


    }

    )
}
);

storydisplay.addEventListener("click", function () {
    storydisplay.style.display = "none";
    photopost.style.display = "block";
    navbar.style.display = "flex";
    foot.style.display = "block";
});

//now this below code works on post part 


let arr2 = [
    {
        image: "sourabh1.jpeg"
    },
    {
        image: "sourabh2.jpeg"
    },
    {
        image: "sourabh3.jpeg"
    },
    {
        image: "sourabh4.jpeg"
    },
    {
        image: "sourabh5.jpeg"
    },

]

let filldata = "";
arr2.forEach((value) => {
    filldata += `
<section id="post">
        <div>
          <img src="sourabh.jpg" alt="" class="im">
          <b>sourabhprajapati_786</b>
        </div>
        <div>
          <i class="ri-more-2-line"></i>
        </div>
      </section>


      <div class="postphoto">
         
        <img src="${value.image}" alt="">
          <i class="ri-heart-fill loveemoji" id="lv"></i>
        <div class="flexed">
          <div>
           <i class="ri-heart-fill " id="lv"></i>
            <img src="https://static.thenounproject.com/png/1026792-200.png" alt=""
              style="width: 30px; height:29px;border-radius: 50%; border: none; margin-bottom: 7px;">
            <i class="ri-send-plane-line"></i>
          </div>

          <i class="ri-bookmark-fill" style="font-size:32px; color:#d5c9c9"></i>

        </div>

      </div>`

})



photopost.innerHTML = filldata;

//now work on like button of instagram 
let postphoto = document.querySelectorAll('.postphoto');//here we  select the class .postphoto by use of querySelectorAll by doing this they select all class of that's name 
let loveemoji = document.querySelectorAll('.loveemoji');
let lveicon2 = document.querySelectorAll(' .flexed .ri-heart-fill');
// console.log(postphoto);


//total arr2 mein 5 data ha and this data use in image post so according to this we have 5 love icon 
arr2.forEach((value, index) =>
    postphoto[index].addEventListener("dblclick", function () {
        loveemoji[index].style.opacity = 0.8;
        loveemoji[index].style.transform = "translate(-50%,-50%) scale(4)";
        lveicon2[index].style.color = "red";

        setInterval(function () {
            loveemoji[index].style.opacity = 0;

        }, 3000);

    })
)

lveicon2 = document.querySelectorAll(' .flexed .ri-heart-fill');
// console.log(lveicon2); for checking this wil work or not 
let flag = 0;

arr2.forEach((value, index) => {

    lveicon2[index].addEventListener("click", () => {
        if (flag == 0) {
            loveemoji[index].style.opacity = 0.8;
            loveemoji[index].style.transform = "translate(-50%,-50%) scale(4)"
            lveicon2[index].style.color = "red";
            flag = 1;
        }
        else {
            loveemoji[index].style.opacity = 0;
            loveemoji[index].style.transform = "translate(-50%,-50%) scale(4)";
            lveicon2[index].style.color = "rgb(216, 213, 213)";
            flag = 0;
        }

        setInterval(function () {
            loveemoji[index].style.opacity = 0;

        }, 3000);

    })







})


// flag=1 and then 0 in if else condition is basically a toggle like condition 
flag=0;
let bookmark=document.getElementsByClassName('ri-bookmark-fill');

arr2.forEach((value,index)=>{
 bookmark[index].addEventListener('click',function(){
 if(flag==0){
    bookmark[index].style.color="#d5c9c9";
    flag=1;
}
   
 else{
    bookmark[index].style.color="black";
    flag=0;
 }
 })
}
)
