package components.projectEntries

import external.highlightCode
import external.markdown
import react.RBuilder

fun RBuilder.waccEntry() {
    markdown {
//    language=Markdown
        +"""|**WACC** is a toy language. We made a multiplatform compiler for it (in **Kotlin**) capable
        | of producing both ARM assembly and JVM bytecode.
        | We put a lot of effort into achieving feature parity
        | between the two. For example, the JVM has no native way of determining an overflow in the
        | primitive `int` type.
        | 
        | Some of the features WACC supports are:
        | 
        | - Basic control flow constructs: `while`, `for`, `if`...
        | - The usual language primitives (`char`, `char[]`, `int`...) and their arithmetics
        | - Pairs, which can be destructured
        | - Runtime errors (represented as exceptions when targeting the JVM)
        | - Function definitions, allowing recursive and mutually recursive functions
        | - Some basic command line IO
        | """.trimMargin()
//    language=Markdown
        +"""| Additionally, because we are targeting the JVM, you could call WACC from Java, Scala,
        | or any other JVM language.
        | 
        | Here is an example of a WACC program. It computes the nth fibonacci number:
        |
        """.trimMargin()
    }
    highlightCode("java") { +fibProgram }
    markdown {
        +"\n\nThis one prints a triangle to the console:"
    }
    highlightCode("java") { +triangleProgram }
}

private val triangleProgram =
    """
begin
  int f(int x) is
    if x == 0 then
      skip
    else
      int i = x ;
      while i > 0 do 
        print "-" ;
        i = i - 1
      done ;
      println "" ;
      int s = call f(x - 1)
    fi ;
    return 0
  end

  println "Please enter the size of the triangle to print: " ;
  int x = 0;

  read x;
  int
end
    """.trimIndent()

private val fibProgram =
    """
begin
  int fibonacci(int n) is
    if n <= 1
    then
      return n
    else
      skip
    fi ;
    int f1 = call fibonacci(n - 1) ;
    int f2 = call fibonacci(n - 2) ;
    return f1 + f2
  end

  println "This program calculates the nth fibonacci number recursively." ;
  print "Please enter n (should not be too large): " ;
  int n = 0;
  read n ;
  print "The input n is " ;
  println n ;
  print "The nth fibonacci number is " ;
  int result = call fibonacci(n) ;
  println  result
end
    """.trimIndent()
