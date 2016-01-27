exports.generateIntervals = function(start, end, intervalAmount, dateInterval, cb) {
  /**
   * INITIALISE
   * - check if date is valid
   * - check what interval is given, default to 'month'
   */
  if (!Moment(start).isValid() || !Moment(end).isValid()) {
    cb('not a valid date');
    return;
  }
  if(start >= end) {
    cb('start is after end date');
    return;
  }

  var intervals = [];
  if (!~['day', 'week', 'year'].indexOf(dateInterval)) {
    dateInterval = 'month';
  }
  while (start <= end) {
    var nextInterval = new Moment(start).add(intervalAmount, dateInterval)._d;
    intervals.push({
      start: start,
      end: nextInterval
    });
    start = nextInterval;
  }
  cb(null, intervals);
};
