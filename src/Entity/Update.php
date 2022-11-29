<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\UpdateRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UpdateRepository::class)]
#[ORM\Table(name: '`update`')]
#[ApiResource]
class Update
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
