---
tags:
  - school/sofware-dev
  - taal/engels
  - language/english
  - software-dev/OOP
  - school/robotics-prototyping
publish: "true"
---
Object Oriented Programming, or OOP, is a programming concept that revolves around making (you guessed it) objects that interact with each other on a software level.

>[!important]
>Examples in this article are based on C# so not every keyword carries over to other programming languages.
# Classes
A class could be seen as a blueprint of some sorts. It defines the properties that will be assigned to the instantiated object. Classes (its contained methods) in of itself cannot be ran (unless it is defined as a *static* class). <br>Classes contain properties(variables) and methods. 
# Encapsulation
The act of limiting data (hiding it) from the outside world is called encapsulation. It is smart to only make the necessary variables and methods accessible, because why would you need to change internal variables when it could break things? <br>One benefit of this is that you can expose what the outside can interact with. Some things can be made to be only used internally (``private``), while some can be external (``public``). (some things can be made ``sealed`` and ``protected`` too, but act like you don't know those yet) <br>The same can be done with variables. You can hide variables from the outside world and only make them accessible via accessors (getters/setters/methods).

# Objects (instances)
An object, or instance, is the variable you create using a class (it will be 'filled' using that blueprint). It will use a part of the memory to store the object in. Objects are *always* derived from classes(in OOP languages).<br>When an object is created using a class, it will inherit these properties and methods as its own, all bundled into one variable.<br>A benefit of objects is that you can make them very modular: by defining different properties when instantiating the object (via the constructor), certain methods can perform different tasks with different outcomes.<br>A good example of this would be a car blueprint. It shows how to make the car and make it run, but you can change things like the color of the chassis, the material of the seats, the dashboard radio, the sound of the horn, etc.

# The constructor
A (sort of) method that creates an object from a class is called a constructor. Constructors can have parameters depending on if it's needed or not.<br>What makes a constructor different from a normal method (at least in c#) is the fact that it has the class name as its name and does not have a return type.<br>A class can have multiple constructors(with different amounts/types of parameters). If no constructor is given, a class with create a default constructor (with no parameters) under the surface.
A (simplified) example of this is:<br>
```csharp
class Car
{
	private int _speed;
	private string _color;
	
	public Car() // Default constructor, will be made under the surface automatically
	{
		_color = "blue";
		_speed = 230;
	}
	
	public Car(string color) // Constructor with 1 parameter
	{
		_color = color;
		_speed = 230;
	}
	
	public Car(string color, int speed) // Constructor with 2 parameters
	{
		_color = color;
		_speed = speed;
	}

	public string GetColor() // Accessor method
	{
		return _color;
	}
}

class Program
{
	static void Main()
	{
		Car carBlue = new Car(); // Default constructor
		Car carRed = new Car("blue") // Constructor with 1 parameter

		Console.WriteLine($"This car is {carBlue.GetColor()}"); // Will return blue
		Console.WriteLine($"This car is {carRed.GetColor()}"); // Will return red
	}
}
```

You can use all 3 constructors depending on what you enter between the brackets of the ``new Car()``.<br>
## Tidying up your constructors
One common thing that is done when creating multiple constructors, is that you *cascade* from ones with more to ones with less (but the same) parameters.<br>It will look something like this:<br>
```Csharp
class Car
{
	private int _speed;
	private string _color;

	public Car(string color, int speed)   
	{  
	    _color = color;  
	    _speed = speed;  
	}  
	  
	public Car(string color) : this(color, 230) { }  
	  
	public Car() : this("blue", 230) { }
}
```
Using ``this`` will call its own constructor, this way you wont have as repeating code (calling ``this`` in a class always references *itself*).

# Abstraction
Abstraction is the act of simplifying code from something big and complex, into something small and simple.<br>For example:
```csharp
///...snippet
if (speed < 0 || speed > 1.0)
{
    throw new Exception("speed", "Speed must be between 0 and 1.0");
}

double targetRotation = _gyroscope.CurrentRotation - degrees;

foreach (var motor in _motors)
{
    motor.SetDirection(motor.CalibrationFactor > 0 ? MotorDirection.Reverse : MotorDirection.Forward);
    motor.SetSpeed(Math.Abs(motor.CalibrationFactor) * speed);
}

while (Math.Abs(_gyroscope.CurrentRotation - targetRotation) > 0.1)
{
    Thread.Sleep(10);

    if (_obstacleSensor.DetectObstacle())
    {
        var newRoute = _navigationSystem.CalculateAlternativeRoute(
            GetCurrentPosition(),
            GetTargetPosition(degrees),
            _obstacleSensor.GetObstaclePosition()
        );

        targetRotation = _gyroscope.CurrentRotation - newRoute.InitialTurnAngle;

        foreach (var motor in _motors)
        {
            motor.SetSpeed(newRoute.MotorSpeeds[motor.MotorId]);
            motor.SetDirection(newRoute.MotorDirections[motor.MotorId]);
        }
    }

    Console.WriteLine($"Current rotation: {_gyroscope.CurrentRotation}, Target rotation: {targetRotation}");
}

foreach (var motor in _motors)
{
    motor.Stop();
}
///snippet...
```
Would turn into
```csharp
Robot robot = new Robot();
robot.TurnLeft();
```

# Interfaces
If classes are blueprints, interfaces are *contracts* on how a class will look like. It defines which public methods (their parameters and return type, **not** the code inside) and properties a class should have.<br>The awesome thing (at least in my opinion) is that using interfaces will cause your code to be more interchangeable. This is called *loose coupling*. So let's say i have some code that talks to a database running, lets say, MySQL. If i later on change to a different database, for example, MariaDB, I'd have to change a lot of code, parameters, and names.<Br>Now if i:
- made an interface called ``Idatabase``
- gave it the methods ``GetData(int id)``, ``WriteData(int id, string data)`` and ``deleteData(int id)``
- implemented the interface into two classes: 
	- one of the MySQL code
	- one for the MariaDB code<br>
I could simply create an object for the ``Idatabase`` interface, and *fill it* with the correct implemented class. This is called **Dependency injection**.<br>This all sounds really scary and complex, so i will create an example:

```csharp
interface IDatabase  
{  
    //Notice how all the methods have *no body*  
    public List<string> GetData(int id);  
  
    public void WriteData(int id, string data);  
  
    public void DeleteData(int id);  
}

//Notice how for *BOTH* classes, the method type and parameters are the same, but the implementation is diffrent
class SqlData : IDatabase //Implements IDatabase, *has to* implement the methods
{
	public List<string> GetData(int id)
	{
		//Sql related code
		return dataList;
	}
  
    public void WriteData(int id, string data)
	{
		//Sql related code
	}
  
    public void DeleteData(int id)
	{
		//Sql related code
	}
}

class MariadbData : IDatabase //Implements IDatabase, *has to* implement the methods
{
	public List<string> GetData(int id)
	{
		//MariaDb related code
		return dataList;
	}
  
    public void WriteData(int id, string data)
	{
		//MariaDb related code
	}
  
    public void DeleteData(int id)
	{
		//MariaDb related code
	}
}
```

Next, we could simply do the following:
```csharp
class Program
{
	private IDatabase _database; //References the interface
	static void Main()
	{
		_database = new SqlData(); //Dependency injection

		List<string> data = _database.GetData(20); //Works for both SQL and MariaDB
	}
}
```

Instead of changing the datatype of \_database, we now only have to change what class *will be loaded into* \_database. All the methods will stay the same.
Cool right?