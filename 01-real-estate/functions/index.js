const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.delete = functions.storage.object().onDelete(event => {
	console.log('onDelete has been fired!');
	console.log(event);
	return;
});

exports.finalize = functions.storage.object().onFinalize(event => {
	console.log('onFinalize has been fired!');
	console.log(event);
	return;
});

// Out of all 4: onArchive, onDelete, onFinalize and onMetadataUpdate.
// Only onDelete and onFinalize fired.

exports.changeName = functions.storage.object().onFinalize(event => {
	const object = event.data;
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;
    console.log(event);
    console.log(object);
    console.log(bucket);
	console.log('File change detected, function execution started');


	if (path.basename(filePath).startsWith('renamed-')) {
        console.log('We already renamed that file!');
        return;
    }

	
	const destBucket = admin.storage().bucket(bucket); // Here you can change the bucket of the uploaded file
	const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
	const metadata = { contentType: contentType };
	return destBucket.file(filePath).download({
		destination: tempFilePath
	}).then(() => {
		// this is where all the operations take place
		return destBucket.upload(tmpFilePath, {
		    destination: 'renamed-' + path.basename(filePath),
		    metadata: metadata
		})
	});

});