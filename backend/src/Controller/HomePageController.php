<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class HomePageController extends AbstractController
{
    #[Route('/', name: 'app_home_page')]
    public function index(SerializerInterface $serializer): Response
    {
        return $this->render('home_page/index.html.twig', [
            'controller_name' => 'HomePageController',
            'user' => $serializer->serialize($this->getUser(), 'jsonld')
        ]);
    }
}
