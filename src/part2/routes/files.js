import express from "express"
import fs from "fs"


const router = express.Router();

/* GET /files/:fileName */
router.get('/:fileName', function(req, res, next) {
    const filename = req.params.fileName;
	const path = '././files/readme/'+filename;
	fs.access(path, (err) => {
	    if (err) {
	        res.send({
			  "error": "file not found!",
			  "code": 404
			});
	    } else {
	        let data = '';
	        let length = 0;
			var readStream = fs.createReadStream(path, 'utf8');
			readStream.on('data', function(chunk) {
				length = length + chunk.trim().length;
			    data += chunk;
			}).on('end', function() {
				  res.send({
				    filename: filename,
				    length: length,
				    content: data
				  });
			});
	    }
	});
});

export default router
