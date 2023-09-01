export const cutBrackets = (str: string) => {
    const openBracketIndex = str.indexOf('(');
    const closeBracketIndex = str.indexOf(')');
    let result = str.substring(openBracketIndex + 1, closeBracketIndex);
    return result
}