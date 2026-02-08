





def top(n):
    print("#" * n)


def frontspace(row):
    return (" " * row)

def middlespace(row):
    return (" " * (row - 2))

def ribbon(ribbonrow, totrow):
    if totrow == 1:
        print("\n")
    elif totrow % 2 != 0:
        print("\n")
        ribbon(ribbonrow+1, totrow - 1)
    else:
        print(f"{frontspace(ribbonrow)}#{middlespace(totrow)}#")
        ribbon(ribbonrow, totrow - 1)
"""
1 0.25 2
2 0.5 2
3 0.75 2
4 1 2
5 1.25 2
5 1.5 2
7 1.75 2
8 2 2
9 2.25 4

2 3 4 5 6 7 8 """
def calccircle(n):
    over4 = n / 4
    if ((n / 8) - 0.125) % 1 == 0:
        return n / 4 - 0.25 + 2
    elif ((n/8) - 0.25) % 1 == 0:
          return n /4 - 0.5 + 2
    elif ((n/8) - 0.375) % 1 == 0:
        return n / 4 - 0.75 + 2
    elif ((n / 8) - 0.5) % 1 == 0:
        return n / 4 + 1
    elif ((n / 8) - 0.625) % 1 == 0:
        return n / 4 - 0.25 + 1
    elif ((n / 8) - 0.750) % 1 == 0:
        return n / 4 - 0.5 + 1
    elif ((n / 8) - 0.875) % 1 == 0:
        return n / 4 - 0.75 + 1
    else:
        return n / 4
    


def circle(n, index, totrows):

    gap = int(((totrows - 2) / 2) - ((calccircle(totrows) - 2) / 2))
    if index == 1:
        print(f"{" " * gap}{"+" * n}")
    else:
        print(f"{" " * gap}{"+" * n}")
        circle(n, index - 1, totrows)

def medal(n):
    top(n)
    ribbon(0, n-1)
    circle(int(calccircle(n)), int(calccircle(n)), n)



    






