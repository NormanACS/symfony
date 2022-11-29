<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TicketClientController extends AbstractController
{
    #[Route('/ticket/client', name: 'app_ticket_client')]
    public function index(): Response
    {
        return $this->render('ticket_client/index.html.twig', [
            'controller_name' => 'TicketClientController',
        ]);
    }
}
