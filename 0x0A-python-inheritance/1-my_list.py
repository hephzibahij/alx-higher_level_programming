class MyList(list):
    def print_sorted(self):
        """
        Print the list in sorted order (ascending).

        Assumes that all elements of the list are of type int.
        """
        sorted_list = sorted(self)
        print(sorted_list)
