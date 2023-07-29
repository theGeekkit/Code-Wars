using System;

public class Kata
{   
  public static string NameShuffler(string str)
  {
    string[] parts = str.Split(' ');
    
    if (parts.Length >= 2)
      {
        string lastName = parts[parts.Length - 1];
        string firstName = string.Join(" ", parts, 0, parts.Length - 1);
        return lastName + " " + firstName;
      }
    else 
      {
      return str;
      }
    }
        static void Main()
    {
        Console.WriteLine("Enter a name:");
        string input = Console.ReadLine();

        string result = NameShuffler(input);

        Console.WriteLine("Output: " + result);
    }
  
}


namespace Solution 
{
  using NUnit.Framework;
  using System;
  
  [TestFixture]
  public class SolutionTest
  {
    [Test, Description("Sample Tests")]
    public void SampleTest()
    {
      Assert.AreEqual("McClane john", Kata.NameShuffler("john McClane"));
      Assert.AreEqual("jeggins Mary", Kata.NameShuffler("Mary jeggins"));
      Assert.AreEqual("jerry tom", Kata.NameShuffler("tom jerry"));
    }
  }
}


// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"