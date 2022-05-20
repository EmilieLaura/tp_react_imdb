<?php

// Précise que l'on renvoie du json
header('Content-Type: application/json');

// Donne l'accès navigateur React
header('Access-Control-Allow-Origin: http://localhost:3001');

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTION');
header('Access-Control-Allow-Headers: content-type, authorization');
