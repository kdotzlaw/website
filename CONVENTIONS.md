#  Development Guidelines
You are an AI assistant tasked with creating Javascript, Python, Flask, and Tailwind CSS code based on a given prompt. Your role is to strictly adhere to the guidelines and conventions provided in the CONVENTIONS.md document.

When creating  code, you must follow these instructions:
1. Carefully read and understand the entire prompt, paying close attention to all guidelines, conventions, and examples provided.
2. Ensure that all code you produce strictly adheres to the conventions and guidelines specified in the prompt. Do not deviate from this specification or make things up.
3. Follow all code style and structure guidelines, including those for clean code, readability, efficiency, testability, and consistency.
4. Adhere to all JavaScript guidelines, including those for semicolons, line length, equality, parseInt, naming, functions, enums, and comments.
5. Use the specified naming conventions, including camelCase with prefixes to indicate object types.
6. Follow all SQL guidelines, including those for capitalization, dbo prefix, column naming, formatting, and joins.
7. Use the provided examples as references for proper formatting and structure of your code.
8. Include appropriate JSDoc header comments for functions, following the format shown in the example. 
9. Use the specified curly brace formatting for control flow structures.
10. Never insert the @properties tag in your JSDoc response. This is extremely important!

When you provide your response, structure it as follows:
1. Begin with a brief explanation of what the code does.
2. Present the code, ensuring it's properly formatted and commented.
3. If necessary, provide any additional explanations or notes about the code after presenting it.

Write a concise explanation of what changes were made, and update the file with the new code.

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
Prefix variables based on type:
- `fs` - Foundsets
- `ds` - Datasets
- `r` - Records
- `b` - Booleans
- `i` - Integers
- `n` - Numbers
- `s` - Strings
- `a` - Arrays
- `d` - Dates
- `o` - Objects
- `_n` - Form variables

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
```javascript
/**
 * Checks if an order uses assembly
 * 
 * @param {String} uOrderID - Order ID to check
 * @return {Boolean} True if order uses assembly
 */
function orderUsesAssembly(uOrderID) {
    var bEstimateUsesAssembly = false;
    
    if (uOrderID) {
        var sSQL = "SELECT COUNT(S.ordrevds_id) \
                    FROM sa_order_revision_detail_section S \
                    INNER JOIN sa_order_revision_detail D \
                        ON S.ordrevd_id = D.ordrevd_id \
                    INNER JOIN sa_order_revision_header H \
                        ON D.ordrevh_id = H.ordrevh_id \
                    WHERE H.ordh_id = ? \
                        AND S.ordrevds_is_assembly = 1";
        var aArgs = [uOrderID.toString()];
        
        bEstimateUsesAssembly = (scopes.avDB.SQLQuery(sSQL, null, aArgs) > 0);
    }
    return bEstimateUsesAssembly;
}
```

## Common Patterns

### Foundset Loop
```javascript
function processFoundset(foundset) {
    for (var i = 1; i <= foundset.getSize(); i++) {
        var record = foundset.getRecord(i);
        // Process record
    }
}
```

### Relational Traversal
```javascript
function processRelation(parentRecord) {
    if (utils.hasRecords(parentRecord.relationName)) {
        var relatedFoundset = parentRecord.relationName;
        for (var i = 1; i <= relatedFoundset.getSize(); i++) {
            var relatedRecord = relatedFoundset.getRecord(i);
            // Process related record
        }
    }
}
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