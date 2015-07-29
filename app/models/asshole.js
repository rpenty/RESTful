var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AssholeSchema   = new Schema({
    firstName: {
        type: String,
        default: '',
        trim: true
    },
    lastName: {
        type: String,
        default: '',
        trim: true
    },
    reason: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports = mongoose.model('Asshole', AssholeSchema);