var resize = [];
$('<SELECTOR>').terminal(function(command, term) {
  if (command.match(/ *less +[^ ]+/)) {
    term.pause();
    $.ajax({
      // leading and trailing spaces and keep those inside argument
      url: command.replace(/^\s+|\s+$/g, '').
        replace(/^ */, '').split(/(\s+)/).slice(2).join(''),
      method: 'GET',
      dataType: 'text',
      success: function(source) {
        term.resume();
        var export_data = term.export_view();
        var less = true;
        source = source.replace(/&/g, '&amp;').
          replace(/\[/g, '&#91;').
          replace(/\]/g, '&#93;');
        var cols = term.cols();
        var rows = term.rows();
        resize = [];
        var lines = source.split('\n');
        resize.push(function() {
          if (less) {
            cols = term.cols();
            rows = term.rows();
            print();
          }
        });
        var pos = 0;
        function print() {
          term.clear();
          term.echo(lines.slice(pos, pos+rows-1).join('\n'));
        }
        print();
        term.push($.noop, {
          keydown: function(e) {
            if (term.get_prompt() !== '/') {
              if (e.which == 191) {
                term.set_prompt('/');
              } else if (e.which === 38) { //up
                if (pos > 0) {
                  --pos;
                  print();
                }
              } else if (e.which === 40) { //down
                if (pos < lines.length-1) {
                  ++pos;
                  print();
                }
              } else if (e.which === 34) { // Page up
                pos += rows;
                if (pos > lines.length-1-rows) {
                  pos = lines.length-1-rows;
                }
                print();
              } else if (e.which === 33) { // page down
                pos -= rows;
                if (pos < 0) {
                  pos = 0;
                }
                print();
              } else if (e.which == 81) { //Q
                less = false;
                term.pop().import_view(export_data);
              }
              return false;
            } else {
              if (e.which === 8 && term.get_command() === '') {
                term.set_prompt(':');
              } else if (e.which == 13) {
                var command = term.get_command();
                // basic search find only first
                // instance and don't mark the result
                if (command.length > 0) {
                  var regex = new RegExp(command);
                  for (var i=0; i<lines.length; ++i) {
                    if (regex.test(lines[i])) {
                      pos = i;
                      print();
                      term.set_command('');
                      break;
                    }
                  }
                  term.set_command('');
                  term.set_prompt(':');
                }
                return false;
              }
            }
          },
          prompt: ':'
        });
      }
    });
  }
}, {
  onResize: function(term) {
    for (var i=resize.length;i--;) {
      resize[i](term);
    }
  }
});


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