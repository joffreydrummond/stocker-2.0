const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/stockerapp"
);
  
// const storeSeed = [
//     {
//         name: "Jack Herer",
//         information:
//             "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Supermax OG",
//         information:
//             "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Sour Diesel",
//         information:
//             "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Girl Scout Cookies",
//         information:
//             "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//         date: new Date(Date.now())
//     },
// ];

// db.strains.insertMany([
//     {
//             name: "Jack Herer",
//             information: "Jack Herer is a sativa-dominant cannabis strain that has gained as much renown as its namesake, the marijuana activist and author of The Emperor Wears No Clothes. Combining a Haze hybrid with a Northern Lights #5 and Shiva Skunk cross, Sensi Seeds created Jack Herer hoping to capture both the cerebral elevation associated with sativas and the heavy resin production of indicas. Its rich genetic background gives rise to several different variations of Jack Herer, each phenotype bearing its own unique features and effects. However, consumers typically describe this 55% sativa hybrid as blissful, clear-headed, and creative.",
//             date: new Date(Date.now())
//         },
//         {
//             name: "Supermax OG",
//             information:
//                 "Supermax OG is a hybrid strain that delivers everything an OG Kush enthusiast cherishes most: fast-acting euphoria that hits like a train alongside an earthy, piney aroma. Its effects tend toward the relaxing indica side of the spectrum with a potency you can see in the thick, sticky blanket of crystal trichomes. With buds that grow both large and dense, commercial growers will appreciate the hefty yields that come out of Supermax OG gardens.",
//             date: new Date(Date.now())
//         },
//         {
//             name: "Sour Diesel",
//             information:
//                 "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status. Stress, pain, and depression fade away in long-lasting relief that makes Sour Diesel a top choice among medical patients. This strain took root in the early 90's, and it is believed to have descended from Chemdog 91 and Super Skunk.",
//             date: new Date(Date.now())
//         },
//         {
//             name: "Girl Scout Cookies",
//             information:
//                 "GSC, formerly known as Girl Scout Cookies, is an OG Kush and Durban Poison hybrid cross whose reputation grew too large to stay within the borders of its California homeland. With a sweet and earthy aroma, GSC launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won GSC numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss.",
//             date: new Date(Date.now())
//     },
//     {
//         name: "Blue Dream",
//         information:
//             "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing a Blueberry indica with the sativa Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration. Novice and veteran consumers alike enjoy the level effects of Blue Dream, which ease you gently into a calm euphoria. Some Blue Dream phenotypes express a more indica-like look and feel, but the sativa-leaning variety remains most prevalent.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Granddaddy Purple",
//         information:
//             "Introduced in 2003 by Ken Estes, Granddaddy Purple (or GDP) is a famous indica cross between Purple Urkle and Big Bud. This California staple inherits a complex grape and berry aroma from its Purple Urkle parent, while Big Bud passes on its oversized, compact bud structure. GDP flowers bloom in shades of deep purple, a contrastive backdrop for its snow-like dusting of white crystal resin.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Green Crack",
//         information:
//             "Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day. With a tangy, fruity flavor redolent of mango, Green Crack is a great daytime strain that may help consumers fight fatigue, stress, and depression.",
//         date: new Date(Date.now())
//     },
//     {
//         name: "Bubba Kush",
//         information:
//             "Bubba Kush is an indica strain that has gained notoriety in the U.S. and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over. From head to toe, muscles ease with heaviness as dreamy euphoria blankets the mind, crushing stress while coercing happy moods. Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple.",
//         date: new Date(Date.now())
//     },
//     ]).then(() => db.strains.collection.insertMany(storeSeed))
//     .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });



