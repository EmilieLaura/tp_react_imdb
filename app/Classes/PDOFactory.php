<?php

class PDOFactory
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO("mysql:host=db;dbname=tpreact_imdb", "root", "password");
    }

    public function getPDO(): PDO
    {
        return $this->pdo;
    }
}