const message = {
    internalServerError: 'Internal Server Error',
    NotFound: "Not Found",
    WELCOME: 'Welcome',
    updateSuccess: "Updated Successfully",
    success: "SUCCESS",
    unauthorized:"Unauthorized",
    incorrectpassword: "Incorrect username or password" ,
    recordNotFound: 'Record Not Found',
    invalidRequest: 'Invalid Request',
    invalidBody: "Please Provide All The Required Fields.",
    noDataFound: "No Data Found"
}


const http_codes = {

    SUCCESS: 200,
    BADREQUEST: 400,
    FORBIDDEN: 403,
    NOTFOUND: 404,
    INTRNLSRVRERR: 500,

    SUCCESSCASE: 1,
    FAILURECASE: 0


}

module.exports = {

    MESSAGE: message,
    STATUS_CODE: http_codes

}