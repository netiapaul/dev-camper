const bootcamp = require('../models/bootcamp');

// @desc      post all bootcamps 
// @route     POST /api/v1/bootcamps
// @access    public
exports.createBootcamps = async (req,res,next) =>{
    try {
        const bootcamps = await bootcamps.create(req.body);

        res.status(201).json({
            success:true,
            data:bootCamp
        })

    } catch (error) {
        res.status(400).json({error})
    }
}

// @desc      Get all bootcamps 
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = async (req,res,next) =>{
    try {
        const bootcamps = await bootcamp.find()
        res.status(200).send({success:true,data:bootcamps})
    } catch (error) {
        res.status(400).send({success:false})
    }   
}

// @desc      Get one bootcamp 
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = async (req,res,next) =>{
    try {
        const bootcamps = await bootcamp.findById(req.params.id);
        res.status(200).send({success:true,data:bootcamps})
 
    } catch (error) {
        res.status(400).send({success:false})
 
    }

}


// @desc      Update only one bootcamp
// @route     UPDATE /api/v1/bootcamps/:id
// @access    public
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).send({success:true,msg:`Upadte bootcamp ${req.params.id}`})
}

// @desc      delete only one bootcamp 
// @route     DELETE /api/v1/bootcamps/:id
// @access    public
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).send({success:true,msg:`Delete bootcamp ${req.params.id}`})
}