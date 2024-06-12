<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$response = ["username" => isset($_SESSION['username']) ? $_SESSION['username'] : null];
echo json_encode($response);
?>