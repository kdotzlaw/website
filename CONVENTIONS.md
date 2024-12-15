#  Development Guidelines
## Coding Guidelines and Conventions
This guide establishes standards for Javascript, Python, Tailwind CSS, and Flask development, ensuring consistent, maintainable, and high-quality code.

## Core Principles
1. **Readability**: Write clear, self-documenting code
2. **Testability**: Create modular, easily testable code
3. **Consistency**: Follow standardized naming and formatting conventions

## Python Guidelines

### General Practices
- Database methods should be organized by functionality (ie all Volunteer methods should be next to each other)
- All function names should be camelCase
- All python SQL queries should use prepared statements

### Python SQL Prepared Statements
```python
"""
Function description

@author {Author Name}
@since {YYYY-MM-DD}
@public/@private
@param {ParameterType} paramName - Parameter description
@return {ReturnType} Return description
"""
def functionName(parameter):
    cursor.execute("SELECT * FROM table WHERE column = ?", (parameter,))
```


## JavaScript Guidelines

### General Practices
- End statements with semicolons
- Use strict equality (`===`) over loose equality (`==`)
- Always specify radix in `parseInt()`
- Keep functions small and focused
- Use enums for improved readability

### Naming Conventions
- Camel case preferred but `var-name` acceptable

### Code Structure
```javascript
/**
 * Function description
 * 
 * @author {Author Name}
 * @since {YYYY-MM-DD}
 * @public/@private
 * @param {ParameterType} paramName - Parameter description
 * @return {ReturnType} Return description
 */
function functionName(parameter) {
    // Implementation
}
```

### Control Flow Formatting
```javascript
if (condition) {
    // Code block
} 
else if (anotherCondition) {
    // Code block
}
else {
    // Code block
}
```

## SQL Guidelines

### Best Practices
- Capitalize SQL keywords
- Avoid 'dbo' prefix for cross-database compatibility
- Prevent column names from using SQL keywords
- Indent sub-SELECTs and BEGIN/END blocks
- Verify JOIN conditions and WHERE clauses
- All comments outside a method should be done using /**/
- Single lined comments inside a method should be done using //
- Multi-lined comments inside a method should be done using /**/
- Table names should be lowercase
- Column names should be prefaced by the first letter of the table name and then the column name, in camelCase
- Multi-word column names should be in camelCase

### SQL Example
```python
/**
 * Checks if an order uses assembly
 * 
 * @param {String} uOrderID - Order ID to check
 * @return {Boolean} True if order uses assembly
 */

def test(connection):
    query = "SELECT * FROM table WHERE colName = ?"
    connection.cursor.execute(query, value);

```

## Common Patterns

###  Loops
```javascript
function loop(array) {
    for (var i = 1; i <= array.length(); i++) {
        // do something
    }
}
```


```python
def loop(array, n):
    for i in range(1,n):
        print(array[i])

```
## Testing Practices
1. All sensitive data should be user input. No sensitive data should be hardcoded.
2. Database methods should be tested using Python unittest library.
3. All test methods should be named with the format test_*
4. All API testing should be done using flask_unittest
5. Database testing and API testing need to be in separate classes but can be in the same file
6. Unit tests should only test one thing at a time
7. All tests should be prefaced with pass conditions and a description of what is being tested
8. Tests should include negative testing to ensure that the code handles errors gracefully
9. Unit tests should be ordered by component, then by function
