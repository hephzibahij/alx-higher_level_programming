#include <Python.h>

/**
 * print_python_list - gives data of the PyListObject
 * @p: the PyObject
 */
void print_python_list(PyObject *p)
{
	PyObject *item;
	Py_ssize_t size = PyList_Size(p);

	if (!PyList_Check(p))
	{
		printf("[ERROR] Invalid PyListObject\n");
		return;
	}
	printf("[*] Python list info\n");
	printf("[*] Size of the Python List = %ld\n", size);

	printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

	for (Py_ssize_t i = 0; i < size; i++)
	{
		item = PyList_GetItem(p, i);
		printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
	}
}

/**
 * print_python_bytes - gives data of the PyBytesObject
 * @p: the PyObject
 */
void print_python_bytes(PyObject *p)
{
	const char *data = PyBytes_AsString(p);
	Py_ssize_t size = PyBytes_Size(p);

	if (!PyBytes_Check(p))
	{
		printf("[ERROR] Invalid PyBytesObject\n");
		return;
	}
	printf("[.] bytes object info\n");
	printf("  [.] size: %ld\n", size);
	printf("  [.] trying string: %s\n", data);

	printf("  [.] first %ld bytes:", size < 10 ? size : 10);
	for (Py_ssize_t i = 0; i < size && i < 10; i++)
	{
		printf(" %02x", (unsigned char)data[i]);
	}
	printf("\n");
}

/**
 * print_python_float - gives data of the PyFloatObject
 * @p: the PyObject
 */
void print_python_float(PyObject *p)
{
	double value = PyFloat_As_Double(p);

	if (!PyFloat_Check(p))
	{
		printf("[ERROR] Invalid PyFloatObject\n");
		return;
	}
	printf("[.] float object info\n");
	printf("  [.] value: %lf\n", value);
}
