const admin = require('firebase-admin');
const serviceAccount = require("./real-estate-d9a1e-firebase-adminsdk-mkvnv-403bde2838.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://real-estate-d9a1e.firebaseio.com"
});
const functions = require("firebase-functions");
const {Storage} = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// Out of all 4: onArchive, onDelete, onFinalize and onMetadataUpdate.
// Only onDelete and onFinalize fired.

const projectId = 'real-estate-d9a1e';

const storage = new Storage({
  projectId: projectId,
});

exports.changeFileName = functions.storage.object().onFinalize( object => {
	const bucket = object.bucket;
	const contentType = object.contentType;
	const filePath = object.name;

	console.log(storage);

	const cloudBucket = storage.bucket;
	const file = bucket.file;

	console.log(cloudBucket);
	console.log(file);
	return;
});

exports.onFileChange= functions.storage.object().onFinalize(object => {
    const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.name;
    console.log('File change detected, function execution started');

    if (object.resourceState === 'not_exists') {
        console.log('We deleted a file, exit...');
        return;
    }

    if (path.basename(filePath).startsWith('resized-')) {
        console.log('We already renamed that file!');
        return;
    }

    const destBucket = storage.bucket(bucket);
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };
    return destBucket.file(filePath).download({
        destination: tmpFilePath
    }).then(() => {
        return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
    }).then(() => {
        return destBucket.upload(tmpFilePath, {
            destination: 'resized-' + path.basename(filePath),
            metadata: metadata
        })
    });
});