var html = '<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.js"></script>'
  + '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css">'
  + '<form action="index.jss" class="dropzone"></form>';

function processRequest() {
	response.write(html);
}

// called once by the server for each file being uploaded.  It returns the path to which the file is to be saved.
function getUploadPath(fileName) {
   return system.user.homeFolder + "/Uploads/" + fileName;
}
