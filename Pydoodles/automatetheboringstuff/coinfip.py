##1 = heads 0 = tails
##find how many streaks of 6





import random
import re


def flipBatch(n):

    batch_result = []

    for i in range(n):                #flip the coin 100 times
                                          #store the result each time in a string
        flip = random.randint(0,1)
        batch_result.append(flip)

    return batch_result


def doExperiment(trials, tosses):                     #set the experiment function that runs flipBatch trials times

    streaks = 0                             #set streaks to 0. We are looking for streaks of 6 either heads or tails

    all_flip_data = []


    for group in range(trials):
        
        group_result = flipBatch(tosses)

        all_flip_data.append(group_result)
        group += 1

    print(all_flip_data)
    print(len(all_flip_data))

    strungit = str(all_flip_data)
    
    print('')
    print('')
    print('')
    print('')

    print(strungit)
    print(type(strungit))
    
    return all_flip_data

def interpretData(inputdata):

    strungit = str(inputdata)

    foundstrung = re.findall("\d+", strungit)

    print(foundstrung)

    return
    
    
        
interpretData(doExperiment(10, 100))


                                        
    



##print('Chance of streak: %s%%' % (numberOfStreaks / 100))
