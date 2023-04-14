function add()
{
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 + num2;
};

function subtract()
{
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 - num2;
};

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
};

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
        if((num1/num2) === Infinity){ alert('Нельзя делить на ноль!!!');}
};


