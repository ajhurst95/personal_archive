import random

##sets the number of total attempts ("lives") you get 

lives = 6

##open the text file, create a list, grab a word from the list
with open("hangmandictionary.txt") as dictionary:
	everyWord = dictionary.readlines()		##read every word from the text file
	selectedWord = random.choice(everyWord)	##pick a word from the list everyWord
	selectedWord = selectedWord[:-1]

##Debug code here, shows what the current word is. I guess it works outside the with statement
print("the current word is " + selectedWord)

print("Okay we are going to play hangman. You pick a letter, and if it's right, it will be displayed in the blanks.")
print("but if you get it wrong, you lose a life!!! (represented by the hearts: <3)")
print()
print()
print("Now let's play")

##get length of currentWord and make an array length currentWord. This array is called guessWord. 
##guessWord is full of blanks. Print the blanks. 
##have the player guess a letter. if letter is in currentWord, 


def playHangman(startingword):


	return



def checkChar(char, mysteryWord):
	if char in mysteryWord:
		return True

def printBoard(mysteryWord):
	for letter in mysteryWord:
		print()


