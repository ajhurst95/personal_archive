import random

##sets the number of total attempts ("lives") you get 

playerlives = 6

##get length of currentWord and make an array length currentWord. This array is called guessWord. 
##guessWord is full of blanks. Print the blanks. 
##have the player guess a letter. if letter is in currentWord, 



##plays the game. Game works like this: intro (above currently), 
##open a text file with lots of words, pick a word and save it to currentGameWord
##print lives the player has
##then print the board
##



        ##open the text file, create a list, grab a word from the list
        
##intro of a new game
def introText():
        print("Okay we are going to play hangman. You pick a letter, and if it's right, it will be displayed in the blanks.")
        print("but if you get it wrong, you lose a life!!! (represented by the hearts: <3)")
        print()
        print()
        print("Now let's play")
        return

def pickaWord(file):
        with open(file) as dictionary:
                        everyWord = dictionary.readlines()              ##read every word from the text file
                        selectedWord = random.choice(everyWord) ##pick a word from the list everyWord
                        selectedWord = selectedWord[:-1]

        return selectedWord


def pickLetter():
        letter = ""
        
        while len(letter) != 1:
                print("please type and enter a single letter")
                letter = input()
                if letter.isalpha():
                        return letter
                        print(letter)
                else:
                        continue


##check if a character (char) is in the mysteryWord
def checkChar(char, mysteryWord):
        if char in mysteryWord:
                return True

##print the current state of the board, with letters for found words
##and spaces (underline/underscores) for blanks
def printBoard(mysteryWord, lettersGuessed, board):
        for letter in mysteryWord:
                if lettersGuessed in mysteryWord:
                        print(letter)
                        
                else:
                        print(" _ ")


##print the lives the player has at any given time
def printLives(lives):

        livesGraph = []

        for i in range(lives):
                livesGraph.append(" <3 ")

        print(*livesGraph, sep = "")


##intro, pick a word and store to currentGameWord

def playHangman(lives):
        while True:
                introText()

                currentGameWord = pickaWord("hangmandictionary.txt")

                print("playing with " + currentGameWord)
                print("this word is " + str(len(currentGameWord)) + "characters long.")

                printLives(lives)


##playHangman(playerlives)
pickLetter()
