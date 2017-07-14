
var commandText = function(text){
	return "[[g;#44f97d;]" + text + "]";
}

var App = {
	init: function(ret){
		if (typeof ret === 'undefined') ret = false;
		var greetText =
			"###################################################################\n"+
			"\t                                                                 \n"+
			"\t __    _    _______   _      _   _     _    ___    ____    _   _\n"+
			"\t|  \\  | |  |  _____] | | _  | | | |   | |  / _ \\  |  _ \\  | | / |\n"+
			"\t|   \\ | |  | |___    | || | | |  \\ \\  / / | | | | | |_\\ | | |/ /\n"+
			"\t| |\\ \\| |  |  ___|   | || | | |   \\ \\/ /  | | | | |    /  |   /\n"+
			"\t| | \\   |  | |_____  | |/  \\| |    \\  /   | |_| | | |\\ \\  | |\\ \\ \n"+
			"\t|_|  \\__|  |_______] \\__|  |_/     |__|    \\___/  |_| |_| |_| \\_\\ \n"+ "\n"+
			"#####################################################################\n"+
			"\n"+
			"By using this terminal you confirm that you are a priest and are the son of a priest.\n"+
			"[[b;#F51818;]Use of this terminal by others can be dangerous or fatal].\n"+
			"\n"+
			"...\n"+
			"...\n"+
			"Now connected to the data center in: \t " + commandText("newyork") + "\n"+
			"\n"+
			"Please type " + commandText("menu") + " to see the list of available actions.";
		if (!ret) {
            this.clear();                   //clear the screen first--not sure if I want to keep
			this.echo("\n" + greetText);    //show the greeting text above. Need to rewrite so that it pulls from existing text files.
		} else {
			return greetText;
		}
	},

	menu: function(){
        this.echo("");
        this.echo("|  " + commandText("init") + "               - Display initialization message");
        this.echo("");
        this.echo("|  " + commandText("gettime") + "            - Get the time in newyork right now");
        this.echo("|  " + commandText("readarchive") + "        - Text and associated images, as reported by John, son of John.");
        this.echo("|  " + commandText("clear") + "              -Clear the screen");
    },

    readarchive: function(){
    	this.echo("[[b;")
    	this.echo("");
    	this.echo("|  entry1");
    	this.echo("|  entry2");


    },



}


var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


jQuery(document).ready(function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "https://www.google.com";
    } else {
        $('body').terminal(App, {
            greetings: function(cb){
                cb(App.init(true));
            },

            onBlur: function() {
                // prevent loosing focus
                return false;
            },


            completion: true,
            checkArity: false
        });
    }
});