# DropZone Upload Example

DropZone is a small, selfcontained Javascript library that provides a 'drop-zone' on a web-page upon which files can be dropped to be uploaded.

This example shows how [DropZone](https://www.dropzonejs.com/) can be integrated with CompleteFTP using just a few lines of Javascript (JSS) code.

## Instructions

1. Copy index.jss into a directory on your server
1. Create a Windows subdirectory under this directory called 'Files'
1. Add this directory under a user's home folder in the virtual file-system
1. Name the new folder, Upload, so that its full path is `/Home/MyUser/Upload`
1. Verify that JSS is enabled for the user (it's disabled by default in versions 12+)
1. In your browser, navigate to https://myserver/Home/MyUser/Upload.  You should see a page containing a box with the text, 'Drop files here to upload', in the middle.
1. Drag a file from the file explorer onto this box
1. Check that the file was uploaded to the Files subdirectory.
