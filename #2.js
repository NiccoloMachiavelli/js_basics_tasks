function myMiniCalc() {
    var a = 10;
    var b = 2;
    var result = prompt('Select operation','+');
    switch (result) {
        case '+':
            result = a + b;
            alert(result);
            break;
        case '-':
            result = a - b;
            alert(result);
            break;
        case '*':
            result = a * b;
            alert(result);
            break;
        case '%':
            if (a == 0 || b == 0)
                {
                    alert('Exception devided by 0.')
                    break;
                }
            result = a % b;
            alert(result);
            break;
        default:
            alert('Wrong operator,try more.');
            break;
    }
}


