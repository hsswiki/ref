"""
# Python coding notes

## Style guide based on PEP8

```
# Surround functions and class definitions with 2 blank lines.

var_name
CONST_NAME
ENUM_MEMBER
func_name()
ClassName

TypeName

module_name.py
packagename
```
"""

class ClassName:
    class_property = ''
    """
    instance.class_property
    self.class_property
    ClassName.class_property

    When class and instance property have the same name, instance property precedes.
    """

    def __init__(self, constructor_arg):
        """
        instance.property
        """
        self.property = constructor_arg

    def instance_method(self, arg):
        """
        instance.instance_method(arg)
        """
        pass

    @classmethod
    def class_method(cls, arg):
        """
        Class.class_method(arg)
        instance.class_method(arg)
        """
        return cls(arg)  # Often used to provide alternate constructors.

    @staticmethod
    def static_method(arg):
        """
        instance.static_method(arg)
        ClassName.static_method(arg)
        """
        pass
