const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const nodemailer = require('nodemailer');


const express = require('express');
const app = express();
var Jimp = require("jimp");


var config = {
    apiKey: "AIzaSyCLteIvu7xNKiquCChdljQCh3xrWmrcfjg",
    authDomain: "sell4bids-4affe.firebaseapp.com",
    databaseURL: "https://sell4bids-4affe.firebaseio.com/",
    storageBucket: "gs://sell4bids-4affe.appspot.com/"
};

var firebase = require('firebase');
firebase.initializeApp(config);

var gcloud = require('google-cloud');
var gcs = gcloud.storage({
    projectId: 'sell4bids-4affe',
    keyFilename: '/path/to/keyfile.json'
});

var datastore = gcloud.datastore();
var storage = gcloud.storage();

/*	
const mailTransport=nodemailer.createTransport({
	
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	
	auth:{
		
		user: 'sell4bids1@gmail.com',
		pass: 'BPL@##45Gsd33d'
	}
});*/


//http://nodemailer.com/smtp/
// if true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. 
//In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false

const mailTransport = nodemailer.createTransport({

    host: 'bplmail.shopnroar.com',
    port: 587,
    secure: false,

    auth: {

        user: 'contact@sell4bids.com',
        pass: 'sell#bids4'
    }
});

/*
const mailTransport=nodemailer.createTransport({
	
	host: 'smtp.mailgun.org',
	
	
	auth:{
		
		user: 'postmaster@sell4bids.com',
		pass: '8aa9b09651394ee7a2dfb82857099662'
	}
});*/


const ref = admin.database().ref();


/*
exports.weeklyEmail=functions.https.onRequest((req,res)=>{
	
	const currentTime=new Date().getTime();
	const lastWeek=currentTime - 604800000;
	const emails = [];
	
	ref.child('users').orderByChild('startTime').startAt(lastWeek).once('value')
	.then(snap => {
		snap.forEach(childSnap => {
			
			const email=childSnap.val().email;
			emails.push(email);
			
		})
		
		return emails;
	}).then(emails=>{
		
		console.log('Sending emails to : ' + emails.join());
		
		const mailOptions = {
			
			from: '"Sell4Bids" <contact@sell4bids.com>',
			bcc: emails.join(),
			subject: 'Thanks for using Sell4Bids',
			text: 'To check more about Sell4Bids, visit sell4bids.com'
		}
		
		return mailTransport.sendMail(mailOptions).then(()=> {
			
			res.send('Email sent to '+emails.join())
		}).catch(error => {
			res.send(error)
		})
		
	})
});*/


//use to send welcome email
exports.sendWelcomeMail = functions.database.ref('/users/{userId}/uid')
    .onCreate(event => {

        // Grab the current value of what was written to the Real time Database.
        const newUserId = event.params.userId;

        var htmlEmailBody = '';

        ref.child('users').child(newUserId).child('configs').child('buyingActivities').set('on');
        ref.child('users').child(newUserId).child('configs').child('sellingActivities').set('on');

        return ref.child('users').child(newUserId).once('value')
            .then(snap => {

                const to = snap.val().email;
                const receiverName = snap.val().name;

                ref.child('emailTemplates').child('welcomeEmail').once('value')
                    .then(snap => {

                        htmlEmailBody = snap.val().template;

                        htmlEmailBody = htmlEmailBody.replace('_receiverName_', receiverName);
                        htmlEmailBody = htmlEmailBody.replace('_receiverName_', receiverName);

                        return htmlEmailBody;

                    })
                    .then(htmlEmailBody => {

                        const mailOptions = {

                            from: '"Sell4Bids" <contact@sell4bids.com>',
                            to: to,
                            subject: 'Welcome to Sell4Bids',
                            text: 'Welcome to Sell4Bids',
                            html: htmlEmailBody
                        }

                        return mailTransport.sendMail(mailOptions);
                    });


                const receiverToken = snap.val().token;
                const receiverUid = snap.val().uid;

                return pleaseSendFCM('Welcome to Sell4Bids', 'Sell4Bids is a super-cool app that allows you to list your items', receiverName, receiverToken, receiverUid);

            });
    });


//function that return data for search results
exports.searchResult = functions.https.onRequest((req, res) => {

    console.log('Calling function searchResult');

    //recieving parametters
    const key = req.query.key;
    var queryString = req.query.queryString;
    queryString = queryString.toLowerCase();

    var queryWords = queryString.split(" ");

    var keys = [];

    var results = [];

    var productsCount = 0;

    if (!key || !queryString) {
        res.status(400).send('Bad request');
    }
    else {
        ref.child('keys').once('value')
            .then(snap => {
                snap.forEach(childSnap => {

                    const loopKey = childSnap.val().key;
                    keys.push(loopKey);

                })

                return keys;
            })
            .then(keys => {

                //console.log('Keys in database : '+keys.join());
                if (keys.indexOf(key) > -1) {


                    ref.child("products").once('value')
                        .then(mainSnap => {

                            console.log("looping started");

                            //looping each category
                            mainSnap.forEach(categorySnap => {

                                const loopCategory = categorySnap.key;
                                //console.log("category : " + loopCategory);


                                //looping each auctionType
                                categorySnap.forEach(auctionTypeSnap => {

                                    const loopAuctionType = auctionTypeSnap.key;
                                    //console.log("auction type : " + loopAuctionType);


                                    //looping each state
                                    auctionTypeSnap.forEach(stateSnap => {

                                        const loopState = stateSnap.key;
                                        //console.log("state : " + loopState );


                                        //looping each product
                                        stateSnap.forEach(productSnap => {

                                            const loopProductKey = productSnap.key;
                                            var loopProductTitle = productSnap.val().title;
                                            var loopProductDescription = productSnap.val().description;

                                            //console.log("category, auctionType, state, key : " + loopCategory+" "+loopAuctionType+" "+loopState+" "+loopProductKey );
                                            //console.log("product Title : " + loopProductTitle );

                                            if (containAllWords(loopProductTitle, loopProductDescription, queryString) == true) {
                                                console.log("category, auctionType, state, key : " + loopCategory + " " + loopAuctionType + " " + loopState + " " + loopProductKey);


                                                var loopProduct = {

                                                    title: loopProductTitle,
                                                    description: loopProductDescription
                                                };

                                                //res.status(200).send(loopProduct);

                                                //results[productsCount]=loopProduct;


                                                productsCount = productsCount + 1;

                                                //console.log(loopProduct);
                                            }
                                            else {
                                            }


                                        });//auction type loop ended

                                    });//auction type loop ended


                                });//auction type loop ended


                                //console.log("looping ended for cat "+loopCategory);

                                if (loopCategory == 'Watches') {
                                    console.log("Watches ended");

                                    res.status(200).send("looping ended");
                                }

                            })//categories loop ended
                                .then(d => {

                                    console.log("looping ended...");

                                })

                            console.log("looping ended");
                            //res.status(200).send('categories printed');

                            //res.status(200).send('data returned');

                            return results;

                        })//categories then ended
                        .then(results => {

                            res.status(200).send('data sent');

                        })
                        .catch(error => {
                            res.status(400).send(error);
                        });


                }
                else {
                    res.status(400).send('Bad request');
                }

            }).catch(error => {
            res.status(400).send("error");
        });


        //res.status(200).send('count : '+productsCount);
    }
    ;//end of normal processing

    function containAllWords(loopProductTitle, loopProductDescription, queryString) {
        loopProductTitle = loopProductTitle.toLowerCase();
        loopProductDescription = loopProductDescription.toLowerCase();

        querString = queryString.toLowerCase();

        var queryWords = queryString.split(" ");

        //console.log("queryString : " + querString);

        var i = 0;
        for (i = 0; i < queryWords.length; i++) {
            var indexInTitle = loopProductTitle.indexOf(queryWords[i]);
            var indexInDescription = loopProductDescription.indexOf(queryWords[i]);


            if (indexInTitle == -1 && indexInDescription == -1)
                return false;

        }

        //if all words exist either in title or description
        return true;

    }


});
//end of searchResults


exports.generateSmallImage = functions.https.onRequest((req, res) => {

    console.log('Calling function generateSmallImage');

    //recieving parametters
    const key = req.query.key;
    var productCategory = req.query.productCategory;
    var productAuctionType = req.query.productAuctionType;
    var productState = req.query.productState;
    var productKey = req.query.productKey;

    console.log(productCategory);

    var imgURL = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/1508223259922.jpg%2Fimage.jpg?alt=media&token=a0ecc5e9-0aeb-411f-87fa-0c9ea142428c";

    var keys = [];

    if (!key || !productCategory || !productAuctionType || !productState || !productKey) {
        res.status(400).send('Bad request');
    }
    else {
        const databaseRef = admin.database().ref();

        databaseRef.child('keys').once('value')
            .then(snap => {
                snap.forEach(childSnap => {

                    const loopKey = childSnap.val().key;
                    keys.push(loopKey);

                })

                return keys;
            })
            .then(keys => {

                //do the function operations
                if (keys.indexOf(key) > -1) {
                    databaseRef.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
                        .then(productSnap => {

                            var title = productSnap.val().title;
                            console.log("title : " + title);


                            var image0Url = productSnap.val().image0;
                            //image0Url="https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/1506506934443.jpg%2Fimage.jpg?alt=media&token=17c28c07-44e5-46d2-ac49-1813220c5b42";

                            //res.status(200).send('Url : ' + image0Url)

                            if (!image0Url)
                                res.status(400).send('Bad request');
                            else {
                                Jimp.read(image0Url, function (err, img) {
                                    if (err) throw err;


                                    img.resize(120, Jimp.AUTO).getBase64(Jimp.AUTO, function (e, img64) {
                                        if (e) throw e


                                        // Create a root reference
                                        //var storageRef = firebase.storage();

                                        // Base64 formatted string
                                        //var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
                                        //storage.ref().putString(img64, 'base64').then(function(snapshot) {
                                        //console.log('Uploaded a base64 string!');
                                        //});

                                        //ref.child("writeDataNode").child("value").set({name: img64});

                                        if (img64)
                                            databaseRef.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).child('image0_base64_small').set(img64);
                                        else
                                            res.status(400).send('Bad request');

                                        res.status(200).send('<img src="' + img64 + '">')
                                    });
                                })
                                    .catch(function (err) {
                                        console.error(err);
                                    });
                            }


                            //res.status(200).send('url  : '+title);

                        });
                }
                else {
                    res.status(400).send('Bad request');
                }
            });


    }
    //res.status(200).send('Data written.')
});


/*uploadImage
exports.uploadImage=functions.https.onRequest((req,res)=>{
	
	console.log('Calling function uploadImage');
	
	const imgURL = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/1508223259922.jpg%2Fimage.jpg?alt=media&token=a0ecc5e9-0aeb-411f-87fa-0c9ea142428c";
	
	
	
	

	var auth = firebase.auth();
	var storageRef = firebase.storage().ref();

	function handleFileSelect(evt) 
	{
		evt.stopPropagation();
		evt.preventDefault();
		var file = evt.target.files[0];


		var metadata = {
		'contentType': file.type
		};

		// Push to child path.
		var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

		// Listen for errors and completion of the upload.
		// [START oncomplete]
		uploadTask.on('state_changed', null, function(error) 
		{
			// [START onfailure]
			console.error('Upload failed:', error);
			// [END onfailure]
		}, 
		function() 
		{
			console.log('Uploaded',uploadTask.snapshot.totalBytes,'bytes.');
			console.log(uploadTask.snapshot.metadata);
			var url = uploadTask.snapshot.metadata.downloadURLs[0];
			console.log('File available at', url);
			// [START_EXCLUDE]
			//document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
		}
	});

	
	
	//res.status(200).send('Data written.')
});
*/


// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeTitleUppercase = functions.database.ref('/products/{category}/{auctionType}/{state}/{productId}/title')
    .onWrite(event => {
        // Grab the current value of what was written to the Realtime Database.
        var original = event.data.val();
        //console.log('Uppercasing', event.params.pushId, original);
        const uppercase = original.charAt(0).toUpperCase() + original.substring(1);

        // You must return a Promise when performing asynchronous tasks inside a Functions such as
        // writing to the Firebase Realtime Database.
        // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
        return event.data.ref.parent.child('title').set(uppercase);
    });


// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeDescriptionUppercase = functions.database.ref('/products/{category}/{auctionType}/{state}/{productId}/description')
    .onWrite(event => {
        // Grab the current value of what was written to the Realtime Database.
        var original = event.data.val();
        //console.log('Uppercasing', event.params.pushId, original);
        const uppercase = original.charAt(0).toUpperCase() + original.substring(1);

        // You must return a Promise when performing asynchronous tasks inside a Functions such as
        // writing to the Firebase Realtime Database.
        // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
        return event.data.ref.parent.child('description').set(uppercase);
    });


//set notification for seller when order is placed or deleted
exports.newOrderOrRejection = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/orders/{buyerId}/boughtPrice')
    .onWrite(event => {

        // Grab the current value of what was written to the Realtime Database.
        var boughtPrice = event.data.val();
        var boughtPriceWas = event.data.previous.val();
        //console.log(boughtPrice, boughtPriceWas);

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;


        // Exit when the data is deleted.
        if (!event.data.exists()) {

            ref.child('users').child(productBuyerId).child('notifications')
                .push({

                    auctionType: productAuctionType,
                    category: productCategory,
                    key: productKey,
                    message: 'Your offer was rejected.',
                    read: '0',
                    sender: 'Team Sell4Bids',
                    state: productState,
                    time: admin.database.ServerValue.TIMESTAMP,
                    terminatedPrice: boughtPriceWas

                })
                .then(snap => {

                    ref.child('users').child(productBuyerId)
                        .once('value').then(snap => {

                        var buyerName = snap.val().name;
                        var buyerEmail = snap.val().email;
                        var buyerBuyingEmailConfig = 'on';

                        if (snap.child('configs'))
                            if (snap.child('configs').val().buyingActivities)
                                buyerBuyingEmailConfig = snap.child('configs').val().buyingActivities;

                        var productBoughtQuantity = snap.child('products').child('buying').child(productKey).val().boughtQuantity;

                        //for fcm
                        const receiverName = snap.val().name;
                        const receiverToken = snap.val().token;
                        const receiverUid = snap.val().uid;

                        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
                            .then(snap => {

                                var productTitle = snap.val().title;
                                //as it will be deleted so fetching from user buying node
                                //var productBoughtQuantity=snap.child('orders').child(productBuyerId).val().boughtQuantity;

                                if (buyerBuyingEmailConfig != 'off') {
                                    pleaseSendOrderMail(buyerEmail, 'There is important update regarding your offer on ' + productTitle, 'Your offer was rejected by seller', productTitle, productBoughtQuantity, boughtPriceWas, productBoughtQuantity * boughtPriceWas, buyerName);
                                }


                                pleaseSendFCM('There is important update regarding your offer on ' + productTitle, 'Your offer was rejected by seller', buyerName, receiverToken, receiverUid);
                            });
                    });

                });

            return null;
        }


        // Only go when it is first created.
        if (event.data.previous.exists()) {
            return null;
        }


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productSellerToken = snap.val().token;

                var productTitle = snap.val().title;
                var productBoughtQuantity = snap.child('orders').child(productBuyerId).val().boughtQuantity;

                //console.log(productCategory, productAuctionType, productState, productKey, "BuyerId : "+productBuyerId, "SellerID : "+productSellerId);

                ref.child('users').child(productSellerId).child('notifications')
                    .push({

                        auctionType: productAuctionType,
                        category: productCategory,
                        key: productKey,
                        message: 'You received new offer on your listed item.',
                        read: '0',
                        sender: 'Team Sell4Bids',
                        state: productState,
                        time: admin.database.ServerValue.TIMESTAMP

                    })
                    .then(snap => {

                        ref.child('users').child(productSellerId)
                            .once('value').then(snap => {

                            var userName = snap.val().name;
                            var userEmail = snap.val().email;
                            var userSellingEmailConfig = 'on';

                            if (snap.child('configs'))
                                if (snap.child('configs').val().sellingActivities)
                                    userSellingEmailConfig = snap.child('configs').val().sellingActivities;


                            if (userSellingEmailConfig != 'off') {
                                pleaseSendOrderMail(userEmail, 'Congrats, You received new offer', 'You received new offer on your listed item ' + productTitle, productTitle, productBoughtQuantity, boughtPrice, productBoughtQuantity * boughtPrice, userName);
                            }

                            const receiverName = snap.val().name;
                            const receiverToken = snap.val().token;
                            const receiverUid = snap.val().uid;

                            pleaseSendFCM('Congrats, You received new offer', 'You received new offer on your listed item ' + productTitle, receiverName, receiverToken, receiverUid);


                        });

                    });


            });


        //return event.data.ref.parent.child('boughtPriceHere').set(boughtPrice);
        return null;
    });


//send notification to seller when counter offer is accepted
exports.counterOfferAccepted = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/orders/{buyerId}/note')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var orderNote = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;

                var productBoughtQuantity = snap.child('orders').child(productBuyerId).val().boughtQuantity;
                var productBoughtPrice = snap.child('orders').child(productBuyerId).val().boughtPrice;
                var productTitle = snap.val().title;

                //console.log(productCategory, productAuctionType, productState, productKey, "BuyerId : "+productBuyerId, "SellerID : "+productSellerId);

                ref.child('users').child(productSellerId).child('notifications')
                    .push({

                        auctionType: productAuctionType,
                        category: productCategory,
                        key: productKey,
                        message: 'Buyer has accepted your counter offer of ' + productBoughtQuantity + ' items, $' + productBoughtPrice + ' per item.',
                        read: '0',
                        sender: 'Team Sell4Bids',
                        state: productState,
                        time: admin.database.ServerValue.TIMESTAMP

                    })
                    .then(snap => {

                        ref.child('users').child(productSellerId)
                            .once('value').then(snap => {

                            var userName = snap.val().name;
                            var userEmail = snap.val().email;
                            var userSellingEmailConfig = 'on';

                            if (snap.child('configs'))
                                if (snap.child('configs').val().sellingActivities)
                                    userSellingEmailConfig = snap.child('configs').val().sellingActivities;


                            if (userSellingEmailConfig != 'off') {
                                pleaseSendOrderMail(userEmail, 'Congrats, Your counter offer was accepted', 'Buyer accepted your counter offer on your listed item ' + productTitle, productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                            }

                            const receiverName = snap.val().name;
                            const receiverToken = snap.val().token;
                            const receiverUid = snap.val().uid;

                            pleaseSendFCM('Congrats, Your counter offer was accepted', 'Buyer accepted your counter offer on your listed item ' + productTitle, receiverName, receiverToken, receiverUid);


                        });

                    });


            });

        return null;

    });


//send notification to buyer when counter offer is sent to buyer
exports.counterOfferSent = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/counterOffers/{buyerId}/counterOfferCount')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var counterOfferCount = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;

        // Exit when the data is deleted.
        if (!event.data.exists()) {
            return null;
        }

        return ref.child('users').child(productBuyerId).child('notifications')
            .push({
                auctionType: productAuctionType,
                category: productCategory,
                key: productKey,
                message: 'Seller has sent you counter offer ( ' + counterOfferCount + '/5 ).',
                read: '0',
                sender: 'Team Sell4Bids',
                state: productState,
                time: admin.database.ServerValue.TIMESTAMP
            })
            .then(snap => {

                ref.child('users').child(productBuyerId)
                    .once('value').then(snap => {

                    var userName = snap.val().name;
                    var userEmail = snap.val().email;
                    var buyingActivities = 'on';

                    if (snap.child('configs'))
                        if (snap.child('configs').val().buyingActivities)
                            buyingActivities = snap.child('configs').val().buyingActivities;

                    //for fcm
                    const receiverName = snap.val().name;
                    const receiverToken = snap.val().token;
                    const receiverUid = snap.val().uid;


                    ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
                        .then(snap => {

                            var productBoughtQuantity = snap.child('counterOffers').child(productBuyerId).val().quantity;
                            var productBoughtPrice = snap.child('counterOffers').child(productBuyerId).val().pricePerItem;
                            var productTitle = snap.val().title;

                            if (buyingActivities != 'off') {
                                pleaseSendOrderMail(userEmail, 'Seller has sent you counter offer ( ' + counterOfferCount + '/5 ).', 'You received counter offer for ' + productTitle, productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                            }

                            pleaseSendFCM('Seller has sent you counter offer ( ' + counterOfferCount + '/5 ).', 'You received counter offer for ' + productTitle, receiverName, receiverToken, receiverUid);

                        });

                });
            });

        return null;

    });


//push id/rating changes
exports.itemRatingChanges =
    functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/ratings/{buyerId}/rating')
        .onWrite(event => {

            // Grab the current value of what was written to the Real time Database.
            var rating = event.data.val();

            var productCategory = event.params.category;
            var productAuctionType = event.params.auctionType;
            var productState = event.params.state;
            var productKey = event.params.pushId;
            var productBuyerId = event.params.buyerId;

            // Exit when the data is deleted.
            if (!event.data.exists()) {
                return null;
            }


            ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
                .then(snap => {

                    var productSellerId = snap.val().uid;

                    var productBoughtQuantity = snap.child('orders').child(productBuyerId).val().boughtQuantity;
                    var productBoughtPrice = snap.child('orders').child(productBuyerId).val().boughtPrice;
                    var productTitle = snap.val().title;

                    if (rating == '0') {
                        return ref.child('users').child(productBuyerId).child('notifications')
                            .push({
                                auctionType: productAuctionType,
                                category: productCategory,
                                key: productKey,
                                message: 'Please share your experience with others, by rating the seller.',
                                read: '0',
                                sender: 'Team Sell4Bids',
                                state: productState,
                                time: admin.database.ServerValue.TIMESTAMP
                            })
                            .then(snap => {

                                ref.child('users').child(productBuyerId)
                                    .once('value').then(snap => {

                                    var userName = snap.val().name;
                                    var userEmail = snap.val().email;
                                    var buyingActivities = 'on';

                                    if (snap.child('configs'))
                                        if (snap.child('configs').val().buyingActivities)
                                            buyingActivities = snap.child('configs').val().buyingActivities;

                                    if (buyingActivities != 'off') {
                                        pleaseSendOrderMail(userEmail, 'Please share your experience with others, by rating the seller.', 'Rate your overall experince of buying ' + productTitle, productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                                    }

                                    const receiverName = snap.val().name;
                                    const receiverToken = snap.val().token;
                                    const receiverUid = snap.val().uid;

                                    pleaseSendFCM('Please share your experience with others, by rating the seller.', 'Rate your overall experince of buying ' + productTitle, receiverName, receiverToken, receiverUid);

                                });
                            });

                    }
                    else if (rating == '1' || rating == '2' || rating == '3' || rating == '4' || rating == '5') {
                        return ref.child('users').child(productSellerId).child('notifications')
                            .push({
                                auctionType: productAuctionType,
                                category: productCategory,
                                key: productKey,
                                message: 'You were rated ' + rating + ' by buyer.',
                                read: '0',
                                sender: 'Team Sell4Bids',
                                state: productState,
                                time: admin.database.ServerValue.TIMESTAMP
                            })
                            .then(snap => {

                                ref.child('users').child(productSellerId)
                                    .once('value').then(snap => {

                                    var userName = snap.val().name;
                                    var userEmail = snap.val().email;
                                    var sellingActivities = 'on';

                                    if (snap.child('configs'))
                                        if (snap.child('configs').val().sellingActivities)
                                            sellingActivities = snap.child('configs').val().sellingActivities;

                                    if (sellingActivities != 'off') {
                                        pleaseSendOrderMail(userEmail, 'Buyer has share his overall experience of buying ' + productTitle, 'You were rated  ' + rating + '/5', productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                                    }

                                    const receiverName = snap.val().name;
                                    const receiverToken = snap.val().token;
                                    const receiverUid = snap.val().uid;

                                    pleaseSendFCM('Buyer has share his overall experience of buying ' + productTitle, 'You were rated  ' + rating + '/5', receiverName, receiverToken, receiverUid);

                                });
                            });

                    } else {
                        console.log('invalid rating');
                        return null;
                    }
                });

            return null;

        });


//send notification when order is accepted or buyer is rated
exports.offerAcceptedAndRating = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/orders/{buyerId}/rating')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var rating = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;

                var productBoughtQuantity = snap.child('orders').child(productBuyerId).val().boughtQuantity;
                var productBoughtPrice = snap.child('orders').child(productBuyerId).val().boughtPrice;
                var productTitle = snap.val().title;

                //console.log(productCategory, productAuctionType, productState, productKey, "BuyerId : "+productBuyerId, "SellerID : "+productSellerId);

                if (rating == '0') {
                    return ref.child('users').child(productBuyerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'Congrats. Your offer was accepted.',
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        }).then(snap => {
                            ref.child('users').child(productBuyerId)
                                .once('value').then(snap => {

                                var userName = snap.val().name;
                                var userEmail = snap.val().email;
                                var buyingActivities = 'on';

                                if (snap.child('configs'))
                                    if (snap.child('configs').val().buyingActivities)
                                        buyingActivities = snap.child('configs').val().buyingActivities;

                                if (buyingActivities != 'off') {
                                    pleaseSendOrderMail(userEmail, 'Congrats. Your offer was accepted.', 'Your offer was accepted on ' + productTitle, productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                                }

                                const receiverName = snap.val().name;
                                const receiverToken = snap.val().token;
                                const receiverUid = snap.val().uid;

                                pleaseSendFCM('Congrats. Your offer was accepted.', 'Your offer was accepted on ' + productTitle, receiverName, receiverToken, receiverUid);

                            });
                        });
                }
                else if (rating == '1' || rating == '2' || rating == '3' || rating == '4' || rating == '5') {
                    return ref.child('users').child(productBuyerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'Your were rated ' + rating + ' by seller.',
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        }).then(snap => {

                            ref.child('users').child(productBuyerId)
                                .once('value').then(snap => {

                                var userName = snap.val().name;
                                var userEmail = snap.val().email;
                                var buyingActivities = 'on';

                                if (snap.child('configs'))
                                    if (snap.child('configs').val().buyingActivities)
                                        buyingActivities = snap.child('configs').val().buyingActivities;

                                if (buyingActivities != 'off') {
                                    pleaseSendOrderMail(userEmail, 'Seller rated overall communication with you', 'Your were rated ' + rating + ' by seller for ' + productTitle, productTitle, productBoughtQuantity, productBoughtPrice, productBoughtQuantity * productBoughtPrice, userName);
                                }

                                const receiverName = snap.val().name;
                                const receiverToken = snap.val().token;
                                const receiverUid = snap.val().uid;

                                pleaseSendFCM('Seller rated overall communication with you', 'Your were rated ' + rating + ' by seller for buying ' + productTitle, receiverName, receiverToken, receiverUid);

                            });
                        });
                }
                else {
                    return null;
                }

            });

        return null;

    });


//send notification when quantity is zero
exports.quantityToZero = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/quantity')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var quantity = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productTitle = snap.val().title;

                if (quantity == '0') {
                    ref.child('users').child(productSellerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'Your listed item is sold-out. Currently no quantity in stock, you can increase quantity any time.',
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        });

                    ref.child('users').child(productSellerId)
                        .once('value').then(snap => {

                        const receiverName = snap.val().name;
                        const receiverToken = snap.val().token;
                        const receiverUid = snap.val().uid;

                        return pleaseSendFCM('Your listed item is sold-out', 'Currently no quantity in stock, you can increase quantity any time.', receiverName, receiverToken, receiverUid);
                    });

                }
                else {
                    return null;
                }

            });

        return null;

    });


//changes in bids node
exports.bidsNodeChanges = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/bids/{buyerId}/bid')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var buyerBid = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;


        // Exit when the data is deleted.
        if (!event.data.exists()) {
            return null;
        }

        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productTitle = snap.val().title;

                var maxBid = snap.child("bids").val().maxBid;
                var sellingPrice = snap.child("bids").val().startPrice;

                //pleaseSendBidMail(to, title, subTitle, productTitle, userBid, sellingPrice, receiverName)
                var buyerNameStored = '';

                if (parseInt(buyerBid) >= parseInt(maxBid)) {
                    console.log(buyerBid, '>', maxBid)
                    ref.child('users').child(productBuyerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'Your bid was placed successfully. Currently you are highest bidder.',
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        });

                    ref.child('users').child(productBuyerId)
                        .once('value').then(snap => {

                        var userName = snap.val().name;
                        var userEmail = snap.val().email;
                        var buyingActivities = 'on';

                        if (snap.child('configs'))
                            if (snap.child('configs').val().buyingActivities)
                                buyingActivities = snap.child('configs').val().buyingActivities;

                        buyerNameStored = userName;

                        if (buyingActivities != 'off') {
                            pleaseSendBidMail(userEmail, 'Your bid was placed successfully. Currently you are highest bidder.', 'We will bid up to $' + buyerBid + ' from your side. We will try to buy you this item at least possible price that is $1 more than second highest bid.', productTitle, buyerBid, sellingPrice, userName);
                        }

                        const receiverName = snap.val().name;
                        const receiverToken = snap.val().token;
                        const receiverUid = snap.val().uid;

                        //placing name of bidder there
                        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey)
                            .child('bids').child(productBuyerId).child('name').set(userName);

                        pleaseSendFCM('Your bid was placed successfully', 'Currently you are highest bidder.', receiverName, receiverToken, receiverUid);

                    });

                    //console.log('updating max bid to : '+buyerBid);
                    ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey)
                        .child("bids").child("maxBid").set(buyerBid + '')
                        .then(snap => {

                            if (parseInt(buyerBid) > parseInt(maxBid)) {
                                ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey)
                                    .child("bids").child("winner").set(productBuyerId)
                            }

                        }).then(snap => {

                        ref.child('users').child(productSellerId).child('notifications')
                            .push({

                                auctionType: productAuctionType,
                                category: productCategory,
                                key: productKey,
                                message: 'You received new highest bid on ' + productTitle,
                                read: '0',
                                sender: 'Team Sell4Bids',
                                state: productState,
                                time: admin.database.ServerValue.TIMESTAMP

                            });


                        ref.child('users').child(productSellerId)
                            .once('value').then(snap => {

                            var userName = snap.val().name;
                            var userEmail = snap.val().email;
                            var sellingActivities = 'on';

                            if (snap.child('configs'))
                                if (snap.child('configs').val().sellingActivities)
                                    sellingActivities = snap.child('configs').val().sellingActivities;

                            if (sellingActivities != 'off') {
                                //pleaseSendBidMail(userEmail, 'You received new highest bid.', 'You received bid from '+buyerNameStored, productTitle, userBid, sellingPrice, userName);
                                pleaseSendBidMail(userEmail, 'You received new highest bid.', 'You received bid from ' + buyerNameStored, productTitle, sellingPrice, sellingPrice, userName);
                            }

                            const receiverName = snap.val().name;
                            const receiverToken = snap.val().token;
                            const receiverUid = snap.val().uid;

                            pleaseSendFCM('You received new highest bid.', 'You received bid from ' + buyerNameStored, receiverName, receiverToken, receiverUid);

                        });

                    });


                }
                else {
                    console.log(buyerBid, '<=', maxBid)

                    ref.child('users').child(productBuyerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'Your bid was placed successfully. But you are down bid, please increase your bid by bidding again.',
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        });


                    ref.child('users').child(productBuyerId)
                        .once('value').then(snap => {

                        var userName = snap.val().name;
                        var userEmail = snap.val().email;
                        var buyingActivities = 'on';

                        if (snap.child('configs'))
                            if (snap.child('configs').val().buyingActivities)
                                buyingActivities = snap.child('configs').val().buyingActivities;

                        buyerNameStored = userName;

                        if (buyingActivities != 'off') {
                            pleaseSendBidMail(userEmail, 'Your bid was placed successfully on ' + productTitle, 'You are down bid, please increase your bid by bidding again', productTitle, buyerBid, sellingPrice, userName);
                        }

                        const receiverName = snap.val().name;
                        const receiverToken = snap.val().token;
                        const receiverUid = snap.val().uid;

                        pleaseSendFCM('Your bid was placed successfully on ' + productTitle, 'You are down bid, please increase your bid by bidding again.', receiverName, receiverToken, receiverUid);

                    });


                    ref.child('users').child(productSellerId).child('notifications')
                        .push({

                            auctionType: productAuctionType,
                            category: productCategory,
                            key: productKey,
                            message: 'You received bid on ' + productTitle,
                            read: '0',
                            sender: 'Team Sell4Bids',
                            state: productState,
                            time: admin.database.ServerValue.TIMESTAMP

                        });

                    ref.child('users').child(productSellerId)
                        .once('value').then(snap => {

                        var userName = snap.val().name;
                        var userEmail = snap.val().email;
                        var sellingActivities = 'on';

                        if (snap.child('configs'))
                            if (snap.child('configs').val().sellingActivities)
                                sellingActivities = snap.child('configs').val().sellingActivities;

                        if (sellingActivities != 'off') {
                            pleaseSendBidMail(userEmail, 'You received bid on ' + productTitle, 'You received bid from ' + buyerNameStored, productTitle, buyerBid, sellingPrice, userName);
                        }

                        const receiverName = snap.val().name;
                        const receiverToken = snap.val().token;
                        const receiverUid = snap.val().uid;

                        pleaseSendFCM('You received bid on ' + productTitle, 'You received bid from ' + buyerNameStored, receiverName, receiverToken, receiverUid);

                    });
                }

            });

        return null;

    });


//send notification winner is updated
exports.winnerUpdated = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/bids/winner')
    .onUpdate(event => {

        // Grab the current value of what was written to the Real time Database.
        const newWinner = event.data.val();
        const oldWinner = event.data.previous.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;

        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productTitle = snap.val().title;


                var oldWinnerBid = snap.child("bids").child(oldWinner).val().bid;
                var sellingPrice = snap.child("bids").val().startPrice;


                ref.child('users').child(oldWinner).child('notifications')
                    .push({

                        auctionType: productAuctionType,
                        category: productCategory,
                        key: productKey,
                        message: 'You are down bid on ' + productTitle + '. Please increase your bid by bidding again.',
                        read: '0',
                        sender: 'Team Sell4Bids',
                        state: productState,
                        time: admin.database.ServerValue.TIMESTAMP

                    })

                ref.child('users').child(oldWinner)
                    .once('value').then(snap => {

                    var userName = snap.val().name;
                    var userEmail = snap.val().email;
                    var buyingActivities = 'on';

                    if (snap.child('configs'))
                        if (snap.child('configs').val().buyingActivities)
                            buyingActivities = snap.child('configs').val().buyingActivities

                    if (buyingActivities != 'off') {
                        console.log('mail to old winner ', oldWinner, userName, userEmail);
                        pleaseSendBidMail(userEmail, 'You are down bid on ' + productTitle, 'Please increase your bid by bidding again.', productTitle, oldWinnerBid, sellingPrice, userName);
                    }

                    const receiverName = snap.val().name;
                    const receiverToken = snap.val().token;
                    const receiverUid = snap.val().uid;

                    pleaseSendFCM('You are down bid on ' + productTitle, 'Please increase your bid by bidding again.', receiverName, receiverToken, receiverUid);

                });

                //new winner will receive email from other function ie bidsNodeChanged()
            });

        return null;

    });


//send mail for using contact us form
exports.querySubmitted = functions.database.ref('/user_queries/{query_id}/qid')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        //var user_id = event.params.user_id;
        var query_id = event.data.val();
        //var query_uid = event.data.val();

        //console.log("query uid : " + query_uid);

        ref.child('user_queries').child(query_id)
            .once('value').then(snap => {

            var person_email = snap.val().email;
            var person_message = snap.val().message;
            var person_mobile = snap.val().mobile;
            var person_name = snap.val().name;

            console.log("query info, email: " + person_email + " message: " + person_message + " mobile: " + person_mobile + " name: " + person_name);

            var mail_first_line = "Thanks for using contacting Sell4Bids";
            var mail_second_line = "Your message was submitted successfully. Mostly it takes less than 24 hours to entertain a query. Sell4Bids customer support will reach you asap.";

            // mail to given info
            pleaseSend2LinesMail(person_email, mail_first_line, mail_second_line, "Sell4Bids Customer Support", person_name)


			var cs_mail_first_line = "Sell4Bids customer has submitted a query. [#" + query_id + "]";
			var cs_mail_second_line = "Name : " + person_name
				+ "\n<br>Email : " + person_email
				+ "\n<br>Cell Number : " + person_mobile
				+ "\n<br>Query ID : " + query_id
				+ "\n<br>Message: " + person_message
				+ "\n<br>-----------------------\n<br>";

			//mail to customer support
			pleaseSend2LinesMail("contact@sell4bids.com", cs_mail_first_line, cs_mail_second_line, "Sell4Bids Customer Query by " + person_name + " [#" + query_id + "]", "Sel4Bids Admin")


            return null;

        });
    });

//send notification to seller when startPrice is updated
exports.sellingPriceChanges = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/bids/startPrice')
    .onUpdate(event => {

        // Grab the current value of what was written to the Real time Database.
        const sellingPrice = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productTitle = snap.val().title;


                ref.child('users').child(productSellerId).child('notifications')
                    .push({

                        auctionType: productAuctionType,
                        category: productCategory,
                        key: productKey,
                        message: 'Updated selling price of ' + productTitle + ' is $' + sellingPrice,
                        read: '0',
                        sender: 'Team Sell4Bids',
                        state: productState,
                        time: admin.database.ServerValue.TIMESTAMP

                    });


                ref.child('users').child(productSellerId)
                    .once('value').then(snap => {

                    var userName = snap.val().name;
                    var userEmail = snap.val().email;
                    var sellingActivities = 'on';

                    if (snap.child('configs'))
                        if (snap.child('configs').val().sellingActivities)
                            sellingActivities = snap.child('configs').val().sellingActivities;

                    if (sellingActivities != 'off') {
                        pleaseSendTextMail(userEmail, 'Selling price of ' + productTitle + ' is updated', 'Selling price was updated to $' + sellingPrice, productTitle, userName);
                    }

                    const receiverName = snap.val().name;
                    const receiverToken = snap.val().token;
                    const receiverUid = snap.val().uid;

                    pleaseSendFCM('Selling price of ' + productTitle + ' is updated', 'Selling price was updated to $' + sellingPrice, receiverName, receiverToken, receiverUid);

                });

            });

        return null;

    });


//send notifications to all watchers while re-listed
exports.endTimeChanges = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/endTime')
    .onUpdate(event => {

        // Grab the current value of what was written to the Real time Database.
        const newEndTime = event.data.val();
        const oldEndTime = event.data.previous.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;

        //to avoid duplicate notifications
        var sentUserIdsList = [];


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                const productTitle = snap.val().title;
                const productSellerId = snap.val().uid;

                //sending notification to watchers
                snap.child("watching").forEach(function (childSnap) {
                    //console.log(childSnap.key);
                    const buyerKey = childSnap.key;

                    sentUserIdsList.push(buyerKey);

                    if (parseInt(newEndTime) > parseInt(oldEndTime)) {
                        ref.child('users').child(childSnap.key).child('notifications')
                            .push({

                                auctionType: productAuctionType,
                                category: productCategory,
                                key: productKey,
                                message: 'Listing time increased for item (' + productTitle + ') in your watch-list.',
                                read: '0',
                                sender: 'Team Sell4Bids',
                                state: productState,
                                time: admin.database.ServerValue.TIMESTAMP

                            });

                        ref.child('users').child(childSnap.key)
                            .once('value').then(snap => {

                            var userName = snap.val().name;
                            var userEmail = snap.val().email;
                            var buyingActivities = 'on';

                            if (snap.child('configs'))
                                if (snap.child('configs').val().buyingActivities)
                                    buyingActivities = snap.child('configs').val().buyingActivities

                            if (buyingActivities != 'off') {
                                pleaseSendTextMail(userEmail, 'Seller updated listing duration for ' + productTitle, 'That\'s the time to buy it.', productTitle, userName);
                            }

                            const receiverName = snap.val().name;
                            const receiverToken = snap.val().token;
                            const receiverUid = snap.val().uid;

                            pleaseSendFCM('Seller updated listing duration for ' + productTitle, 'That\'s the time to buy it.', receiverName, receiverToken, receiverUid);

                        });
                    }
                    else {
                        ref.child('users').child(childSnap.key).child('notifications')
                            .push({

                                auctionType: productAuctionType,
                                category: productCategory,
                                key: productKey,
                                message: 'Listing time updated for item (' + productTitle + ') in your watch-list.',
                                read: '0',
                                sender: 'Team Sell4Bids',
                                state: productState,
                                time: admin.database.ServerValue.TIMESTAMP

                            });
                    }
                });// notification to watchers ended


                //notification to followers
                ref.child('users').child(productSellerId).once('value')
                    .then(snap => {

                        const sellerName = snap.val().name;

                        snap.child("followers").forEach(function (childSnap) {
                            //console.log(childSnap.key);
                            const followerKey = childSnap.key;

                            if (sentUserIdsList.indexOf(followerKey) < 0) {

                                sentUserIdsList.push(followerKey);


                                if (parseInt(newEndTime) > parseInt(oldEndTime)) {
                                    ref.child('users').child(followerKey).child('notifications')
                                        .push({

                                            auctionType: productAuctionType,
                                            category: productCategory,
                                            key: productKey,
                                            message: sellerName + ' has increased listing time for item (' + productTitle + ').',
                                            read: '0',
                                            sender: 'Team Sell4Bids',
                                            state: productState,
                                            time: admin.database.ServerValue.TIMESTAMP

                                        });

                                    ref.child('users').child(followerKey)
                                        .once('value').then(snap => {

                                        var userName = snap.val().name;
                                        var userEmail = snap.val().email;
                                        var buyingActivities = 'on';

                                        if (snap.child('configs'))
                                            if (snap.child('configs').val().buyingActivities)
                                                buyingActivities = snap.child('configs').val().buyingActivities;

                                        if (buyingActivities != 'off') {
                                            pleaseSendTextMail(userEmail, 'Seller updated listing duration for ' + productTitle, 'That\'s the time to grab it.', productTitle, userName);
                                        }

                                        const receiverName = snap.val().name;
                                        const receiverToken = snap.val().token;
                                        const receiverUid = snap.val().uid;

                                        pleaseSendFCM('Seller updated listing duration for ' + productTitle, 'That\'s the time to buy it.', receiverName, receiverToken, receiverUid);

                                    });
                                }
                                else {
                                    ref.child('users').child(childSnap.key).child('notifications')
                                        .push({

                                            auctionType: productAuctionType,
                                            category: productCategory,
                                            key: productKey,
                                            message: sellerName + ' has updated listing time for item (' + productTitle + ').',
                                            read: '0',
                                            sender: 'Team Sell4Bids',
                                            state: productState,
                                            time: admin.database.ServerValue.TIMESTAMP

                                        });
                                }
                            }
                        });// notification to watchers ended

                    });//notifications ended for followers

            });//listening on product ended

        return null;
    });


//send notifications to all followers when new item is added by seller
exports.newItemAdded = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/uid')
    .onCreate(event => {

        // Grab the current value of what was written to the Real time Database.
        const sellerUid = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                const productTitle = snap.val().title;


                //notification to followers
                ref.child('users').child(sellerUid).once('value')
                    .then(snap => {

                        const sellerName = snap.val().name;

                        snap.child("followers").forEach(function (childSnap) {
                            //console.log(childSnap.key);
                            const followerKey = childSnap.key;

                            if (productAuctionType == "buy-it-now") {
                                ref.child('users').child(followerKey).child('notifications')
                                    .push({

                                        auctionType: productAuctionType,
                                        category: productCategory,
                                        key: productKey,
                                        message: sellerName + ' has listed new item (' + productTitle + ')',
                                        read: '0',
                                        sender: 'Team Sell4Bids',
                                        state: productState,
                                        time: admin.database.ServerValue.TIMESTAMP

                                    });

                                ref.child('users').child(followerKey)
                                    .once('value').then(snap => {

                                    var userName = snap.val().name;
                                    var userEmail = snap.val().email;
                                    var buyingActivities = 'on';

                                    if (snap.child('configs'))
                                        if (snap.child('configs').val().buyingActivities)
                                            buyingActivities = snap.child('configs').val().buyingActivities

                                    if (buyingActivities != 'off') {
                                        pleaseSendTextMail(userEmail, sellerName + ' has listed new item (' + productTitle + ')', 'Send your offer to seller to buy now.', productTitle, userName);
                                    }

                                    const receiverName = snap.val().name;
                                    const receiverToken = snap.val().token;
                                    const receiverUid = snap.val().uid;

                                    pleaseSendFCM(sellerName + ' has listed new item (' + productTitle + ')', 'Send your offer to seller to buy now.', receiverName, receiverToken, receiverUid);

                                });


                            }
                            else if (productAuctionType == "reserve" || productAuctionType == "non-reserve") {
                                ref.child('users').child(childSnap.key).child('notifications')
                                    .push({

                                        auctionType: productAuctionType,
                                        category: productCategory,
                                        key: productKey,
                                        message: sellerName + ' has listed new item (' + productTitle + ') for bidding.',
                                        read: '0',
                                        sender: 'Team Sell4Bids',
                                        state: productState,
                                        time: admin.database.ServerValue.TIMESTAMP

                                    });

                                ref.child('users').child(followerKey)
                                    .once('value').then(snap => {

                                    var userName = snap.val().name;
                                    var userEmail = snap.val().email;
                                    var buyingActivities = 'on';

                                    if (snap.child('configs'))
                                        if (snap.child('configs').val().buyingActivities)
                                            buyingActivities = snap.child('configs').val().buyingActivities

                                    if (buyingActivities != 'off') {
                                        pleaseSendTextMail(userEmail, sellerName + ' has listed new item (' + productTitle + ')', 'Place your bid to win the auction.', productTitle, userName);
                                    }

                                    const receiverName = snap.val().name;
                                    const receiverToken = snap.val().token;
                                    const receiverUid = snap.val().uid;

                                    pleaseSendFCM(sellerName + ' has listed new item (' + productTitle + ')', 'Place your bid to win the auction.', receiverName, receiverToken, receiverUid);

                                });


                            }


                        });// notification to watchers ended

                    });//notifications ended for followers

            });//listening on product ended

        return null;
    });


//function to send mails
function pleaseSendOrderMail(to, title, subTitle, productTitle, quantity, unitPrice, totalAmount, receiverName) {

    var htmlEmailBody = '';

    console.log('Sending order requested mail to ' + to);

    if (!to || !title || !subTitle || !productTitle || !quantity || !receiverName) {
        return null;
    }
    else {
        ref.child('emailTemplates').child('orderEmail').once('value')
            .then(snap => {


                htmlEmailBody = snap.val().template;

                htmlEmailBody = htmlEmailBody.replace('_emailTitle_', title);
                htmlEmailBody = htmlEmailBody.replace('_emailSubtitle_', subTitle);

                htmlEmailBody = htmlEmailBody.replace('_itemName_', productTitle);
                htmlEmailBody = htmlEmailBody.replace('_quantity_', quantity + ' items');
                htmlEmailBody = htmlEmailBody.replace('_perUnitPrice_', ' $'+unitPrice + ' per item');
                htmlEmailBody = htmlEmailBody.replace('_totalAmount_', totalAmount);

                htmlEmailBody = htmlEmailBody.replace('_receiverName_', receiverName);

                return htmlEmailBody;

            })
            .then(htmlEmailBody => {

                const mailOptions = {

                    from: '"Sell4Bids" <contact@sell4bids.com>',
                    to: to,
                    subject: 'Order on ' + productTitle,
                    text: 'Order on ' + productTitle,
                    html: htmlEmailBody
                }

                return mailTransport.sendMail(mailOptions);

            });

    }//else end for parameters checking

    return null;
}


//function to fcm notification
function pleaseSendFCM(messageTitle, messageText, receiverName, receiverToken, receiverUid) {

    console.log("Sending requested FCM to : " + receiverName, "Token : " + receiverToken);
    const payload = {
        data: {
            title: messageTitle,
            text: messageText,
            username: receiverName,
            uid: receiverUid,
            fcm_token: receiverToken
        },
        notification: {
            title: messageTitle,
            body: messageText,
            //badge: '1',
            sound: 'default',

        }


    };


    return admin.messaging().sendToDevice(receiverToken, payload)
        .then(function (response) {
            //console.log(to,"Successfully sent message:", response);
        })
        .catch(function (error) {
            //console.log(to,"Error sending message:", error);
        });
}


//function to send mails for bids
function pleaseSendBidMail(to, title, subTitle, productTitle, userBid, sellingPrice, receiverName) {

    var htmlEmailBody = '';

    console.log('please send requested bid mail ' + to);


    ref.child('emailTemplates').child('bidEmail').once('value')
        .then(snap => {

            htmlEmailBody = snap.val().template;

            htmlEmailBody = htmlEmailBody.replace('_title_', title);
            htmlEmailBody = htmlEmailBody.replace('_subtitle_', subTitle);

            htmlEmailBody = htmlEmailBody.replace('_productTitle_', productTitle);
            htmlEmailBody = htmlEmailBody.replace('_userBid_', userBid);
            htmlEmailBody = htmlEmailBody.replace('_sellingPrice_', sellingPrice);

            htmlEmailBody = htmlEmailBody.replace('_receiver_', receiverName);

            return htmlEmailBody;

        })
        .then(htmlEmailBody => {

            const mailOptions = {

                from: '"Sell4Bids" <contact@sell4bids.com>',
                to: to,
                subject: 'Bid on ' + productTitle,
                text: 'Bid on ' + productTitle,
                html: htmlEmailBody
            }

            return mailTransport.sendMail(mailOptions);

        });

    return null;
}


//function to send mails with text
function pleaseSendTextMail(to, title, subTitle, productTitle, receiverName) {

    var htmlEmailBody = '';

    console.log('please send requested text mail ' + to);


    ref.child('emailTemplates').child('textEmail').once('value')
        .then(snap => {

            htmlEmailBody = snap.val().template;

            htmlEmailBody = htmlEmailBody.replace('_title_', title);
            htmlEmailBody = htmlEmailBody.replace('_subtitle_', subTitle);

            htmlEmailBody = htmlEmailBody.replace('_productTitle_', productTitle);

            htmlEmailBody = htmlEmailBody.replace('_receiver_', receiverName);

            return htmlEmailBody;

        })
        .then(htmlEmailBody => {

            const mailOptions = {

                from: '"Sell4Bids" <contact@sell4bids.com>',
                to: to,
                subject: 'Listed Item ' + productTitle,
                text: 'Listed Item ' + productTitle,
                html: htmlEmailBody
            }

            return mailTransport.sendMail(mailOptions);

        });

    return null;
}


//send mail with 2 lines
function pleaseSend2LinesMail(to, first_line, second_line, subject, receiverName) {

    var htmlEmailBody = '';

    console.log('please send requested 2line mail ' + to);


    ref.child('emailTemplates').child('queryEmail').once('value')
        .then(snap => {

            htmlEmailBody = snap.val().template;

            htmlEmailBody = htmlEmailBody.replace('_first_line_', first_line);
            htmlEmailBody = htmlEmailBody.replace('_second_line_', second_line);
            htmlEmailBody = htmlEmailBody.replace('_receiverName_', receiverName);
            htmlEmailBody = htmlEmailBody.replace('_receiverName_', receiverName);

            return htmlEmailBody;

        })
        .then(htmlEmailBody => {

            const mailOptions = {

                from: '"Sell4Bids" <contact@sell4bids.com>',
                to: to,
                subject: '' + subject,
                text: first_line + ' ' + second_line,
                html: htmlEmailBody
            }

            return mailTransport.sendMail(mailOptions);

        });

    return null;
}

//code by HM Ali
exports.sendNotification = functions.https.onRequest((req, res) => {

    const id = req.query.id
    const title = req.query.title
    const message = req.query.message
    const key = req.query.key
    // admin.database.ref()

    const payload = {

        notification: {
            title: title,
            body: message,

        }
    };


    console.log('Param [key] is ' + key);

    const keys = [];

    ref.child('keys').once('value')
        .then(snap => {
            snap.forEach(childSnap => {

                const loopKey = childSnap.val().key;
                keys.push(loopKey);

            })

            return keys;
        })
        .then(keys => {

            //console.log('Keys in database : '+keys.join());

            if (keys.indexOf(key) > -1) {
                if (!key || !id || !message) {
                    res.status(400).send('Bad request');
                }
                else {
                    ref.child('users').child(id).child('token').once('value')
                        .then(snapshot => {
                            if (snapshot.val()) {
                                const token = snapshot.val()
                                console.log(token);
                                return admin.messaging().sendToDevice(token, payload).then(response => {
                                    res.status(200).send('Notification sent')
                                });

                            }
                        });

                }

            }
            else {
                console.log("In-valid key : " + key);

                res.status(400).send('Bad request');
            }
        })
        .catch(error => {
            res.send(error)
        });

});


//send notification when location is shared or changes
exports.locationShared = functions.database.ref('/products/{category}/{auctionType}/{state}/{pushId}/{todo}/{buyerId}/location/address')
    .onWrite(event => {

        // Grab the current value of what was written to the Real time Database.
        var address = event.data.val();

        var productCategory = event.params.category;
        var productAuctionType = event.params.auctionType;
        var productState = event.params.state;
        var productKey = event.params.pushId;
        var productBuyerId = event.params.buyerId;


        ref.child('products').child(productCategory).child(productAuctionType).child(productState).child(productKey).once('value')
            .then(snap => {

                var productSellerId = snap.val().uid;
                var productTitle = snap.val().title;


                ref.child('users').child(productBuyerId).child('notifications')
                    .push({

                        auctionType: productAuctionType,
                        category: productCategory,
                        key: productKey,
                        message: 'Seller has shared location for ' + productTitle + "." + address,
                        read: '0',
                        sender: 'Team Sell4Bids',
                        state: productState,
                        time: admin.database.ServerValue.TIMESTAMP

                    });

                ref.child('users').child(productBuyerId)
                    .once('value').then(snap => {

                    const receiverName = snap.val().name;
                    const receiverToken = snap.val().token;
                    const receiverUid = snap.val().uid;

                    return pleaseSendFCM("Seller has shared location to meet for " + productTitle, 'Updated location is ' + address, receiverName, receiverToken, receiverUid);
                });


            });

        return null;


    });


exports.fcmSend = functions.database.ref('/users/{userId}/notifications/{messageId}').onCreate(event => {


  const message = event.data.val()
  const userId  = event.params.userId

  const payload = {
        notification: {
          title: message.sender,
          body: message.message,
          icon: "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/appImages%2Ficon%2Fsell4bids_icon.png?alt=media&token=f80ca1b2-8c38-424c-8355-7137d5ba5025"
        }
      };


   admin.database()
        .ref(`/users/{userId}/${userId}`)
        .once('value')
        .then(token => token.val() )
        .then(userFcmToken => {
          return admin.messaging().sendToDevice(userFcmToken, payload)
        })
        .then(res => {
          console.log("Sent Successfully", res);
        })
        .catch(err => {
          console.log(err);
        });

});
