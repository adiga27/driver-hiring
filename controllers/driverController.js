const Driver = require('./../models/driverModel');
const factory = require('./handleFactory');

exports.getAllDriver = factory.getAll(Driver);
exports.getOneDriver = factory.getOne(Driver, 'review');
exports.createDriver = factory.createOne(Driver);
exports.updateDriver = factory.updateOne(Driver);
exports.deleteDriver = factory.deleteOne(Driver);
