if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var args, oThis;
    oThis = arguments[0], args = 2 <= arguments.length ? Array.prototype.slice.call(arguments, 1) : [];
    return _.bind.apply(_, [this, oThis].concat(Array.prototype.slice.call(args)));
  };
}
