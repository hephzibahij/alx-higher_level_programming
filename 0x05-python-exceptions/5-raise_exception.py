#!/usr/bin/python3

def raise_exception():
    try:
        x = 'string'
        y = 5
        z = x + y
    except TypeError:
        raise
