#!/usr/bin/python3

def list_division(my_list_1, my_list_2, list_length):
    result_list = []

    try:
        for i in range(list_length):
            try:
                element_1 = my_list_1[i]
                element_2 = my_list_2[i]

                if (not isinstance(element_1, (int, float))
                        or not isinstance(element_2, (int, float))):
                    print("wrong type")
                    result_list.append(0)
                elif element_2 == 0:
                    print("division by 0")
                    result_list.append(0)
                else:
                    result_list.append(element_1 / element_2)
            except IndexError:
                print("out of range")
                result_list.append(0)
    finally:
        return result_list
