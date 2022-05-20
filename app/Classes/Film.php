<?php

class Film
{
    private int $id;
    private string $date;
    private string $title;
    private string $director;
    private string $synopsis;
    private string $coverImage;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Film
     */
    public function setId(int $id): Film
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getDate(): string
    {
        return $this->date;
    }

    /**
     * @param string $date
     * @return Film
     */
    public function setDate(string $date): Film
    {
        $this->date = $date;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Film
     */
    public function setTitle(string $title): Film
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getDirector(): string
    {
        return $this->director;
    }

    /**
     * @param string $director
     * @return Film
     */
    public function setDirector(string $director): Film
    {
        $this->director = $director;
        return $this;
    }

    /**
     * @return string
     */
    public function getSynopsis(): string
    {
        return $this->synopsis;
    }

    /**
     * @param string $synopsis
     * @return Film
     */
    public function setSynopsis(string $synopsis): Film
    {
        $this->synopsis = $synopsis;
        return $this;
    }

    /**
     * @return string
     */
    public function getCoverImage(): string
    {
        return $this->coverImage;
    }

    /**
     * @param string $coverImage
     * @return Film
     */
    public function setCoverImage(string $coverImage): Film
    {
        $this->coverImage = $coverImage;
        return $this;
    }

}