#! python3

import re, pyperclip

#TODO: create a regex obj for phone num
#handle dashes dots with area code, without, and 1 in front?
phoneRegex = re.compile(r'''

#country code (optional)
(1)?

first separator (optional)
(\s|\.|-))?

#area code (optional)
((\d\d\d)|(\(\d\d\d\)))?

#separator
(\s|\.|-))

#first three digits
\d\d\d

#separator
(\s|\.|-))

#last four digits
\d\d\d\d

''', re.VERBOSE)

#TODO: create a regex obj for location

locRegex = re.compile(r'''
#city
((\w*)?(\s)?
#separator
,\s
#GA
GA
''', re.VERBOSE)
#TODO: Get text off of clipboard
#TODO: Extract phone and length from text
#TODO: Copy extracted phone/length to clipboard
#TODO:
#TODO:
