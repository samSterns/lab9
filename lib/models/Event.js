const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

schema.virtual('day')
  .get(function() {
    return this.dateOfEvent.getDate();
  })
  .set(function(day) {
    return this.dateOfEvent.setDate(day);
  });

schema.virtual('month')
  .get(function() {
    return this.dateOfEvent.getMonth() + 1;
  })
  .set(function(month) {
    return this.dateOfEvent.setMonth(month - 1);
  });

schema.virtual('year')
  .get(function() {
    return this.dateOfEvent.getFullYear();
  })
  .set(function(year) {
    return this.dateOfEvent.setYear(year);
  });


module.exports = mongoose.model('Event', schema);


// schema.virtual('all events') 
//   .get(function(){
//     const allEvents = .getAll
//   })
//   .set(function(){

//   })