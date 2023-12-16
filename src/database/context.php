<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "PremialMarketDb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$service = $_POST['service'];

$sql = "INSERT INTO Clients_table (Name) VALUES ('$data1') GO\n
        INSERT INTO Requests_table (Service, Client) VALUES ('$service', '(SELECT Name FROM Clients_table WHERE Clients_table.Name = $client)')";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно добавлены";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>