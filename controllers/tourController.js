const fs = require('fs');

const Tour = require('../models/tourModel');

exports.checkID = (req, res, next, val) => {
  // console.log(`Tour id is: ${val}`);

  // if (req.params.id * 1 > tours.length) {
  //   return res.status(404).json({
  //     status: 'fail',
  //     message: 'Invalid ID'
  //   });
  // }
  // next();
};

exports.getAllTours = async (req, res) => {
try {
  const tours = await Tour.find();

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
} catch (error) {
  res.status(400).json({
status: 'fail',
message: error
  });
}
 
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
  
  
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error
      });
  }

};

exports.createTour = async (req, res) => {

  // const newTour = new Tour({

  // });
  // newTour.save();
  try{
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  }catch(err){
res.status(400).json({
status: "fail",
message: err
});
  }

};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
