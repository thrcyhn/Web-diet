<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Alınan verileri kullanarak istediğiniz işlemleri gerçekleştirin
    // Örneğin, bu verileri bir e-posta adresine gönderebilir veya veritabanına kaydedebilirsiniz.
    
    // Örnek: E-posta gönderimi
    $to = "destek@example.com";
    $subject = "Yeni İletişim Formu Mesajı";
    $mail_body = "Ad Soyad: $name\nE-posta: $email\nMesaj: $message";
    mail($to, $subject, $mail_body);

    // Başarılı bir şekilde gönderildiğine dair kullanıcıyı bilgilendir
    echo "Mesajınız başarıyla gönderildi. Teşekkür ederiz!";
}
?>
