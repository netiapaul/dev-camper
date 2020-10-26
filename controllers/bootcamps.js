// @desc      Get all bootcamps 
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).send({success:true,msg:"show all bootcamps"})
}

// @desc      Get one bootcamp 
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).send({success:true,msg:`Get bootcamp ${req.params.id}`})
}

// @desc      Get all bootcamps 
// @route     GET /api/v1/bootcamps
// @access    public
exports.createBootcamps = (req,res,next) =>{
    res.status(200).send({success:true,msg:"create new bootcamps"})
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