#include "lists.h"

/**
 * check_cycle - checks if a linked list
 * has a cycle contained on it
 * @list: linked list to check
 * Return: 0 if there is no cycle and 1 if there is cycle
 */
int check_cycle(listint_t *list)
{
	listint_t *fast = list;
	listint_t *slow = list;

	if (list == NULL)
		return (0);

	while (slow && fast && fast->next)
	{
		slow = slow->next;
		fast = fast->next->next;
		if (slow == fast)
			return (1);
	}
	return (0);
}
