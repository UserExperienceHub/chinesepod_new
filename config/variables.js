
var ENV = process.env.ENVIRONMENT || 'prod';

module.exports = { 
    mongoURL        : process.env.MongoURL,

    mongoOptions    : { 
                        useNewUrlParser: true, 
                        useUnifiedTopology: true
                      },
    mongoDB         : process.env.MongoNAME,
    filePathUpload  : (ENV === 'prod' ? process.env.uploadFilePath : process.env.uploadFilePathDev),

};
