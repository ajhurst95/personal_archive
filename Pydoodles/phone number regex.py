import re

message = 'call me at 219-241-8869 tomorrow, or at 887-805-6691'

phoneNumRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
result = phoneNumRegex.findall(message)
print(result)
