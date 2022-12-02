//alert("Can you see this?");
/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates 
unique colors and content for each weekday (Sunday to Saturday) into the page.  
The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include 
the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


Image (of specific coffee)
alt tag (identifies type of coffee)
description (of this type of coffee)
weekday
color (supporting image)

The unique color could affect the background HTML, or an element on the page for each day of the week. 
 All of the above must occur within one page

*/

function coffeeTemplate(coffee){
    
    return `<p> 
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong>${coffee.day} Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}!
    </p> <p><strong>Info:</strong> ${coffee.info}</p>`;
}



let myDate = new Date ();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
}else{//today's day of week
myDay = today;
}

//change the string to an integer
myDay = parseInt(myDay);

switch (myDay){
    case 0:
        today = "Sunday";
        coffee = {
            color:"green",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a mocha",
            day: "Sunday",
            desc: `I like me some Mocha`,
            info: `Try this tasty Mocha iced or hot! Ask for some mocha drizzle for an extra chocolate-y experience`
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some Bubble Tea`,
            info: `One of our most popular beverages at LargeBuck$! Comes in a variety of flavors like Strawberry to Black Sugar!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `Its cold, so a caramel latte sounds good!`,
            info: `Come try our Caramel latte! Extra Caramel Drizzle is the way to go!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"yellow",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `I need extra energy, so I'll have a coldbrew!`,
            info: `Feeling tired and need some energy? Try our Coldbrew. We steep our Coldbrew for 20 hours which enhances your coffee experience!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"blue",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip",
            day: "Thursday",
            desc: `Feeling drippy so I ordered drip!`,
            info: `For the folks who need a boost of confidence, drip coffee is for you!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"orange",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Friday",
            desc: `I'm feeling fun so I ordered a frappaccino!`,
            info: `Nothing like a yummy frappaccino to end your week! This blended beverages comes in Caramel, Mocha, Strawberry, White mocha, you name it we have it!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color:"purple",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin Spice Latte",
            day: "Saturday",
            desc: `I'm feeling fun so I ordered a Pumpkin Spice Latte!`,
            info: `PSl is year round at LargeBuck$ so you'll never have to miss it!`
        };
    break;
    

    default:
        alert("something went wrong!");

} 




console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

//change the background color of the HTML element
document.querySelector("html").style.backgroundColor = coffee.color;