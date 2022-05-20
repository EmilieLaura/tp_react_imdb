<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/Film.php';
require_once 'Classes/Review.php';

// récupérer PDO :
$pdo = (new PDOFactory())->getPdo();

// Récupérer les films par ordre décroissant :
$query = $pdo->query('SELECT * FROM Film ORDER BY `date` DESC');

$query->setFetchMode(PDO::FETCH_ASSOC);

$result = [];

foreach ($query->fetchAll() as $film) {
    // var_dump($post);
    $result[] = [
        'id' => $film['id'],
        'date' => $film['date'],
        'title' => $film['title'],
        'director' => $film['director'],
        'synopsis' => $film['synopsis'],
        'coverImage' => $film['coverImage']
    ];
}

echo json_encode($result);