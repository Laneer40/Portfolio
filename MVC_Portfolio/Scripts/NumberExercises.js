$(function () {

    $('.input-custom').blur(function () {
        // Remove invalid characters
        var sanitized = $(this).val().replace(/[^-0-9]/g, '');
        // Remove non-leading minus signs
        sanitized = sanitized.replace(/(.)-+/g, '$1');
        // Update value
        $(this).val(sanitized);
    })
    $('.input-custom2').blur(function () {
        // Remove invalid characters
        var sanitized = $(this).val().replace(/[^0-9.]/g, "");
        // Remove non-leading minus signs
        sanitized = sanitized.replace(/(.)-+/g, '$1');
        // Update value
        $(this).val(sanitized);
        })
    
    //Start of Numbers Exercise
    $(function () {

        $("#JsEx_LeastBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();

            var NumSet_Least_Answer = function Least() {

                return Math.min(+NumSet_Input1, +NumSet_Input2, +NumSet_Input3, +NumSet_Input4, +NumSet_Input5);
            }
            $('#NumSet_Output1').val(NumSet_Least_Answer);
        })
        $("#JsEx_GreatestBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();

            var NumSet_Max_Answer = function max() {
                return Math.max(+NumSet_Input1, +NumSet_Input2, +NumSet_Input3, +NumSet_Input4, +NumSet_Input5);
            }
            $('#NumSet_Output1').val(NumSet_Max_Answer);

        })
        $("#JsEx_SumBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();

            var NumSet_Sum_Answer = function () {
                return (+NumSet_Input1 + +NumSet_Input2 + +NumSet_Input3 + +NumSet_Input4 + +NumSet_Input5);
            }
            $('#NumSet_Output1').val(NumSet_Sum_Answer);

        })
        $("#JsEx_ProductBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();

            var NumSet_Product_Answer = function () {
                return (+NumSet_Input1 * +NumSet_Input2 * +NumSet_Input3 * +NumSet_Input4 * +NumSet_Input5);
            }
            $('#NumSet_Output1').val(NumSet_Product_Answer)

        })
        $("#JsEx_AverageBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();

            var NumSet_Average_Answer = function () {
                var NumSet_Multiply = (+NumSet_Input1 + +NumSet_Input2 + +NumSet_Input3 + +NumSet_Input4 + +NumSet_Input5);
                return (NumSet_Multiply / 5);
            }
            $('#NumSet_Output1').val(NumSet_Average_Answer);

        })
        $("#JsEx_MedianBtn").click(function () {
            var NumSet_Input1 = $('#NumSet_Input1').val();
            var NumSet_Input2 = $('#NumSet_Input2').val();
            var NumSet_Input3 = $('#NumSet_Input3').val();
            var NumSet_Input4 = $('#NumSet_Input4').val();
            var NumSet_Input5 = $('#NumSet_Input5').val();
            var NumSet_Input_Array = [+NumSet_Input1, +NumSet_Input2, +NumSet_Input3, +NumSet_Input4, +NumSet_Input5];

            function median(values) {

                values.sort(function (a, b) { return a - b; });

                var half = Math.floor(values.length / 2);

                if (values.length % 2)
                    return values[half];
                else
                    return (values[half - 1] + values[half]) / 2.0;
            }
            var NumSet_Median_Answer = median(NumSet_Input_Array);

            $('#NumSet_Output1').val(NumSet_Median_Answer);
        })
    })
    //End of Numbers Exercise
    //Start of Factorial Exercise
    $(function () {

        $('#JsEx_FactorialBtn').click(function () {
            var Factorial_Input = $('#Factorial_Input').val();
            if (Factorial_Input >= 170) {
                $('#Factorial_Output').val("Number Too Big.")
            }
            else{
                $(function () {
                    var i = (+Factorial_Input)
                    var result = 1
                    for (i = Factorial_Input ; i >= 1; i--) {
                        result *= i}
                    $('#Factorial_Output').val(result);
                })}
        })
    })
    //End of Factorial Exercise
    //Start of FizzBuzz
    $(function () {
        $('#JsEx_FizzBtn').click(function(){
            var Fizz_input1 = $('#Fizz_Input1').val();
            var Fizz_input2 = $('#Fizz_Input2').val();
            $("#Fizz_Output").text("")
            //Count 1-100
            for (c = 1; c <= 100; c++) {
                //Divide both and make sure both equals zero
                if (c % Fizz_input1 === 0 && c % Fizz_input2 === 0) {
                    //then display "fizzbuzz"
                    $("#Fizz_Output").append(" FIZZBUZZ ");
                    //else if remainder of counter divided by m1 equals 0
                } else if (c % Fizz_input1 === 0) {
                    //then display "fizz"
                    $("#Fizz_Output").append(" Fizz ");
                    //else if remainder of counter divided by m2 equals 0
                } else if (c % Fizz_input2 === 0) {
                    //then display "buzz"  
                    $("#Fizz_Output").append(" Buzz ");
                    //else display the counter number value 'c'
                } else {
                    $("#Fizz_Output").append(" " + c + " ");
                }
            }
        })
    })
    //End of FizzBuzz
    //Start of Palindrome
    $(function () {
        $('#JsEx_Palindrome').click(function () {
            var Palindrome_Input = $('#Palindrome_Input').val();
            $(function palindrome() {
                /* remove special characters, spaces and make lowercase*/
                var removeChar = Palindrome_Input.replace(/[^A-Z0-9]/ig, "").toLowerCase();

                /* reverse removeChar for comparison*/
                var checkPalindrome = removeChar.split('').reverse().join('');

                /* Check to see if str is a Palindrome*/
                if (removeChar === checkPalindrome) {
                    $('#Palindrome_Output').text('It is a Palindrome!');
                } else {
                    $('#Palindrome_Output').text('It is not a Palindrome!');

                }
            }
            
        )})
    })
})