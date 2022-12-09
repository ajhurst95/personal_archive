import csv
import os

number1 = '14042731048'
number2 = '13104800010'
number3 = '16054754700'
number4 = '17202230164'
number5 = '4042145819'

call_log = '3695.csv'

##with open(call_log, 'r') as csvfile:
##    reader = csv.reader(csvfile)
##
##    for line in csvfile:            ##7 and 8 are the indexes for caller and callee
##        if number1 == line[7] or \
##        number2 == line[7] or \
##        number3 == line[7] or \
##        number1 == line[8] or \
##        number2 == line[8] or \
##        number3 == line[8]:
##            print(line)
##        else:
##            print('didn\'t find anything!')
        

csvfile = csv.reader(open(call_log, 'r'), delimiter=',')

for row in csvfile:
    if number1 == row[7] or \
        number2 == row[7] or \
        number3 == row[7] or \
        number1 == row[8] or \
        number2 == row[8] or \
        number3 == row[8] or \
        number4 == row[7] or\
        number4 == row[8] or\
        number5 == row[7] or\
        number5 == row[8]:
        print(row)

print('all done')
