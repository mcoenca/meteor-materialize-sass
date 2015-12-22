if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var args, oThis;
    oThis = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    return _.bind.apply(_, [this, oThis].concat(slice.call(args)));
  };
}
