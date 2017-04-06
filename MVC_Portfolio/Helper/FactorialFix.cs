using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Portfolio.Helper
{
    public static class FactorialFix
    {
        public static int CalcFact(int i)
        {
            var result = 1;
            for (int v = i; v >= 1; v--)
            {
                result *= v;
            }
            return result;
        }
    }
}