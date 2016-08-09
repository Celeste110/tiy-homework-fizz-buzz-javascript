/**
 * Created by katherine_celeste on 8/9/16.
 */

function FizzBuzz ()
{
    this.doIt = function (start, end)
    {
        var a = ""
        for(var i = 1;start <= end; start++)
        {

            if ((start%3 ==0)  && (start%5 == 0))
            {
                a+="FizzBuzz ";
                if (i%27==0) {a+="\n"}
            }
            else if (start%3 ==0)
            {
                a+= "Fizz ";
                if (i%27==0) {a+="\n"}
            }
            else if (start%5 ==0)
            {
                a+= "Buzz ";
                if (i%27==0) {a+="\n"}
            }
            else
            {
                a+= start + " ";
                if (i%27==0) {a+="\n"}
            }

            i++
        }
        console.log(a);
    }
}

var fizzBuzz = new FizzBuzz();

fizzBuzz.doIt(1, 100);

