const bootcamp = require('../models/bootcamp');
// @desc      post all bootcamps 
// @route     POST /api/v1/bootcamps
// @access    public
exports.createBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await bootcamp.create(req.body);

        res.status(201).json({
            success: true,
            data: bootcamps
        })

    } catch (error) {
        res.status(400).json({
            error:"request denied"
        })
    }
}

// @desc      Get all bootcamps 
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await bootcamp.find()
        res.status(200).send({
            success: true,
            data: bootcamps
        })
    } catch (error) {
        res.status(400).send({
            success: false
        })
    }
}

// @desc      Get one bootcamp 
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamps = await bootcamp.findById(req.params.id);
        if(!bootcamps){
            return  res.status(400).send({
                success: false
            })
        }
        res.status(200).send({
            success: true,
            data: bootcamps
        })

    } catch (error) {
        res.status(400).send({
            success: false
        })

    }

}


// @desc      Update only one bootcamp
// @route     UPDATE /api/v1/bootcamps/:id
// @access    public
exports.updateBootcamp = async (req, res, next) => {
    const bootcamps = await bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    });
    if(!bootcamps){
        return  res.status(400).send({
            success: false
        })
    };
    res.status(200).send({
        success: true,
        data: bootcamps
    })
}

// @desc      delete only one bootcamp 
// @route     DELETE /api/v1/bootcamps/:id
// @access    public
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamps = await bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamps){
            return  res.status(400).send({
                success: false
            })
        };
        res.status(200).send({
            success: true,
            data: bootcamps
        })
    } catch (error) {
        res.status(400).send({
            success: false
        })
    }
}

// @desc      upload Image
// @route     PUT /api/v1/bootcamps/:id/photo
// @access    public
exports.bootCampPhotoUpload = async (req, res, next) => {
    try {
        const bootcamps = await bootcamp.create(req.params.id);
        if(!bootcamps){
            return  res.status(400).send({
                success: false
            })
        };
        if(!req.files){
            return  res.status(400).send({
                error:"please upload a photo"
            })
        };
        console.log(req.files)

    } catch (error) {
        res.status(400).json({
            error
        })
    }
}