##    combines a list into a string of the form
##    item1, item2, and item3
##    Args:
##        items (list): List of strings
##
##    Returns:
##        string: list items combined into string


def stringit(items):

    item_len = len(items)

    if item_len == 0:
        return ''
    elif item_len == 1:
        return items[0]
    else:
        comma = ', '
        string = comma.join(items[:-1]) + ', and ' + items[-1]

        return string


thestuff = ['bing', 'bong', 'boing', 'bingbong']
print(stringit(thestuff))

