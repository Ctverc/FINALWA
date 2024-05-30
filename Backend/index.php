<?php
$serverName ="localhost";
$username ="root";
$password ="root";
$databaseName ="react_php";
$conn = mysqli_connect($serverName,$username,$password,$databaseName);
$query ="INSERT INTO react_php (texts) VALUES('my first text')";

if(mysqli_query($conn. $query))
{
    echo "Data has been";
}
else
{
    echo"error"
}
