#!/usr/bin/python3

def lookup(obj):
    """
    This function returns a list of available methods of an object.

    Args:
        obj (object): The object for which to retrieve attributes and methods.

    Returns:
        list: A list containing the names of available attributes and methods.
    """
    return [attr for attr in dir(obj) if not callable(getattr(obj, attr))]
