/* Nested if-else */

// problem 1:
let hasInvitation = true; // user can change this
if(hasInvitation){
    console.log("I will go to the party");
    let giftBudget = 2000; // user can change this 
    if(giftBudget > 1000){
        console.log("I will Buy a small gift for my friend");
    }else{
        console.log("I will just attend the party");
    }
}else{
    console.log("I will remove that friend from my friendList");
}


// problem 2:
let gustComing = true; // user can change this
if(gustComing){
    console.log("Would you like to have tea?");
    let wantsTea = true;
    if(wantsTea){
        console.log("would you like to have cookies?");
        let wantsCookies = true;
        if(wantsCookies){
            console.log("Serving tea with cookies");
        }else{
            console.log("Your Tea is ready");
        }
    }else{
        console.log("Please have a seat and enjoy watching Star Jalsha")
    }
}

// problem 3:
let hasUserAccount = true; // user can change this
if(hasUserAccount){
    console.log("Check Subscription packages");
    let subscriptionPackage = "premium"; // user can change this
    if(subscriptionPackage == "premium"){
        console.log("You have access to all Premium contents");
    }else{
        console.log("You can Watch the free versions");
    }
}else{
    console.log("Please create an account to access contents");
}

// problem 4:
let hasFoodInFridge = true; // user can change this
if(hasFoodInFridge){
    console.log("let's warm the food");
}else{
    console.log("Checking if food delivery app is working!");
    let isFoodDeliveryApp = true;
    if(isFoodDeliveryApp){
        console.log("Ordering food from food delivery app");
    }
    else{
        console.log("I will be fasting today");
    }
}

// problem 5:
guestCount = 100; // user can change this
if(guestCount > 100){
    let guestBringGift = true; // user can change this
    if(guestBringGift){
        console.log("Lets party all night");
    }else{
        console.log("I will party with myself");
    }
}