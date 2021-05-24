const multer  = require('multer')

const storeImage = multer.diskStorage({
	destination: (req, img, res) => {
		res(null, './uploads')
	},
	imgName: (req, img, res) => {
		res(null, Date.now() + '--' + img.originalname)
	}
})

const upload = multer({ storage: storeImage })

module.exports = {upload}
