
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
        this.echo("|  " + commandText("getdate") + "            - Get the time in newyork right now");
        this.echo("|  " + commandText("archive") + "        - Text and associated images, as reported by John, son of John.");
        this.echo("|  " + commandText("clear") + "              - Clear the screen");
    },

    getdate: function(){
        this.echo("The current date is: " + yellowText(currentdate.toISOString().substring(0, 10)));
        this.echo("\n");
        this.echo(datetime);


    },

    archive: function(){
    	
    	this.echo("");
        this.echo("A record of the first explorations of newyork since the great burning by John, son of John.");
    	this.echo("|  " + commandText("entry01"));
    	this.echo("|  " + commandText("entry02"));
        this.echo("|  " + commandText("entry03"));
        this.echo("|  " + commandText("entry04"));
        this.echo("|  " + commandText("entry05"));
        this.echo("|  " + commandText("entry06"));
        this.echo("|  " + commandText("entry07"));
        this.echo("|  " + commandText("entry08"));
        this.echo("|  " + commandText("entry09"));
        this.echo("|  " + commandText("entry10"));
        this.echo("|  " + commandText("entry11"));
        this.echo("|  " + commandText("entry12"));



    },

    //begin horrible chunk of "code" that is really just me needing to print this shit and not knowing how to use ajax/JSON yet
    //to grab text files and print them in here. REWRITE THIS LATER

    entry01: function(){
        this.echo(commandText("entry01:\n"));
        this.echo("\n");
        this.echo("The north and the west and the south are good hunting ground, but it is forbidden to go east .");
        this.echo("It is forbidden to go to any of the Dead Places except to search for metal and then he who touches the metal must be a priest or the son of a priest .");
        this.echo("Afterwards, both the man and the metal must be purified .");
        this.echo("These are the rules and the laws; they are well made .");
        this.echo("It is forbidden to cross the great river and look upon the place that was the Place of the Gods—this is most strictly forbidden .");
        this.echo("We do not even say its name though we know its name .");
        this.echo("It is there that spirits live, and demons—it is there that there are the ashes of the Great Burning .");
        this.echo("These things are forbidden—they have been forbidden since the beginning of time.");
        this.echo("\n");
        this.echo("My father is a priest; I am the son of a priest .");
        this.echo("I have been in the Dead Places near us, with my father—at first, I was afraid .");
        this.echo("When my father went into the house to search for the metal, I stood by the door and my heart felt small and weak .");
        this.echo("It was a dead man's house, a spirit house .");
        this.echo("It did not have the smell of man, though there were old bones in a corner .");
        this.echo("But it is not fitting that a priest's son should show fear .");
        this.echo("I looked at the bones in the shadow and kept my voice still.");
        this.echo("\n");
        this.echo("Then my father came out with the metal—good, strong piece .");
        this.echo("He looked at me with both eyes but I had not run away .");
        this.echo("He gave me the metal to hold—I took it and did not die .");
        this.echo("So he knew that I was truly his son and would be a priest in my time .");
        this.echo("That was when I was very young—nevertheless, my brothers would not have done it, though they are good hunters .");
        this.echo("After that, they gave me the good piece of meat and the warm corner of the fire .");
        this.echo("My father watched over me—he was glad that I should be a priest .");
        this.echo("But when I boasted or wept without a reason, he punished me more strictly than my brothers .");
        this.echo("That was right.");
    },

    entry02: function(){
        this.echo(commandText("entry02:\n"));
        this.echo("\n");
        this.echo("After a time, I myself was allowed to go into the dead houses and search for metal. So I learned the ways of those houses—and if I saw bones, I was no longer afraid. The bones are light and old—sometimes they will fall into dust if you touch them. But that is a great sin.");
        this.echo("\n");
        this.echo("I was taught the chants and the spells—l was taught how to stop the running of blood from a wound and many secrets. A priest must know many secrets—that was what my father said.");
        this.echo("\n");
        this.echo("If the hunters think we do all things by chants and spells, they may believe so—it does not hurt them. I was taught how to read in the old books and how to make the old writings—that was hard and took a long time. My knowledge made me happy—it was like a fire in my heart. Most of all, I liked to hear of the Old Days and the stories of the gods. I asked myself many questions that I could not answer, but it was good to ask them. At night, I would lie awake and listen to the wind—it seemed to me that it was the voice of the gods as they flew through the air.");
        this.echo("\n");
        this.echo("\n");
    },
    entry03: function(){
        this.echo(commandText("entry03:\n"));
        this.echo("\n");
        this.echo("We are not ignorant like the Forest People—our women spin wool on the wheel, our priests wear a white robe. We do not eat grubs from the trees, we have not forgotten the old writings, although they are hard to understand. Nevertheless, my knowledge and my lack of knowledge burned in me—I wished to know more. When I was a man at last, I came to my father and said, \"It is time for me to go on my journey. Give me your leave.\"");
        this.echo("\n");
        this.echo("He looked at me for a long time, stroking his beard, and then he said at last, \"Yes. It is time.\" That night, in the house of the priesthood, I asked for and received purification. My body hurt but my spirit was a cool stone. It was my father himself who questioned me about my dreams.");
        this.echo("\n");
        this.echo("He bade me look into the smoke of the fire and see—I saw and told what I saw. It was what I have always seen—a river, and, beyond it, a great Dead Place and in it the gods walking. I have always thought about that. His eyes were stern when I told him he was no longer my father but a priest. He said, \"This is a strong dream.\"");
        this.echo("\n");
        this.echo("\"It is mine,\" I said, while the smoke waved and my head felt light. They were singing the Star song in the outer chamber and it was like the buzzing of bees in my head.");
        this.echo("\n");
        this.echo("He asked me how the gods were dressed and I told him how they were dressed. We know how they were dressed from the book, but I saw them as if they were before me. When I had finished, he threw the sticks three times and studied them as they fell.");
        this.echo("\n");
        this.echo("\"This is a very strong dream,\" he said.\" It may eat you up.\"");
        this.echo("\n");
        this.echo("\"I am not afraid,\" I said and looked at him with both eyes. My voice sounded thin in my ears but that was because of the smoke.");
        this.echo("\n");
        this.echo("He touched me on the breast and the forehead. He gave me the bow and the three arrows.");
        this.echo("\n");
        this.echo("\"Take them,\" he said. \"It is forbidden to travel east. It is forbidden to cross the river. It is forbidden to go to the Place of the Gods. All these things are forbidden.\"");
        this.echo("\n");
        this.echo("\"All these things are forbidden,\" I said, but it was my voice that spoke and not my spirit. He looked at me again.");
        this.echo("\n");
        this.echo("\"My son,\" he said. \"Once I had young dreams. If your dreams do not eat you up, you may be a great priest. If they eat you, you are still my son. Now go on your journey.\" ");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("");
    },
    entry04: function(){
        this.echo(commandText("entry04:\n"));
        this.echo("\n");
        this.echo("I went fasting, as is the law. My body hurt but not my heart. When the dawn came, I was out of sight of the village. I prayed and purified myself, waiting for a sign. The sign was an eagle. It flew east.");
        this.echo("\n");
        this.echo("Sometimes signs are sent by bad spirits. I waited again on the flat rock, fasting, taking no food. I was very still—I could feel the sky above me and the earth beneath. I waited till the sun was beginning to sink. Then three deer passed in the valley going east—they did not mind me or see me. There was a white fawn with them—a very great sign.");
        this.echo("\n");
        this.echo("I followed them, at a distance, waiting for what would happen. My heart was troubled about going east, yet I knew that I must go. My head hummed with my fasting—I did not even see the panther spring upon the white fawn. But, before I knew it, the bow was in my hand. I shouted and the panther lifted his head from the fawn. It is not easy to kill a panther with one arrow but the arrow went through his eye and into his brain. He died as he tried to spring—he rolled over, tearing at the ground. Then I knew I was meant to go east—I knew that was my journey. When the night came, I made my fire and roasted meat.");

    },
    entry05: function(){
        this.echo(commandText("entry05:\n"));
        this.echo("\n");
        this.echo("It is eight suns' journey to the east and a man passes by many Dead Places. The Forest People are afraid of them but I am not. Once I made my fire on the edge of a Dead Place at night and, next morning, in the dead house, I found a good knife, little rusted. That was small to what came afterward but it made my heart feel big. Always when I looked for game, it was in front of my arrow, and twice I passed hunting parties of the Forest People without their knowing. So I knew my magic was strong and my journey clean, in spite of the law.");
        this.echo("\n");
        this.echo("Toward the setting of the eighth sun, I came to the banks of the great river. It was half-a-day's journey after I had left the god-road—we do not use the god-roads now for they are falling apart into great blocks of stone, and the forest is safer going. A long way off, I had seen the water through trees but the trees were thick. At last, I came out upon an open place at the top of a cliff. There was the great river below, like a giant in the sun. It is very long, very wide. It could eat all the streams we know and still be thirsty. Its name is Ou-dis-sun, the Sacred, the Long. No man of my tribe had seen it, not even my father, the priest. It was magic and I prayed.");
        this.echo("\n");
        this.echo("Then I raised my eyes and looked south. It was there, the Place of the Gods.");
        this.echo("\n");
        this.echo("How can I tell what it was like—you do not know. It was there, in the red light, and they were too big to be houses. It was there with the red light upon it, mighty and ruined. I knew that in another moment the gods would see me. I covered my eyes with my hands and crept back into the forest.");
        this.echo("\n");
        this.echo("Surely, that was enough to do, and live. Surely it was enough to spend the night upon the cliff. The Forest People themselves do not come near. Yet, all through the night, I knew that I should have to cross the river and walk in the places of the gods, although the gods ate me up. My magic did not help me at all and yet there was a fire in my bowels, a fire in my mind. When the sun rose, I thought, \"My journey has been clean. Now I will go home from my journey.\" But, even as I thought so, I knew I could not. If I went to the Place of the Gods, I would surely die, but, if I did not go, I could never be at peace with my spirit again. It is better to lose one's life than one's spirit, if one is a priest and the son of a priest.");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("'''''''''''''''''''''''''''''''''''''''''''''''';';;;''''''''''''''''''''''''''''''''''''''''''''''''''''''");
        this.echo("'''''''''''''''''''''''''''''''''''''''''';''';;';;;;'''''''''''';'''''''''''''''''''''';;;;';;;;;;'''''';'");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''';;;'';;;';;;;;'';;';;;;'''''''''''';;;;;;''';;;''';;;'';;;''");
        this.echo("''''''''''''''''''''''''''''''''''''''';;'''''';;;';;;''';;''';;''''''';''''';;;'';'';;''';;;;;;;;;';;'';;;");
        this.echo("'''''''''''''''''''''''''''';''''''';'';;;'''''''';';;;;;;''';;;;;;;;;;;''';'''';;;;''';;'';;;;;''';;:;;'';");
        this.echo("''''''''''''''''';;;'';;';;;;;''':;;;''';;;:;';;;';;';'''''''''';;;;::;;;;;;;'''';';;'''';;'''';;;';''''';:");
        this.echo("'''''''''''''''''''''''''';;;;;'''';';;;''''';;'';;;'';'';;;;'';'''';'';;'''';;'';;;;;;;;''''';''';';';;;;;");
        this.echo("''''''';'''''''';;;;;;;;'''';;;;;;';''''';';''';;;;:;''';';;:;;';';;';'';';;;';;;';;;;;';::;;;;;;;';;''':::");
        this.echo("'''''''''''''''''''';;''';'';'';;'';'';;;;;;;:;';;;';;;'';;;''';';:;;'::::;';;';::;;;';;'''''';;:;;;;;;;;':");
        this.echo("''''''''';;''';'''''';''''';;'';;;;;;;;:;;'''''';;';'';;;;;;;::;;;'';;;;;;'';;;;';;;;;:;:;;;;;;'';;'';;';;:");
        this.echo("'''''''''''';''';;''';;;;;;;';;;';;'';;'';;;;;;;;:;;;;;;;;;;;;::;;::;;::;;;;;;;;;;;;';:;;;;';';;;:;;;'';;;;");
        this.echo("'''';''';;';;''';;;'''''';;;;';;;';;;:;;;'';;:;;''';;;:;::;:;:::;'';;;;;;::;;;;;;;:::;;;'''';;';;;';:;;;;;:");
        this.echo("''''';';'';;;;:;;::;;;;;'';;;;;;;;;;;::;''';;;;;;:::;;;;;;;'';;;;::;::::';::::::;;;;;:::;;:;;;;;;;;;;;;;'';");
        this.echo("'';;;';;;;::;;::::::;:;;;:;;;;;;::;;;;;;;';;;;;;:;;:::;:::''';::::::;;,:'':::::;:;;::;;:;:;;;;;;;;;;;:;::;;");
        this.echo(";'''';;;:;';:::;;;::;::;;;;:;:::;;:;;:::;:;;:;;:;;;;::;::''''::::,,::;;'''::;;:;;:;::,::;;;;;;;:::;;:';::::");
        this.echo(";;;;'''';::::::::::;::::::;;:;;;::::;:::::::::;;::::::;;;'''':::::::,,:'''::::::::::;;:;:;;:::::,,:::::,;;;");
        this.echo(";;:';;:;;;;;;;;;;::::;;;:::;;::::,,,::::::::::::;::'';:;;''''::;::;::;;''':::::::::::::::;::::::;;::::::;;:");
        this.echo(";';;::;;:::::::::::::;;;;;::::::::::,,;;;;;;;,,:::,''':::'''','',,,,:,,''':::;::,,,,:,,;;;:::::::::::;:::::");
        this.echo("'';;';;;:;;;;:::;,:::::::::::::::::::,,,,,,,::,,,,,''',,,''''.'',,',,,,''':;::,,,:::::::;::::::,,,::::;;;;;");
        this.echo("';;;:;;;;;;;::;;:;:::::::::::,:::::::;;;:,:,,,,:,,:''',,.'''',''.,',,,,'''''',,:,,,,,,,,,,,:;;:::,,,,,,,,,,");
        this.echo("''';;;:';;';;;;;;;:::::::::::::::::,,,,,,,,,,,:',,,''',,,'''','',,'',,,''';'','';,,,,,,,,,,,,,,,,,,,,,,:,,,");
        this.echo("';;:;;;;;'':;;:::::::::::::::::::::,,,,,,,::,,'',,,''';'''''','',,'',;,''';'',''',,,,,,,,,,,,,,,,,,,,,,,,,,");
        this.echo("'';;;;;;;'':::::::::::::':::::::,,,,,,,,,,,',,'',,,''',..'''','',,'';';''';'',''',,,,,,,,,,,,,,,,,,,,,,,,,,");
        this.echo("';';'';:;'';::;;;:::::::':::::::,,,,:,'::,,+,,'':,.''''''''''.'',,''''''''''',''',,'';,,,,,,,,,,,,,,,,,,,,,");
        this.echo("'''';;;;;'';;';';:::::::':'',,:,::,,::'',,'',.+'',:''''''''''''''''''''''''';,'';,.''',',,,,,,,,,,,,:,.,,,,");
        this.echo("';';;;;;;''''';';;;;;;;:':''::,,:::,,,'',,'':;''''''''''''''''''''''''''''''''''';;''',:..,,,,,,,,,,,+',,,,");
        this.echo("''''';;'''''''''''''''''':''::::::;:,'''''''''''''''''''''''''''''''''''''''''''';'''','.,',.,,,,,,,,'',,,,");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''';'''';;;,:,,,,,,,:,,'','',");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''':.,,,,,,,,'','',");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''',;;,.::.''.'',");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''';',;,,,,'','''");
        this.echo("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''',',:,,:,''''''");
        this.echo("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''';.'...,,.'';'''");
        this.echo("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("Above: John, son of John's first view of the God-city, newyork.");
        this.echo("Below: Knife found by John in the house, likely made before the Great Burning.");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");

        this.echo(" `,`                                                    ");
        this.echo(" ;+':',                                                 ");
        this.echo(" :++++'''.                                              ");
        this.echo(" .#+;''++'':                                            ");
        this.echo("  ++'++''::'';                                          ");
        this.echo("  `,:,+++;;'+++;                                        ");
        this.echo("   ,.,:'++'::;'++;                                      ");
        this.echo("       ;,+++'```.++:                                    ");
        this.echo("        `;;+++;.`:',,`                                  ");
        this.echo("          ,;;+++', `::;`                                ");
        this.echo("            ,':'++.`:,,,:`                              ");
        this.echo("             ``;':,.,:,,:::                             ");
        this.echo("                 `:,,,,,,,:,:                           ");
        this.echo("                   .,,,,,,,,,:.                         ");
        this.echo("                   ,,,,,,,,,,,,:                        ");
        this.echo("                  .,,,,,,,,,,,,,,,                      ");
        this.echo("                  ,.,,,,,,,,,,,,,,:`                    ");
        this.echo("                  ..,.,,,,,.,.,..,,,,                   ");
        this.echo("                  .,,,,,.,..,.,...,,,,`                 ");
        this.echo("                ` `:.,,,,........,,.,,.,                ");
        this.echo("                     :.,......,,,,,,,,,,,`              ");
        this.echo("                       ,.,,..,.,,,,,,,,,,..             ");
        this.echo("                         .,,,,..,,,,,,,.,,,,`           ");
        this.echo("                           `:.,.,,,,,,,,,,,,..          ");
        this.echo("                              ;.,,.,,,,,,,,,,,,         ");
        this.echo("                                ,,,,,,,,,,,,,,,,        ");
        this.echo("                                  .:.,,,,,,,,,,,,.      ");
        this.echo("                                     :,.,,,,,,,,,,,     ");
        this.echo("                                       `;,,,,,,,,,,,    ");
        this.echo("                                          `:,.,,,,,,:`  ");
        this.echo("                                              `,,,,,,,. ");
        this.echo("                                                      ` ");
            },
    entry06: function(){
        this.echo(commandText("entry06:\n"));
        this.echo("\n");
        this.echo("Nevertheless, as I made the raft, the tears ran out of my eyes. The Forest People could have killed me without fight, if they had come upon me then, but they did not come.");
        this.echo("/n");
        this.echo("When the raft was made, I said the sayings for the dead and painted myself for death. My heart was cold as a frog and my knees like water, but the burning in my mind would not let me have peace. As I pushed the raft from the shore, I began my death song—I had the right. It was a fine song.");
        this.echo("/n");
        this.echo("\"I am John, son of John,\" I sang. \"My people are the Hill People. They are the men.");
        this.echo("/n");
        this.echo("I go into the Dead Places but I am not slain.");
        this.echo("/n");
        this.echo("I take the metal from the Dead Places but I am not blasted.");
        this.echo("/n");
        this.echo("I travel upon the god-roads and am not afraid. E-yah! I have killed the panther, I have killed the fawn!");
        this.echo("/n");
        this.echo("E-yah! I have come to the great river. No man has come there before. ");
        this.echo("/n");
        this.echo("It is forbidden to go east, but I have gone, forbidden to go on the great river, but I am there.");
        this.echo("/n");
        this.echo("Open your hearts, you spirits, and hear my song.");
        this.echo("/n");
        this.echo("Now I go to the Place of the Gods, I shall not return.");
        this.echo("/n");
        this.echo("My body is painted for death and my limbs weak, but my heart is big as I go to the Place of the Gods!\"/n");
        this.echo("/n");
        this.echo("All the same, when I came to the Place of the Gods, I was afraid, afraid. The current of the great river is very strong—it gripped my raft with its hands. That was magic, for the river itself is wide and calm. I could feel evil spirits about me, I was swept down the stream. Never have I been so much alone—I tried to think of my knowledge, but it was a squirrel's heap of winter nuts. There was no strength in my knowledge any more and I felt small and naked as a new-hatched bird—alone upon the great river, the servant of the gods.");
        this.echo("/n");
        this.echo("Yet, after a while, my eyes were opened and I saw. I saw both banks of the river—I saw that once there had been god-roads across it, though now they were broken and fallen like broken vines. Very great they were, and wonderful and broken—broken in the time of the Great Burning when the fire fell out of the sky. And always the current took me nearer to the Place of the Gods, and the huge ruins rose before my eyes.");
        this.echo("/n");
        this.echo("I do not know the customs of rivers—we are the People of the Hills. I tried to guide my raft with the pole but it spun around. I thought the river meant to take me past the Place of the Gods and out into the Bitter Water of the legends. I grew angry then—my heart felt strong. I said aloud, \"I am a priest and the son of a priest!\" The gods heard me—they showed me how to paddle with the pole on one side of the raft. The current changed itself—I drew near to the Place of the Gods.");
        this.echo("/n");
        this.echo("When I was very near, my raft struck and turned over. I can swim in our lakes—I swam to the shore. There was a great spike of rusted metal sticking out into the river—I hauled myself up upon it and sat there, panting. I had saved my bow and two arrows and the knife I found in the Dead Place but that was all. My raft went whirling downstream toward the Bitter Water. I looked after it, and thought if it had trod me under, at least I would be safely dead. Nevertheless, when I had dried my bowstring and re-strung it, I walked forward to the Place of the Gods.");
        this.echo("/n");
        this.echo("/n");
    },
    entry07: function(){
        this.echo(commandText("entry07:\n"));
        this.echo("\n");
        this.echo("It felt like ground underfoot; it did not burn me. It is not true what some of the tales say, that the ground there burns forever, for I have been there. Here and there were the marks and stains of the Great Burning, on the ruins, that is true. But they were old marks and old stains. It is not true either, what some of our priests say, that it is an island covered with fogs and enchantments. It is not. It is a great Dead Place—greater than any Dead Place we know. Everywhere in it there are god-roads, though most are cracked and broken. Everywhere there are the ruins of the high towers of the gods.");
        this.echo("\n");
        this.echo("How shall I tell what I saw? I went carefully, my strung bow in my hand, my skin ready for danger. There should have been the wailings of spirits and the shrieks of demons, but there were not. It was very silent and sunny where I had landed—the wind and the rain and the birds that drop seeds had done their work—the grass grew in the cracks of the broken stone. It is a fair island—no wonder the gods built there. If I had come there, a god, I also would have built.");
        this.echo("\n");
        this.echo("How shall I tell what I saw? The towers are not all broken—here and there one still stands, like a great tree in a forest, and the birds nest high. But the towers themselves look blind, for the gods are gone. I saw a fishhawk, catching fish in the river. I saw a little dance of white butterflies over a great heap of broken stones and columns. I went there and looked about me—there was a carved stone with cut—letters, broken in half. I can read letters but I could not understand these. They said UBTREAS. There was also the shattered image of a man or a god. It had been made of white stone and he wore his hair tied back like a woman's. His name was ASHING, as I read on the cracked half of a stone. I thought it wise to pray to ASHING, though I do not know that god.");
        this.echo("\n");
        this.echo("How shall I tell what I saw? There was no smell of man left, on stone or metal. Nor were there many trees in that wilderness of stone. There are many pigeons, nesting and dropping in the towers—the gods must have loved them, or, perhaps, they used them for sacrifices. There are wild cats that roam the god-roads, green-eyed, unafraid of man. At night they wail like demons but they are not demons. The wild dogs are more dangerous, for they hunt in a pack, but them I did not meet till later. Everywhere there are the carved stones, carved with magical numbers or words.");
        this.echo("\n");
        this.echo("I went north—I did not try to hide myself. When a god or a demon saw me, then I would die, but meanwhile I was no longer afraid. My hunger for knowledge burned in me—there was so much that I could not understand. After a while, I knew that my belly was hungry. I could have hunted for my meat, but I did not hunt. It is known that the gods did not hunt as we do—they got their food from enchanted boxes and jars. Sometimes these are still found in the Dead Places—once, when I was a child and foolish, I opened such a jar and tasted it and found the food sweet. But my father found out and punished me for it strictly, for, often, that food is death. Now, though, I had long gone past what was forbidden, and I entered the likeliest towers, looking for the food of the gods.");
    },
    entry08: function(){
        this.echo(commandText("entry08:\n"));
        this.echo("\n");
        this.echo("I found it at last in the ruins of a great temple in the mid-city. A mighty temple it must have been, for the roof was painted like the sky at night with its stars—that much I could see, though the colors were faint and dim. It went down into great caves and tunnels—perhaps they kept their slaves there. But when I started to climb down, I heard the squeaking of rats, so I did not go—rats are unclean, and there must have been many tribes of them, from the squeaking. But near there, I found food, in the heart of a ruin, behind a door that still opened. I ate only the fruits from the jars—they had a very sweet taste. There was drink, too, in bottles of glass—the drink of the gods was strong and made my head swim. After I had eaten and drunk, I slept on the top of a stone, my bow at my side.");
        this.echo("\n");
        this.echo("When I woke, the sun was low. Looking down from where I lay, I saw a dog sitting on his haunches. His tongue was hanging out of his mouth; he looked as if he were laughing. He was a big dog, with a gray-brown coat, as big as a wolf. I sprang up and shouted at him but he did not move—he just sat there as if he were laughing. I did not like that. When I reached for a stone to throw, he moved swiftly out of the way of the stone. He was not afraid of me; he looked at me as if I were meat. No doubt I could have killed him with an arrow, but I did not know if there were others. Moreover, night was falling.");
        this.echo("\n");
        this.echo("I looked about me—not far away there was a great, broken god-road, leading north. The towers were high enough, but not so high, and while many of the dead-houses were wrecked, there were some that stood. I went toward this god-road, keeping to the heights of the ruins, while the dog followed. When I had reached the god-road, I saw that there were others behind him. If I had slept later, they would have come upon me asleep and torn out my throat. As it was, they were sure enough of me; they did not hurry. When I went into the dead-house, they kept watch at the entrance—doubtless they thought they would have a fine hunt. But a dog cannot open a door and I knew, from the books, that the gods did not like to live on the ground but on high.");
        this.echo("\n");
        this.echo("I had just found a door I could open when the dogs decided to rush. Ha! They were surprised when I shut the door in their faces—it was a good door, of strong metal. I could hear their foolish baying beyond it but I did not stop to answer them. I was in darkness—I found stairs and climbed. There were many stairs, turning around till my head was dizzy. At the top was another door—I found the knob and opened it. I was in a long small chamber—on one side of it was a bronze door that could not be opened, for it had no handle. Perhaps there was a magic word to open it but I did not have the word. I turned to the door in the opposite side of the wall. The lock of it was broken and I opened it and went in.");
        this.echo("\n");
        this.echo("Within, there was a place of great riches. The god who lived there must have been a powerful god. The first room was a small ante-room—I waited there for some time, telling the spirits of the place that I came in peace and not as a robber. When it seemed to me that they had had time to hear me, I went on. Ah, what riches! Few, even, of the windows had been broken—it was all as it had been. The great windows that looked over the city had not been broken at all though they were dusty and streaked with many years. There were coverings on the floors, the colors not greatly faded, and the chairs were soft and deep. There were pictures upon the walls, very strange, very wonderful—I remember one of a bunch of flowers in a jar—if you came close to it, you could see nothing but bits of color, but if you stood away from it, the flowers might have been picked yesterday. It made my heart feel strange to look at this picture—and to look at the figure of a bird, in some hard clay, on a table and see it so like our birds. Everywhere there were books and writings, many in tongues that I could not read. The god who lived there must have been a wise god and full of knowledge. I felt I had a right there, as I sought knowledge also.");
        this.echo("\n");
        this.echo("Nevertheless, it was strange. There was a washing-place but no water—perhaps the gods washed in air. There was a cooking-place but no wood, and though there was a machine to cook food, there was no place to put fire in it. Nor were there candles or lamps—there were things that looked like lamps but they had neither oil nor wick. All these things were magic, but I touched them and lived—the magic had gone out of them. Let me tell one thing to show. In the washing-place, a thing said \"Hot\" but it was not hot to the touch—another thing said \"Cold\" but it was not cold. This must have been a strong magic but the magic was gone. I do not understand—they had ways—I wish that I knew.");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("Below: another machine from the house. Function is not immediately clear. A mirror?")
        this.echo("\n");
        this.echo("       ```.,,::,,,,,,,,,,,,,,,,,,,,::::;;;'++@@@@@#####+++++++++'+'+'##@@@@#+';::,,,+'+#,::#+'+'''''''''''''          ");
        this.echo("  :::::,,,,,,,,,,:::::::;;;'++@@@@######+++#####################''::::;;;;;+;::;:::::++##:::++'+'''''''''''''`         ");
        this.echo("  ;:::;;;;;'''+@@@@@#####+++####################################'';'';;;;;:;:;;:;;;;:++##:::++'+'''''''''''''`         ");
        this.echo("  '@####++++##################################+#######++'''+####+';;;;:;:##@#@':;;;;:++##,::++'+'''''''''''''.         ");
        this.echo("  @##############################++++''''''''';;;;;;;;;;;;;;'###+':;;:;'#;#@##;#:;;;:++##:::#+'+'''''''''''''.         ");
        this.echo("  @#############++++''''''''';;;;;:;;:;:::;;;;;;;;;;;;;;;;;';###++;;;;+@''#++#+@+,:;;++##:::++''''''''''''''',         ");
        this.echo("  @#'++''''';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;''''''''''';##@++;;;;#+##+''.##@@:;;++##:::+'''''''''''''''',         ");
        this.echo("  @+:;;';;;;;;;;;;;;;;;;;::::::::::::::::::::::::::;;;;;;;';;##@++;;:+''#'+#@':#;;:;;++##:::++'+''''''''''''':         ");
        this.echo("  @';:;''''';;;;;;::::::::::::::::::::::::::::::::::::::::::;##@++;;;+';;'+';++;#@';;++##,::++'+''''''''''''';         ");
        this.echo("  #':;;;;;;;;;;;;;;;;;;;''''++++###@@@@###################',;##@++:;;;:,,,::,'';#+#;;''##,::+'+'''''''''''''''         ");
        this.echo("  #':;;;''+###@@#####+++++++++++++++++++++++++++++++++++++#,;##@++:;,,,,,::;''''#'+;;'+##,::+'''''''''''''''''         ");
        this.echo("  #'::;;####++++++++++++++++++++++++++''''''''''''+++++++++,;##@++;:;';;::,;'''+##+;;'+##:::+'''''''''''''''';         ");
        this.echo("  ++,:;+##++++++''''''''';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,;##@++:;:',,,,::';+++++;:'+##:::+''''''''''''''''';        ");
        this.echo("  ++,:;+#''';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,'##@++;;,;+'#@@#'+'+@#:;:'+##:::+''''''''''''''''';`       ");
        this.echo("  ++,,;##';;;;;;;;;;;;;;;;;;;;::;::::::::::::::::;;;;;;;;;;,;##@++;:,:'#;+###;,##';;;++##:::+''''''''''''''''';;       ");
        this.echo("  '+,,;##';;;;;;;;;;;;;;;;;::;::;;:::::::::::::::;;;;;;;;;;,;##@++;;;:;#;+..,'#++::;:'+##:::'''''''''''''''''';;;      ");
        this.echo("  '+,,:##';;;;;;;;;;;;;;;;;::;::::::::::::::::::::::;;;;;;;,;##@'+;;;:;'##'##'##';:;:''##:::'''''''''''''''''';;;,     ");
        this.echo("  '+,,:@+';;;;;;;;;;;:::::;:::::::::::::::::::::::::;;;;;;;,'##@+';;;;,;+'+###'';;;;:'+##:::'''''''''''''''''';;;;`    ");
        this.echo("  '+,,:#+';;;;;;;;;;;:::::::::::::::::::::::::::::::;;;;;;;,'##@++;;;;;;;##+#';;;;;;;'+##:::'''''''''''''''''';;;';    ");
        this.echo("  ;+,,:#+';;;;;;;;;:;:::::::::::::::::::::::::::::::;;;;;;;,'##@'+;;;;;;;;'''';';;;;;++##:::'''''''''''''''''';;;;;.   ");
        this.echo("  ;#,,:#+';;;;;;;;;:::::::::::::::::::::::::::::::::;;;;;;;,'+#@++;'';;;;;;+;;';;;;;;''##:::''''''''''''''''';;;;;;,   ");
        this.echo("  ;#,::#';;;;;;;;;;::::::::::::::::::::::::::::::::::;;;;;;,'###++;;;;;;:;+#+:;;;;;;;''##:::''''''''''''''''';;;;;;:   ");
        this.echo("  ;#,::#';;;;;;;;;;::::::::::::::::::::::::::::::::::;;;;;;,'###++;;;;;'##''+'#:;;;;:''##:::'''''''''''''''''';;;;;;   ");
        this.echo("  :#,::#';;;;;;;;;:::::::::::::::::::::::::::::::::::;;;;;;,'##@++;;;;+#;'';+'+'';;;:'+##:::''''''''''''''''';;;;;;'   ");
        this.echo("  :#,::#';;;;;;;;;:::::::::::::::::::::::::::::::::::;;;;;;,'##@++;;;;++''+':@''':;;:''##:::''''''''''''''''';;;;;;'   ");
        this.echo("  :#,::#';;;;;;;;;:::::::::::::::::::::::::::::::::::;;;;;:,'##@++;;:+'';'+@+':##+;;:++##:::'''''';'''''''''';;;;;;'   ");
        this.echo("  ,#,::#';;;;;;;;;;::::::::::::::::::::::::::::::::::::;;;:,'##@++;;:'+++#+'`;:;#+:::'+##:::''''''''''''''''';;;;;;;   ");
        this.echo("  ,#:::#';;;;;;;;;;;:::::::::::::::::::::::::::::::::::;;;:,'##@++;;;+'++';;;'::+;'::''##:::''''''''''''''''';;;;;;;   ");
        this.echo("  ,@:::#';;;;;;;;;;;:::::::::::::::::::::::::::::::::;;;;;:,'###++;;'+;';;;'';':@;+;:''##:::''''''''''''''''';;;;;;;   ");
        this.echo("  .@:::#';;;;;;;;;;;::::::::::::::::::::::::::::::::::;;;;::'##@++::';;:;;:;;,''#++::''##:::''''''''''''''''';;;;;;;   ");
        this.echo("  .@:::#';;;;;;;;;;::::::::::::::::::::::::::::::::::::::;::'##@++;;;;;:,;:.:'#;##+;:+'##::,''''''''''''''''';;;;;;;   ");
        this.echo("  `@:::#';;;;;;;;;;:::::::::::::::::::::::::::::::::::;::;::'##@++:;;;';..'#+#':++'::+'##:::''''''''''''''''';;;;;;;`  ");
        this.echo("  `@:::#';;;;;;;;;;;:::::::::::::::::::::::::::::::::;;:;;::'##@++::,:',@#+++@.+++:::++##:::''''''''''''''''';;;;;;;`  ");
        this.echo("  `@:::#';;;;;;;;;;;:::::::::::::::::::::::::::::::::;:;;;::'###++::;;#++;,:..#+'':::+'##:::''''''''''''''''';;;;;;;.  ");
        this.echo("  `@:::#';;;;;;;;;;;;:::::::::::::::::::::::::::::::::;;;;::'##@++:;:,;++;'@@+';:::::''##:::''''''''''''''''';;;;;;;,  ");
        this.echo("  `#:::#';;;;;;;;;;;;:::::::::::::::::::::::::::::::::;;;;::'###++:;;;.'#+++'+@;:::::+'##:::''''''''''''''''';;;;;;;:  ");
        this.echo("  `#:::#';;;;;;;;;;;::::::::::::::::::::::::::::::::::;;;;::'##@++;;;;;:+##';'+;;::::'+##:::''''''''''''''''';;;;;;;:  ");
        this.echo("   #:::#';;;;::::::::::::::::::::::::::::::::::::::::;;;;;::'##@++:;:;;;;';;;;;;;::::'+#@:::'''''''';'''''''';;;;;;;;  ");
        this.echo("   +:::#+;;;;;::::::::::::::::::::::::::::::::::::::::;;;;::'##@++:::::;;;;;;;;;:::::''#@:::'''''''';'''''''';;;;;;;;  ");
        this.echo("   +:,;#+;;;;;;:::::::::::::::::::::::::::::::::::::::;;;;::'##@++++++#@#@@#++'';;;:'''#@:::''''''''''''''''';;;;;;;;  ");
        this.echo("   +:,;@+;;;;;;;;::::::::::::::::::::::::::::::::::::;;;;;::'##@++;'''+'+++++++''''''++#@:::''''''''''''''''';;;;;;;;  ");
        this.echo("   +:,;@+';;;;;;;;:::::::::::::::::::::::::::::::::::::;;;::'##@++++++'+++++++';';+;''+#@:::''''''''''''''''';;;;;;;;  ");
        this.echo("   +:,;##;;;;;;;;:::::::::::::::::::::::::::::::::::::::;;::;##@++++#++'+++++''+'+''+'+#@:::'''''''''''''''';;;;;;;;;  ");
        this.echo("   #:,;+#';;;;;;;;::::::::::::::::::::::::::::::::::::::::::;##@+++'+##'''+'+'+++ #'+++#@:::'''''''''';'''''';;;;;;;;  ");
        this.echo("   +:,;'#';;;;;;;;;:::::::::::::::::::::::::::::::::::::::::;##@+++++##++;+'+'++++#+'''#@:::'''''''''''';''';;;;;;;;;  ");
        this.echo("   +:,;'#';;;;;;::::::::::::::::::::::::::::::::::::::::::::;###++++##++++''++#+++#''''#@:::'''''''''''';''';;;;;;;;;  ");
        this.echo("   +:,;;@';;;;;:::::::::::::::::::::::::::::::::::::::::::::;##@++++++++'+''+'##+#'''''#@:::'''''''''''';''';;;;;;;;;  ");
        this.echo("   #:,;:+;;;;;;:::::::::::::::::::::::::::::::::::::::::::::;+##++++++++++'++++'+++''+'#@:::'''''''''';;''''';;;;;;;;  ");
        this.echo("   #:,;:+;;;;;::::::::::::::::::::::::::::::::::::::::::::;:;+##++'++++++'++##+++++''''#@:::'''''''''';'''''';;;;;;;;  ");
        this.echo("   @:,;:+;;;;;;::::::::::::::::::::::::::::::::::::::::::;;:;+##+++++#+++'+++++'+++''''#@:::''''''''''';''''';;;;;;;;  ");
        this.echo("   @:,;,+';;;;;::::::::::::::::::::::::::::::::::::::::::;;:;+##+#####+++'+++''''++''+'#@:::'''''''''';;''''';;;;;;;;  ");
        this.echo("   @:,:,+';;;;;;;::::::::::::::::::::::::::::::::::::::::;;:;+##+#@###+++'''''+++++''#'#@:::'''';'''''';''';';;;;;;;;  ");
        this.echo("   @:,::#+;;;;;;:;;::::::::::::::::::::::::::::::::::::::;;::+##+##++'+++++'++++#+'''+'#@:::'''''''''';';'';';;;;;;;;  ");
        this.echo("   @:,::@+;;;;;;;;;;:::::::::::::::::::::::::::::::::::::;;::+##+#++'++++''++#@#++'+'''#@:::'''';';''';';'';';;;;;;;;  ");
        this.echo("   @:,,:#+';;;;;;;;;::::::::::::::::::::::::::::::::::;::;;::+##+''''++'''+'++#+'++''''#@:::'''';';''';'''';';;;;;;;;` ");
        this.echo("   @;,,;:++';;;;;;;;;;;::;::::::::::::::::::::::::::::;;:;;::+##+++++++'++++++''''+''''#@:::''''''''''';';''';;;;;;;;` ");
        this.echo("   +;,:;.;#++''';;;;;;;;;;;;:::::::::::::::::::::::::;;;;;;::++#'++++++''''''''''''''+'#@:::'''''''''';'';''';;;;;;;;` ");
        this.echo("   +',:;;;;:::'+++''';;;;;;;;;;;::::::::::::::::::::;:;:;;;::++#+####++''++++''+++''++'#@:::'''''''''''';'''';;;;;;;;` ");
        this.echo("   '',,,:;;::;;;::,:'+#+'''';;;;;;;;;;;;::::::::::;:;;;;;;;::++#+@@+++''++++++##+''''''#@:::'''''''''''';'''';;;;;;;;` ");
        this.echo("   ;',.,,,,:::;::::::;:,,,:;+#+''''';;;;;;;;;;;;;;;;;;;;;;;::++#+#++'+''''''+#@#+'+''''#@:::'''''''''''';'''';;;;;;;;` ");
        this.echo("   :#:::,,,,,,,,,::::::::::::::,,,,:;+##+'''''''''';'';''''::++#+#++'''+''++#+++''+''''#@:::'''''''''''';';'';;;;;;';` ");
        this.echo("   :#+##';:::::,,,,,,,,:::::::::::::::::,,,,,,:;;''++#@@@#;::++#'+'''++''''++++'''++'+'#@:::'''''''''''';''''';;;;;;;  ");
        this.echo("   ,+#+++':::''';::::,,,,,,,,,,:::::::::::::::::::::::,,,,:::++#+''++++''''+'''''''''#'#@:::'''''''''''';''''';;;;;'`  ");
        this.echo("   .+@++++:::::::::;'+;::::,,,,,,......,,,:::::::::::,:::::::++#+++#+++'++'+''+++++''+'#@:::;''''''''''';;;''';;';;'   ");
        this.echo("   `:;;;'+@@@+;:,::::,++++##';::::,,....................,,:::++#'+##+++'''''++##++'''''#@:::;''''''''''';;;'''''';''   ");
        this.echo("     .:;:;;;;;''#@@+;:#+++++++++++#+';:::,,..............,,,:++#+#@#++''+''++#@#++'''''#@::,'''''';''''';;''''';''';   ");
        this.echo("         ++';;;;;;;;;'+@#++++++++++++++++##+';:::,,,......,,:++#+#++''+++'+++##+'+++'+'#@:::'';'''';''''';;'''''''',   ");
        this.echo("         @#+####+';;;;;;;;;;'#@#++++++++++++++++++##+';:::,,;++#++''''''''+++++'''+''++#@:::'''''''''''';''''''''''`   ");
        this.echo("          +++##+##++##+';:;;;;;;;;;+#@##+++++#+++++++++++++++++#+''''+''''+'+''''+''++'#@:::''''''''''';';'''''''',    ");
        this.echo("          :###########+##+###+';;;;;;;;;;;'#@##++++++++++++++++#+'''+++''''+''+++++''+'#@:::'''''''''''';';'''''+      ");
        this.echo("           #############+######+####';;;;;;;;;;;;'+#@@##+++++++#+''++++''+'+'+###++''''##:::'''''''''''';''''''+       ");
        this.echo("           :@+######################+#+###+';;;;;;;;;;;;;;'+#@##+''''++''+''+###++'''+'#@:::'''''''''''''''''',        ");
        this.echo("              `,+#@#####################+####+###+';;:;;;;:;;;;;:;'+#@@#++''''''''+''++#@:::''''''''''''++'+#          ");
        this.echo("                    `,@@#############################+###+';;;;;;;;;;;;;;;''#@@#+++''+'##:::''''''''++'+++':           ");
        this.echo("                          .:@@###########################++#++###+';;;;;;;;;;;;::;;'+#@#@:,:'''';'++++++++             ");
        this.echo("                                .;@@##########################+###+#+++##+';;;:;;;;;;;;:::::''''+'+++++++;             ");
        this.echo("                                      .;@@#+######################################+';;::;;:;'++++++++++',              ");
        this.echo("                                            .:@@#######################################+#++++++++++++++                ");
        this.echo("                                                  `,#@@###################################++++++++++@                  ");
        this.echo("                                                        `.;@@#+###########################+++++++++,                   ");
        this.echo("                                                               `,'@@######################++++++++                     ");
        this.echo("                                                                      `.;@@#+##############++++@                       ");
        this.echo("                                                                             `.:@@@########+++,                        ");
        this.echo("                                                                                     .:#@@#++                          ");
        this.echo("                                                                                                                       ");
    },
    entry09: function(){
        this.echo(commandText("entry09:\n"));
        this.echo("\n");
        this.echo("It was close and dry and dusty in the house of the gods. I have said the magic was gone but that is not true—it had gone from the magic things but it had not gone from the place. I felt the spirits about me, weighing upon me. Nor had I ever slept in a Dead Place before—and yet, tonight, I must sleep there. When I thought of it, my tongue felt dry in my throat, in spite of my wish for knowledge. Almost I would have gone down again and faced the dogs, but I did not.");
        this.echo("\n");
        this.echo("I had not gone through all the rooms when the darkness fell. When it fell, I went back to the big room looking over the city and made fire. There was a place to make fire and a box with wood in it, though I do not think they cooked there. I wrapped myself in a floor-covering and slept in front of the fire—I was very tired.");
        this.echo("\n");
        this.echo("Now I tell what is very strong magic. I woke in the midst of the night. When I woke, the fire had gone out and I was cold. It seemed to me that all around me there were whisperings and voices. I closed my eyes to shut them out. Some will say that I slept again, but I do not think that I slept. I could feel the spirits drawing my spirit out of my body as a fish is drawn on a line.");
        this.echo("\n");
        this.echo("Why should I lie about it? I am a priest and the son of a priest. If there are spirits, as they say, in the small Dead Places near us, what spirits must there not be in that great Place of the Gods? And would not they wish to speak? After such long years? I know that I felt myself drawn as a fish is drawn on a line. I had stepped out of my body—I could see my body asleep in front of the cold fire, but it was not I. I was drawn to look out upon the city of the gods. ");
        this.echo("\n");
        this.echo("It should have been dark, for it was night, but it was not dark. Everywhere there were lights—lines of light—circles and blurs of light—ten thousand torches would not have been the same. The sky itself was alight—you could barely see the stars for the glow in the sky. I thought to myself \"This is strong magic\" and trembled. There was a roaring in my ears like the rushing of rivers. Then my eyes grew used to the light and my ears to the sound. I knew that I was seeing the city as it had been when the gods were alive.");
        this.echo("\n");
        this.echo("That was a sight indeed—yes, that was a sight: I could not have seen it in the body—my body would have died. Everywhere went the gods, on foot and in chariots—there were gods beyond number and counting and their chariots blocked the streets. They had turned night to day for their pleasure-they did not sleep with the sun. The noise of their coming and going was the noise of the many waters. It was magic what they could do—it was magic what they did.");
        this.echo("\n");
        this.echo("I looked out of another window—the great vines of their bridges were mended and god-roads went east and west. Restless, restless, were the gods and always in motion! They burrowed tunnels under rivers—they flew in the air. With unbelievable tools they did giant works—no part of the earth was safe from them, for, if they wished for a thing, they summoned it from the other side of the world. And always, as they labored and rested, as they feasted and made love, there was a drum in their ears—the pulse of the giant city, beating and beating like a man's heart.");
        this.echo("\n");
        this.echo("Were they happy? What is happiness to the gods? They were great, they were mighty, they were wonderful and terrible. As I looked upon them and their magic, I felt like a child—but a little more, it seemed to me, and they would pull down the moon from the sky. I saw them with wisdom beyond wisdom and knowledge beyond knowledge. And yet not all they did was well done—even I could see that ? and yet their wisdom could not but grow until all was peace.");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("\n");
        this.echo("```...````````````````````````````````........................");
        this.echo("``````````````````````````````````````........................");
        this.echo("``````````````````````````````````````........................");
        this.echo("```````````````````````````.`..``...``````````````````````````");
        this.echo("```````````````````````````.`..`...`..````````````````````````");
        this.echo("```````````````````````````.`.:#@#+,``````````````````````````");
        this.echo("`````````````````````````.,''::;+''+.`````````````````````````");
        this.echo("`````````````````````..;;:;'':`'++';:.````````````````````````");
        this.echo("``````````````...``.,::;'','':.:+++;...`.`````````````````````");
        this.echo("``````````````.,::,,,..:+',:+:`:+++;`...``````````````````````");
        this.echo("```````..,,:,,,...,.....+'.:+:,,+++;,`....````````````````````");
        this.echo("``..,,:,,...............+;:,',+,+++:,,.`....`.````````````````");
        this.echo(",,,,..``..............`.+:#.''+:+++;..,,.```,.````````````````");
        this.echo("``````..........```````.';'.'++,+++;,....,..``.```````````````");
        this.echo("```...........````````..+'','';:+++'..,..`.,.``.,`````````````");
        this.echo("......````````````````..++':++':+++#....,`.`.,.``..```````````");
        this.echo("``````````````````````.,+++:++;:#++@`...`.,```.,``.`,`````````");
        this.echo("``````````````````````.,+++:+';:+++@`...```..,``.,.``..```````");
        this.echo("``````````````````````.,++':++:;#++@`.```.`.``..``..`.`..`````");
        this.echo("```...```..``.`````````,+#+:#+::+++#.`````````.....`.,,:`.``.`");
        this.echo(";::,,...,.,````````````,+#+:++::+++#.`````````````...`;'; `.,`");
        this.echo("';;;;;:;;:+';::::,.````,+#+,++,:#++@,,``````````...``::';;.`.,");
        this.echo("+++''+'''';;+++''''';;;;':;;';,:#+++;:,..```````````.,;;;;`.,,");
        this.echo("####'''+;'''+++'''''++''++'++#:'#++#+'';;::,,,.....`..;;;;..`,");
        this.echo(".,.:++#+++++++++#+###+###+#+++;#++++#+'+'+'+';';;;::::::;;,,.,");
        this.echo(" ..''##+##+#####: ,+#;#####@##''+''+###+#+#####+#+''''''+'';;;");
        this.echo(" ;'+###+#+####+#++.` .`,######+'#+++':'+++'+#@#+@##########+++");
        this.echo("'';'###+#+#+++#++#,````.'+###;';'''':`:'++:,:`````.:.,;;;'::''");
        this.echo("`;#+++@'+####++###,````.:,#';';;''+':`::';:,,..,` ,:'.;;:+.,:;");
        this.echo("++'++#++###+##+##+:````.:,:';'##'+#',`:,::,,;;:;...:+,:::+.,;;");
        this.echo("`++'#'''+#++#+##@#```` .:,;';+#+###'+`,:;:::''';+..';,::;+,,;;");
        this.echo("`,`,+''+#++#+@###',..  .:'';':''####:`:'';;;+'++''.';,::;+::;'");
        this.echo("':;;+#++###+#####+;;:,.::@@'+'#;####+#'++'''+#+##',;;,:;;+',;'");
        this.echo("###+#'++###:@####@@;'+::+###'##+####@+##+';+#####+';;,:;:+';;'");
        this.echo("++##+'#+###+##########+'+++@++''####''+#':;+'#####'';.:;;+'';;");
        this.echo("+#######+#@;'###########+##@#+;+@##+#'++@'''#####'::;.;,.:::..");
        this.echo("++#+#+##++#++#@+######@###@#+#++####+';+++;++###+#`;;.;;:.;;:+");
        this.echo("+'#+#+++++##@;+'######@+####+#+###'';:+###@#'+':+:,';:,'','+';");
        this.echo("::,;+:'''''''++'++'@@@@@@@#@@#+#++#'@@#++++;'''+;''''''''''';'");
        this.echo("++++;+'++++''''+++;'';+''''''''++##+##@@##############@###+++'");
        this.echo("::::;;''''';;;;;;;;:::::::;;;;;;;;;;;:::::::::::::::::::::::::");
        this.echo(",,:::::::::::::::::::::::::;::;;;;;;;:::::::::::::::::::,,,,,,");
        this.echo(",,::::::::::::::::::::,:::::;;;;;;;:;:::::::::::,,,,,,,,,,,,,,");
        this.echo(":,:,,,::::::::::::,::,::::;:;;;:;;;::::::::,::::::,::::::,,,,,");
        this.echo("\n");
        this.echo("\n");
        this.echo("Above: bridge in the city newyork, used by Gods for transport across the great river.");
        this.echo("Below: Weapon of the Gods, dropped from steel cages in the sky.")
        this.echo("\n");
        this.echo("                                                                         ");
        this.echo("                                           :,                            ");
        this.echo("                                                                         ");
        this.echo("                                          .,.`                           ");
        this.echo("           ::;;;;;:;`             , ..`         ``..`                    ");
        this.echo("           ;;:;;:;;:;         :;;:'';'''''''';''''::''''#'.              ");
        this.echo("           ;';';;;;;;`     .,;;';;;'''''''''''''''''''';';'''            ");
        this.echo("         ,:,.``.@,;;;'   ` +'';';''';;';''''';;;;''''';::::;;':          ");
        this.echo("  .''+##'++++++##  ;';` .;,'';;';;;;;;;;;;;;;;;;;;;;;;;::,,.,:''         ");
        this.echo("   :#+#########'+  ;';;:,,,'';';;;;;;;;:;;;;::::::::;;;::,,,.,::+        ");
        this.echo("    ,++++''';#''#'  '''#.'.'';;;;;:;::;:;::::::::::::;::::::::::;+       ");
        this.echo("     ';;';;;;###+'++'''+'@;';;';;;;;;;;:::::;;:::::::;;;;;;;;;;;'';      ");
        this.echo("     '';;;;;+#++ ,#'#++;+;+';;;;;;;;;;;;;;;;;;;;;;;;;;::;;;;;''''+:'     ");
        this.echo("     '''''';++++# @'+++:;,+';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;'''''+++:''    ");
        this.echo("     ;''''',';#@@.+'+++:;,+';;;''''''''''';'''''''';';;';''''++++#;'@..  ");
        this.echo("     .''''' @++++++++++;':+'''''''''''''''''''''''''''''''++++++##'+:    ");
        this.echo("      '''+@ +++++++'++';''+'''''+''''++'''''''''''''++'''++++++###'      ");
        this.echo("      '++++:++''':#'''''+++++'+++++++++''+++++++'+++++++++++++###+       ");
        this.echo("      ++++++++';..'+': +'+'++++++++++++++++++++++++++++++++#+###+`       ");
        this.echo("      ;#+++#++`  '+'+   `',++'+++++++++++++++++++++++++####+###+`        ");
        this.echo("      .#####++. @+';      .+++++++++++++++++++++++++##+####+#+@          ");
        this.echo("       #######;++''`        @+++++++++++++++++++++#+#+++++#+#,           ");
        this.echo("       ;'''';;';'':          `@++++++++++++++++++++++++'+##.             ");
        this.echo("      ,''';;''+''+                            `````....`                 ");
        this.echo("      #'''''''';'                                                        ");
        this.echo("      '''''''';'                                                         ");

    },
    entry10: function(){
        this.echo(commandText("entry10:\n"));
        this.echo("\n");
        this.echo("Then I saw their fate come upon them and that was terrible past speech. It came upon them as they walked the streets of their city. I have been in the fights with the Forest People—I have seen men die. But this was not like that. When gods war with gods, they use weapons we do not know. It was fire falling out of the sky and a mist that poisoned. It was the time of the Great Burning and the Destruction. They ran about like ants in the streets of their city—poor gods, poor gods! Then the towers began to fall. A few escaped—yes, a few. The legends tell it. But, even after the city had become a Dead Place, for many years the poison was still in the ground. I saw it happen, I saw the last of them die. It was darkness over the broken city and I wept.");
        this.echo("\n");
        this.echo("All this, I saw. I saw it as I have told it, though not in the body. When I woke in the morning, I was hungry, but I did not think first of my hunger for my heart was perplexed and confused. I knew the reason for the Dead Places but I did not see why it had happened. It seemed to me it should not have happened, with all the magic they had. I went through the house looking for an answer. There was so much in the house I could not understand—and yet I am a priest and the son of a priest. It was like being on one side of the great river, at night, with no light to show the way.");
        this.echo("\n");
        this.echo("Then I saw the dead god. He was sitting in his chair, by the window, in a room I had not entered before and, for the first moment, I thought that he was alive. Then I saw the skin on the back of his hand—it was like dry leather. The room was shut, hot and dry—no doubt that had kept him as he was. At first I was afraid to approach him—then the fear left me. He was sitting looking out over the city—he was dressed in the clothes of the gods. His age was neither young nor old—I could not tell his age. But there was wisdom in his face and great sadness. You could see that he would have not run away. He had sat at his window, watching his city die—then he himself had died. But it is better to lose one's life than one's spirit—and you could see from the face that his spirit had not been lost. I knew, that, if I touched him, he would fall into dust—and yet, there was something unconquered in the face.");
    },
    entry11: function(){
        this.echo(commandText("entry11:\n"));
        this.echo("\n");
        this.echo("That is all of my story, for then I knew he was a man—I knew then that they had been men, neither gods nor demons. It is a great knowledge, hard to tell and believe. They were men—they went a dark road, but they were men. I had no fear after that—I had no fear going home, though twice I fought off the dogs and once I was hunted for two days by the Forest People. When I saw my father again, I prayed and was purified. He touched my lips and my breast, he said, \"You went away a boy. You come back a man and a priest.\" I said, \"Father, they were men! I have been in the Place of the Gods and seen it! Now slay me, if it is the law—but still I know they were men.\"");
        this.echo("\n");
        this.echo("He looked at me out of both eyes. He said, \"The law is not always the same shape—you have done what you have done. I could not have done it my time, but you come after me. Tell!\"");
        this.echo("\n");
        this.echo("I told and he listened. After that, I wished to tell all the people but he showed me otherwise. He said, \"Truth is a hard deer to hunt. If you eat too much truth at once, you may die of the truth. It was not idly that our fathers forbade the Dead Places.\" He was right—it is better the truth should come little by little. I have learned that, being a priest. Perhaps, in the old days, they ate knowledge too fast.");
        this.echo("\n");
        this.echo("\n");
    },

    entry12: function(){
        this.echo(commandText("entry12:\n"));
        this.echo("\n");
        this.echo("Nevertheless, we make a beginning. it is not for the metal alone we go to the Dead Places now—there are the books and the writings. They are hard to learn. And the magic tools are broken—but we can look at them and wonder. At least, we make a beginning. And, when I am chief priest we shall go beyond the great river. We shall go to the Place of the Gods—the place newyork—not one man but a company. We shall look for the images of the gods and find the god ASHING and the others—the gods Lincoln and Biltmore and Moses. But they were men who built the city, not gods or demons. They were men. I remember the dead man's face. They were men who were here before us. We must build again.");
    }



};

/* Testing the typing animation
var anim = false;

function typed(finish_typing) {
    return function(term, message, delay, finish) {
        anim = true;
        var prompt = term.get_prompt();
        var c = 0;
        if (message.length > 0) {
            term.set_prompt('');
            var interval = setInterval(function() {
                term.insert(message[c++]);
                if (c == message.length) {
                    clearInterval(interval);
                    // execute in next interval
                    setTimeout(function() {
                        // swap command with prompt
                        finish_typing(term, message, prompt);
                        anim = false
                        finish && finish();
                    }, delay);
                }
            }, delay);
        }
    };
}
var typed_prompt = typed(function(term, message, prompt) {
    // swap command with prompt
    term.set_command('');
    term.set_prompt(message + ' ');
});
var typed_message = typed(function(term, message, prompt) {
    term.set_command('');
    term.echo(message)
    term.set_prompt(prompt);
});
$('body').terminal(function(cmd, term) {
    var finish = false;
    var msg = "Wait I'm executing ajax call";
    term.set_prompt('> ');
    typed_message(term, msg, 200, function() {
        finish = true;
    });
    var args = {command: cmd};
    $.get('commands.php', args, function(result) {
        (function wait() {
            if (finish) {
                term.echo(result);
            } else {
                setTimeout(wait, 500);
            }
        })();
    });
}, {
    name: 'xxx',
    greetings: null,
    width: 500,
    height: 300,
    onInit: function(term) {
        // first question
        var msg = "Wellcome to my terminal";
        typed_message(term, msg, 200, function() {
            typed_prompt(term, "what's your name:", 100);
        });
    },
    keydown: function(e) {
        //disable keyboard when animating
        if (anim) {
            return false;
        }
    }
});*/


jQuery(document).ready(function($) {                //could make it redirect to another site in the case of mobile, since this would
                                                    //kind of suck on a phone.
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
    
});