<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $message = $data->message;

    $to = "martinihomedesign@gmail.com"; // Substitua pelo seu endereço de email
    $subject = "Nova mensagem de contato de $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
} else {
    http_response_code(405);
}
?>
