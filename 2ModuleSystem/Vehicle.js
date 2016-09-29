var Vehicle = function (model) {
    this.dateCreated = (new Date).getTime();
    this.model = model;
};

Vehicle.prototype.showDateCreated = function () {
    return this.dateCreated;
};

module.exports = Vehicle;