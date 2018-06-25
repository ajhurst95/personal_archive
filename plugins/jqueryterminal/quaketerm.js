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
        this.echo(commandText("menu"));
        this.echo(commandText('navigation'));
        this.echo(commandText('cv'));
        this.echo(commandText('about'));
        this.echo(commandText('credits'));

    },

    init: function(){
        if (typeof ret === 'undefined') ret = false;
        var greettext = 'Welcome to the terminal section of this site!' +
                        '\n' + 
                        'I\'ll be updating this pretty often, but be sure to poke around.\n' + 
                        'I\'ve put some easter eggs of mine in here, including some of my old projects, just for fun.\n' + 
                        'Right now this site is pretty basic and crude. I\'ll slowly work on this as I have time.\n' + 
                        '\n'+
                        'For now, enter ' + commandText('menu') + ' to display the options on the site,\n' + 
                        'and ' + commandText('init') + ' to show this message again.\n' + 
                        '\n' + 
                        commandText('clear') + ' will clear the window. Have fun!';
        if (!ret) {
            this.clear();                   //clear the screen first--not sure if I want to keep
            this.echo("\n" + greettext);    //show the greeting text above. Need to rewrite so that it pulls from existing text files.
        } else {
            return greettext;
        }

    },

    navigation: function(){
        this.echo("");
        this.echo(commandText("back") +"        Go back one page.");
        this.echo(commandText('forward') +"     Go forward one page.");
        this.echo(commandText('clear') + "      Clear the screen.");
    },

    back: function(){
        window.history.back();
    },
    forward: function(){
        window.history.forward();
    },

    getdate: function(){
        this.echo("The current date is: " + yellowText(currentdate.toISOString().substring(0, 10)));
        this.echo("\n");
        this.echo(datetime);


    },

    credits: function(){
        this.echo("This mediocre site was built by " + commandText('Andrew Hurst') + ". If you inspected any .js files, you can tell I am not a dev.\n"+ "The terminal section" +
                    " you are viewing now was built using the \n" + commandText("Jcubic JQuery Terminal") + " emulator made by " + commandText("Jakub Jankiewicz") + ".");
    },

    about: function(){
        this.echo("This my personal site. It is a balance of some of my super amateur web design projects,\n" + 
            "my professional things, and my passion for climbing and surfing in icy conditions.")
    },
    cv: function(){
        window.location.href = 'cv.html';
    },
    
//HIDDEN FUN THINGS
    
    babylon: function(){
        window.location.href = 'projects/babylonterminal/www/html/index3.html';
    },
    nighthike: function(){
        window.location.href = 'projects/Night\ Hike/index.html';
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
            height: 250,
            enabled: false,
            greetings: 'You found the console! Not quite like bash, though. Type ' + commandText('init') + ' to get started.',
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