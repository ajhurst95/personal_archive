import random																		#need random in order for computer to make a random selection of rock, paper, or scissors
import time													#import the time libary, going to just try to import one piece of it to see how it goes 

playableItems = ["rock", "paper", "scissors"]		#playable items. Usually in rock paper scissors there are three items


def gamechant():
		print("okay, let's play")
		time.sleep(2)
		print("ready? Rock...")
		time.sleep(.75)
		print("Paper........")
		time.sleep(1.5)
		print("SCISSORS!!!")
		time.sleep(.5)

def winOutcome(player, computer):
	print("congrats! You've won! Your " + player + " beats the computer's " + computer + "!!!!!")
	

def loseOutcome(player, computer):
	print("Oh well, better luck next time. The computer's " + computer + " beat your " + player)
	



def playGame():																	#the function where the game is played		

	print("Howdy hey hi hello, let's play a game of good old fashioned " + ", ".join(playableItems[:-1]) + ", " + playableItems[-1] + "!")		
	print("What hand will you play?? Type either " + playableItems[0] + ", " + playableItems[1] + ", or " +
		playableItems[2] + " and enter.")

	while True:

		computerItemChosen = random.choice(playableItems)
		playerItemChosen = "bingbong"

		#DEBUG CODE to see what's happening with selections and variable assignments
		# print("DEBUG, player has chosen " + playerItemChosen)
		# print("DEBUG, computer has chosen " + computerItemChosen)

		while playerItemChosen not in playableItems:	#console will continue asking for input until the user has put in either rock, paper, or scissors.
			playerItemChosen = input("Make your selection now. Please type either rock, paper, or scissors. The computer knows what it wants. Good luck!\n\n\n")

		#now time to "score" each play. the computer has chosen a random selection. Compare playerItemChosen to computerItemChosen:

		#scenarios: player wins, player loses, player draws.
		#rock beats scissors
		#scissors beats rock
		#paper beats rock

		gamechant()

		#game outcome logic.
		#if draw, that's simple so check right away and go back to top

		#DEBUG CODE to see what's happening with selections and variable assignments
		# print("DEBUG, player has chosen " + playerItemChosen)
		# print("DEBUG, computer has chosen " + computerItemChosen)

		if playerItemChosen == computerItemChosen:
			print("Draw!! Let's try again")
			continue
		elif playerItemChosen == "rock" and computerItemChosen == "scissors":	#check for the three possible winning scenarios. Since we've ruled out a draw by now, if none are true, then the player has lost.
			winOutcome(playerItemChosen, computerItemChosen)
		elif playerItemChosen == "scissors" and computerItemChosen == "paper":
			winOutcome(playerItemChosen, computerItemChosen)
		elif playerItemChosen == "paper" and computerItemChosen == "rock":
			winOutcome(playerItemChosen, computerItemChosen)
		else:
			loseOutcome(playerItemChosen, computerItemChosen)


playGame()

