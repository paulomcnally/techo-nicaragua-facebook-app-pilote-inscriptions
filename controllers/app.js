var config  = require('../config');
var fb_parser = require('fb-signed-parser');

exports.home = function(req, res){
    function out(){
        var data = fb_parser.parse(req.param('signed_request'), config.facebook.app.secret);
        data.title = config.title;
        data.facebook = {};
        data.facebook.app = {};
        data.facebook.app.id = config.facebook.app.id;
        data.like = ( data.page.liked ) ? 1 : 0;
        data.pilote = config.pilote;

        if( data.page.liked ){
            res.render('home',{data:data});
        }
        else{
            res.render('like',{data:data});
        }

    }
    return out();
}