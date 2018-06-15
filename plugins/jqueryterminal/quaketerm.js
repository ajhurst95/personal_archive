var commandText = function(text){
    return "[[g;#44f97d;]" + text + "]";
}

var yellowText = function(text){
    return "[[b;#ffce00;]" + text + "]";
}


var currentdate = new Date(); 
var datetime = "[[b;#F51818;]WARNING:] an interruption of service caused the host to go offline. System date of:\n" + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + "\n may or may not reflect actual time.";



var App = {
    menu: function(){
        this.echo("");
        this.echo('menu options undefined as of yet!');
    }
};


//Below:
// makes the tilda dropdown functionality work

(function($) {
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;
        }
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '~> ',
            name: 'tilda',
            height: 200,
            enabled: false,
            greetings: 'Quake like console',
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td"></div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval,settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.charCode == 96) {
                self.slideToggle('fast');
                self.terminal.command_line.set('');
                self.terminal.focus(focus = !focus);
            }
        });
        $('body').data('tilda', this);
        this.hide();
        return self;
    };
})(jQuery);

// <--------------------------------------------------------------
//-------------------------------------------------------------------
//Below: Main 

jQuery(document).ready(function($) {
    $('#tilda').tilda(App, {
        
        onBlur: function() {
            return false;
        },

        completion: true,
        checkArity: false
    
    });
});