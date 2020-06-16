
    <?php
        /*if (!file_exists("miTemp&Hum.txt")){
            // si no existe el archivo, lo creamos
            file_put_contents("miTemp&Hum.txt", "0.0\r\n0.0");
        }

        // Si se recibe Datos con el Método GET, los procesamos
        if (isset($_POST['Temp']) && isset($_POST['Hum'])){
            $var3 = $_POST['Temp'];
            $var4 = $_POST['Hum'];
            $fileContent = $var3 . "\r\n" . $var4;
            $fileSave = file_put_contents("miTemp&Hum.txt", $fileContent);
        }

        // Leemos los datos del archivo para guardarlos en variables
        $fileStr = file_get_contents("miTemp&Hum.txt");
        $pos1 = strpos($fileStr, "\r\n");
        $var1 = substr($fileStr, 0, $pos1);
        $var2 = substr($fileStr, $pos1 + 1); // de la pos1 +1 hasta el final*/

        $tem=$_POST["Temp"];
        $hum= $_POST["Hum"];

        echo $tem;
    ?>
    <span>Humedad: <?php echo $tem?></span>
