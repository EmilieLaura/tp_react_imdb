<?php

class Review
{
    private int $id;
    private string $date;
    private string $title;
    private string $content;
    private int $authorId;
    private int $filmId;
    private int $note;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Review
     */
    public function setId(int $id): Review
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
     * @return Review
     */
    public function setDate(string $date): Review
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
     * @return Review
     */
    public function setTitle(string $title): Review
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Review
     */
    public function setContent(string $content): Review
    {
        $this->content = $content;
        return $this;
    }

    /**
     * @return int
     */
    public function getAuthorId(): int
    {
        return $this->authorId;
    }

    /**
     * @param int $authorId
     * @return Review
     */
    public function setAuthorId(int $authorId): Review
    {
        $this->authorId = $authorId;
        return $this;
    }

    /**
     * @return int
     */
    public function getFilmId(): int
    {
        return $this->filmId;
    }

    /**
     * @param int $filmId
     * @return Review
     */
    public function setFilmId(int $filmId): Review
    {
        $this->filmId = $filmId;
        return $this;
    }

    /**
     * @return int
     */
    public function getNote(): int
    {
        return $this->note;
    }

    /**
     * @param int $note
     * @return Review
     */
    public function setNotation(int $note): Review
    {
        $this->note = $note;
        return $this;
    }

}